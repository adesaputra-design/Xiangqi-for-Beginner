import { describe, it, expect } from "vitest";
import { createBoard } from "../src/data/papan";
import { isLegalMove } from "../src/logic/isLegalMove";
import { Side, type BoardState } from "../src/data/types";

function legal(
  board: BoardState,
  dariBaris: number,
  dariKolom: number,
  keBaris: number,
  keKolom: number,
  side: Side
): boolean {
  return isLegalMove(
    board,
    { baris: dariBaris, kolom: dariKolom },
    { baris: keBaris, kolom: keKolom },
    side
  );
}

// ============================================================
// Gajah Merah — gerak dasar (diagonal 2 langkah)
// Posisi (3,4): semua 4 destinasi ada di baris 1–5 (sisi Merah)
// ============================================================
describe("Gajah Merah - gerak dasar diagonal 2 langkah", () => {
  it("boleh ke (+2,+2): baris 5, kolom 6", () => {
    const board = createBoard({ "3-4": "red.xiang" });
    expect(legal(board, 3, 4, 5, 6, Side.Red)).toBe(true);
  });

  it("boleh ke (+2,-2): baris 5, kolom 2", () => {
    const board = createBoard({ "3-4": "red.xiang" });
    expect(legal(board, 3, 4, 5, 2, Side.Red)).toBe(true);
  });

  it("boleh ke (-2,+2): baris 1, kolom 6", () => {
    const board = createBoard({ "3-4": "red.xiang" });
    expect(legal(board, 3, 4, 1, 6, Side.Red)).toBe(true);
  });

  it("boleh ke (-2,-2): baris 1, kolom 2", () => {
    const board = createBoard({ "3-4": "red.xiang" });
    expect(legal(board, 3, 4, 1, 2, Side.Red)).toBe(true);
  });
});

// ============================================================
// Gajah — gerakan non-diagonal-2 ditolak
// ============================================================
describe("Gajah - gerakan non-diagonal-2 ditolak", () => {
  it("tidak boleh diagonal 1 langkah", () => {
    const board = createBoard({ "3-4": "red.xiang" });
    expect(legal(board, 3, 4, 4, 5, Side.Red)).toBe(false);
  });

  it("tidak boleh lurus (seperti Benteng)", () => {
    const board = createBoard({ "3-4": "red.xiang" });
    expect(legal(board, 3, 4, 5, 4, Side.Red)).toBe(false);
  });

  it("tidak boleh gerak L (seperti Kuda)", () => {
    const board = createBoard({ "3-4": "red.xiang" });
    expect(legal(board, 3, 4, 5, 5, Side.Red)).toBe(false);
  });

  it("tidak boleh diagonal 3 langkah", () => {
    const board = createBoard({ "3-4": "red.xiang" });
    expect(legal(board, 3, 4, 6, 7, Side.Red)).toBe(false);
  });

  it("tidak boleh diam di tempat", () => {
    const board = createBoard({ "3-4": "red.xiang" });
    expect(legal(board, 3, 4, 3, 4, Side.Red)).toBe(false);
  });
});

// ============================================================
// Gajah Merah — tidak boleh menyeberangi sungai (baris > 5)
// ============================================================
describe("Gajah Merah - tidak boleh menyeberangi sungai", () => {
  it("Gajah Merah di baris 5 tidak boleh ke baris 7 (melewati sungai)", () => {
    const board = createBoard({ "5-2": "red.xiang" });
    expect(legal(board, 5, 2, 7, 4, Side.Red)).toBe(false);
  });

  it("Gajah Merah di baris 5 tidak boleh ke baris 7 ke arah lain", () => {
    const board = createBoard({ "5-6": "red.xiang" });
    expect(legal(board, 5, 6, 7, 4, Side.Red)).toBe(false);
  });

  it("Gajah Merah di baris 3 tetap boleh ke baris 5 (masih sisi sendiri)", () => {
    const board = createBoard({ "3-4": "red.xiang" });
    expect(legal(board, 3, 4, 5, 6, Side.Red)).toBe(true);
  });

  it("Gajah Merah di baris 3 tetap boleh ke baris 1 (masih sisi sendiri)", () => {
    const board = createBoard({ "3-4": "red.xiang" });
    expect(legal(board, 3, 4, 1, 2, Side.Red)).toBe(true);
  });
});

// ============================================================
// Gajah Hitam — tidak boleh menyeberangi sungai (baris < 6)
// ============================================================
describe("Gajah Hitam - tidak boleh menyeberangi sungai", () => {
  it("Gajah Hitam boleh bergerak di sisi hitam (baris 6–10)", () => {
    const board = createBoard({ "8-4": "black.xiang" });
    expect(legal(board, 8, 4, 10, 6, Side.Black)).toBe(true);
  });

  it("Gajah Hitam di baris 6 tidak boleh ke baris 4 (melewati sungai)", () => {
    const board = createBoard({ "6-4": "black.xiang" });
    expect(legal(board, 6, 4, 4, 6, Side.Black)).toBe(false);
  });

  it("Gajah Hitam di baris 6 tidak boleh ke baris 4 ke arah lain", () => {
    const board = createBoard({ "6-4": "black.xiang" });
    expect(legal(board, 6, 4, 4, 2, Side.Black)).toBe(false);
  });

  it("Gajah Hitam di baris 8 boleh ke baris 6 (masih sisi sendiri)", () => {
    const board = createBoard({ "8-4": "black.xiang" });
    expect(legal(board, 8, 4, 6, 2, Side.Black)).toBe(true);
  });
});

// ============================================================
// Gajah — mata gajah diblokir (elephant eye block)
// Mata = kotak tengah dari gerakan diagonal 2 langkah
// ============================================================
describe("Gajah - mata gajah diblokir", () => {
  it("mata (+1,+1) diblokir → tidak boleh ke (+2,+2)", () => {
    // Gajah di (3,4), mata di (4,5), tujuan (5,6)
    const board = createBoard({ "3-4": "red.xiang", "4-5": "red.bing" });
    expect(legal(board, 3, 4, 5, 6, Side.Red)).toBe(false);
  });

  it("mata (+1,-1) diblokir → tidak boleh ke (+2,-2)", () => {
    // Gajah di (3,4), mata di (4,3), tujuan (5,2)
    const board = createBoard({ "3-4": "red.xiang", "4-3": "red.bing" });
    expect(legal(board, 3, 4, 5, 2, Side.Red)).toBe(false);
  });

  it("mata (-1,+1) diblokir → tidak boleh ke (-2,+2)", () => {
    // Gajah di (3,4), mata di (2,5), tujuan (1,6)
    const board = createBoard({ "3-4": "red.xiang", "2-5": "black.bing" });
    expect(legal(board, 3, 4, 1, 6, Side.Red)).toBe(false);
  });

  it("mata (-1,-1) diblokir → tidak boleh ke (-2,-2)", () => {
    // Gajah di (3,4), mata di (2,3), tujuan (1,2)
    const board = createBoard({ "3-4": "red.xiang", "2-3": "black.bing" });
    expect(legal(board, 3, 4, 1, 2, Side.Red)).toBe(false);
  });

  it("mata diblokir bidak lawan juga memblokir gerakan", () => {
    const board = createBoard({ "3-4": "red.xiang", "4-5": "black.che" });
    expect(legal(board, 3, 4, 5, 6, Side.Red)).toBe(false);
  });

  it("mata satu arah diblokir, arah lain tetap boleh", () => {
    // Mata (+1,+1) diblokir, tapi mata (+1,-1) kosong
    const board = createBoard({ "3-4": "red.xiang", "4-5": "red.bing" });
    expect(legal(board, 3, 4, 5, 2, Side.Red)).toBe(true);
  });
});

// ============================================================
// Gajah — aturan tangkap
// ============================================================
describe("Gajah - aturan tangkap", () => {
  it("boleh menangkap bidak lawan di destinasi (mata kosong)", () => {
    const board = createBoard({ "3-4": "red.xiang", "5-6": "black.che" });
    expect(legal(board, 3, 4, 5, 6, Side.Red)).toBe(true);
  });

  it("tidak boleh menangkap bidak sendiri di destinasi", () => {
    const board = createBoard({ "3-4": "red.xiang", "5-6": "red.bing" });
    expect(legal(board, 3, 4, 5, 6, Side.Red)).toBe(false);
  });
});

// ============================================================
// Gajah — batas tepi papan
// ============================================================
describe("Gajah - batas tepi papan", () => {
  it("Gajah Merah di baris 1 tidak bisa ke baris negatif", () => {
    const board = createBoard({ "1-4": "red.xiang" });
    expect(legal(board, 1, 4, -1, 2, Side.Red)).toBe(false);
    expect(legal(board, 1, 4, -1, 6, Side.Red)).toBe(false);
  });

  it("Gajah di kolom 0 tidak bisa ke kolom negatif", () => {
    const board = createBoard({ "3-0": "red.xiang" });
    expect(legal(board, 3, 0, 5, -2, Side.Red)).toBe(false);
    expect(legal(board, 3, 0, 1, -2, Side.Red)).toBe(false);
  });
});
