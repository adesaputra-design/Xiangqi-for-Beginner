import { describe, it, expect } from "vitest";
import { hitungRataAkurasi } from "../src/logic/sesiLatihan";
import type { SesiRecord } from "../src/logic/quizEngine";

describe("hitungRataAkurasi", () => {
  it("should return 0 for empty array", () => {
    expect(hitungRataAkurasi([])).toBe(0);
  });

  it("should return average of given records", () => {
    const records: SesiRecord[] = [
      { tanggal: "2026-06-01", akurasi: 80, errorPerTipe: { serangan: 1, pertahanan: 0, posisi: 1, endgame: 0 }, level: 1 },
      { tanggal: "2026-06-02", akurasi: 90, errorPerTipe: { serangan: 0, pertahanan: 0, posisi: 1, endgame: 0 }, level: 1 },
      { tanggal: "2026-06-03", akurasi: 70, errorPerTipe: { serangan: 2, pertahanan: 1, posisi: 0, endgame: 0 }, level: 1 },
    ];

    expect(hitungRataAkurasi(records)).toBe(80); // (80+90+70)/3 = 80
  });

  it("should handle single record", () => {
    const records: SesiRecord[] = [
      { tanggal: "2026-06-01", akurasi: 85, errorPerTipe: { serangan: 1, pertahanan: 0, posisi: 0, endgame: 1 }, level: 1 },
    ];

    expect(hitungRataAkurasi(records)).toBe(85);
  });

  it("should round to nearest integer", () => {
    const records: SesiRecord[] = [
      { tanggal: "2026-06-01", akurasi: 82, errorPerTipe: { serangan: 0, pertahanan: 0, posisi: 0, endgame: 0 }, level: 1 },
      { tanggal: "2026-06-02", akurasi: 79, errorPerTipe: { serangan: 0, pertahanan: 0, posisi: 0, endgame: 0 }, level: 1 },
    ];

    // (82+79)/2 = 80.5 → Math.round = 81
    expect(hitungRataAkurasi(records)).toBe(81);
  });
});