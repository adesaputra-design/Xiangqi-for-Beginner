import type { QuizSoal } from "../logic/quizEngine";

export const SOAL_MA: QuizSoal[] = [
  {
    id: "ma-1",
    pertanyaan:
      "Bagaimana pola gerak Kuda (Ma) di xiangqi?",
    pilihan: [
      "Lurus ke segala arah seperti Benteng, tapi maksimal 2 langkah",
      "Diagonal bebas seperti Gajah di catur Barat",
      "1 langkah ortogonal lalu 1 langkah diagonal menjauh — membentuk huruf L",
      "Bebas ke semua arah 1 langkah seperti Raja",
    ],
    kunci: 2,
    penjelasan:
      "Kuda bergerak membentuk huruf L: pertama 1 langkah ortogonal (atas/bawah/kiri/kanan), lalu 1 langkah diagonal menjauh dari titik awal. Dari satu posisi, Kuda bisa mencapai hingga 8 kotak berbeda jika papan kosong di sekitarnya.",
    boardKey: null,
  },
  {
    id: "ma-2",
    pertanyaan:
      "Apa yang dimaksud dengan 'kaki' (leg) Kuda dan apa fungsinya?",
    pilihan: [
      "Kotak tujuan Kuda — jika ada bidak di sana, Kuda tidak bisa pergi ke sana",
      "Kotak ortogonal pertama dalam gerak L — jika ada bidak di sana, Kuda terblokir ke arah itu",
      "Bidak yang ada di samping Kuda dan bisa dimakan bersamaan",
      "Kuda tidak punya kaki — ia bisa melompati semua bidak seperti di catur Barat",
    ],
    kunci: 1,
    penjelasan:
      "Kaki Kuda adalah kotak pertama dalam gerakan ortogonal — langkah pertama sebelum berbelok diagonal. Jika ada bidak (milik siapapun) di kotak kaki, Kuda TIDAK BISA bergerak ke kedua destinasi yang melewati kaki tersebut. Ini berbeda dari catur Barat di mana Kuda bisa melompat.",
    boardKey: null,
  },
  {
    id: "ma-3",
    pertanyaan:
      "Perhatikan papan. Kuda Merah di e5. Kotak e6 (kaki atas) diisi Prajurit Merah. Ke mana Kuda bisa bergerak?",
    pilihan: [
      "Tidak bisa kemana-mana karena kakinya diblokir",
      "Ke d7 dan f7 (lewat kaki atas) saja karena kaki atas paling dekat",
      "Tidak bisa ke d7 dan f7, tapi masih bisa ke arah lain (kanan, bawah, kiri)",
      "Bisa ke semua 8 kotak karena Kuda bisa melompati bidak sendiri",
    ],
    kunci: 2,
    penjelasan:
      "Hanya kaki atas (e6) yang terblokir. Ini memblokir 2 destinasi saja: d7 (+2,-1) dan f7 (+2,+1). Empat kaki lainnya (kanan, bawah, kiri) masih kosong, jadi Kuda masih bisa bergerak ke 6 destinasi lainnya.",
    boardKey: "ma-kaki-atas-blokir",
  },
  {
    id: "ma-4",
    pertanyaan:
      "Kuda Merah di e5. Benteng Hitam menghalangi kaki kanan (f5). Apakah Kuda bisa bergerak ke f7 atau f3?",
    pilihan: [
      "Ya — f7 dan f3 adalah destinasi yang melewati kaki kanan, tapi Benteng adalah lawan jadi tidak memblokir",
      "Tidak — kaki kanan (f5) diisi Benteng Hitam, sehingga gerakan ke f7 dan f3 terblokir",
      "Ya ke f7, tidak ke f3 — tergantung arah",
      "Tidak — Kuda tidak bisa bergerak sama sekali jika ada lawan di dekatnya",
    ],
    kunci: 1,
    penjelasan:
      "Kaki berlaku terlepas dari warna bidak penghalang. Jika f5 (kaki kanan) diisi bidak lawan sekalipun, Kuda tetap tidak bisa bergerak ke f7 (+1,+2) maupun f3 (-1,+2). Untuk menangkap Benteng di f5, Kuda harus menggunakannya sebagai kaki dulu (tidak bisa).",
    boardKey: "ma-kaki-lawan-blokir",
  },
  {
    id: "ma-5",
    pertanyaan:
      "Perhatikan papan. Kuda Merah di e5. Semua 4 kaki (atas/kanan/bawah/kiri) terisi bidak. Apa yang terjadi?",
    pilihan: [
      "Kuda bisa bergerak ke destinasi yang kakinya paling tidak padat",
      "Kuda tidak bisa bergerak sama sekali — semua 8 destinasi terblokir",
      "Kuda bisa bergerak ke destinasi diagonal saja karena kaki tidak mempengaruhi gerak diagonal",
      "Kuda bisa menangkap salah satu bidak di kaki untuk membuka jalan",
    ],
    kunci: 1,
    penjelasan:
      "Jika semua 4 kaki terblokir, Kuda tidak bisa bergerak ke manapun dari 8 destinasi — karena setiap destinasi pasti melewati salah satu dari 4 kaki. Kuda yang terkepung seperti ini disebut 'kuda terikat'. Ini adalah kelemahan terbesar Kuda dibanding Benteng.",
    boardKey: "ma-semua-kaki-blokir",
  },
  {
    id: "ma-6",
    pertanyaan:
      "Kuda Merah di e5 ingin menangkap Benteng Hitam di d7. Apa syaratnya?",
    pilihan: [
      "Kaki yang relevan (e6) harus kosong, dan d7 diisi bidak lawan (bukan bidak sendiri)",
      "Tidak ada syarat — Kuda bisa menangkap siapapun yang ada di kotak L",
      "Kaki e6 harus diisi bidak sendiri sebagai 'batu lompat'",
      "Kuda harus lebih dulu maju ke e6 di giliran sebelumnya",
    ],
    kunci: 0,
    penjelasan:
      "Dua syarat untuk tangkap: (1) Kaki dalam jalur L harus kosong — e6 harus bebas untuk gerak (+2,-1) ke d7. (2) Destinasi harus diisi bidak lawan, bukan bidak sendiri. Jika kedua syarat terpenuhi, tangkapan legal.",
    boardKey: "ma-tangkap",
  },
  {
    id: "ma-7",
    pertanyaan:
      "Kuda memiliki kelemahan dibanding Benteng (Che). Apa kelemahan utama Kuda?",
    pilihan: [
      "Kuda tidak bisa menangkap bidak lawan",
      "Kuda bisa diblokir oleh kaki — Benteng tidak bisa diblokir dengan cara yang sama",
      "Kuda hanya bisa bergerak maju, tidak bisa mundur",
      "Kuda lebih lambat karena hanya bisa bergerak 1 langkah per giliran",
    ],
    kunci: 1,
    penjelasan:
      "Kelemahan utama Kuda adalah bisa diblokir di kakinya. Dengan menempatkan bidak di kaki Kuda, lawan bisa membatasi mobilitas Kuda secara drastis. Benteng (Che) bergerak bebas di garis kosong dan tidak bisa diblokir dengan cara ini.",
    boardKey: null,
  },
  {
    id: "ma-8",
    pertanyaan:
      "Perhatikan papan. Kuda Merah di b1 (pojok dekat tepi). Berapa destinasi yang tersedia?",
    pilihan: [
      "8 destinasi — sama seperti posisi tengah",
      "4 destinasi — setengah dari posisi tengah",
      "3 destinasi karena dekat tepi papan",
      "2 destinasi karena di sudut papan",
    ],
    kunci: 2,
    penjelasan:
      "Dari b1 (baris 1, kolom 1), hanya 3 destinasi valid: a3 (+2,-1), c3 (+2,+1), dan d2 (+1,+2). Destinasi (-2,±1) dan (-1,±2) keluar dari papan karena baris 1 adalah baris terbawah. d0 dan gerakan ke kolom negatif juga tidak valid. Semakin dekat ke tepi, semakin sedikit pilihan Kuda.",
    boardKey: "ma-tepi-papan",
  },
];

export const BOARD_SOAL_MA: Record<string, Record<string, string | null>> = {
  "ma-kaki-atas-blokir": {
    "5-4": "red.ma",
    "6-4": "red.bing",
  },
  "ma-kaki-lawan-blokir": {
    "5-4": "red.ma",
    "5-5": "black.che",
  },
  "ma-semua-kaki-blokir": {
    "5-4": "red.ma",
    "6-4": "red.bing",
    "5-5": "black.bing",
    "4-4": "red.xiang",
    "5-3": "black.bing",
  },
  "ma-tangkap": {
    "5-4": "red.ma",
    "7-3": "black.che",
  },
  "ma-tepi-papan": {
    "1-1": "red.ma",
  },
};
