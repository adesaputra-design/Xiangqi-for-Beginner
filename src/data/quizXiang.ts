import type { QuizSoal } from "../logic/quizEngine";

export const SOAL_XIANG: QuizSoal[] = [
  {
    id: "xiang-1",
    pertanyaan:
      "Bagaimana pola gerak Gajah (Xiang) di xiangqi?",
    pilihan: [
      "Diagonal bebas berapa langkah saja seperti Menteri di catur Barat",
      "Tepat 2 langkah diagonal — membentuk pola seperti karakter 田 (tian)",
      "1 langkah diagonal lalu 1 langkah lurus — seperti gerak Kuda tapi diagonal",
      "Lurus 2 langkah ke segala arah",
    ],
    kunci: 1,
    penjelasan:
      "Gajah bergerak tepat 2 langkah diagonal. Dari satu posisi, ia bisa mencapai maksimal 4 kotak berbentuk pola persegi besar — mirip karakter 田. Berbeda dari catur Barat di mana Bishop bergerak diagonal bebas.",
    boardKey: null,
  },
  {
    id: "xiang-2",
    pertanyaan:
      "Apa batasan wilayah Gajah yang paling membedakannya dari bidak lain?",
    pilihan: [
      "Hanya bisa bergerak di sisi kiri papan",
      "Tidak boleh menyeberangi sungai — selamanya hanya di setengah papan sisi sendiri",
      "Hanya bisa bergerak jika Raja sudah keluar dari istana",
      "Tidak boleh menangkap bidak lawan, hanya bertahan",
    ],
    kunci: 1,
    penjelasan:
      "Gajah tidak pernah boleh menyeberangi sungai. Gajah Merah selamanya di baris 1–5, Gajah Hitam di baris 6–10. Ini membuatnya murni bidak bertahan — tidak bisa menyerang ke wilayah lawan.",
    boardKey: null,
  },
  {
    id: "xiang-3",
    pertanyaan:
      "Apa yang dimaksud dengan 'mata gajah' dan bagaimana pengaruhnya?",
    pilihan: [
      "Kotak tujuan Gajah — jika ada bidak di sana Gajah tidak bisa ke sana",
      "Kotak tengah di antara posisi asal dan tujuan diagonal — jika terisi, gerakan terblokir",
      "Posisi Gajah yang mengancam Raja lawan",
      "Gajah tidak punya mata — bisa bergerak melewati bidak manapun",
    ],
    kunci: 1,
    penjelasan:
      "Mata gajah adalah kotak di tengah lintasan diagonal 2 langkah. Jika ada bidak (milik siapapun) di mata, Gajah tidak bisa bergerak ke arah itu. Prinsipnya mirip leg block pada Kuda — halangan di tengah jalan memblokir gerakan.",
    boardKey: null,
  },
  {
    id: "xiang-4",
    pertanyaan:
      "Perhatikan papan. Gajah Merah di e3. Kotak f4 (mata arah kanan-atas) diisi Prajurit Merah. Apa yang terjadi?",
    pilihan: [
      "Gajah tidak bisa bergerak sama sekali",
      "Gajah tidak bisa ke g5, tapi masih bisa ke tiga arah lainnya (jika mata kosong)",
      "Gajah bisa ke g5 karena Prajurit adalah bidak sendiri, bukan lawan",
      "Gajah harus menangkap Prajurit di f4 dulu sebelum bisa bergerak",
    ],
    kunci: 1,
    penjelasan:
      "Hanya mata di f4 (+1,+1) yang terblokir — ini hanya menutup 1 arah yaitu ke g5 (+2,+2). Tiga mata lainnya (kiri-atas, kanan-bawah, kiri-bawah) bisa saja masih kosong, sehingga ketiga arah itu tetap tersedia.",
    boardKey: "xiang-mata-blokir",
  },
  {
    id: "xiang-5",
    pertanyaan:
      "Gajah Merah di g5 (baris 5, kolom 6). Ia ingin bergerak ke i7 (baris 7, kolom 8). Apakah ini legal?",
    pilihan: [
      "Ya — diagonal 2 langkah dan mata kosong",
      "Tidak — baris 7 ada di sisi Hitam, Gajah Merah tidak boleh menyeberangi sungai",
      "Ya — Gajah Merah boleh ke baris 6 jika mata kosong",
      "Tidak — kolom i (8) adalah tepi papan, Gajah tidak bisa ke tepi",
    ],
    kunci: 1,
    penjelasan:
      "Tidak legal. Baris 7 ada di sisi Hitam (melewati sungai di antara baris 5 dan 6). Gajah Merah tidak boleh ke baris 6 atau lebih — selamanya terkunci di baris 1–5.",
    boardKey: "xiang-coba-seberang",
  },
  {
    id: "xiang-6",
    pertanyaan:
      "Berapa kotak yang bisa dijangkau Gajah jika posisinya di pojok c1 (baris 1, kolom 2)?",
    pilihan: [
      "4 kotak — sama seperti posisi tengah",
      "3 kotak — satu arah keluar papan, tiga lainnya valid",
      "2 kotak — dua arah keluar papan atau melewati sungai",
      "1 kotak — hampir semua arah terblokir di pojok",
    ],
    kunci: 2,
    penjelasan:
      "Dari c1 (baris 1, kolom 2): ke a3 (−2,−2) keluar papan (kolom negatif), ke a−1 (−2,−2 juga) baris negatif juga tidak valid. Yang valid hanya: e3 (+2,+2) dan a3 jika kolom 0 valid — sebenarnya ke (3,0)=a3 valid dan ke (3,4)=e3 valid. Jadi 2 kotak tersedia.",
    boardKey: "xiang-pojok",
  },
  {
    id: "xiang-7",
    pertanyaan:
      "Mengapa Gajah dianggap sebagai bidak bertahan, bukan penyerang?",
    pilihan: [
      "Karena Gajah tidak bisa menangkap bidak lawan",
      "Karena Gajah tidak bisa menyeberangi sungai — ia tidak bisa menyerang wilayah lawan sama sekali",
      "Karena Gajah bergeraknya lambat — hanya 1 langkah per giliran",
      "Karena Gajah hanya bisa bergerak jika ada bidak lain di dekatnya",
    ],
    kunci: 1,
    penjelasan:
      "Karena tidak bisa menyeberangi sungai, Gajah tidak pernah bisa mengancam bidak lawan secara langsung di wilayah mereka. Fungsi utamanya adalah memblokir serangan lawan yang masuk ke sisi sendiri dan melindungi posisi pertahanan.",
    boardKey: null,
  },
  {
    id: "xiang-8",
    pertanyaan:
      "Gajah Merah di c1. Mata kanan-atas (d2) kosong. Apakah Gajah bisa bergerak ke e3?",
    pilihan: [
      "Ya — diagonal +2,+2 dengan mata d2 kosong, dan e3 masih di baris 3 (sisi Merah)",
      "Tidak — e3 terlalu jauh dari c1",
      "Tidak — Gajah hanya bisa ke kotak berwarna tertentu",
      "Ya, tapi hanya jika tidak ada bidak di e3",
    ],
    kunci: 0,
    penjelasan:
      "Legal. Dari c1 (baris 1, kolom 2) ke e3 (baris 3, kolom 4) adalah diagonal +2,+2. Mata di d2 (baris 2, kolom 3) kosong. Tujuan e3 ada di baris 3 — masih di sisi Merah (baris 1–5). Semua syarat terpenuhi. Jika ada bidak lawan di e3, itu tangkapan legal; jika kotak kosong, gerak biasa.",
    boardKey: "xiang-gerak-valid",
  },
];

export const BOARD_SOAL_XIANG: Record<string, Record<string, string | null>> = {
  "xiang-mata-blokir": {
    "3-4": "red.xiang",
    "4-5": "red.bing",
  },
  "xiang-coba-seberang": {
    "5-6": "red.xiang",
  },
  "xiang-pojok": {
    "1-2": "red.xiang",
  },
  "xiang-gerak-valid": {
    "1-2": "red.xiang",
  },
};
