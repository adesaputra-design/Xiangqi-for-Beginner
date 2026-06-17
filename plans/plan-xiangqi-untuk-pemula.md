# Plan: Xiangqi untuk Pemula

> Source PRD: plans/prd-xiangqi-untuk-pemula.md

## Architectural Decisions

Keputusan durable yang berlaku di semua fase:

- **Navigasi**: Single HTML page + section show/hide — bukan multi-page router
- **Koordinat papan**: kolom `a–i` (kiri→kanan) × baris `1–10` (bawah→atas perspektif Merah)
- **Model data**: `BoardState`, `QuizQuestion`, `ModuleProgress`, `PieceType` enum, `Side` enum
- **Deploy**: GitHub Pages via GitHub Actions, branch `gh-pages` — di-setup di Fase 1 sebelum konten apapun
- **Board render**: SVG (bukan Canvas) — lebih mudah untuk interaksi klik per bidak dan styling CSS
- **Progress tracking**: `localStorage` — tidak ada backend, tidak ada akun user
- **Penamaan bidak**: format "Nama Indonesia (Nama Chinese)" di seluruh konten
- **Kualitas aturan**: test-first — AI generate test cases, domain expert (wasit xiangqi) review assertions, baru AI implementasi

---

## Phase 1: Beranda + Deploy (Tracer Bullet)

**User stories**: 1, 2, 3, 18, 19

### What to build

Slice vertikal pertama yang menghasilkan URL live yang bisa langsung dibagikan ke tester komunitas. Setup Vite + TypeScript, buat halaman beranda yang menampilkan daftar modul dengan status "Segera Hadir", dan deploy ke GitHub Pages via GitHub Actions. Ini memvalidasi seluruh pipeline deploy sebelum konten modul apapun dibuat.

Halaman beranda mencakup:
- Judul aplikasi dan deskripsi singkat
- Daftar modul dengan nama dan estimasi waktu belajar
- Status modul: "Selesai ✓", "Lanjutkan →", atau "Segera Hadir" (dibaca dari localStorage)
- Tombol masuk ke modul yang sudah tersedia

### Acceptance criteria

- [ ] `npm run dev` menampilkan halaman beranda di browser lokal
- [ ] `npm run build` berhasil tanpa error
- [ ] GitHub Actions men-deploy ke GitHub Pages secara otomatis saat push ke `main`
- [ ] URL GitHub Pages bisa dibuka di HP tanpa instalasi apapun
- [ ] Halaman beranda menampilkan daftar modul (meskipun semua masih "Segera Hadir")
- [ ] Estimasi waktu per modul terlihat di halaman beranda
- [ ] Halaman responsive di layar HP (portrait)

---

## Phase 2: Fondasi Teknis — Papan & Test Infrastructure

**User stories**: (enabler teknis untuk Fase 3 dan 4)

### What to build

Bangun dua fondasi yang akan dipakai oleh semua modul konten: papan xiangqi visual dan test infrastructure untuk memvalidasi aturan. Fase ini tidak menghasilkan konten yang bisa dipelajari user, tapi menghasilkan komponen yang bisa di-reuse.

**Papan SVG**: render grid 9×10, gambar semua bidak di posisi awal, responsive di mode landscape HP. Papan ini akan dipakai sebagai mode eksplorasi di setiap modul.

**Test infrastructure**: setup struktur `BoardState` dan `createInitialBoard()`, buat helper untuk menyusun posisi papan kustom per soal (dipakai di test cases Fase 3 dan 4), verifikasi Vitest berjalan.

### Acceptance criteria

- [ ] Papan xiangqi 9×10 tampil di browser dengan semua bidak di posisi awal
- [ ] Papan mengisi lebar layar di mode landscape HP (min 375px), bidak terbaca jelas
- [ ] Semua bidak diberi label nama Indonesia + Chinese (tooltip saat tap/hover)
- [ ] `BoardState` bisa merepresentasikan posisi papan apapun (bukan hanya posisi awal)
- [ ] Helper `createBoard({ ... })` bisa dipakai di test cases untuk menyusun posisi kustom
- [ ] `npm test` berjalan dan menampilkan hasil (meski belum ada test cases konten)

---

## Phase 3: Modul 1 — General Face-off

**User stories**: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14

### What to build

Modul pertama end-to-end. Alur kerja dalam fase ini mengikuti test-first workflow:
1. AI generate test cases untuk semua edge case Face-off
2. Domain expert (wasit xiangqi) review assertions — approve, reject, atau tambah
3. AI implementasi logic Raja sampai semua test pass
4. Bangun UI eksplorasi dan quiz di atas logic yang sudah terverifikasi

**Mode eksplorasi papan**: klik Raja → highlight semua langkah legal. Langkah yang ilegal karena Face-off tidak di-highlight. Di HP, digunakan dalam mode landscape.

**Quiz pilihan ganda**: 6–8 soal berbasis gambar papan statis + 4 opsi teks. Mencakup: identifikasi posisi Face-off ilegal, memindahkan bidak penghalang yang menciptakan Face-off, Flying General sebagai senjata ofensif. Feedback langsung setelah jawab (benar/salah + penjelasan).

**Progress**: modul 1 selesai disimpan ke localStorage, status di halaman beranda update otomatis.

### Acceptance criteria

- [ ] Semua test cases Face-off lulus di Vitest (termasuk: Raja berhadapan tanpa penghalang, bidak penghalang pindah menciptakan Face-off, Raja sendiri yang bergerak menciptakan Face-off)
- [ ] Klik Raja di papan interaktif menampilkan highlight langkah legal
- [ ] Langkah yang akan menciptakan Face-off tidak di-highlight
- [ ] 6–8 soal quiz Face-off bisa dijawab end-to-end
- [ ] Feedback muncul langsung setelah pilih jawaban (benar/salah + penjelasan)
- [ ] Skor akhir modul ditampilkan setelah semua soal selesai
- [ ] User bisa mengulang soal yang salah
- [ ] Progres modul 1 tersimpan di localStorage dan terbaca di halaman beranda
- [ ] Seluruh alur bisa diselesaikan di HP dalam mode portrait (quiz) dan landscape (eksplorasi)

---

## Phase 4: Modul 2 — Meriam (Pao)

**User stories**: 5, 6, 7, 8, 9, 10, 11, 15, 16, 17

### What to build

Modul kedua end-to-end, menggunakan alur test-first yang sama. Pao adalah bidak paling kompleks karena mekanisme gerak dan tangkap yang terpisah.

**Test cases** mencakup semua edge case Pao: gerak biasa lurus tanpa lompat, tangkap dengan tepat 1 screen (screen bisa bidak sendiri atau lawan), tidak bisa tangkap tanpa screen, tidak bisa tangkap dengan screen lebih dari 1, tidak bisa tangkap kalau setelah screen kosong.

**Mode eksplorasi papan**: klik Pao → highlight dua warna — hijau untuk langkah gerak biasa, merah untuk langkah tangkap valid. Tooltip menjelaskan mengapa suatu langkah legal atau ilegal (termasuk identifikasi screen yang dipakai).

**Quiz pilihan ganda**: 6–8 soal Pao, mencakup semua edge case screen.

**Progress**: modul 2 selesai disimpan ke localStorage.

### Acceptance criteria

- [ ] Semua test cases Pao lulus di Vitest (semua edge case screen: valid, tidak ada screen, screen >1, setelah screen kosong, screen bidak sendiri)
- [ ] Klik Pao di papan interaktif menampilkan highlight dua warna (hijau = gerak, merah = tangkap)
- [ ] Tooltip menjelaskan mekanisme screen saat tap highlight tangkap
- [ ] 6–8 soal quiz Pao bisa dijawab end-to-end
- [ ] Skor + feedback + ulang soal salah berfungsi sama seperti Modul 1
- [ ] Progres modul 2 tersimpan di localStorage dan terbaca di halaman beranda
- [ ] MVP siap divalidasi: 2 modul selesai, URL live, bisa dibuka di HP tester komunitas

---

## Phase 5: Modul 3 — Prajurit (Bing) [Opsional / Post-MVP]

**User stories**: 5, 6, 7, 8, 9, 10, 11 (+ konten spesifik Bing)

### What to build

Modul ketiga menggunakan alur yang sama. Bing memiliki dua mode gerak yang berbeda tergantung posisi relatif terhadap sungai.

Test cases mencakup: Bing sebelum sungai (hanya maju), Bing setelah sungai (maju + kiri + kanan), Bing di baris terakhir lawan (hanya kiri + kanan), tidak pernah bisa mundur di posisi manapun.

Mode eksplorasi: papan menampilkan garis sungai secara visual. Klik Bing → highlight berubah tergantung posisi (sebelum/sesudah sungai).

**Fase ini baru dikerjakan setelah validasi MVP (Fase 1–4) ke tester komunitas berhasil.**

### Acceptance criteria

- [ ] Semua test cases Bing lulus di Vitest
- [ ] Garis sungai terlihat jelas di papan SVG
- [ ] Highlight langkah Bing berubah otomatis saat bidak melewati sungai
- [ ] 6–8 soal quiz Bing selesai dengan skor + feedback + localStorage
- [ ] Halaman beranda menampilkan Modul 3 sebagai tersedia
