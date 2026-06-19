import type { PuzzleSoal, TipeTaktik, SesiRecord } from "./quizEngine";

const STORAGE_KEY = "latihan-taktik-riwayat";

/**
 * Acak array menggunakan Fisher-Yates shuffle (in-place).
 */
function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Ambil sesi harian: pilih hingga `jumlah` puzzle dari bank
 * yang sesuai dengan `level` aktif, lalu acak urutannya.
 * 
 * Jika bank memiliki kurang dari `jumlah` puzzle untuk level tersebut,
 * semua puzzle yang tersedia akan dikembalikan (tidak error).
 */
export function ambilSesiHarian(
  bank: PuzzleSoal[],
  level: number,
  jumlah: number
): PuzzleSoal[] {
  const tersedia = bank.filter((pz) => pz.level === level);
  const diambil = tersedia.slice(0, jumlah);
  return shuffle([...diambil]);
}

/**
 * Baca level aktif pengguna dari localStorage.
 * Default: 1.
 */
export function bacaLevelAktif(): number {
  try {
    const dataStr = localStorage.getItem("latihan-taktik-level");
    if (!dataStr) return 1;
    const level = parseInt(dataStr, 10);
    return level >= 1 && level <= 3 ? level : 1;
  } catch {
    return 1;
  }
}

/**
 * Simpan level aktif pengguna ke localStorage.
 */
export function simpanLevelAktif(level: number): void {
  localStorage.setItem("latihan-taktik-level", String(level));
}

/**
 * Simpan satu SesiRecord ke localStorage.
 * Record ditambahkan (append) ke array riwayat yang sudah ada.
 */
export function simpanSesiRecord(record: SesiRecord): void {
  const riwayat = bacaRiwayatSesi();
  riwayat.push(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(riwayat));
}

/**
 * Baca seluruh riwayat sesi dari localStorage.
 * Mengembalikan array kosong jika belum ada riwayat atau data rusak.
 */
export function bacaRiwayatSesi(): SesiRecord[] {
  try {
    const dataStr = localStorage.getItem(STORAGE_KEY);
    if (!dataStr) return [];
    const data = JSON.parse(dataStr);
    if (!Array.isArray(data)) return [];
    return data;
  } catch {
    return [];
  }
}

/**
 * Hitung error per tipe taktik dari quiz session.
 * Membutuhkan session dengan soal bertipe PuzzleSoal[].
 */
export function hitungErrorPerTipe(
  soal: PuzzleSoal[],
  jawaban: (number | null)[]
): Record<TipeTaktik, number> {
  const errorPerTipe: Record<TipeTaktik, number> = {
    serangan: 0,
    pertahanan: 0,
    posisi: 0,
    endgame: 0,
  };

  for (let i = 0; i < soal.length; i++) {
    if (jawaban[i] !== null && jawaban[i] !== soal[i].kunci) {
      errorPerTipe[soal[i].tipeTaktik]++;
    }
  }

  return errorPerTipe;
}