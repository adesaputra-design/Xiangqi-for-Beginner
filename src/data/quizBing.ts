import type { QuizSoal } from "../logic/quizEngine";

export const SOAL_BING: QuizSoal[] = [
  {
    id: "bing-1",
    pertanyaan:
      "Bagaimana cara Prajurit (Bing) bergerak SEBELUM menyeberangi sungai?",
    pilihan: [
      "Bebas ke segala arah 1 langkah seperti Raja",
      "Hanya 1 langkah ke depan — tidak boleh ke samping atau mundur",
      "Boleh maju atau ke samping, tapi tidak mundur",
      "Hanya bisa maju 2 langkah sekaligus",
    ],
    kunci: 1,
    penjelasan:
      "Sebelum menyeberangi sungai, Prajurit (Bing) hanya bisa maju 1 langkah ke depan. Tidak boleh ke samping, tidak boleh mundur. Sungai adalah batas antara baris 5 dan 6 (perspektif Merah).",
    boardKey: null,
  },
  {
    id: "bing-2",
    pertanyaan:
      "Apa yang BERUBAH pada gerakan Prajurit (Bing) setelah menyeberangi sungai?",
    pilihan: [
      "Bisa mundur juga setelah menyeberangi sungai",
      "Bisa maju lebih dari 1 langkah sekaligus",
      "Bisa maju, ke kiri, atau ke kanan — tapi tetap tidak boleh mundur",
      "Berubah menjadi bidak yang lebih kuat dan bisa diagonal",
    ],
    kunci: 2,
    penjelasan:
      "Setelah menyeberangi sungai, Prajurit mendapat kemampuan tambahan: bisa ke kiri atau ke kanan (1 langkah). Namun tidak boleh mundur — di posisi manapun, Prajurit tidak pernah bisa mundur.",
    boardKey: null,
  },
  {
    id: "bing-3",
    pertanyaan:
      "Perhatikan papan. Prajurit Merah di e3 (sebelum sungai). Ke mana ia bisa bergerak?",
    pilihan: [
      "e4 saja (maju 1 langkah)",
      "e4, d3, f3 (maju dan ke samping)",
      "e4 dan e2 (maju dan mundur)",
      "d3 dan f3 saja (hanya ke samping)",
    ],
    kunci: 0,
    penjelasan:
      "Di baris 3 (sebelum sungai, karena sungai di antara baris 5 dan 6), Prajurit Merah hanya bisa maju ke e4. Gerakan ke samping (d3, f3) baru diizinkan setelah menyeberang sungai.",
    boardKey: "bing-sebelum-sungai",
  },
  {
    id: "bing-4",
    pertanyaan:
      "Perhatikan papan. Prajurit Merah di e7 (sudah menyeberang sungai). Ke mana ia bisa bergerak?",
    pilihan: [
      "e8 saja",
      "e8, d7, f7 — maju dan ke samping kiri/kanan",
      "e8, d7, f7, e6 — bebas ke semua arah kecuali diagonal",
      "d7 dan f7 saja — hanya ke samping setelah sungai",
    ],
    kunci: 1,
    penjelasan:
      "Di baris 7 (sudah menyeberang sungai), Prajurit Merah bisa maju ke e8, ke kiri ke d7, dan ke kanan ke f7. Yang tetap tidak boleh adalah mundur ke e6.",
    boardKey: "bing-sudah-sungai",
  },
  {
    id: "bing-5",
    pertanyaan:
      "Prajurit Merah mencapai baris 10 — baris terakhir lawan. Apa yang bisa ia lakukan?",
    pilihan: [
      "Tidak bisa bergerak sama sekali — terjebak",
      "Hanya bisa ke kiri atau ke kanan",
      "Bisa mundur balik ke baris 9",
      "Berubah jadi bidak lain seperti di catur Barat",
    ],
    kunci: 1,
    penjelasan:
      "Di baris terakhir lawan (baris 10 untuk Merah), Prajurit tidak bisa maju lagi (sudah di tepi papan) dan tetap tidak boleh mundur. Ia hanya bisa bergerak ke kiri atau ke kanan. Di xiangqi, tidak ada promosi bidak seperti catur Barat.",
    boardKey: null,
  },
  {
    id: "bing-6",
    pertanyaan:
      "Apakah Prajurit (Bing) yang sudah menyeberang sungai boleh MUNDUR?",
    pilihan: [
      "Ya — setelah menyeberang sungai ia bebas bergerak ke semua arah",
      "Ya — tapi hanya mundur 1 langkah",
      "Tidak — Prajurit tidak pernah bisa mundur di posisi manapun",
      "Ya — boleh mundur tapi hanya untuk kembali ke sisi sendiri",
    ],
    kunci: 2,
    penjelasan:
      "Prajurit TIDAK PERNAH bisa mundur — baik sebelum maupun setelah menyeberangi sungai. Ini aturan mutlak. Setelah menyeberang, ia hanya mendapat kemampuan tambahan ke samping, tapi arah mundur tetap terlarang selamanya.",
    boardKey: null,
  },
  {
    id: "bing-7",
    pertanyaan:
      "Prajurit Merah di e5 (tepat sebelum sungai). Prajurit Hitam ada di e6 (tepat di seberang sungai). Bolehkah Prajurit Merah menangkap Prajurit Hitam?",
    pilihan: [
      "Tidak — berbeda sisi sungai, tidak bisa berinteraksi",
      "Ya — e6 adalah 1 langkah maju dari e5, tangkapan legal",
      "Tidak — Prajurit Merah belum menyeberang sungai jadi tidak cukup kuat",
      "Ya, tapi hanya jika tidak ada bidak lain di sekitar",
    ],
    kunci: 1,
    penjelasan:
      "Ya, tangkapan ini legal. Dari e5, satu langkah maju (baris naik) adalah e6. Tidak ada aturan yang melarang Prajurit menangkap bidak lawan yang ada tepat di depannya — meskipun bidak itu ada di seberang sungai.",
    boardKey: "bing-tangkap-sungai",
  },
  {
    id: "bing-8",
    pertanyaan:
      "Prajurit Merah di e7 (sudah menyeberang). Prajurit Merah lain ada di d7. Bolehkah Prajurit di e7 bergerak ke d7?",
    pilihan: [
      "Ya — sesama Prajurit boleh saling melewati",
      "Ya — ke samping selalu boleh setelah menyeberang sungai",
      "Tidak — tidak boleh menangkap atau berpindah ke kotak yang diisi bidak sendiri",
      "Tidak — Prajurit tidak bisa ke samping",
    ],
    kunci: 2,
    penjelasan:
      "Tidak boleh. Meskipun Prajurit sudah menyeberang sungai dan bisa ke samping, ia tidak boleh berpindah ke kotak yang sudah diisi oleh bidak sendiri. Aturan ini berlaku untuk semua bidak — tidak boleh menangkap atau menduduki kotak bidak sendiri.",
    boardKey: "bing-blocked-sendiri",
  },
];

export const BOARD_SOAL_BING: Record<string, Record<string, string | null>> = {
  "bing-sebelum-sungai": {
    "3-4": "red.bing",
  },
  "bing-sudah-sungai": {
    "7-4": "red.bing",
  },
  "bing-tangkap-sungai": {
    "5-4": "red.bing",
    "6-4": "black.bing",
  },
  "bing-blocked-sendiri": {
    "7-4": "red.bing",
    "7-3": "red.bing",
  },
};
