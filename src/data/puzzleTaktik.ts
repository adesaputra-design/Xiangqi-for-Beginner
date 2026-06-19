import type { PuzzleSoal } from "../logic/quizEngine";

/**
 * Bank Puzzle Taktik Level 1
 * 
 * Sumber: "Rahasia Skakmat Xiangqi" oleh Zhu Baowei (26 teknik)
 * 
 * Placeholder: 3 puzzle dari 3 jenis taktik berbeda untuk testing wiring.
 * Konten lengkap 26 puzzle akan ditambahkan setelah diagram papan (Fig.27-108) 
 * dikonversi dari PDF asli oleh domain expert.
 */

export const BANK_PUZZLE_LEVEL_1: PuzzleSoal[] = [
  // ===== SERANGAN — Face-to-Face Laughing Checkmate (Teknik 1) =====
  {
    id: "pz-s1",
    pertanyaan:
      "Merah K di e1, Hitam K di e9. Merah punya Benteng di lajur 4. Tidak ada bidak di lajur tengah. Apa langkah terbaik Merah untuk memanfaatkan aturan General Face-off?",
    pilihan: [
      "R4=5 — kontrol lajur tengah dengan Benteng",
      "K1=2 — mendekatkan Raja ke tengah",
      "R4+5 — serang Menteri lawan",
      "Tunggu sampai Hitam bergerak dulu",
    ],
    kunci: 0,
    penjelasan:
      "Dengan R4=5, Benteng Merah mengontrol lajur tengah. Jika kedua Raja di lajur yang sama tanpa penghalang, itu adalah General Face-off — posisi ilegal yang bisa dimanfaatkan untuk skakmat. Ini adalah prinsip dasar Face-to-Face Laughing Checkmate.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ===== PERTAHANAN — Throat-cutting Checkmate (Teknik 2) =====
  {
    id: "pz-p1",
    pertanyaan:
      "Hitam mengancam skakmat di lajur 4. Merah punya Benteng di a1 dan Menteri di d1. Untuk bertahan sambil balik menyerang, Merah mengorbankan Benteng ke tengah. Konsep ini disebut?",
    pilihan: [
      "Iron-bolt Checkmate",
      "Throat-cutting Checkmate — hancurkan Menteri pusat",
      "Elbow Horse Checkmate",
      "Double Chariots Checkmate",
    ],
    kunci: 1,
    penjelasan:
      "Throat-cutting Checkmate adalah teknik di mana penyerang meluncurkan serangan paksa ke Menteri pusat lawan dengan Benteng, menghancurkan garis pertahanan. Teknik ini sering menghasilkan 'quick battle, quick decision' dan melibatkan pengorbanan untuk membuka pertahanan.",
    boardKey: null,
    tipeTaktik: "pertahanan",
    level: 1,
  },

  // ===== POSISI — Iron-bolt Checkmate (Teknik 3) =====
  {
    id: "pz-po1",
    pertanyaan:
      "Di posisi Iron-bolt Checkmate, kombinasi bidak apa yang paling sering digunakan untuk mengunci Raja lawan di lajur 4 atau 6?",
    pilihan: [
      "Kuda + Gajah + Prajurit",
      "Benteng + Meriam + Prajurit",
      "Dua Kuda + Benteng",
      "Meriam + Gajah + Menteri",
    ],
    kunci: 1,
    penjelasan:
      "Iron-bolt Checkmate menggunakan kombinasi Benteng, Meriam, dan Prajurit untuk memberikan skakmat di lajur ke-4 atau ke-6. Posisi Prajurit rendah (dekat baris akhir lawan) lebih kuat karena dapat membatasi pergerakan Raja sambil mendukung Meriam. Serangan ini cepat dan agresif.",
    boardKey: null,
    tipeTaktik: "posisi",
    level: 1,
  },
];