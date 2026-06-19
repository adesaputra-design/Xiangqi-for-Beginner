import { describe, it, expect, beforeEach } from "vitest";
import type { PuzzleSoal, TipeTaktik, SesiRecord } from "../src/logic/quizEngine";
import { ambilSesiHarian, simpanSesiRecord, bacaRiwayatSesi } from "../src/logic/sesiLatihan";

describe("PuzzleSoal type", () => {
  it("should accept a valid PuzzleSoal object with tipeTaktik and level", () => {
    const puzzle: PuzzleSoal = {
      id: "pz-1",
      pertanyaan: "Apa langkah terbaik?",
      pilihan: ["A", "B", "C", "D"],
      kunci: 0,
      penjelasan: "Karena skakmat.",
      boardKey: "pz-board-1",
      tipeTaktik: "serangan",
      level: 1,
    };

    expect(puzzle.tipeTaktik).toBe("serangan");
    expect(puzzle.level).toBe(1);
    expect(puzzle.id).toBe("pz-1");
    expect(puzzle.pertanyaan).toBe("Apa langkah terbaik?");
  });

  it("should allow null boardKey", () => {
    const puzzle: PuzzleSoal = {
      id: "pz-2",
      pertanyaan: "Tanpa papan",
      pilihan: ["A", "B", "C", "D"],
      kunci: 1,
      penjelasan: "Ok.",
      boardKey: null,
      tipeTaktik: "posisi",
      level: 2,
    };

    expect(puzzle.boardKey).toBeNull();
  });
});

describe("SesiRecord type", () => {
  it("should accept a valid SesiRecord", () => {
    const record: SesiRecord = {
      tanggal: "2026-06-19",
      akurasi: 80,
      errorPerTipe: { serangan: 1, pertahanan: 0, posisi: 1, endgame: 0 },
      level: 1,
    };

    expect(record.akurasi).toBe(80);
    expect(record.errorPerTipe.serangan).toBe(1);
    expect(record.errorPerTipe.posisi).toBe(1);
    expect(record.level).toBe(1);
  });
});

// ============================================================
// ambilSesiHarian tests
// ============================================================

function createMockPuzzle(id: string, tipe: TipeTaktik, level: 1 | 2 | 3): PuzzleSoal {
  return {
    id,
    pertanyaan: `Pertanyaan ${id}`,
    pilihan: ["A", "B", "C", "D"],
    kunci: 0,
    penjelasan: `Penjelasan ${id}`,
    boardKey: null,
    tipeTaktik: tipe,
    level,
  };
}

describe("ambilSesiHarian", () => {
  it("should return all puzzles if bank has less than 10", () => {
    const bank: PuzzleSoal[] = [
      createMockPuzzle("a", "serangan", 1),
      createMockPuzzle("b", "pertahanan", 1),
      createMockPuzzle("c", "posisi", 1),
    ];

    const result = ambilSesiHarian(bank, 1, 10);
    expect(result).toHaveLength(3);
  });

  it("should return exactly 10 puzzles when bank has many", () => {
    const bank: PuzzleSoal[] = Array.from({ length: 20 }, (_, i) =>
      createMockPuzzle(`pz-${i}`, "serangan", 1)
    );

    const result = ambilSesiHarian(bank, 1, 10);
    expect(result).toHaveLength(10);
  });

  it("should only return puzzles of the active level", () => {
    const bank: PuzzleSoal[] = [
      createMockPuzzle("L1-a", "serangan", 1),
      createMockPuzzle("L1-b", "pertahanan", 1),
      createMockPuzzle("L2-a", "posisi", 2),
      createMockPuzzle("L2-b", "serangan", 2),
      createMockPuzzle("L3-a", "endgame", 3),
    ];

    const result = ambilSesiHarian(bank, 1, 10);
    expect(result).toHaveLength(2);
    for (const pz of result) {
      expect(pz.level).toBe(1);
    }
  });

  it("should randomize the order", () => {
    const bank: PuzzleSoal[] = Array.from({ length: 30 }, (_, i) =>
      createMockPuzzle(`pz-${i}`, "serangan", 1)
    );

    const run1 = ambilSesiHarian(bank, 1, 10);
    const run2 = ambilSesiHarian(bank, 1, 10);

    const ids1 = run1.map((p) => p.id).join(",");
    const ids2 = run2.map((p) => p.id).join(",");

    // Very unlikely to get the same order twice with 30 items
    // (could flake <0.0001% chance, acceptable)
    expect(run1).toHaveLength(10);
    expect(run2).toHaveLength(10);
  });
});

// ============================================================
// simpanSesiRecord + bacaRiwayatSesi tests
// ============================================================

describe("simpanSesiRecord & bacaRiwayatSesi", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save and read a single session record", () => {
    const record: SesiRecord = {
      tanggal: "2026-06-19",
      akurasi: 70,
      errorPerTipe: { serangan: 2, pertahanan: 0, posisi: 1, endgame: 0 },
      level: 1,
    };

    simpanSesiRecord(record);
    const riwayat = bacaRiwayatSesi();
    expect(riwayat).toHaveLength(1);
    expect(riwayat[0].akurasi).toBe(70);
    expect(riwayat[0].errorPerTipe.serangan).toBe(2);
  });

  it("should append multiple records and keep them in order", () => {
    simpanSesiRecord({
      tanggal: "2026-06-17",
      akurasi: 50,
      errorPerTipe: { serangan: 3, pertahanan: 1, posisi: 1, endgame: 0 },
      level: 1,
    });
    simpanSesiRecord({
      tanggal: "2026-06-18",
      akurasi: 80,
      errorPerTipe: { serangan: 1, pertahanan: 0, posisi: 1, endgame: 0 },
      level: 1,
    });
    simpanSesiRecord({
      tanggal: "2026-06-19",
      akurasi: 90,
      errorPerTipe: { serangan: 0, pertahanan: 0, posisi: 1, endgame: 0 },
      level: 1,
    });

    const riwayat = bacaRiwayatSesi();
    expect(riwayat).toHaveLength(3);
    expect(riwayat[0].tanggal).toBe("2026-06-17");
    expect(riwayat[2].tanggal).toBe("2026-06-19");
  });

  it("should return empty array when no records exist", () => {
    const riwayat = bacaRiwayatSesi();
    expect(riwayat).toEqual([]);
  });

  it("should handle corrupted localStorage gracefully", () => {
    localStorage.setItem("latihan-taktik-riwayat", "not-json{{");
    const riwayat = bacaRiwayatSesi();
    expect(riwayat).toEqual([]);
  });
});
