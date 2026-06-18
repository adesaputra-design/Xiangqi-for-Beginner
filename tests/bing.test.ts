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
// Bing Merah — sebelum sungai (baris 1–5)
// Sungai: antara baris 5 dan 6. Merah mulai di sisi baris 1–5.
// ============================================================
describe("Bing Merah - sebelum sungai (baris 1–5)", () => {
  it("boleh maju 1 langkah ke depan (baris naik)", () => {
    const board = createBoard({ "3-4": "red.bing" });
    expect(legal(board, 3, 4, 4, 4, Side.Red)).toBe(true);
  });

  it("boleh maju dari baris 5 ke baris 6 (melewati sungai)", () => {
    const board = createBoard({ "5-4": "red.bing" });
    expect(legal(board, 5, 4, 6, 4, Side.Red)).toBe(true);
  });

  it("tidak boleh mundur (baris turun) sebelum sungai", () => {
    const board = createBoard({ "3-4": "red.bing" });
    expect(legal(board, 3, 4, 2, 4, Side.Red)).toBe(false);
  });

  it("tidak boleh gerak ke kiri sebelum sungai", () => {
    const board = createBoard({ "3-4": "red.bing" });
    expect(legal(board, 3, 4, 3, 3, Side.Red)).toBe(false);
  });

  it("tidak boleh gerak ke kanan sebelum sungai", () => {
    const board = createBoard({ "3-4": "red.bing" });
    expect(legal(board, 3, 4, 3, 5, Side.Red)).toBe(false);
  });

  it("tidak boleh melompat 2 langkah ke depan", () => {
    const board = createBoard({ "3-4": "red.bing" });
    expect(legal(board, 3, 4, 5, 4, Side.Red)).toBe(false);
  });

  it("tidak boleh gerak diagonal", () => {
    const board = createBoard({ "3-4": "red.bing" });
    expect(legal(board, 3, 4, 4, 5, Side.Red)).toBe(false);
  });
});

// ============================================================
// Bing Merah — setelah menyeberang sungai (baris 6–9)
// ============================================================
describe("Bing Merah - sudah menyeberang sungai (baris 6–9)", () => {
  it("boleh maju 1 langkah ke depan setelah sungai", () => {
    const board = createBoard({ "7-4": "red.bing" });
    expect(legal(board, 7, 4, 8, 4, Side.Red)).toBe(true);
  });

  it("boleh gerak ke kiri setelah sungai", () => {
    const board = createBoard({ "7-4": "red.bing" });
    expect(legal(board, 7, 4, 7, 3, Side.Red)).toBe(true);
  });

  it("boleh gerak ke kanan setelah sungai", () => {
    const board = createBoard({ "7-4": "red.bing" });
    expect(legal(board, 7, 4, 7, 5, Side.Red)).toBe(true);
  });

  it("tidak boleh mundur setelah sungai", () => {
    const board = createBoard({ "7-4": "red.bing" });
    expect(legal(board, 7, 4, 6, 4, Side.Red)).toBe(false);
  });

  it("tidak boleh melompat 2 langkah ke depan setelah sungai", () => {
    const board = createBoard({ "7-4": "red.bing" });
    expect(legal(board, 7, 4, 9, 4, Side.Red)).toBe(false);
  });
});

// ============================================================
// Bing Merah — di baris terakhir lawan (baris 10)
// Tidak ada lagi langkah maju — hanya bisa ke samping
// ============================================================
describe("Bing Merah - di baris terakhir lawan (baris 10)", () => {
  it("boleh gerak ke kiri di baris 10", () => {
    const board = createBoard({ "10-4": "red.bing" });
    expect(legal(board, 10, 4, 10, 3, Side.Red)).toBe(true);
  });

  it("boleh gerak ke kanan di baris 10", () => {
    const board = createBoard({ "10-4": "red.bing" });
    expect(legal(board, 10, 4, 10, 5, Side.Red)).toBe(true);
  });

  it("tidak boleh maju dari baris 10 (keluar papan)", () => {
    const board = createBoard({ "10-4": "red.bing" });
    expect(legal(board, 10, 4, 11, 4, Side.Red)).toBe(false);
  });

  it("tidak boleh mundur dari baris 10", () => {
    const board = createBoard({ "10-4": "red.bing" });
    expect(legal(board, 10, 4, 9, 4, Side.Red)).toBe(false);
  });
});

// ============================================================
// Bing Hitam — sebelum sungai (baris 6–10)
// Hitam mulai di sisi baris 6–10. Maju = baris turun.
// ============================================================
describe("Bing Hitam - sebelum sungai (baris 6–10)", () => {
  it("boleh maju 1 langkah ke depan (baris turun)", () => {
    const board = createBoard({ "8-4": "black.bing" });
    expect(legal(board, 8, 4, 7, 4, Side.Black)).toBe(true);
  });

  it("boleh maju dari baris 6 ke baris 5 (melewati sungai)", () => {
    const board = createBoard({ "6-4": "black.bing" });
    expect(legal(board, 6, 4, 5, 4, Side.Black)).toBe(true);
  });

  it("tidak boleh mundur (baris naik) sebelum sungai", () => {
    const board = createBoard({ "8-4": "black.bing" });
    expect(legal(board, 8, 4, 9, 4, Side.Black)).toBe(false);
  });

  it("tidak boleh gerak ke samping sebelum sungai (kiri)", () => {
    const board = createBoard({ "8-4": "black.bing" });
    expect(legal(board, 8, 4, 8, 3, Side.Black)).toBe(false);
  });

  it("tidak boleh gerak ke samping sebelum sungai (kanan)", () => {
    const board = createBoard({ "8-4": "black.bing" });
    expect(legal(board, 8, 4, 8, 5, Side.Black)).toBe(false);
  });
});

// ============================================================
// Bing Hitam — setelah menyeberang sungai (baris 2–5)
// ============================================================
describe("Bing Hitam - sudah menyeberang sungai (baris 2–5)", () => {
  it("boleh maju 1 langkah ke depan setelah sungai", () => {
    const board = createBoard({ "4-4": "black.bing" });
    expect(legal(board, 4, 4, 3, 4, Side.Black)).toBe(true);
  });

  it("boleh gerak ke kiri setelah sungai", () => {
    const board = createBoard({ "4-4": "black.bing" });
    expect(legal(board, 4, 4, 4, 3, Side.Black)).toBe(true);
  });

  it("boleh gerak ke kanan setelah sungai", () => {
    const board = createBoard({ "4-4": "black.bing" });
    expect(legal(board, 4, 4, 4, 5, Side.Black)).toBe(true);
  });

  it("tidak boleh mundur setelah sungai (baris naik)", () => {
    const board = createBoard({ "4-4": "black.bing" });
    expect(legal(board, 4, 4, 5, 4, Side.Black)).toBe(false);
  });
});

// ============================================================
// Bing Hitam — di baris terakhir lawan (baris 1)
// ============================================================
describe("Bing Hitam - di baris terakhir lawan (baris 1)", () => {
  it("boleh gerak ke kiri di baris 1", () => {
    const board = createBoard({ "1-4": "black.bing" });
    expect(legal(board, 1, 4, 1, 3, Side.Black)).toBe(true);
  });

  it("boleh gerak ke kanan di baris 1", () => {
    const board = createBoard({ "1-4": "black.bing" });
    expect(legal(board, 1, 4, 1, 5, Side.Black)).toBe(true);
  });

  it("tidak boleh maju dari baris 1 (keluar papan)", () => {
    const board = createBoard({ "1-4": "black.bing" });
    expect(legal(board, 1, 4, 0, 4, Side.Black)).toBe(false);
  });

  it("tidak boleh mundur dari baris 1", () => {
    const board = createBoard({ "1-4": "black.bing" });
    expect(legal(board, 1, 4, 2, 4, Side.Black)).toBe(false);
  });
});

// ============================================================
// Bing — aturan tangkap
// ============================================================
describe("Bing - aturan tangkap", () => {
  it("Bing Merah boleh menangkap bidak lawan di depan (sebelum sungai)", () => {
    const board = createBoard({ "3-4": "red.bing", "4-4": "black.che" });
    expect(legal(board, 3, 4, 4, 4, Side.Red)).toBe(true);
  });

  it("Bing Merah tidak boleh menangkap bidak sendiri di depan", () => {
    const board = createBoard({ "3-4": "red.bing", "4-4": "red.pao" });
    expect(legal(board, 3, 4, 4, 4, Side.Red)).toBe(false);
  });

  it("Bing Merah boleh menangkap ke samping setelah sungai", () => {
    const board = createBoard({ "7-4": "red.bing", "7-3": "black.che" });
    expect(legal(board, 7, 4, 7, 3, Side.Red)).toBe(true);
  });

  it("Bing Hitam tidak boleh menangkap bidak sendiri di depan", () => {
    const board = createBoard({ "8-4": "black.bing", "7-4": "black.pao" });
    expect(legal(board, 8, 4, 7, 4, Side.Black)).toBe(false);
  });

  it("Bing Hitam boleh menangkap bidak lawan di depan (sebelum sungai)", () => {
    const board = createBoard({ "7-4": "black.bing", "6-4": "red.bing" });
    expect(legal(board, 7, 4, 6, 4, Side.Black)).toBe(true);
  });

  it("Bing Hitam boleh menangkap ke samping setelah sungai", () => {
    const board = createBoard({ "3-4": "black.bing", "3-5": "red.che" });
    expect(legal(board, 3, 4, 3, 5, Side.Black)).toBe(true);
  });
});

// ============================================================
// Bing — batas tepi papan
// ============================================================
describe("Bing - batas tepi papan", () => {
  it("Bing Merah di kolom kiri (a=0) tidak bisa gerak ke kiri setelah sungai", () => {
    const board = createBoard({ "7-0": "red.bing" });
    expect(legal(board, 7, 0, 7, -1, Side.Red)).toBe(false);
  });

  it("Bing Merah di kolom kanan (i=8) tidak bisa gerak ke kanan setelah sungai", () => {
    const board = createBoard({ "7-8": "red.bing" });
    expect(legal(board, 7, 8, 7, 9, Side.Red)).toBe(false);
  });
});
