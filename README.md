# Ngaji Roso

Landing page dan arsip tadabbur **Ngaji Roso**. Situs statis (HTML + CSS + JS
ringan, tanpa build step), responsif di HP dan laptop, siap GitHub Pages
(branch `main`, root).

## Struktur

- `index.html` — landing page: edisi unggulan, empat pesan utama, daftar edisi.
- `ngaji/13-al-baqarah-125-134.html` — Edisi No. 13: Tadabbur Surah
  Al-Baqarah ayat 125–134.
- `ngaji/12-al-baqarah-116-124.html` — Edisi No. 12: Dialog interaktif, Tadabbur Al-Baqarah ayat 116–124 (khusyuk, keikhlasan, ujian
  dan amanah).
- `ngaji/11-langkahku-meraih-fadilah-mu.html` — Edisi No. 11: Langkahku
  Meraih Fadilah-Mu, dzikir perjalanan pulang dari masjid (doa keluar masjid,
  labbaik, tasbih, tahmid, tahlil, takbir, Rabbanā ātinā). Edisi ini disajikan
  tanpa penyebutan nama pribadi.
- `ngaji/09-al-baqarah-102-benteng-dari-sihir.html` — Edisi No. 9: Benteng
  dari Sihir, tadabbur Al-Baqarah 102 (sebab turun, sihir masa kini, cara
  mengenali perdukunan, langkah membentengi diri). Disajikan tanpa penyebutan
  nama pribadi, seperti Edisi No. 12 dan 13 yang sudah dianonimkan pula.
- `ngaji/08-renungan-bada-subuh-tazkiyah.html` — Edisi No. 8: Renungan ba'da
  Subuh, tazkiyah dan roso sejati kang manggon ning ati (Al-A'la, Asy-Syams,
  benang merah falāh diawali penyucian). Tanpa penyebutan nama pribadi.
- `ngaji/07-al-waqiah-dan-hujan-berkah.html` — Edisi No. 7: Dialog dini hari,
  Al-Waqi'ah (tiga golongan, gemetar, khauf dan raja') dan hujan berkah
  (6 manfaat, adab saat hujan, bunga yang disegarkan). Tanpa penyebutan nama
  pribadi.
- `assets/css/style.css` — gaya bersama semua halaman.
- `assets/js/main.js` — menu HP dan centang muhasabah (tersimpan lokal saja).

## Menambah edisi baru

1. Salin `ngaji/13-al-baqarah-125-134.html` menjadi
   `ngaji/<nomor>-<slug-judul>.html`, lalu ganti isi, meta, dan tautan
   kembali ke beranda (perhatikan `../` pada path aset).
2. Di `index.html`, tambahkan satu kartu di bagian **Daftar Edisi** yang
   menaut ke berkas baru itu, dan jadikan edisi terbaru sebagai
   **Edisi Unggulan** bila perlu.
3. Commit dan push ke `main`; Pages akan memperbarui situs otomatis.
