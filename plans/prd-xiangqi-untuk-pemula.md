# PRD: Xiangqi untuk Pemula

## Problem Statement

Tidak ada platform latihan xiangqi berbahasa Indonesia yang interaktif untuk pemula. Orang yang tertarik belajar xiangqi tidak tahu harus mulai dari mana — nama permainannya pun masih asing. Akibatnya komunitas xiangqi sulit merekrut pemain baru karena tidak ada jalur onboarding yang terstruktur dan mudah diakses secara mandiri.

## Solution

Aplikasi web edukasi xiangqi berbahasa Indonesia yang bisa diakses dari HP tanpa instalasi. Berisi tutorial cara jalan setiap bidak dan latihan interaktif berbasis kesalahan aturan yang paling sering dilakukan pemula. Target outcome: setelah menyelesaikan semua modul, user bisa menyelesaikan 1 game penuh tanpa melanggar aturan.

MVP Fase 1 mencakup 2 modul pertama (General Face-off dan Pao/Meriam) — cukup untuk validasi ke komunitas dalam 2–3 minggu.

## User Stories

### Onboarding & Navigasi

1. Sebagai pemula, saya ingin melihat daftar modul yang tersedia beserta status selesai/belum, agar saya tahu sudah sampai mana progres belajar saya.
2. Sebagai pemula, saya ingin aplikasi mengingat modul yang sudah saya selesaikan (meski saya tutup browser), agar saya bisa melanjutkan di lain waktu tanpa mengulang dari awal.
3. Sebagai pemula, saya ingin melihat estimasi waktu per modul, agar saya bisa memilih kapan mulai belajar.

### Tutorial Bidak

4. Sebagai pemula, saya ingin membaca penjelasan cara jalan setiap bidak dalam Bahasa Indonesia dengan nama ganda — "Meriam (Pao)", "Kuda (Ma)", dst. — agar saya familiar dengan istilah lokal sekaligus istilah internasional.
5. Sebagai pemula, saya ingin melihat papan xiangqi interaktif di mode landscape HP saya, di mana saya bisa klik sebuah bidak dan melihat highlight semua langkah legalnya, agar saya bisa mengeksplorasi gerak bidak secara visual.
6. Sebagai pemula, saya ingin highlight langkah dibedakan warnanya antara gerak biasa (hijau) dan gerak tangkap (merah), agar saya langsung memahami perbedaan dua mekanisme tersebut — khususnya untuk Meriam (Pao).
7. Sebagai pemula, saya ingin melihat tooltip singkat saat saya hover/tap suatu highlight, menjelaskan mengapa langkah itu legal atau ilegal, agar saya belajar aturannya bukan hanya menghafal posisi.

### Latihan Quiz (Level B — Pilihan Ganda)

8. Sebagai pemula, saya ingin menjawab quiz pilihan ganda berdasarkan gambar papan statis, agar saya bisa berlatih di HP tanpa kesulitan mengetuk sel papan yang kecil.
9. Sebagai pemula, saya ingin mendapat feedback langsung setelah menjawab (benar/salah + penjelasan singkat), agar saya langsung memahami alasan di balik jawaban yang benar.
10. Sebagai pemula, saya ingin melihat skor akhir setelah menyelesaikan semua quiz dalam satu modul, agar saya bisa mengukur pemahaman saya.
11. Sebagai pemula, saya ingin bisa mengulang quiz yang salah di akhir sesi, agar saya bisa memperbaiki skor sebelum lanjut ke modul berikutnya.

### Modul Face-off / Flying General

12. Sebagai pemula, saya ingin memahami aturan General Face-off (dua Jenderal tidak boleh saling berhadapan tanpa penghalang) melalui contoh visual dan quiz situasional, agar saya tidak pernah melakukan pelanggaran ini saat bermain.
13. Sebagai pemula, saya ingin latihan yang menunjukkan bahwa memindahkan bidak penghalang dari file yang sama dengan dua Jenderal adalah ilegal, agar saya memahami bahwa aturan ini tidak hanya berlaku pada Jenderal tapi pada seluruh papan.
14. Sebagai pemula, saya ingin memahami Flying General sebagai senjata ofensif — bahwa saya bisa "mengunci" bidak lawan di antara dua Jenderal — melalui contoh quiz, agar saya mulai berpikir taktis sejak awal.

### Modul Meriam (Pao)

15. Sebagai pemula, saya ingin memahami perbedaan gerak biasa Pao (lurus tanpa lompat) dan gerak tangkap Pao (harus melompati tepat 1 screen), agar saya tidak bingung mengapa Pao terkadang tidak bisa memakan bidak lawan.
16. Sebagai pemula, saya ingin latihan yang menunjukkan bahwa screen boleh berupa bidak sendiri maupun bidak lawan, agar saya tidak salah mengira screen hanya boleh bidak lawan.
17. Sebagai pemula, saya ingin latihan yang menunjukkan kondisi di mana Pao tidak bisa menangkap: tidak ada screen, screen lebih dari 1, atau setelah screen tidak ada bidak lawan, agar saya memahami semua edge case mekanisme screen.

### Deployment & Akses

18. Sebagai tester dari komunitas, saya ingin mengakses aplikasi lewat URL di HP saya tanpa perlu install apapun, agar saya bisa langsung mencoba tanpa bantuan teknis.
19. Sebagai pengelola komunitas, saya ingin membagikan satu link URL yang stabil ke anggota komunitas, agar distribusi tidak bergantung pada kehadiran saya secara fisik.

## Implementation Decisions

### Tech Stack
- **Frontend**: TypeScript + Vite (pure static site, tidak ada backend/server)
- **Testing**: Vitest (sudah terpasang di `package.json`)
- **Deploy**: GitHub Pages — build output dari `npm run build` di-push ke branch `gh-pages` via GitHub Actions. Deploy dilakukan di Fase 1 (sebelum konten modul) agar CI/CD teruji sejak awal.
- **Tidak ada PHP, tidak ada database, tidak ada server**

### Navigasi
- Single HTML page dengan section yang ditampilkan/disembunyikan (show/hide) — bukan multi-page router
- Cocok untuk static deploy ke GitHub Pages, zero routing overhead

### Koordinat Papan
- Notasi kolom `a–i` (kiri ke kanan) × baris `1–10` (bawah ke atas dari perspektif Merah)
- Konsisten dengan notasi xiangqi standar internasional

### Model Data Kunci
- `BoardState` — posisi semua bidak di papan
- `QuizQuestion` — soal, 4 opsi, kunci jawaban, teks penjelasan
- `ModuleProgress` — status selesai/belum dan skor per modul (disimpan di localStorage)
- `PieceType` enum: Jiang, Pao, Bing, Ma, Xiang, Shi, Che
- `Side` enum: Red, Black

### Arsitektur 3 Layer
- **Logic Layer** (pure TypeScript, tanpa UI): validasi langkah legal (`isLegalMove`), deteksi Face-off, kalkulasi screen Pao, pengecekan posisi sungai Bing. Seluruh layer ini dicover unit test.
- **UI Layer** (SVG + DOM): render papan xiangqi, highlight langkah, animasi transisi klik.
- **Quiz Engine** (pure TypeScript): load soal dari data statis (JSON/TS object), bandingkan jawaban, hitung skor, simpan progress.

### Papan Interaktif (Mode Eksplorasi — Level C)
- Render papan dengan SVG
- Digunakan dalam mode landscape di HP
- Klik/tap bidak → tampilkan highlight langkah legal (hijau = gerak, merah = tangkap)
- Tidak perlu engine AI — hanya menampilkan langkah legal bidak yang diklik, tidak ada "giliran" atau gameplay penuh

### Quiz Situasional (Level B)
- Gambar papan statis (PNG/SVG pre-render) + 4 opsi pilihan ganda
- Tombol jawaban berukuran besar (min 48px tap target) untuk HP
- Feedback langsung setelah klik: highlight jawaban benar/salah + teks penjelasan
- Setiap soal adalah data statis: posisi awal, pertanyaan, kunci jawaban, penjelasan

### Progress Tracking
- Disimpan di `localStorage` browser
- Data yang disimpan: modul yang sudah selesai, skor quiz terakhir per modul
- Tidak ada akun user, tidak ada sinkronisasi antar perangkat

### Penamaan Bidak
- Format: "Nama Indonesia (Nama Chinese)" — contoh: "Meriam (Pao)", "Kuda (Ma)", "Prajurit (Bing)", "Benteng (Che)", "Gajah (Xiang)", "Menteri (Shi)", "Raja (Jiang/Shuai)"
- Konsisten di seluruh konten teks, tooltip, dan quiz

### Kualitas Aturan — Test-First Workflow
- AI generate test cases terlebih dahulu, mencakup semua edge case per bidak
- Pemilik proyek (domain expert wasit xiangqi) mereview test cases — bukan kode implementasi
- AI mengimplementasi `isLegalMove()` sampai 100% test pass di Vitest
- Test suite berfungsi sebagai regression guard untuk semua perubahan ke depan
- Referensi implementasi: source code Pikafish (C++ Xiangqi engine) — hanya sebagai panduan logika, tidak diintegrasikan

### Urutan Kurikulum (berdasarkan kesalahan nyata pemula, bukan urutan teoritis)
| Prioritas | Modul | Porsi Latihan |
|-----------|-------|---------------|
| 1 (MVP) | General Face-off + Flying General | ~20% |
| 2 (MVP) | Meriam (Pao) — gerak vs tangkap dengan screen | ~25% |
| 3 (Fase 2) | Prajurit (Bing) — sebelum & sesudah sungai | ~15% |
| 4 (Fase 2) | Kuda (Ma) — blocking kaki kuda | ~15% |
| 5 (Fase 2) | Gajah (Xiang) & Menteri (Shi) — confinement | ~10% |
| 6 (Fase 2) | Benteng (Che) | ~5% |
| 7 (Fase 2) | Perpetual check & perpetual chase | ~10% |

### Validasi MVP
- Setelah Modul 1 (Face-off) + Modul 2 (Pao) selesai, deploy dan test ke 3–5 orang komunitas xiangqi yang belum pernah bermain
- Kriteria sukses: 4 dari 5 tester menyelesaikan semua quiz, dan tidak melanggar aturan Face-off atau Pao saat test game langsung
- Baru lanjut ke Fase 2 kalau kriteria ini terpenuhi

## Out of Scope

- **Backend / server-side logic** — tidak ada akun, tidak ada database, tidak ada API
- **Full gameplay vs AI** — tidak ada engine AI, tidak ada giliran bermain melawan komputer
- **Multiplayer / bermain dengan lawan manusia secara online**
- **Opening theory atau strategi tingkat lanjut** — hanya aturan dasar
- **Perpetual check & perpetual chase** — masuk Fase 2, bukan MVP
- **Sertifikat atau sistem reward gamifikasi**
- **Konten berbahasa Inggris atau Chinese** — aplikasi sepenuhnya Bahasa Indonesia
- **Integrasi Pikafish sebagai engine** — hanya digunakan sebagai referensi logika rules

## Further Notes

- Proyek saat ini hanya memiliki `package.json` dengan TypeScript + Vitest. Vite perlu ditambahkan sebagai devDependency sebelum development dimulai.
- Folder `src/` belum ada — seluruh struktur proyek akan dibuat dari awal.
- Distribusi awal sepenuhnya melalui komunitas xiangqi yang sudah ada — bukan SEO atau iklan. Pengelola proyek memiliki akses langsung ke komunitas dan pemahaman kebutuhan merekrut pemain baru.
- Pemilik proyek memiliki latar belakang sebagai pemain dan wasit xiangqi — ini adalah keunggulan utama untuk memvalidasi kebenaran aturan yang diimplementasikan.
