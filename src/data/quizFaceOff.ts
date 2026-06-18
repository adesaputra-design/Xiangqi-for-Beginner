import type { QuizSoal } from "../logic/quizEngine";
import type { BoardState } from "./types";

/**
 * Notasi WXF (World Xiangqi Federation):
 * - File 1-9 dari perspektif Merah (kanan ke kiri)
 * - Baris 1-10 dari bawah (Merah) ke atas (Hitam)
 * - Singkatan: K=Raja, A=Menteri, E=Gajah, H=Kuda, R=Benteng, C=Meriam, P=Prajurit
 *
 * Board internal: kolom 0-8 (a-i), baris 1-10 (bawah ke atas)
 * Konversi: WXF file 1 = kolom 8, WXF file 5 = kolom 4, WXF file 9 = kolom 0
 */

export const SOAL_FACE_OFF: QuizSoal[] = [
  {
    id: "fo-1",
    pertanyaan:
      "Dua Jenderal (K) di lajur yang sama tanpa bidak di antaranya disebut...",
    pilihan: [
      "Flying General",
      "General Face-off (Raja Berhadapan)",
      "Double Check",
      "Perpetual Check",
    ],
    kunci: 1,
    penjelasan:
      "General Face-off adalah kondisi ilegal di mana dua Jenderal (K) saling berhadapan di lajur yang sama tanpa ada bidak penghalang. Aturan ini unik di xiangqi dan tidak ada di catur Barat.",
    boardKey: null,
  },
  {
    id: "fo-2",
    pertanyaan:
      "Perhatikan posisi: Merah K di lajur 5 baris 1, Hitam K di lajur 5 baris 10, tidak ada bidak di lajur 5. Apakah posisi ini legal?",
    pilihan: [
      "Legal, karena masih di palace masing-masing",
      "Ilegal — ini adalah General Face-off",
      "Legal selama bukan giliran Merah",
      "Ilegal hanya jika Merah yang menciptakan posisi ini",
    ],
    kunci: 1,
    penjelasan:
      "Posisi ini ilegal terlepas dari giliran siapa. Dua Jenderal (K) tidak boleh saling berhadapan di lajur yang sama tanpa penghalang — ini pelanggaran aturan General Face-off (Raja Berhadapan).",
    boardKey: "fo-faceoff-simple",
  },
  {
    id: "fo-3",
    pertanyaan:
      "Merah K di lajur 5 baris 1, Hitam K di lajur 5 baris 10, ada Merah C (Meriam) di lajur 5 baris 5 sebagai satu-satunya penghalang. Merah memindahkan C dari lajur 5 ke lajur 4. Apakah langkah ini legal?",
    pilihan: [
      "Legal, Meriam (C) boleh bergerak lurus ke samping",
      "Ilegal — setelah C pindah, dua K berhadapan langsung tanpa penghalang (General Face-off)",
      "Legal, karena yang digerakkan Meriam, bukan Jenderal",
      "Ilegal — Meriam tidak bisa bergerak tanpa screen",
    ],
    kunci: 1,
    penjelasan:
      "ILEGAL. Setelah Meriam (C) pindah dari lajur 5, tidak ada lagi bidak di antara dua Jenderal (K) di lajur 5. Ini menciptakan General Face-off. Aturan ini berlaku untuk SEMUA bidak — bukan hanya Jenderal. Siapapun yang memindahkan penghalang terakhir menciptakan posisi ilegal.",
    boardKey: "fo-blocker-move",
  },
  {
    id: "fo-4",
    pertanyaan:
      "Apa itu Flying General (Jenderal Terbang) dalam xiangqi?",
    pilihan: [
      "Jenderal yang bisa melompati sungai",
      "Teknik ofensif: mengunci bidak lawan di antara dua Jenderal yang berhadapan sehingga bidak itu tidak bisa bergerak ke kiri/kanan",
      "Jenderal yang tidak bisa bergerak sama sekali",
      "Aturan khusus saat Jenderal berada di baris terakhir",
    ],
    kunci: 1,
    penjelasan:
      "Flying General adalah aplikasi ofensif dari aturan face-off. Jika dua K sudah di lajur yang sama dengan hanya 1 penghalang di antaranya, penghalang itu 'terkunci' — tidak bisa pindah dari lajur tersebut (karena akan menciptakan face-off). Pemain bisa memanfaatkan ini untuk melumpuhkan bidak lawan.",
    boardKey: null,
  },
  {
    id: "fo-5",
    pertanyaan:
      "Merah K di lajur 5 baris 1, Hitam K di lajur 5 baris 10, Hitam C di lajur 5 baris 5 (satu-satunya penghalang). Giliran Hitam. Apakah Hitam boleh memindahkan C-nya ke lajur 6?",
    pilihan: [
      "Boleh, Meriam (C) bisa bergerak bebas",
      "Boleh, karena C milik Hitam sendiri",
      "Tidak boleh — menciptakan General Face-off",
      "Boleh, karena penghalang boleh pindah selama bukan Jenderal",
    ],
    kunci: 2,
    penjelasan:
      "TIDAK BOLEH. Setelah C pindah dari lajur 5, dua K akan saling berhadapan tanpa penghalang (face-off). Aturan face-off berlaku untuk SEMUA bidak — bahkan bidak sendiri. Kamu tidak boleh menciptakan posisi face-off, siapapun bidak yang digerakkan.",
    boardKey: "fo-blocker-black",
  },
  {
    id: "fo-6",
    pertanyaan:
      "Merah K di lajur 5 baris 1, Hitam K di lajur 5 baris 10, Merah P di lajur 5 baris 4, Merah C di lajur 5 baris 7. Merah memindahkan P dari baris 4 ke baris 5 (maju). Apakah langkah ini legal?",
    pilihan: [
      "Ilegal — P (Prajurit) tidak bisa mundur",
      "Legal — C di baris 7 masih menghalangi face-off di lajur 5",
      "Ilegal — menciptakan face-off",
      "Legal — P boleh maju sepanjang lajur",
    ],
    kunci: 1,
    penjelasan:
      "LEGAL! Meskipun P maju dari baris 4 ke 5, masih ada C di baris 7 yang menghalangi face-off. Face-off hanya terjadi jika TIDAK ADA SATUPUN bidak di antara dua K di lajur yang sama. Dengan dua penghalang, menggerakkan salah satu masih aman.",
    boardKey: "fo-multi-blocker",
  },
  {
    id: "fo-7",
    pertanyaan:
      "Dalam posisi awal xiangqi (semua 32 bidak di tempat), apakah mungkin terjadi General Face-off?",
    pilihan: [
      "Ya, karena dua K selalu di lajur yang sama (lajur 5)",
      "Tidak, karena ada banyak bidak di antara dua K di lajur 5 (P di baris 4 dan 7, plus bidak lain yang bisa masuk)",
      "Ya, jika salah satu K bergerak duluan",
      "Tidak, karena K tidak bisa saling melihat",
    ],
    kunci: 1,
    penjelasan:
      "Tidak mungkin. Meskipun dua K berada di lajur 5 yang sama, di antara mereka ada P (Prajurit) di baris 4 dan 7 serta potensi bidak lain. Face-off hanya terjadi jika SEMUA bidak di antara dua K sudah tidak ada di lajur tersebut.",
    boardKey: null,
  },
  {
    id: "fo-8",
    pertanyaan:
      "Merah K di lajur 5 baris 2, Hitam K di lajur 5 baris 10. Merah menggerakkan K-nya dari baris 2 ke baris 1 (mundur). Apakah ini legal?",
    pilihan: [
      "Legal — mundur 1 langkah di dalam palace",
      "Ilegal — K tidak bisa mundur",
      "Legal — setelah mundur, K di baris 1 dan baris 10 tidak berhadapan langsung karena jaraknya jauh",
      "Ilegal — setelah mundur, Merah K di baris 1 berhadapan langsung dengan Hitam K di baris 10 tanpa penghalang → menciptakan General Face-off",
    ],
    kunci: 3,
    penjelasan:
      "ILEGAL. Setelah Merah K mundur ke baris 1, posisi menjadi: Merah K lajur 5 baris 1, Hitam K lajur 5 baris 10 — tidak ada penghalang di antaranya. Ini menciptakan General Face-off. Aturan dicek SETELAH langkah selesai, bukan sebelum.",
    boardKey: null,
  },
];

/** Posisi papan untuk soal quiz Face-off (notasi internal: baris-kolom) */
export const BOARD_SOAL_FACE_OFF: Record<string, Record<string, string | null>> = {
  "fo-faceoff-simple": {
    "1-4": "red.jiang",
    "10-4": "black.jiang",
  },
  "fo-blocker-move": {
    "1-4": "red.jiang",
    "5-4": "red.pao",     // Meriam sbg penghalang (bisa gerak ke samping)
    "10-4": "black.jiang",
  },
  "fo-blocker-black": {
    "1-4": "red.jiang",
    "5-4": "black.pao",   // Hitam Meriam sbg penghalang
    "10-4": "black.jiang",
  },
  "fo-multi-blocker": {
    "1-4": "red.jiang",
    "4-4": "red.bing",    // P di baris 4 (belum seberangi sungai, hanya bisa maju)
    "7-4": "red.pao",     // C di baris 7 sbg penghalang kedua
    "10-4": "black.jiang",
  },
};
