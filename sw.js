/* Service worker Catatan Duit: bikin aplikasi bisa dibuka offline.
   Naikkan angka CACHE kalau file aplikasi diganti, supaya HP mengambil versi baru. */
var CACHE = 'gym-tracker-v17';
var ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './img/pec-deck-0.jpg',
  './img/pec-deck-1.jpg',
  './img/leg-press-0.jpg',
  './img/leg-press-1.jpg',
  './img/row-0.jpg',
  './img/row-1.jpg',
  './img/rdl-0.jpg',
  './img/rdl-1.jpg',
  './img/shoulder-press-0.jpg',
  './img/shoulder-press-1.jpg',
  './img/pulldown-0.jpg',
  './img/pulldown-1.jpg',
  './img/leg-ext-0.jpg',
  './img/leg-ext-1.jpg',
  './img/incline-0.jpg',
  './img/incline-1.jpg',
  './img/rear-delt-0.jpg',
  './img/rear-delt-1.jpg',
  './img/shrug-0.jpg',
  './img/shrug-1.jpg',
  './img/leg-curl-0.jpg',
  './img/leg-curl-1.jpg',
  './img/lateral-0.jpg',
  './img/lateral-1.jpg',
  './img/adductor-0.jpg',
  './img/adductor-1.jpg',
  './img/abductor-0.jpg',
  './img/abductor-1.jpg',
  './img/bicep-0.jpg',
  './img/bicep-1.jpg',
  './img/calf-0.jpg',
  './img/calf-1.jpg',
  './img/hammer-0.jpg',
  './img/hammer-1.jpg',
  './img/tricep-0.jpg',
  './img/tricep-1.jpg',
  './img/wrist-curl-0.jpg',
  './img/wrist-curl-1.jpg',
  './img/wrist-ext-0.jpg',
  './img/wrist-ext-1.jpg',
  './img/crunch-0.jpg',
  './img/crunch-1.jpg'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Halaman: coba jaringan dulu (supaya versi baru muncul), jatuh ke cache kalau offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (res) {
        // Hanya simpan respons sehat. Halaman error (mis. situs dijeda Netlify) tidak boleh menimpa cache.
        if (!res || !res.ok) throw new Error('bad ' + (res && res.status));
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put('./index.html', copy); });
        return res;
      }).catch(function () {
        return caches.match('./index.html').then(function (r) { return r || caches.match('./'); });
      })
    );
    return;
  }

  // File lain: cache dulu, perbarui di belakang layar.
  e.respondWith(
    caches.match(req).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
        return res;
      }).catch(function () { return hit; });
      return hit || net;
    })
  );
});
