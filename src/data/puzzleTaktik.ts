import type { PuzzleSoal } from "../logic/quizEngine";

/**
 * Bank Puzzle Taktik — 3 Level
 *
 * Sumber: "Rahasia Skakmat Xiangqi" (Zhu Baowei, 26 teknik fundamental)
 *
 * Level 1: diff 1-2 dari ebook (26 puzzle — konseptual dasar)
 * Level 2: diff 3 dari ebook (13 puzzle — serangan kompleks, pertahanan berlapis)
 * Level 3: diff 4 dari ebook (15 puzzle — posisi pembukaan standar kompetisi junior)
 */

// ================================================================
// LEVEL 1 — Diff 1-2: semua 26 teknik (konseptual dasar)
// ================================================================

const LEVEL_1: PuzzleSoal[] = [
  {
    id: "pz-01",
    pertanyaan: "Apa prinsip utama Face-to-Face Laughing Checkmate?",
    pilihan: [
      "Menyerang Raja lawan dengan dua Benteng sekaligus",
      "Memanfaatkan aturan larangan dua Raja saling berhadapan di lajur yang sama tanpa penghalang",
      "Mengorbankan semua bidak untuk membuka jalan Meriam",
      "Menunggu lawan kehabisan waktu",
    ],
    kunci: 1,
    penjelasan: "Face-to-Face Laughing Checkmate memanfaatkan aturan bahwa dua Raja tidak boleh berada pada satu lajur yang sama tanpa bidak penghalang. Penyerang memberikan skak sehingga Raja lawan dipaksa ke posisi terbuka.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-02",
    pertanyaan: "Dalam Throat-cutting Checkmate, target utama serangan adalah...",
    pilihan: ["Raja lawan langsung", "Penasihat (Menteri) tengah — inti pertahanan istana", "Gajah di sudut", "Meriam di baris belakang"],
    kunci: 1,
    penjelasan: "Throat-cutting Checkmate menyerang langsung Penasihat pusat lawan untuk menghancurkan struktur pertahanan istana. Serangan bersifat paksa dan cepat.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-03",
    pertanyaan: "Kombinasi bidak apa yang menjadi ciri khas Iron-bolt Checkmate?",
    pilihan: ["Kuda + Gajah + Raja", "Benteng + Meriam + Prajurit", "Dua Meriam + Dua Kuda", "Benteng + Kuda + Gajah"],
    kunci: 1,
    penjelasan: "Iron-bolt Checkmate menggunakan kombinasi Benteng, Meriam, dan Prajurit untuk skakmat di lajur ke-4 atau ke-6.",
    boardKey: null, tipeTaktik: "posisi", level: 1,
  },
  {
    id: "pz-04",
    pertanyaan: "Fishing-the-Moon-Under-Deep-Sea Checkmate digunakan ketika...",
    pilihan: ["Serangan frontal tidak memungkinkan", "Lawan memiliki lebih banyak bidak", "Hanya tersisa Meriam dan Raja", "Permainan memasuki endgame"],
    kunci: 0,
    penjelasan: "Ketika tidak ada peluang serangan frontal, penyerang memindahkan kekuatan ke barisan belakang lawan dan menyerang dari arah belakang.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-05",
    pertanyaan: "Apa yang membuat Double Chariots Checkmate sangat kuat?",
    pilihan: ["Dua Benteng skak bergantian hingga Raja tak punya jalan keluar", "Benteng bisa bergerak ke mana saja", "Benteng tak bisa dimakan", "Dua Benteng selalu menang"],
    kunci: 0,
    penjelasan: "Dua Benteng bekerja bergantian memberikan skak terus-menerus. Sangat kuat jika pertahanan lawan berkurang.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-06",
    pertanyaan: "Di mana posisi kunci Kuda dalam Elbow Horse Checkmate?",
    pilihan: ["Di sudut istana lawan", "Pada baris kedua, menghalangi jalan kembali Raja", "Di tengah papan", "Di belakang Meriam sendiri"],
    kunci: 1,
    penjelasan: "Kuda di baris kedua menghalangi jalan kembali Raja ke posisi aman. Bidak lain menyelesaikan skakmat.",
    boardKey: null, tipeTaktik: "posisi", level: 1,
  },
  {
    id: "pz-07",
    pertanyaan: "Dalam Palcorner Horse Checkmate, Kuda ditempatkan di mana?",
    pilihan: ["Di tengah papan", "Di sudut istana lawan", "Di baris pertama", "Di samping Raja sendiri"],
    kunci: 1,
    penjelasan: "Kuda di sudut istana lawan mengontrol titik vital pergerakan Raja. Bidak lain memberikan skakmat.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-08",
    pertanyaan: "Di titik mana Kuda biasanya ditempatkan dalam Angler Horse Checkmate?",
    pilihan: ["Titik 1.1 atau 9.1", "Titik 3.3 atau 7.3", "Titik 5.5", "Titik 1.9 atau 9.9"],
    kunci: 1,
    penjelasan: "Kuda di titik 3.3 atau 7.3 menyerang diagonal dan membatasi pergerakan Raja. Timing sangat penting.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-09",
    pertanyaan: "Apa fungsi utama Kuda dalam Tiger Silhouette Checkmate?",
    pilihan: ["Menyerang Raja langsung", "Membekukan pergerakan Raja di titik 3.4 atau 7.4", "Melindungi Meriam", "Menangkap Prajurit lawan"],
    kunci: 1,
    penjelasan: "Kuda di titik 3.4 atau 7.4 membekukan pergerakan Raja. Bidak lain menyelesaikan skakmat.",
    boardKey: null, tipeTaktik: "posisi", level: 1,
  },
  {
    id: "pz-10",
    pertanyaan: "Bagaimana posisi Kuda dalam Octagonal Horse Checkmate?",
    pilihan: ["Kuda di depan Raja", "Kuda di sudut istana pada diagonal dengan Raja lawan", "Kuda di belakang Raja sendiri", "Kuda di samping Benteng"],
    kunci: 1,
    penjelasan: "Kuda di sudut istana pada posisi diagonal dengan Raja lawan berfungsi sebagai 'pengunci diagonal'.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-11",
    pertanyaan: "Apa teknik kunci dalam Chariot-Horse Checkmate?",
    pilihan: ["Kuda dan Benteng menyerang bergantian", "Benteng membuat discovered check memanfaatkan Kuda", "Kuda mengorbankan diri", "Benteng dan Kuda mengepung"],
    kunci: 1,
    penjelasan: "Benteng digerakkan untuk membuka jalur serangan Kuda (discovered check), sekaligus menangkap bidak pertahanan lawan.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-12",
    pertanyaan: "Apa yang dimaksud 'Zugzwang' dalam White Horse Showing Hoof?",
    pilihan: ["Setiap langkah lawan memperburuk posisinya", "Lawan kehabisan bidak", "Kedua pemain tak bisa bergerak", "Permainan remis"],
    kunci: 0,
    penjelasan: "Pengorbanan Benteng memaksa lawan ke zugzwang — setiap langkah justru memperburuk posisinya. Kuda mengambil posisi skakmat.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-13",
    pertanyaan: "Bagaimana dua Kuda bekerja sama dalam Double Horses Checkmate?",
    pilihan: ["Kedua Kuda menyerang bersamaan", "Satu mengontrol jalur keluar, satu memberikan skakmat", "Keduanya mengepung Meriam", "Satu maju, satu mundur"],
    kunci: 1,
    penjelasan: "Satu Kuda mengontrol jalur keluar Raja, Kuda lainnya memberikan skakmat. Koordinasi dua Kuda dalam ruang sempit.",
    boardKey: null, tipeTaktik: "posisi", level: 1,
  },
  {
    id: "pz-14",
    pertanyaan: "Dalam Horse-Cannon Checkmate, bagaimana posisi relatif Kuda, Meriam, dan Raja?",
    pilihan: ["Kuda dan Meriam di sayap berlawanan", "Kuda di baris/lajur yang sama dengan Raja, Meriam di belakang Kuda", "Meriam di depan Kuda", "Kuda di belakang Raja sendiri"],
    kunci: 1,
    penjelasan: "Kuda di baris/lajur yang sama dengan Raja membatasi pergerakannya. Meriam di belakang Kuda sebagai eksekutor.",
    boardKey: null, tipeTaktik: "pertahanan", level: 1,
  },
  {
    id: "pz-15",
    pertanyaan: "Apa syarat terjadinya Exposed Cannon Checkmate?",
    pilihan: ["Meriam harus di baris pertama", "Meriam di lajur yang sama dengan Raja tanpa perlindungan Penasihat/Gajah", "Harus ada dua Meriam", "Raja harus di luar istana"],
    kunci: 1,
    penjelasan: "Meriam di lajur yang sama dengan Raja lawan tanpa perlindungan efektif dari Penasihat atau Gajah.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-16",
    pertanyaan: "Di mana dua Meriam dalam Heavenly and Earthly Cannons?",
    pilihan: ["Keduanya di baris belakang", "Satu di lajur tengah (langit), satu di baris belakang (bumi)", "Keduanya di sayap sama", "Satu di depan, satu di belakang Raja"],
    kunci: 1,
    penjelasan: "Satu Meriam di lajur tengah, satu di baris belakang. Raja lawan terkurung vertikal dan horizontal.",
    boardKey: null, tipeTaktik: "posisi", level: 1,
  },
  {
    id: "pz-17",
    pertanyaan: "Apa ciri khas Chariot and Cannon Checkmate?",
    pilihan: ["Hanya satu Meriam", "Dua Meriam fokus di satu sayap, Benteng skak bergantian di barisan bawah", "Benteng dan Meriam di lajur sama", "Mengorbankan Meriam"],
    kunci: 1,
    penjelasan: "Dua Meriam difokuskan pada satu sayap, Benteng mengontrol jalur utama. Serangan beruntun hingga Raja kehabisan ruang.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-18",
    pertanyaan: "Bagaimana peran dua Meriam dalam Double Cannon Checkmate?",
    pilihan: ["Keduanya menyerang bersamaan", "Satu penopang, satu penyerang — peran bisa bergantian", "Satu serang Raja, satu serang Menteri", "Keduanya diam menunggu"],
    kunci: 1,
    penjelasan: "Dua Meriam di satu lajur/baris. Satu sebagai screen, satu memberikan skak. Peran bisa bergantian.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-19",
    pertanyaan: "Kapan Cannon Smothered Checkmate terjadi?",
    pilihan: ["Saat Meriam di belakang Benteng", "Saat Raja terjebak bidaknya sendiri (self-obstruction)", "Saat Meriam menyerang jarak jauh", "Saat tak ada Meriam"],
    kunci: 1,
    penjelasan: "Raja lawan terjebak oleh bidaknya sendiri sehingga tak bisa bergerak. Meriam memberikan skakmat.",
    boardKey: null, tipeTaktik: "posisi", level: 1,
  },
  {
    id: "pz-20",
    pertanyaan: "Apa teknik utama Chariot-Cannon Discover Checkmate?",
    pilihan: ["Meriam duluan, Benteng ikut", "Benteng buka jalur Meriam, Meriam hancurkan pertahanan bertahap", "Serang bersamaan", "Meriam korbankan diri"],
    kunci: 1,
    penjelasan: "Benteng membuka jalur bagi Meriam (discovered check). Meriam menghancurkan pertahanan secara bertahap.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-21",
    pertanyaan: "Apa penyebab Smothered Checkmate?",
    pilihan: ["Raja terkurung bidaknya sendiri", "Lawan kehabisan waktu", "Semua bidak habis", "Raja di-skak dua bidak"],
    kunci: 0,
    penjelasan: "Raja terjebak oleh bidaknya sendiri — semua jalur keluar terhalang. Sering akibat kesalahan posisi.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-22",
    pertanyaan: "Apa 'Double Devils' dalam Double Devils Checkmate?",
    pilihan: ["Dua Meriam", "Dua Prajurit mengepung dari kedua sisi", "Dua Benteng", "Dua Kuda"],
    kunci: 1,
    penjelasan: "Dua Prajurit menyerang dari kedua sisi mengepung Raja. Raja tak bisa bergerak ke mana pun.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-23",
    pertanyaan: "Apa peran Prajurit dalam Repatriation of Buddha?",
    pilihan: ["Diam di posisi awal", "Maju selangkah demi selangkah memaksa Raja mundur", "Mundur menjebak", "Dikorbankan di awal"],
    kunci: 1,
    penjelasan: "Prajurit maju bertahap memaksa Raja mundur ke posisi semula hingga terskakmat.",
    boardKey: null, tipeTaktik: "posisi", level: 1,
  },
  {
    id: "pz-24",
    pertanyaan: "Apa yang membuat Simultaneous Double Checkmate sulit dihindari?",
    pilihan: ["Hanya satu bidak menyerang", "Dua bidak skak bersamaan — tak bisa diblokir dalam satu langkah", "Serangan jarak jauh", "Raja di luar istana"],
    kunci: 1,
    penjelasan: "Dua bidak memberikan skak bersamaan. Lawan tak bisa memblokir keduanya dalam satu langkah.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-25",
    pertanyaan: "Apa kombinasi khas Flanking Trio Checkmate?",
    pilihan: ["Tiga Prajurit", "Tiga bidak berbeda di satu sayap menyerang bersama", "Raja + Menteri + Gajah", "Tiga Meriam"],
    kunci: 1,
    penjelasan: "Tiga bidak berbeda (Benteng+Kuda+Meriam, dll.) berkumpul di satu sayap dan menyerang bersama.",
    boardKey: null, tipeTaktik: "serangan", level: 1,
  },
  {
    id: "pz-26",
    pertanyaan: "Apa yang terjadi dalam Stalemate Checkmate?",
    pilihan: ["Raja diskak tak bisa bergerak", "Semua bidak lawan terkunci — tak ada langkah legal", "Permainan seri", "Kedua pemain remis"],
    kunci: 1,
    penjelasan: "Semua bidak lawan terkunci — memaksa lawan menyerah karena tak ada langkah legal yang bisa diambil.",
    boardKey: null, tipeTaktik: "endgame", level: 1,
  },
];

// ================================================================
// LEVEL 2 — Diff 3: ~13 teknik (serangan kompleks, pertahanan berlapis, posisi strategis)
// ================================================================

const LEVEL_2: PuzzleSoal[] = [
  {
    id: "pz-L2-01",
    pertanyaan: "Di posisi Face-to-Face Laughing Checkmate, Merah K di lajur 5 baris 1, Hitam K di lajur 5 baris 10. Merah punya Benteng di lajur 3 dan Meriam di lajur 7. Setelah Merah R3=5, apa yang terjadi?",
    pilihan: ["Skakmat langsung", "Hitam harus memblokir lajur 5", "Hitam K tak bisa bergerak ke lajur 5 — terancam face-off", "Tidak ada yang terjadi"],
    kunci: 2,
    penjelasan: "Setelah R3=5, Benteng di lajur 5 menciptakan ancaman face-off. Hitam K tidak bisa bergerak ke lajur 5 karena akan berhadapan langsung dengan Merah K. Ini membatasi ruang gerak Hitam. Dengan Meriam di lajur 7, Merah bisa lanjutkan serangan.",
    boardKey: null, tipeTaktik: "serangan", level: 2,
  },
  {
    id: "pz-L2-02",
    pertanyaan: "Dalam Throat-cutting Checkmate, setelah Benteng menyerang Menteri pusat, apa respons terbaik lawan?",
    pilihan: ["Mundurkan Raja", "Tutup dengan Gajah", "Makan Benteng dengan Menteri — tapi buka jalan bagi Meriam", "Abaikan dan serang balik"],
    kunci: 2,
    penjelasan: "Memakan Benteng dengan Menteri justru membuka jalan bagi Meriam di belakang untuk skakmat. Throat-cutting sering melibatkan pengorbanan yang 'memaksa' lawan membuka pertahanannya sendiri.",
    boardKey: null, tipeTaktik: "serangan", level: 2,
  },
  {
    id: "pz-L2-03",
    pertanyaan: "Iron-bolt Checkmate di lajur 4 membutuhkan Prajurit rendah. Mengapa Prajurit di baris 9 lebih kuat daripada di baris 6?",
    pilihan: ["Karena bisa mundur", "Karena membatasi gerak Raja + mendukung Meriam dari belakang", "Karena lebih dekat ke istana lawan", "Karena tak bisa dimakan"],
    kunci: 1,
    penjelasan: "Prajurit rendah (dekat baris akhir lawan) membatasi pergerakan Raja dari bawah sambil menjadi 'kaki' Meriam untuk skakmat. Ini formasi klasik Iron-bolt.",
    boardKey: null, tipeTaktik: "posisi", level: 2,
  },
  {
    id: "pz-L2-04",
    pertanyaan: "Fishing-the-Moon dengan Benteng dan Meriam dari belakang: setelah Meriam masuk ke baris 10, urutan langkah yang benar adalah...",
    pilihan: ["Skak dengan Benteng dulu", "Meriam kontrol dari belakang, Benteng skak dari depan", "Benteng mundur dulu", "Meriam skak dulu"],
    kunci: 1,
    penjelasan: "Meriam di baris belakang (bumi) mengontrol pergerakan Raja dari bawah. Benteng kemudian memberikan skak dari depan/depan-atas. Ini adalah formasi 'heavenly-earthly' yang diterapkan dari belakang.",
    boardKey: null, tipeTaktik: "serangan", level: 2,
  },
  {
    id: "pz-L2-05",
    pertanyaan: "Double Chariots: saat lawan masih punya dua Menteri, mengapa dua Benteng saja belum cukup?",
    pilihan: ["Benteng terlalu lambat", "Menteri bisa memblokir skak Benteng di istana", "Raja bisa lari ke sayap", "Gajah menghalangi"],
    kunci: 1,
    penjelasan: "Dua Menteri bisa bergantian memblokir skak Benteng di dalam istana. Double Chariots paling efektif setelah minimal satu Menteri lawan hilang — idealnya dibantu Meriam atau Prajurit.",
    boardKey: null, tipeTaktik: "serangan", level: 2,
  },
  {
    id: "pz-L2-06",
    pertanyaan: "Elbow Horse: setelah Kuda di baris kedua mengunci Raja, bidak apa yang paling efektif menyelesaikan skakmat jika lawan masih punya Menteri?",
    pilihan: ["Benteng — serang langsung", "Meriam — tembak dari belakang Kuda", "Prajurit — masuk pelan-pelan", "Kuda kedua"],
    kunci: 1,
    penjelasan: "Meriam di belakang Kuda menciptakan Horse-Cannon combination. Kuda menjadi 'screen' yang tak bisa dilewati Menteri, Meriam menembak Raja di belakangnya.",
    boardKey: null, tipeTaktik: "posisi", level: 2,
  },
  {
    id: "pz-L2-07",
    pertanyaan: "Palcorner Horse: setelah Kuda masuk sudut istana, mengapa penting mengorbankan Benteng duluan?",
    pilihan: ["Untuk mengalihkan perhatian", "Untuk memancing Menteri keluar dari pusat — buka sudut istana", "Agar Kuda bisa masuk", "Untuk mengurangi jumlah bidak"],
    kunci: 1,
    penjelasan: "Benteng dikorbankan untuk memaksa Menteri keluar dari posisi pusat. Begitu Menteri bergerak, sudut istana menjadi lemah dan Kuda bisa masuk untuk skakmat.",
    boardKey: null, tipeTaktik: "serangan", level: 2,
  },
  {
    id: "pz-L2-08",
    pertanyaan: "Angler Horse di 3.3: apa yang terjadi jika lawan memainkan K5=6 (Raja ke sayap)?",
    pilihan: ["Kuda tak berguna", "Kuda tetap mengontrol — tinggal geser serangan ke sayap itu", "Harus mundurkan Kuda", "Skakmat gagal total"],
    kunci: 1,
    penjelasan: "Angler Horse di 3.3 mengontrol area signifikan. Jika Raja lari ke sayap (K5=6), penyerang tinggal mengarahkan Benteng/Meriam ke sayap tersebut. Kuda tetap membatasi opsi mundur Raja.",
    boardKey: null, tipeTaktik: "serangan", level: 2,
  },
  {
    id: "pz-L2-09",
    pertanyaan: "Tiger Silhouette: bagaimana cara membedakan Tiger Silhouette (3.4/7.4) dari Angler Horse (3.3/7.3)?",
    pilihan: ["Posisi Kuda berbeda satu baris", "Tiger fokus freeze gerak, Angler fokus serang diagonal", "Keduanya sama saja", "Tiger pakai Benteng, Angler pakai Meriam"],
    kunci: 1,
    penjelasan: "Tiger Silhouette di 3.4/7.4 bertujuan membekukan (freeze) pergerakan Raja — kontrol posisi total. Angler Horse di 3.3/7.3 lebih ofensif: menyerang diagonal dan membatasi sambil menekan.",
    boardKey: null, tipeTaktik: "posisi", level: 2,
  },
  {
    id: "pz-L2-10",
    pertanyaan: "Octagonal Horse: mengapa posisi diagonal Kuda dengan Raja sangat berbahaya?",
    pilihan: ["Kuda bisa melompati Raja", "Raja tak bisa bergerak ke 4 titik sekaligus — 2 diblokir Kuda, 2 diblokir palace", "Kuda tak bisa dimakan", "Raja harus keluar palace"],
    kunci: 1,
    penjelasan: "Kuda di diagonal sudut palace memblokir 2 dari 4 kemungkinan gerak Raja (dalam palace 3x3). Dengan tekanan bidak lain, Raja praktis terkurung total.",
    boardKey: null, tipeTaktik: "serangan", level: 2,
  },
  {
    id: "pz-L2-11",
    pertanyaan: "Chariot-Horse Discovered Check: kapan waktu yang tepat memindahkan Benteng untuk discovered check?",
    pilihan: ["Segera setelah Kuda masuk posisi", "Saat Kuda sudah mengancam skakmat — Benteng buka jalur + serang sekaligus", "Setelah lawan bergerak", "Kapan saja"],
    kunci: 1,
    penjelasan: "Timing kritis: Kuda harus sudah dalam posisi mengancam skakmat. Begitu Benteng bergerak (discovered check), Kuda memberikan skak sementara Benteng menangkap bidak pertahanan. Double threat yang sulit dihadapi.",
    boardKey: null, tipeTaktik: "serangan", level: 2,
  },
  {
    id: "pz-L2-12",
    pertanyaan: "Double Horses vs full guard (2 Menteri + 2 Gajah): apa strategi terbaik?",
    pilihan: ["Serang langsung dengan dua Kuda", "Korbankan satu Kuda untuk menukar Menteri, Kuda kedua skakmat", "Tunggu lawan bergerak duluan", "Mundur dan susun ulang"],
    kunci: 1,
    penjelasan: "Melawan full guard, dua Kuda saja tidak cukup. Perlu pengorbanan satu Kuda (atau bidak lain) untuk membuka pertahanan — idealnya menukar dengan satu Menteri. Kuda kedua kemudian masuk ke celah yang terbuka.",
    boardKey: null, tipeTaktik: "posisi", level: 2,
  },
  {
    id: "pz-L2-13",
    pertanyaan: "Horse-Cannon: mengapa urutan langkah penting — Kuda dulu baru Meriam?",
    pilihan: ["Meriam lebih cepat", "Kuda harus memosisikan diri sebagai screen dulu, baru Meriam tembak", "Bisa juga Meriam dulu", "Tergantung posisi"],
    kunci: 1,
    penjelasan: "Kuda harus berada di posisi screen (antara Meriam dan Raja lawan) pada baris/lajur yang sama. Jika Meriam bergerak duluan, Kuda belum tentu bisa mencapai posisi screen tepat waktu. Urutan: posisikan Kuda → tempatkan Meriam di belakangnya.",
    boardKey: null, tipeTaktik: "pertahanan", level: 2,
  },
];

// ================================================================
// LEVEL 3 — Diff 4: ~15 teknik (posisi pembukaan standar kompetisi junior)
// ================================================================

const LEVEL_3: PuzzleSoal[] = [
  {
    id: "pz-L3-01",
    pertanyaan: "Dalam pembukaan kompetisi junior, setelah 1. C2=5 (Meriam Tengah), apa rencana serangan yang memanfaatkan Face-to-Face?",
    pilihan: ["Langsung serang dengan Benteng", "Kontrol lajur tengah, lalu buka lajur dengan Pengorbanan Prajurit untuk menciptakan face-off threat", "Tunggu lawan melakukan kesalahan", "Pindahkan Meriam ke sayap"],
    kunci: 1,
    penjelasan: "C2=5 (Meriam Tengah) adalah pembukaan klasik. Rencana: kontrol lajur tengah → buka lajur dengan P5+1 → setelah lajur terbuka, Benteng masuk → ancaman face-off memaksa Raja lawan terkunci. Ini formasi standar di kompetisi junior.",
    boardKey: null, tipeTaktik: "serangan", level: 3,
  },
  {
    id: "pz-L3-02",
    pertanyaan: "Throat-cutting di middle game: lawan punya Menteri di d1 dan e1 dengan Raja di e2. Bagaimana mengeksploitasi formasi ini?",
    pilihan: ["Serang Menteri d1 dulu", "Korbankan Benteng ke e1 — paksa Menteri e1 mundur, buka lajur e", "Serang dari sayap", "Tunggu endgame"],
    kunci: 1,
    penjelasan: "Dengan mengorbankan Benteng ke posisi Menteri pusat (throat-cutting), Menteri terpaksa mundur atau dimakan — membuka lajur tengah. Meriam di belakang bisa langsung menembak Raja. Formasi dua Menteri sejajar adalah target ideal throat-cutting.",
    boardKey: null, tipeTaktik: "serangan", level: 3,
  },
  {
    id: "pz-L3-03",
    pertanyaan: "Iron-bolt dengan 3 bidak vs 4 bidak pertahanan: bagaimana memprioritaskan target?",
    pilihan: ["Hancurkan semua bidak dulu", "Iron-bolt tak membutuhkan menghancurkan — cukup kontrol lajur 4/6 dan batasi Raja", "Fokus ke Menteri dulu", "Serang Gajah dulu"],
    kunci: 1,
    penjelasan: "Iron-bolt tidak perlu menghancurkan semua pertahanan. Cukup kontrol lajur 4 atau 6 dengan Benteng+Meriam, tempatkan Prajurit rendah sebagai anchor, dan batasi pergerakan Raja. Skakmat bisa terjadi meski lawan masih punya banyak bidak.",
    boardKey: null, tipeTaktik: "posisi", level: 3,
  },
  {
    id: "pz-L3-04",
    pertanyaan: "Fishing-the-Moon di posisi kompetisi: Merah K di e2, Benteng di a5, Meriam di a10. Hitam K di e9 dengan Menteri di d9, e10. Bagaimana menyelesaikan?",
    pilihan: ["Benteng skak dari a9", "R5=5 kontrol lajur tengah dulu, lalu Meriam dari a10 tembak ke e10", "Tunggu Hitam bergerak", "Korbankan Benteng"],
    kunci: 1,
    penjelasan: "Dengan K di e2 mengontrol lajur e, Benteng ke lajur tengah (R5=5) menciptakan ancaman ganda. Meriam dari a10 bisa menembak Menteri di e10 — setelah Menteri hilang, Raja telanjang dan terkena skakmat dari belakang (fishing-the-moon).",
    boardKey: null, tipeTaktik: "serangan", level: 3,
  },
  {
    id: "pz-L3-05",
    pertanyaan: "Simultaneous Double Checkmate vs full guard: mungkinkah terjadi?",
    pilihan: ["Tidak mungkin", "Mungkin — jika dua bidak menyerang dari dua arah yang tak bisa diblokir bersamaan oleh Menteri", "Hanya mungkin di endgame", "Harus mengorbankan 3 bidak dulu"],
    kunci: 1,
    penjelasan: "Meski lawan punya 2 Menteri, simultaneous double check dari dua arah berbeda (misal: Meriam dari lajur + Kuda dari diagonal) tidak bisa diblokir oleh satu Menteri. Dua Menteri pun hanya bisa memblokir 2 arah — simultaneous triple check akan menembus.",
    boardKey: null, tipeTaktik: "serangan", level: 3,
  },
  {
    id: "pz-L3-06",
    pertanyaan: "Flanking Trio di sayap kiri vs pertahanan konsentrasi di sayap kanan: apa prinsip Sun Tzu yang berlaku?",
    pilihan: ["Serang di mana lawan terkuat", "Hindari yang kuat, serang yang lemah — konsentrasi 3 bidak di sayap kosong", "Bagi kekuatan merata", "Bertahan dulu"],
    kunci: 1,
    penjelasan: "Prinsip 'avoid the strong, attack the weak'. Jika lawan mengkonsentrasikan pertahanan di sayap kanan, flanking trio (Benteng+Kuda+Meriam) menyerang sayap kiri yang relatif kosong. Tiga bidak terkoordinasi di satu sayap lemah hampir selalu menghasilkan terobosan.",
    boardKey: null, tipeTaktik: "serangan", level: 3,
  },
  {
    id: "pz-L3-07",
    pertanyaan: "Heavenly and Earthly Cannons di middle game: bagaimana transisi dari pembukaan ke formasi ini?",
    pilihan: ["Langsung tempatkan dua Meriam di posisi", "Satu Meriam dari pembukaan tetap di tengah, Meriam kedua menyusup ke baris belakang via sayap setelah pertukaran", "Harus menunggu endgame", "Tukar semua bidak dulu"],
    kunci: 1,
    penjelasan: "Transisi: Meriam pertama (dari pembukaan C2=5) tetap di lajur tengah. Meriam kedua bergerak ke sayap → setelah pertukaran buka jalan → menyusup ke baris belakang (bumi). Formasi heavenly-earthly terbentuk tanpa perlu menunggu endgame.",
    boardKey: null, tipeTaktik: "posisi", level: 3,
  },
  {
    id: "pz-L3-08",
    pertanyaan: "Stalemate Checkmate di posisi sedikit bidak: Merah K di e2, C di e10. Hitam K di e9, A di d9, E di g9. Bagaimana memaksa stalemate?",
    pilihan: ["Skak terus-menerus", "Gunakan waiting move — K5=4, biarkan Hitam kehabisan langkah legal", "Korbankan Meriam", "Serang Gajah"],
    kunci: 1,
    penjelasan: "Dengan K di e2 mengontrol lajur e, Meriam di e10 membatasi Menteri dan Gajah. Waiting move K5=4 memaksa Hitam bergerak dalam ruang terbatas. Setelah beberapa langkah, Hitam kehabisan langkah legal — stalemate (kemenangan posisional).",
    boardKey: null, tipeTaktik: "endgame", level: 3,
  },
  {
    id: "pz-L3-09",
    pertanyaan: "Exposed Cannon vs dua Gajah: bagaimana Meriam menembus pertahanan Gajah?",
    pilihan: ["Tembak langsung — Gajah tak bisa blok Meriam", "Harus menyingkirkan satu Gajah dulu dengan pengorbanan, buka lajur untuk Meriam", "Meriam tak bisa menembus Gajah", "Gajah tak relevan"],
    kunci: 1,
    penjelasan: "Dua Gajah membentuk pertahanan diagonal yang kuat. Untuk exposed cannon, satu Gajah harus disingkirkan dulu — biasanya dengan pengorbanan Benteng atau Kuda. Setelah satu Gajah hilang, lajur diagonal terbuka dan Meriam bisa menembak Raja.",
    boardKey: null, tipeTaktik: "serangan", level: 3,
  },
  {
    id: "pz-L3-10",
    pertanyaan: "Smothered Checkmate dengan Meriam: mengapa self-obstruction oleh Menteri sendiri sangat fatal?",
    pilihan: ["Menteri tak bisa bergerak", "Menteri memblokir jalur keluar Raja — Meriam dari luar menembak, Raja terkurung oleh Menterinya sendiri", "Menteri jadi target", "Tidak fatal"],
    kunci: 1,
    penjelasan: "Self-obstruction: Menteri sendiri berada di posisi yang memblokir satu-satunya jalur keluar Raja. Meriam dari luar memberikan skak — Raja tak bisa mundur karena terhalang Menteri sendiri. Ini adalah ironi taktis tertinggi.",
    boardKey: null, tipeTaktik: "posisi", level: 3,
  },
  {
    id: "pz-L3-11",
    pertanyaan: "Cannon Smothered vs Raja di sudut: Merah C di lajur 1, Hitam K di a10 (sudut) dengan A di b10. Apa langkah kemenangan?",
    pilihan: ["C1+9 skak", "Tunggu A bergerak — begitu A keluar, C1+9 skakmat", "Serang A dulu", "Pindahkan Meriam"],
    kunci: 1,
    penjelasan: "Raja di sudut (a10) dengan Menteri di b10: Menteri justru memblokir satu-satunya jalan keluar Raja (ke b10). Begitu giliran tiba dan Menteri tidak bisa bergerak (terkunci), C1+9 adalah skakmat karena Raja tak bisa mundur — self-obstruction.",
    boardKey: null, tipeTaktik: "posisi", level: 3,
  },
  {
    id: "pz-L3-12",
    pertanyaan: "Double Devils (dua Prajurit) vs. Raja + 2 Menteri: mengapa dua Prajurit bisa menang?",
    pilihan: ["Prajurit bisa promosi jadi Menteri", "Prajurit di baris 9 dan 10 mengapit Raja — Menteri tak bisa memblokir dua arah sekaligus", "Prajurit lebih kuat dari Menteri", "Tidak mungkin menang"],
    kunci: 1,
    penjelasan: "Dua Prajurit di sisi kiri dan kanan palace (baris 9-10) mengapit Raja. Menteri hanya bisa memblokir satu arah. Satu Prajurit akan selalu mencapai skakmat dari sisi yang tidak diblokir. Ini dikenal sebagai 'two devils knocking at door'.",
    boardKey: null, tipeTaktik: "serangan", level: 3,
  },
  {
    id: "pz-L3-13",
    pertanyaan: "Repatriation of Buddha di endgame Prajurit vs Raja: apa kunci memaksa Raja mundur?",
    pilihan: ["Kecepatan Prajurit", "Prajurit maju dengan dukungan Raja sendiri — setiap langkah mempersempit ruang", "Jumlah Prajurit", "Waktu"],
    kunci: 1,
    penjelasan: "Prajurit maju selangkah demi selangkah, dengan Raja sendiri mengontrol lajur di belakangnya. Setiap kemajuan Prajurit mempersempit ruang gerak Raja lawan — seperti Buddha yang 'dipulangkan' ke posisi asalnya hingga terskakmat.",
    boardKey: null, tipeTaktik: "posisi", level: 3,
  },
  {
    id: "pz-L3-14",
    pertanyaan: "Chariot-Cannon Discover: di posisi middle game dengan banyak bidak, bagaimana memilih bidak yang akan dihancurkan Meriam?",
    pilihan: ["Acak saja", "Prioritas: 1) Menteri (buka palace), 2) Gajah (buka diagonal), 3) Kuda (hilangkan ancaman)", "Bidak termurah dulu", "Bidak termahal dulu"],
    kunci: 1,
    penjelasan: "Urutan prioritas discovered check: (1) Menteri — membuka palace untuk akses langsung ke Raja, (2) Gajah — membuka diagonal untuk Meriam kedua, (3) Kuda — menghilangkan ancaman counter-attack. Setelah 1-2 bidak kunci hilang, Raja rentan.",
    boardKey: null, tipeTaktik: "serangan", level: 3,
  },
  {
    id: "pz-L3-15",
    pertanyaan: "Di akhir middle game, Anda unggul 1 Benteng tapi lawan mengancam skakmat dalam 2 langkah. Teknik mana yang menggabungkan pertahanan + serangan balik?",
    pilihan: ["Face-to-Face saja", "Throat-cutting: korbankan Benteng untuk hancurkan Menteri lawan — sekaligus bertahan dan menyerang", "Tunggu dan berharap", "Menyerah"],
    kunci: 1,
    penjelasan: "Throat-cutting dengan pengorbanan Benteng ke Menteri pusat lawan adalah defensive-offensive technique: menghilangkan ancaman skakmat (dengan menghancurkan bidak kunci penyerang) sambil membuka jalan untuk counter-attack. Ini adalah teknik turnaround di kompetisi.",
    boardKey: null, tipeTaktik: "pertahanan", level: 3,
  },
];

// ================================================================
// Combined export — single bank untuk semua level
// ================================================================

export const BANK_PUZZLE: PuzzleSoal[] = [
  ...LEVEL_1,
  ...LEVEL_2,
  ...LEVEL_3,
];

/**
 * @deprecated Gunakan BANK_PUZZLE untuk akses semua level.
 * Dipertahankan untuk backward compatibility.
 */
export const BANK_PUZZLE_LEVEL_1: PuzzleSoal[] = LEVEL_1;