GYM TRACKER — pengganti Google Sheet "Gym Workout Tracker"
============================================================

PASANG (sekali saja)
1. Buka https://app.netlify.com/drop, seret FOLDER "gym-tracker" ini (yang isinya index.html) ke halaman itu.
   Ini situs BARU, terpisah dari Catatan Duit. Jangan ditimpa ke situs Catatan Duit.
2. Buka alamat Netlify-nya di Safari iPhone -> tombol Bagikan -> "Tambah ke Layar Utama".
3. Buka dari ikon di Layar Utama. Bisa dipakai tanpa internet.

CARA PAKAI
- Tab Latihan: pilih dulu Gym atau Istirahat untuk hari itu (full body). Kalau Gym, daftar alat muncul.
  Salah pilih? Ada tombol untuk mengganti (istirahat bisa diganti gym kapan saja).
- Ketuk alat -> atur beban -> pilih reps -> Simpan. Timer istirahat jalan otomatis:
  isolasi 2 menit, compound 3 menit, Leg Press 5 menit (bisa diubah di Atur).
- Alat satu lengan (Lateral Raise, Bicep Curl, Reverse Cable Curl, Tricep, SA Wrist Curl, Wrist Extension): 2 set, isi reps Kanan dan Kiri.
  Status ✓/+/↓ dihitung dari sisi yang paling lemah. Istirahat: 1 menit, khusus SA Wrist Curl dan Wrist Extension 30 detik.
  Bisa diubah per alat di tab Alat (Set dan Istirahat).
- Reps 4-8 = ✓ (tetap di beban itu). Reps di atas 8 = + (kartu menyarankan naik beban, ketuk "Pakai").
  Reps di bawah 4 = ↓ (kemungkinan terlalu berat). Batas 4 dan 8 bisa diubah di Atur.
- Alat yang di sheet-mu bertanda + (Leg Press, Adductor) sudah ditandai + dari awal.
- Riwayat > Progres: ringkasan mingguan (Senin-Minggu) atau bulanan: jumlah sesi vs target, hari istirahat,
  kalender gym/istirahat, kualitas reps, kenaikan beban, grafik sesi 8 minggu, dan alat yang siap naik beban.
  Target sesi per minggu diatur di Atur (default 3).
- Riwayat: "Per sesi" (per tanggal) atau "Per alat" (grafik beban + tabel).
- Timer sesi: di tab Latihan (hari ini) ketuk "Mulai sesi". Jam berjalan terlihat juga di pojok kanan atas. Tombol "Selesai sesi"
  baru aktif setelah semua alat sudah dicatat atau dilewati. Target 1 j 30 mnt (ubah di Atur). Warna jam: hijau, kuning mendekati target, merah lewat.
  Kalau lupa ketuk Mulai, sesi otomatis mulai saat alat pertama dicatat/dilewati (jadi bisa kurang sedikit); bisa dibetulkan lewat "Ubah jam".
  "Akhiri dulu" = selesai sebelum semua alat tertangani (ketuk dua kali). Timer pakai jam asli, tetap benar walau aplikasi ditutup.
  Saat Selesai sesi ditekan muncul pop up ringkasan (animasi centang); "Batalkan" di situ membuka sesi lagi.
  Riwayat durasi: Progres (rata-rata, tercepat, grafik 10 sesi vs target) dan Per sesi.
- Pilih hari cepat: ikon kalender di pojok kanan atas (tab Latihan dan Riwayat) membuka daftar 28 hari terakhir.
  Tiap hari tinggal ketuk Gym atau Libur (ketuk lagi untuk membatalkan). Hari yang sudah ada catatan alatnya otomatis Gym.
  Ketuk tanggalnya untuk membuka hari itu dan mencatat alat.

PRIORITAS OTOT (CHEST / ARM / LATS)
- Atur -> Prioritas otot: pilih Chest, Arm, dan/atau Lats. Gerakannya tetap sama; yang berubah hanya urutan alat.
  Alat otot prioritas dipindah ke depan supaya dikerjakan saat tenaga masih segar, dan diberi tanda ★ di tab Latihan.
- Urutannya disusun dengan aturan: compound otot prioritas dulu lalu isolasinya; Arm (kalau dipilih) tepat setelah chest/lats
  agar tenaga angkatan utama tidak terkuras; bahu dan triceps (bantu chest) serta biceps dan grip (bantu lats) sesudah otot utamanya;
  leg press dan punggung bawah tidak di depan; betis, core, dan lengan bawah paling akhir.
- Setelah dipilih, ada tombol Batal. "Kembalikan urutan sebelumnya" memulihkan urutan sebelum disusun. "Susun ulang sekarang" dipakai
  kalau kamu menambah alat baru atau sudah menggeser urutan sendiri.
- Kelompok otot tiap alat ditebak dari namanya (terlihat di tab Alat). Salah tebak atau alat baru? Ubah di form alat: "Kelompok otot".

CALISTHENICS (AMRAP, ala Tom Holland)
- Pilih "Calisthenics" di pilihan hari (atau tombol Cali di ikon kalender). Satu ronde = 5 Pull Up, 10 Push Up, 15 Squat.
- Ketuk "Mulai": timer hitung mundur dari 20 menit. Tiap selesai satu ronde, ketuk tombol besar "+1 Ronde".
  Salah ketuk? "-1 ronde". Daftar ronde menampilkan waktu tiap ronde dan total.
- Waktu bisa diganti: "Ubah waktu" (pilihan cepat 5 sampai 30 menit atau ketik sendiri), juga bisa saat timer berjalan.
  Pilihan terakhir jadi default; default juga ada di Atur -> Waktu calisthenics.
- Jeda / Lanjut tersedia. Timer berdasarkan jam, jadi tetap akurat walau aplikasi sempat ke latar atau ditutup.
  Layar dijaga tetap menyala selama timer jalan (kalau iPhone-mu mendukung). Habis waktu: bunyi, getar, dan hasil muncul.
- Hasil tersimpan per hari. Bisa dikoreksi dengan tombol - dan +, atau diisi manual untuk hari yang sudah lewat.
  Rekor ronde dibandingkan per durasi yang sama. Riwayat: kartu Calisthenics di Progres dan daftar di "Per sesi".
- Masuk ke cadangan dan ekspor CSV. Cadangan lama tetap bisa dipulihkan.
- Alat: tambah (mis. Hip Flexor), ubah (termasuk jenis gerakan: Isolasi / Compound / Leg Press), sembunyikan.
- Urutan alat: pakai ▲▼ satu per satu, atau tahan ikon titik-titik di kanan baris lalu seret ke posisi baru (layar ikut menggulir di tepi). Nomor otomatis mengikuti urutan; alat yang disembunyikan tidak diberi nomor.
- Tangan cedera atau waktu mepet? Buka alatnya, ketuk "Lewati alat ini" (paling atas). Beban dan riwayat alat itu tidak berubah,
  dan tidak dihitung mengurangi kelengkapan sesi. Bisa dibatalkan.
- Warna baris: hijau = selesai, putih/abu = belum, ungu = dilewati. Ringkasannya ada di atas daftar.
- Salah pencet? Ketuk "Batal" di notifikasi bawah, atau buka alatnya lagi dan Perbarui.
- Lupa catat kemarin? Pakai panah tanggal di atas.

DATA
- Semua tersimpan di HP ini saja. Menghapus ikon Layar Utama / data Safari = data hilang.
- Atur -> "Simpan cadangan" tiap beberapa minggu (aplikasi mengingatkan setelah 7 hari).
- Pulihkan lewat Atur -> Pulihkan.

CATATAN
- Timer berbunyi/getar saat layar menyala. Kalau layar dikunci, iPhone tidak mengizinkan alarm dari aplikasi web.

FOTO GERAKAN
- Foto kecil di samping nama alat dan foto awal/akhir di panel alat berasal dari Free Exercise DB (domain publik, Unlicense).
  Foto adalah alat sejenis, bukan foto mesin persis di gym-mu. Alat baru yang kamu tambah tidak punya foto.
- Foto tersimpan di dalam aplikasi (folder img), jadi tetap muncul tanpa internet.
