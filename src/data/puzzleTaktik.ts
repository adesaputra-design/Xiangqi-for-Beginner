import type { PuzzleSoal } from "../logic/quizEngine";

/**
 * Bank Puzzle Taktik Level 1 — 26 Teknik Skakmat Xiangqi
 *
 * Sumber: "Rahasia Skakmat Xiangqi" (Zhu Baowei, 26 teknik fundamental)
 * Setiap teknik = 1 puzzle konseptual/taktis.
 *
 * boardKey: null — posisi papan (Fig.27-108) belum dikonversi.
 * Akan ditambahkan setelah diagram dikonversi manual oleh domain expert.
 */

export const BANK_PUZZLE_LEVEL_1: PuzzleSoal[] = [
  // ================================================================
  // 1. Face-to-Face Laughing Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-01",
    pertanyaan:
      "Apa prinsip utama Face-to-Face Laughing Checkmate?",
    pilihan: [
      "Menyerang Raja lawan dengan dua Benteng sekaligus",
      "Memanfaatkan aturan larangan dua Raja saling berhadapan di lajur yang sama tanpa penghalang",
      "Mengorbankan semua bidak untuk membuka jalan Meriam",
      "Menunggu lawan kehabisan waktu",
    ],
    kunci: 1,
    penjelasan:
      "Face-to-Face Laughing Checkmate memanfaatkan aturan bahwa dua Raja tidak boleh berada pada satu lajur yang sama tanpa bidak penghalang. Penyerang memberikan skak sehingga Raja lawan dipaksa ke posisi terbuka, lalu kombinasi Benteng, Meriam, dan/atau Prajurit menyelesaikan skakmat. Sering melibatkan pengorbanan untuk membuka lajur tengah.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 2. Throat-cutting Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-02",
    pertanyaan:
      "Dalam Throat-cutting Checkmate, target utama serangan adalah...",
    pilihan: [
      "Raja lawan langsung",
      "Penasihat (Menteri) tengah — inti pertahanan istana",
      "Gajah di sudut",
      "Meriam di baris belakang",
    ],
    kunci: 1,
    penjelasan:
      "Throat-cutting Checkmate terjadi ketika Benteng menyerang langsung Penasihat pusat lawan untuk menghancurkan struktur pertahanan istana. Serangan bersifat paksa dan cepat menghasilkan kemenangan. Teknik ini sering melibatkan pengorbanan bidak untuk membuka garis serangan, menjadikannya contoh khas 'sacrificing to checkmate'.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 3. Iron-bolt Checkmate (POSISI)
  // ================================================================
  {
    id: "pz-03",
    pertanyaan:
      "Kombinasi bidak apa yang menjadi ciri khas Iron-bolt Checkmate?",
    pilihan: [
      "Kuda + Gajah + Raja",
      "Benteng + Meriam + Prajurit",
      "Dua Meriam + Dua Kuda",
      "Benteng + Kuda + Gajah",
    ],
    kunci: 1,
    penjelasan:
      "Iron-bolt Checkmate melibatkan koordinasi Benteng, Meriam, dan Prajurit untuk memberikan skakmat pada lajur ke-4 atau ke-6. Serangan bersifat cepat dan agresif. Posisi Prajurit yang rendah (dekat baris akhir lawan) lebih kuat karena dapat membatasi pergerakan Raja sambil mendukung Meriam.",
    boardKey: null,
    tipeTaktik: "posisi",
    level: 1,
  },

  // ================================================================
  // 4. Fishing-the-Moon-Under-Deep-Sea (SERANGAN)
  // ================================================================
  {
    id: "pz-04",
    pertanyaan:
      "Fishing-the-Moon-Under-Deep-Sea Checkmate digunakan ketika...",
    pilihan: [
      "Serangan frontal tidak memungkinkan — serang dari belakang",
      "Lawan memiliki lebih banyak bidak",
      "Hanya tersisa Meriam dan Raja",
      "Permainan memasuki endgame dengan sedikit bidak",
    ],
    kunci: 0,
    penjelasan:
      "Ketika tidak ada peluang serangan frontal, penyerang memindahkan kekuatan ke barisan belakang lawan dan menyerang dari arah belakang (rear attack). Membutuhkan ketelitian dan teknik tinggi karena melibatkan manuver posisi tidak langsung. Sering memanfaatkan kelemahan posisi lawan seperti koordinasi buruk atau bidak yang saling menghalangi.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 5. Double Chariots Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-05",
    pertanyaan:
      "Apa yang membuat Double Chariots Checkmate sangat kuat?",
    pilihan: [
      "Dua Benteng memberikan skak bergantian hingga Raja lawan tidak punya jalan keluar",
      "Benteng bisa bergerak ke mana saja tanpa batasan",
      "Benteng tidak bisa dimakan oleh bidak lain",
      "Dua Benteng selalu menang melawan kombinasi bidak apa pun",
    ],
    kunci: 0,
    penjelasan:
      "Double Chariots Checkmate menggunakan dua Benteng yang bekerja bergantian memberikan skak terus-menerus hingga Raja lawan tidak memiliki jalan keluar. Sangat kuat terutama jika pertahanan lawan (Penasihat/Gajah) telah berkurang. Dua Benteng mampu mengendalikan banyak ruang sekaligus dan menciptakan tekanan konstan.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 6. Elbow Horse Checkmate (POSISI)
  // ================================================================
  {
    id: "pz-06",
    pertanyaan:
      "Di mana posisi kunci Kuda dalam Elbow Horse Checkmate?",
    pilihan: [
      "Di sudut istana lawan",
      "Pada baris kedua dalam posisi strategis, menghalangi jalan kembali Raja ke posisi aman",
      "Di tengah papan, mengontrol sungai",
      "Di belakang Meriam sendiri",
    ],
    kunci: 1,
    penjelasan:
      "Elbow Horse Checkmate menempatkan Kuda pada baris kedua dalam posisi strategis sehingga menghalangi jalan kembali Raja ke posisi aman di istana. Setelah jalur mundur Raja tertutup, bidak lain (biasanya Benteng atau Meriam) menyelesaikan skakmat. Sering diawali dengan pengorbanan untuk membuka jalur bagi Kuda atau memaksa posisi Raja menjadi kaku.",
    boardKey: null,
    tipeTaktik: "posisi",
    level: 1,
  },

  // ================================================================
  // 7. Palcorner Horse Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-07",
    pertanyaan:
      "Dalam Palcorner Horse Checkmate, Kuda ditempatkan di mana?",
    pilihan: [
      "Di tengah papan",
      "Di sudut istana lawan untuk mengontrol titik vital pergerakan Raja",
      "Di baris pertama",
      "Di samping Raja sendiri",
    ],
    kunci: 1,
    penjelasan:
      "Palcorner Horse Checkmate menempatkan Kuda di sudut istana lawan untuk mengontrol titik vital pergerakan Raja. Setelah itu, bidak lain memberikan skakmat. Sering melibatkan pengorbanan Benteng untuk memaksa Penasihat keluar dari pusat, sehingga sudut istana menjadi lemah dan dapat dimanfaatkan oleh Kuda.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 8. Angler Horse Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-08",
    pertanyaan:
      "Di titik koordinat mana Kuda biasanya ditempatkan dalam Angler Horse Checkmate?",
    pilihan: [
      "Titik 1.1 atau 9.1",
      "Titik 3.3 atau 7.3 relatif terhadap lawan",
      "Titik 5.5 (tengah papan)",
      "Titik 1.9 atau 9.9",
    ],
    kunci: 1,
    penjelasan:
      "Angler Horse Checkmate menempatkan Kuda pada titik tertentu (biasanya koordinat 3.3 atau 7.3) untuk menyerang secara diagonal dan membatasi pergerakan Raja. Kuda bertindak sebagai titik tekanan utama, sementara Benteng atau bidak lain memberikan dukungan untuk menyelesaikan skakmat. Timing dan urutan langkah sangat penting.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 9. Tiger Silhouette Checkmate (POSISI)
  // ================================================================
  {
    id: "pz-09",
    pertanyaan:
      "Apa fungsi utama Kuda dalam Tiger Silhouette Checkmate?",
    pilihan: [
      "Menyerang Raja langsung",
      "Membekukan (freeze) pergerakan Raja di titik 3.4 atau 7.4",
      "Melindungi Meriam sendiri",
      "Menangkap Prajurit lawan",
    ],
    kunci: 1,
    penjelasan:
      "Tiger Silhouette Checkmate menempatkan Kuda pada titik 3.4 atau 7.4 untuk 'membekukan' pergerakan Raja. Setelah Raja tidak memiliki ruang gerak, bidak lain menyelesaikan skakmat. Metode ini sangat bergantung pada kontrol posisi dan koordinasi, terutama dalam membatasi semua jalur keluar Raja.",
    boardKey: null,
    tipeTaktik: "posisi",
    level: 1,
  },

  // ================================================================
  // 10. Octagonal Horse Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-10",
    pertanyaan:
      "Bagaimana posisi Kuda relatif terhadap Raja lawan dalam Octagonal Horse Checkmate?",
    pilihan: [
      "Kuda di depan Raja",
      "Kuda di sudut istana pada posisi diagonal dengan Raja lawan",
      "Kuda di belakang Raja sendiri",
      "Kuda di samping Benteng",
    ],
    kunci: 1,
    penjelasan:
      "Octagonal Horse Checkmate menempatkan Kuda di sudut istana pada posisi diagonal dengan Raja lawan, sehingga pergerakan Raja menjadi sangat terbatas. Metode ini sering muncul dalam posisi di mana Raja lawan sudah tertekan dan ruang geraknya sempit. Kuda berfungsi sebagai 'pengunci diagonal'.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 11. Chariot-Horse Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-11",
    pertanyaan:
      "Apa teknik kunci dalam Chariot-Horse (Ba-Huang Horse) Checkmate?",
    pilihan: [
      "Kuda dan Benteng menyerang bergantian",
      "Benteng digerakkan untuk membuat discovered check dengan memanfaatkan kekuatan Kuda",
      "Kuda mengorbankan diri untuk membuka jalan Benteng",
      "Benteng dan Kuda mengepung dari dua sisi",
    ],
    kunci: 1,
    penjelasan:
      "Chariot-Horse Checkmate memanfaatkan kerja sama Benteng dan Kuda di mana Kuda menciptakan ancaman posisi (membatasi Raja atau menyerang bidak penting), sementara Benteng memberikan skak temuan (discovered check) atau tekanan langsung. Benteng digerakkan untuk membuka jalur serangan Kuda, sekaligus menangkap atau mengusir bidak pertahanan lawan.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 12. White Horse Showing Hoof / Zugzwang (SERANGAN)
  // ================================================================
  {
    id: "pz-12",
    pertanyaan:
      "Apa yang dimaksud dengan 'Zugzwang' dalam White Horse Showing Hoof Checkmate?",
    pilihan: [
      "Situasi di mana setiap langkah lawan justru memperburuk posisinya",
      "Lawan dipaksa menyerah karena kehabisan bidak",
      "Kedua pemain tidak bisa bergerak",
      "Permainan berakhir remis (draw)",
    ],
    kunci: 0,
    penjelasan:
      "White Horse Showing Hoof (Chariot-Horse Zugzwang) melibatkan pengorbanan Benteng untuk memaksa lawan keluar dari posisi bertahan (zugzwang), sehingga Kuda dapat mengambil posisi skakmat di dalam istana lawan. Penyerang menciptakan situasi di mana setiap langkah lawan justru memperburuk posisinya. Ini adalah teknik tingkat lanjut yang menggabungkan pengorbanan, paksaan langkah, dan kontrol posisi.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 13. Double Horses Checkmate (POSISI)
  // ================================================================
  {
    id: "pz-13",
    pertanyaan:
      "Bagaimana dua Kuda bekerja sama dalam Double Horses Checkmate?",
    pilihan: [
      "Kedua Kuda menyerang bersamaan dari dua sisi",
      "Satu Kuda mengontrol jalur keluar Raja, Kuda lainnya memberikan skakmat",
      "Kedua Kuda mengepung Meriam lawan",
      "Satu Kuda maju, satu Kuda mundur bergantian",
    ],
    kunci: 1,
    penjelasan:
      "Double Horses Checkmate: satu Kuda mengontrol jalur keluar Raja, sementara Kuda lainnya memberikan skakmat. Kedua Kuda bekerja secara bergantian dan saling mendukung. Dalam banyak contoh, Kuda dapat menghasilkan skak temuan dan tekanan beruntun, bahkan tanpa bantuan bidak lain. Ini menunjukkan kekuatan koordinasi dua Kuda dalam ruang sempit.",
    boardKey: null,
    tipeTaktik: "posisi",
    level: 1,
  },

  // ================================================================
  // 14. Horse-Cannon Checkmate (PERTAHANAN)
  // ================================================================
  {
    id: "pz-14",
    pertanyaan:
      "Dalam Horse-Cannon Checkmate, bagaimana posisi relatif Kuda, Meriam, dan Raja lawan?",
    pilihan: [
      "Kuda dan Meriam berada di sayap berlawanan",
      "Kuda berada pada baris/lajur yang sama dengan Raja lawan, Meriam di belakang Kuda",
      "Meriam di depan Kuda",
      "Kuda di belakang Raja sendiri",
    ],
    kunci: 1,
    penjelasan:
      "Horse-Cannon Checkmate terjadi ketika Kuda berada pada baris atau lajur yang sama dengan Raja dan membatasi pergerakannya, sementara Meriam ditempatkan di belakang Kuda untuk memberikan skakmat. Kuda bertindak sebagai 'penopang' (screen), Meriam menjadi eksekutor utama. Ini adalah teknik defensif-kontra yang kuat.",
    boardKey: null,
    tipeTaktik: "pertahanan",
    level: 1,
  },

  // ================================================================
  // 15. Exposed Cannon Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-15",
    pertanyaan:
      "Apa syarat terjadinya Exposed Cannon Checkmate?",
    pilihan: [
      "Meriam harus berada di baris pertama",
      "Meriam berada pada lajur yang sama dengan Raja lawan tanpa perlindungan efektif dari Penasihat/Gajah",
      "Harus ada dua Meriam di papan",
      "Raja lawan harus berada di luar istana",
    ],
    kunci: 1,
    penjelasan:
      "Exposed Cannon Checkmate terjadi ketika Meriam berada pada lajur yang sama dengan Raja lawan tanpa perlindungan efektif dari Penasihat atau Gajah. Dengan memanfaatkan jalur terbuka, Meriam dapat memberikan tekanan langsung. Bidak lain (Benteng atau Prajurit) biasanya membantu membuka jalur tersebut atau mengalihkan pertahanan lawan.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 16. Heavenly and Earthly Cannons (POSISI)
  // ================================================================
  {
    id: "pz-16",
    pertanyaan:
      "Di mana dua Meriam ditempatkan dalam Heavenly and Earthly Cannons Checkmate?",
    pilihan: [
      "Keduanya di baris belakang",
      "Satu di lajur tengah (langit), satu di baris belakang (bumi)",
      "Keduanya di sayap yang sama",
      "Satu di depan, satu di belakang Raja sendiri",
    ],
    kunci: 1,
    penjelasan:
      "Heavenly and Earthly Cannons Checkmate menempatkan satu Meriam di lajur tengah (langit) dan satu lagi di baris belakang (bumi). Kedua Meriam bekerja bersama mengendalikan ruang gerak Raja dan membatasi bidak lawan. Dengan konfigurasi ini, Raja lawan terkurung secara vertikal dan horizontal.",
    boardKey: null,
    tipeTaktik: "posisi",
    level: 1,
  },

  // ================================================================
  // 17. Chariot and Cannon Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-17",
    pertanyaan:
      "Apa ciri khas Chariot and Cannon Checkmate?",
    pilihan: [
      "Hanya menggunakan satu Meriam",
      "Dua Meriam difokuskan pada satu sayap, Benteng memberikan skak bergantian di barisan bawah lawan",
      "Benteng dan Meriam bergerak bersama di lajur yang sama",
      "Mengorbankan Meriam untuk membuka jalan Benteng",
    ],
    kunci: 1,
    penjelasan:
      "Chariot and Cannon Checkmate menggabungkan Benteng dan dua Meriam untuk memberikan skak bergantian di barisan bawah lawan. Dua Meriam difokuskan pada satu sisi (sayap), sementara Benteng mengontrol jalur utama dan memastikan tekanan terus berlanjut. Serangan bersifat beruntun hingga Raja kehabisan ruang.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 18. Double Cannon Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-18",
    pertanyaan:
      "Bagaimana peran dua Meriam dalam Double Cannon Checkmate?",
    pilihan: [
      "Keduanya menyerang bersamaan dari dua lajur berbeda",
      "Satu sebagai penopang (screen), satu sebagai penyerang — peran bisa bergantian",
      "Satu menyerang Raja, satu menyerang Menteri",
      "Keduanya diam di posisi, menunggu lawan bergerak",
    ],
    kunci: 1,
    penjelasan:
      "Double Cannon Checkmate: dua Meriam ditempatkan pada satu lajur atau baris yang sama. Salah satu bertindak sebagai penopang (screen), sementara yang lain memberikan skak. Peran keduanya dapat saling berganti: satu menyerang, satu mengontrol. Metode ini sangat kuat karena memungkinkan skak langsung tanpa perlu banyak bidak tambahan.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 19. Cannon Smothered Checkmate (POSISI)
  // ================================================================
  {
    id: "pz-19",
    pertanyaan:
      "Kapan Cannon Smothered Checkmate terjadi?",
    pilihan: [
      "Saat Meriam berada di belakang Benteng",
      "Saat Raja lawan terjebak oleh bidaknya sendiri (self-obstruction) sehingga tidak bisa bergerak",
      "Saat Meriam menyerang dari jarak jauh",
      "Saat tidak ada Meriam di papan",
    ],
    kunci: 1,
    penjelasan:
      "Cannon Smothered Checkmate terjadi ketika Raja lawan terjebak oleh bidaknya sendiri (self-obstruction) sehingga tidak memiliki ruang gerak. Dalam kondisi ini, Meriam memberikan skakmat. Biasanya didahului oleh langkah paksa atau pengorbanan yang membuat bidak lawan justru menghalangi Raja sendiri.",
    boardKey: null,
    tipeTaktik: "posisi",
    level: 1,
  },

  // ================================================================
  // 20. Chariot-Cannon Discover Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-20",
    pertanyaan:
      "Apa teknik utama dalam Chariot-Cannon Discover Checkmate?",
    pilihan: [
      "Meriam menyerang duluan, Benteng mengikuti",
      "Benteng membuka jalur bagi Meriam (discovered check), Meriam menghancurkan pertahanan secara bertahap",
      "Benteng dan Meriam menyerang bersamaan",
      "Meriam mengorbankan diri untuk Benteng",
    ],
    kunci: 1,
    penjelasan:
      "Chariot-Cannon Discover Checkmate memanfaatkan Benteng untuk membuka jalur bagi Meriam (skak temuan/discovered check). Setelah jalur terbuka, Meriam secara bertahap menghancurkan pertahanan lawan dengan menangkap bidak satu per satu. Serangan bersifat sistematis: pembukaan jalur → eliminasi pertahanan → skakmat.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 21. Smothered Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-21",
    pertanyaan:
      "Apa penyebab Smothered Checkmate?",
    pilihan: [
      "Raja terkurung oleh bidaknya sendiri — semua jalur keluar terhalang",
      "Lawan menyerah karena kehabisan waktu",
      "Semua bidak sudah habis",
      "Raja tidak bisa bergerak karena di-skak oleh dua bidak",
    ],
    kunci: 0,
    penjelasan:
      "Smothered Checkmate terjadi ketika Raja lawan terjebak oleh bidaknya sendiri sehingga tidak dapat bergerak ke ruang yang aman. Semua jalur keluar terhalang oleh bidak yang berada di posisi tertentu, membuat Raja tak bisa melarikan diri dari skak. Sering terjadi akibat kesalahan pengaturan posisi lawan yang membiarkan Raja terperangkap di sudut.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 22. Double Devils Knocking at Door (SERANGAN)
  // ================================================================
  {
    id: "pz-22",
    pertanyaan:
      "Apa yang dimaksud dengan 'Double Devils' dalam Double Devils Knocking at Door Checkmate?",
    pilihan: [
      "Dua Meriam menyerang dari dua sisi",
      "Dua Prajurit menyerang dari kedua sisi untuk mengepung Raja lawan",
      "Dua Benteng memberikan skak bergantian",
      "Dua Kuda mengepung istana",
    ],
    kunci: 1,
    penjelasan:
      "Double Devils Knocking at Door Checkmate melibatkan dua Prajurit yang menyerang dari kedua sisi untuk mengepung dan memaksa Raja lawan terpojok. Raja tidak dapat bergerak ke mana pun karena kedua Prajurit tersebut mengontrol seluruh ruang gerak. Memanfaatkan pertahanan lawan yang lemah di kedua sisi istana.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 23. Repatriation of Buddha (POSISI)
  // ================================================================
  {
    id: "pz-23",
    pertanyaan:
      "Apa peran Prajurit dalam Repatriation of Buddha Checkmate?",
    pilihan: [
      "Prajurit diam di posisi awal",
      "Prajurit maju selangkah demi selangkah, memaksa Raja lawan mundur ke posisi semula sampai terskakmat",
      "Prajurit mundur untuk menjebak",
      "Prajurit dikorbankan di awal",
    ],
    kunci: 1,
    penjelasan:
      "Repatriation of Buddha Checkmate terjadi ketika Prajurit maju ke depan dan membatasi ruang gerak Raja lawan. Prajurit maju selangkah demi selangkah memaksa Raja mundur ke posisi semula hingga akhirnya terskakmat. Menunjukkan bagaimana bidak kecil seperti Prajurit dapat memiliki dampak besar jika diposisikan dengan benar.",
    boardKey: null,
    tipeTaktik: "posisi",
    level: 1,
  },

  // ================================================================
  // 24. Simultaneous Double Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-24",
    pertanyaan:
      "Apa yang membuat Simultaneous Double Checkmate sulit dihindari?",
    pilihan: [
      "Hanya satu bidak yang menyerang",
      "Dua bidak memberikan skak secara bersamaan — lawan tidak bisa memblokir keduanya dalam satu langkah",
      "Serangan dilakukan dari jarak jauh",
      "Raja lawan sudah keluar dari istana",
    ],
    kunci: 1,
    penjelasan:
      "Simultaneous Double Checkmate: dua bidak memberikan skak kepada Raja secara bersamaan. Lawan tidak bisa memblokir kedua ancaman dalam satu langkah. Sering terjadi melalui kombinasi Meriam, Kuda, dan Benteng. Jika tiga bidak memberikan skak bersamaan, disebut Triple Simultaneous Checkmate — posisi yang sangat langka.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 25. Flanking Trio Checkmate (SERANGAN)
  // ================================================================
  {
    id: "pz-25",
    pertanyaan:
      "Apa kombinasi khas dalam Flanking Trio Checkmate?",
    pilihan: [
      "Tiga Prajurit menyerang dari depan",
      "Tiga bidak berbeda (misal: Benteng + Kuda + Meriam) berkumpul di satu sayap dan menyerang bersama",
      "Raja + Menteri + Gajah bertahan bersama",
      "Tiga Meriam di tiga lajur berbeda",
    ],
    kunci: 1,
    penjelasan:
      "Flanking Trio Checkmate melibatkan tiga bidak berbeda (Benteng+Kuda+Meriam, atau Benteng+Kuda+Prajurit, atau kombinasi lainnya) yang berkumpul di satu sayap dan menyerang bersama hingga lawan terskakmat. Membutuhkan koordinasi yang baik antar ketiga bidak, dan sering mengandalkan pengorbanan untuk membuka ruang bagi skakmat.",
    boardKey: null,
    tipeTaktik: "serangan",
    level: 1,
  },

  // ================================================================
  // 26. Stalemate Checkmate (ENDGAME)
  // ================================================================
  {
    id: "pz-26",
    pertanyaan:
      "Apa yang terjadi dalam Stalemate Checkmate?",
    pilihan: [
      "Raja lawan diskak dan tidak bisa bergerak",
      "Semua bidak lawan (bukan hanya Raja) terkunci — tidak ada langkah legal yang bisa diambil",
      "Permainan berakhir seri",
      "Kedua pemain setuju remis",
    ],
    kunci: 1,
    penjelasan:
      "Stalemate Checkmate terjadi ketika penyerang menggunakan teknik obstruksi, kontrol, atau langkah tunggu untuk menyegel semua bidak lawan — memaksa lawan menyerah karena tidak ada langkah legal yang bisa diambil. Bukan hanya Raja yang terkunci, tapi seluruh bidak. Ini adalah bentuk kemenangan posisional tertinggi.",
    boardKey: null,
    tipeTaktik: "endgame",
    level: 1,
  },
];