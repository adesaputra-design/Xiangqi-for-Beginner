import type { QuizSoal } from "../logic/quizEngine";
import type { BoardState } from "./types";

export const SOAL_FACE_OFF: QuizSoal[] = [
  {
    id: "fo-1",
    pertanyaan:
      'Dua Jenderal (Raja) di kolom yang sama tanpa bidak di antaranya disebut...',
    pilihan: [
      "Flying General",
      "General Face-off",
      "Double Check",
      "Perpetual Check",
    ],
    kunci: 1,
    penjelasan:
      "General Face-off adalah kondisi ilegal di mana dua Jenderal saling berhadapan di kolom yang sama tanpa ada bidak penghalang. Aturan ini unik di xiangqi dan tidak ada di catur Barat.",
    boardKey: null,
  },
  {
    id: "fo-2",
    pertanyaan:
      "Perhatikan posisi: Merah Jiang di e1, Hitam Jiang di e10, tidak ada bidak di kolom e. Apakah posisi ini legal?",
    pilihan: [
      "Legal, karena masih di palace masing-masing",
      "Ilegal — ini adalah General Face-off",
      "Legal selama bukan giliran Merah",
      "Ilegal hanya jika Merah yang menciptakan posisi ini",
    ],
    kunci: 1,
    penjelasan:
      "Posisi ini ilegal terlepas dari giliran siapa. Dua Jenderal tidak boleh saling berhadapan di kolom yang sama tanpa penghalang — ini adalah pelanggaran aturan General Face-off.",
    boardKey: "fo-faceoff-simple",
  },
  {
    id: "fo-3",
    pertanyaan:
      'Merah Jiang di e1, Hitam Jiang di e10, ada Merah Bing di e5. Merah memindahkan Bing dari e5 ke f5. Apakah langkah ini legal? (Petunjuk: apa yang terjadi setelah Bing pindah?)',
    pilihan: [
      "Legal, Bing boleh pindah ke kolom f",
      "Ilegal — menciptakan General Face-off",
      "Legal, karena Bing bukan Jenderal",
      "Ilegal — Bing tidak bisa pindah ke samping",
    ],
    kunci: 1,
    penjelasan:
      "Setelah Bing pindah dari e5, tidak ada lagi bidak di antara dua Jenderal di kolom e. Ini menciptakan General Face-off — posisi yang ilegal. Aturan face-off berlaku untuk SEMUA bidak, bukan hanya Jenderal.",
    boardKey: "fo-blocker-move",
  },
  {
    id: "fo-4",
    pertanyaan:
      "Apa itu Flying General dalam xiangqi?",
    pilihan: [
      "Jenderal yang bisa terbang melewati sungai",
      "Teknik ofensif: mengunci bidak lawan di antara dua Jenderal yang berhadapan",
      "Jenderal yang tidak bisa bergerak sama sekali",
      "Aturan khusus saat Jenderal berada di baris terakhir",
    ],
    kunci: 1,
    penjelasan:
      "Flying General adalah aplikasi ofensif dari aturan face-off. Jika dua Jenderal sudah berhadapan (tapi masih ada 1 blocker di antaranya), blocker tersebut tidak bisa pindah dari kolom itu — artinya 'terkunci'. Pemain bisa memanfaatkan ini untuk melumpuhkan bidak lawan.",
    boardKey: null,
  },
  {
    id: "fo-5",
    pertanyaan:
      "Merah Jiang di e1, Hitam Jiang di e10, Hitam Pao di e5 (satu-satunya blocker). Giliran Hitam. Apakah Hitam boleh memindahkan Pao-nya ke d5?",
    pilihan: [
      "Boleh, Pao bisa bergerak bebas",
      "Boleh, karena Pao milik Hitam sendiri",
      "Tidak boleh — menciptakan General Face-off",
      "Boleh, karena blocker boleh pindah selama bukan Jenderal",
    ],
    kunci: 2,
    penjelasan:
      "Tidak boleh. Setelah Pao pindah, dua Jenderal akan saling berhadapan tanpa penghalang (face-off). Aturan face-off berlaku untuk SEMUA bidak — bahkan bidak sendiri.",
    boardKey: "fo-blocker-black",
  },
  {
    id: "fo-6",
    pertanyaan:
      "Merah Jiang di e1, Hitam Jiang di e10, Merah Bing di e5, Merah Pao di e7. Merah memindahkan Bing dari e5 ke e6. Apakah langkah ini legal?",
    pilihan: [
      "Ilegal — Bing tidak bisa mundur",
      "Legal — Pao masih memblokir face-off di e7",
      "Ilegal — menciptakan face-off",
      "Legal — Bing boleh pindah sepanjang kolom e",
    ],
    kunci: 1,
    penjelasan:
      "Legal! Meskipun Bing pindah dari e5, masih ada Pao di e7 yang memblokir face-off. Face-off hanya terjadi jika TIDAK ADA SATUPUN bidak di antara dua Jenderal di kolom yang sama. Dengan dua blocker, memindahkan salah satu masih aman.",
    boardKey: "fo-multi-blocker",
  },
  {
    id: "fo-7",
    pertanyaan:
      "Dalam posisi awal xiangqi, apakah mungkin terjadi General Face-off?",
    pilihan: [
      "Ya, karena dua Jenderal selalu di kolom yang sama (e)",
      "Tidak, karena ada banyak bidak di antara dua Jenderal di kolom e",
      "Ya, jika salah satu Jenderal bergerak duluan",
      "Tidak, karena Jenderal tidak bisa melihat satu sama lain",
    ],
    kunci: 1,
    penjelasan:
      "Tidak mungkin. Meskipun dua Jenderal berada di kolom e yang sama, di antara mereka ada Prajurit (e4 dan e7) dan berpotensi bidak lain. Face-off hanya terjadi jika SEMUA bidak di antara dua Jenderal sudah tidak ada di kolom tersebut.",
    boardKey: null,
  },
  {
    id: "fo-8",
    pertanyaan:
      "Merah Jiang di e2, Hitam Jiang di e10. Merah menggerakkan Jiang-nya dari e2 ke e1. Apakah ini legal? (Petunjuk: cek apa yang terjadi setelah pergerakan.)",
    pilihan: [
      "Legal — mundur 1 langkah di dalam palace",
      "Ilegal — Jenderal tidak bisa mundur",
      "Legal — kolom berbeda jadi tidak face-off",
      "Ilegal — menciptakan face-off karena setelah mundur, Merah Jiang di e1 berhadapan langsung dengan Hitam Jiang di e10 tanpa blocker",
    ],
    kunci: 3,
    penjelasan:
      "ILEGAL. Setelah Merah Jiang mundur ke e1, posisinya menjadi: Merah Jiang di e1, Hitam Jiang di e10 — tidak ada blocker di antaranya di kolom e. Ini menciptakan General Face-off. Aturan dicek SETELAH langkah selesai, bukan sebelum.",
    boardKey: null,
  },
];

/** Posisi papan untuk soal quiz Face-off */
export const BOARD_SOAL_FACE_OFF: Record<string, Record<string, string | null>> = {
  "fo-faceoff-simple": {
    "1-4": "red.jiang",
    "10-4": "black.jiang",
  },
  "fo-blocker-move": {
    "1-4": "red.jiang",
    "5-4": "red.bing",
    "10-4": "black.jiang",
  },
  "fo-blocker-black": {
    "1-4": "red.jiang",
    "5-4": "black.pao",
    "10-4": "black.jiang",
  },
  "fo-multi-blocker": {
    "1-4": "red.jiang",
    "5-4": "red.bing",
    "7-4": "red.pao",
    "10-4": "black.jiang",
  },
};