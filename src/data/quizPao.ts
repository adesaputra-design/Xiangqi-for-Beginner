import type { QuizSoal } from "../logic/quizEngine";

export const SOAL_PAO: QuizSoal[] = [
  {
    id: "pao-1",
    pertanyaan:
      "Apa yang membuat Meriam (Pao) berbeda dari semua bidak xiangqi lainnya?",
    pilihan: [
      "Bisa bergerak diagonal seperti Gajah",
      "Gerak tangkapnya membutuhkan tepat 1 bidak perantara (screen)",
      "Hanya bisa bergerak maju seperti Prajurit",
      "Tidak bisa menangkap bidak lawan",
    ],
    kunci: 1,
    penjelasan:
      "Meriam (Pao) adalah satu-satunya bidak yang memisahkan cara gerak biasa dan cara tangkap. Untuk bergerak biasa: lurus tanpa halangan. Untuk menangkap: HARUS melompati tepat 1 bidak perantara (screen) — boleh bidak sendiri atau lawan.",
    boardKey: null,
  },
  {
    id: "pao-2",
    pertanyaan:
      "Perhatikan papan. Meriam (Pao) Merah di a1. Tidak ada bidak lain di baris atau kolom yang sama. Ke mana Pao bisa bergerak?",
    pilihan: [
      "Ke semua kotak lurus (a2 sampai a10, b1 sampai i1) — gerak biasa tanpa melompat",
      "Hanya 1 langkah ke depan",
      "Tidak bisa bergerak sama sekali tanpa screen",
      "Hanya ke kotak yang ada bidak lawannya",
    ],
    kunci: 0,
    penjelasan:
      "Gerak BIASA Pao tidak membutuhkan screen. Pao bergerak lurus (horizontal atau vertikal) sebanyak langkah yang diinginkan SELAMA tidak ada bidak penghalang di jalurnya — persis seperti Benteng (Che). Screen hanya dibutuhkan untuk MENANGKAP.",
    boardKey: "pao-solo",
  },
  {
    id: "pao-3",
    pertanyaan:
      "Pao Merah di a1. Prajurit Merah di a3 (screen). Benteng Hitam di a6. Apakah Pao bisa menangkap Benteng di a6?",
    pilihan: [
      "Tidak — screen harus bidak lawan, bukan bidak sendiri",
      "Ya — melompati Prajurit Merah di a3 sebagai screen, menangkap Benteng di a6",
      "Tidak — Pao tidak bisa melompat",
      "Ya, tapi hanya jika Pao maju 1 langkah dulu ke a2",
    ],
    kunci: 1,
    penjelasan:
      "Screen BOLEH berupa bidak sendiri maupun bidak lawan. Pao di a1 melompati Prajurit Merah di a3 sebagai screen, lalu menangkap Benteng Hitam di a6. Perlu diingat: yang dimakan adalah bidak SETELAH screen, bukan screen itu sendiri.",
    boardKey: "pao-screen-own",
  },
  {
    id: "pao-4",
    pertanyaan:
      "Pao Merah di a1. Benteng Hitam di a4 (screen). Prajurit Hitam di a7. Apakah Pao bisa menangkap Prajurit di a7?",
    pilihan: [
      "Ya — melompati Benteng Hitam di a4 sebagai screen, menangkap Prajurit di a7",
      "Tidak — Pao tidak bisa melompati bidak lawan",
      "Tidak — hanya bisa menangkap bidak yang lebih dekat (Benteng di a4)",
      "Ya, tapi Benteng di a4 ikut tertangkap juga",
    ],
    kunci: 0,
    penjelasan:
      "Screen boleh bidak lawan! Pao melompati Benteng Hitam di a4 (screen) untuk menangkap Prajurit Hitam di a7. Benteng di a4 TIDAK dimakan — ia hanya jadi jembatan. Yang dimakan adalah bidak di setelah screen, bukan screen-nya.",
    boardKey: "pao-screen-opponent",
  },
  {
    id: "pao-5",
    pertanyaan:
      "Pao Merah di a1. Benteng Hitam di a6. Tidak ada bidak lain di kolom a. Apakah Pao bisa menangkap Benteng?",
    pilihan: [
      "Ya — Pao bergerak lurus langsung ke a6",
      "Ya — Pao cukup bergerak maju",
      "Tidak — untuk menangkap, Pao HARUS ada tepat 1 screen di antara mereka",
      "Tidak — jarak terlalu jauh",
    ],
    kunci: 2,
    penjelasan:
      "TIDAK BISA. Untuk menangkap, Pao WAJIB ada tepat 1 bidak perantara (screen) di antara posisi Pao dan target. Tanpa screen, Pao tidak bisa memakan bidak manapun — meskipun jalurnya lurus dan kosong.",
    boardKey: "pao-no-screen",
  },
  {
    id: "pao-6",
    pertanyaan:
      "Pao Merah di a1. Prajurit Merah di a3 (screen 1). Gajah Merah di a5 (screen 2). Benteng Hitam di a7. Apakah Pao bisa menangkap Benteng?",
    pilihan: [
      "Ya — ada screen di jalurnya",
      "Tidak — harus TEPAT 1 screen, bukan 2 atau lebih",
      "Ya — Pao bisa melompati semua bidak",
      "Tidak — karena screennya bidak sendiri semua",
    ],
    kunci: 1,
    penjelasan:
      "TIDAK BISA. Pao hanya bisa menangkap dengan tepat 1 screen. Jika ada 2 atau lebih bidak di antara Pao dan target, tangkapan tidak valid. Dalam posisi ini ada 2 screen (Prajurit di a3 dan Gajah di a5), sehingga tangkapan ke Benteng di a7 ilegal.",
    boardKey: "pao-two-screens",
  },
  {
    id: "pao-7",
    pertanyaan:
      "Pao Merah di a1. Prajurit Merah di a3 (screen). Kotak a5 kosong. Apakah Pao bisa 'menangkap' ke kotak kosong a5 dengan cara melompati screen?",
    pilihan: [
      "Ya — Pao bisa melompat ke kotak kosong setelah screen",
      "Tidak — setelah screen harus ada bidak lawan yang bisa ditangkap",
      "Ya — ini cara gerak Pao yang lebih cepat",
      "Tidak — Pao tidak bisa melompat sama sekali",
    ],
    kunci: 1,
    penjelasan:
      "TIDAK BISA. Mekanisme screen hanya berlaku untuk MENANGKAP — artinya setelah screen HARUS ada bidak lawan yang bisa dimakan. Jika kotak setelah screen kosong, tidak ada yang ditangkap. Untuk ke kotak kosong, Pao pakai gerak BIASA (tanpa melompat) bukan mekanisme screen.",
    boardKey: "pao-empty-after-screen",
  },
  {
    id: "pao-8",
    pertanyaan:
      "Pao Merah di e5. Prajurit Merah di e7 (menghalangi). Apakah Pao bisa bergerak biasa ke e8 (bukan menangkap)?",
    pilihan: [
      "Ya — Pao bisa melewati Prajurit untuk gerak biasa",
      "Tidak — ada Prajurit di e7 yang menghalangi jalur",
      "Ya — Pao hanya diblokir saat menangkap",
      "Tidak — Pao hanya bisa maju satu langkah",
    ],
    kunci: 1,
    penjelasan:
      "TIDAK BISA. Gerak BIASA Pao seperti Benteng — lurus tanpa hambatan. Jika ada bidak (siapapun) di jalurnya, Pao tidak bisa melewatinya untuk gerak biasa. Berbeda dengan tangkapan yang justru membutuhkan 1 screen. Pao di e5 diblokir oleh Prajurit di e7 untuk gerak ke e8.",
    boardKey: "pao-blocked-move",
  },
];

export const BOARD_SOAL_PAO: Record<string, Record<string, string | null>> = {
  "pao-solo": {
    "1-0": "red.pao",
  },
  "pao-screen-own": {
    "1-0": "red.pao",
    "3-0": "red.bing",
    "6-0": "black.che",
  },
  "pao-screen-opponent": {
    "1-0": "red.pao",
    "4-0": "black.che",
    "7-0": "black.bing",
  },
  "pao-no-screen": {
    "1-0": "red.pao",
    "6-0": "black.che",
  },
  "pao-two-screens": {
    "1-0": "red.pao",
    "3-0": "red.bing",
    "5-0": "red.xiang",
    "7-0": "black.che",
  },
  "pao-empty-after-screen": {
    "1-0": "red.pao",
    "3-0": "red.bing",
  },
  "pao-blocked-move": {
    "5-4": "red.pao",
    "7-4": "red.bing",
  },
};
