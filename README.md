# Ngaji Roso

Landing page dan arsip tadabbur **Ngaji Roso**. Situs statis (HTML + CSS + JS
ringan, tanpa build step), responsif di HP dan laptop, siap GitHub Pages
(branch `main`, root).

## Struktur

- `index.html` — landing page: edisi unggulan, empat pesan utama, daftar edisi.
- `ngaji/13-al-baqarah-125-134.html` — Edisi No. 13: Tadabbur Surah
  Al-Baqarah ayat 125–134 (Penulis/Peserta: Paiyo Sadewo, Pendamping: Dik Yoyo).
- `ngaji/12-al-baqarah-116-124.html` — Edisi No. 12: Dialog interaktif Paiyo
  dan Dik Yoyo, Tadabbur Al-Baqarah ayat 116–124 (khusyuk, keikhlasan, ujian
  dan amanah).
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
