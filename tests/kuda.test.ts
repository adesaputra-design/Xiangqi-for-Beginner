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
// Kuda — gerak dasar (bentuk L)
// Kuda di (5,4): bisa ke 8 destinasi jika papan kosong
// Notasi: (+2,-1) = naik 2 baris, kiri 1 kolom, dst.
// ============================================================
describe("Kuda - gerak dasar bentuk L (papan kosong di sekitarnya)", () => {
  it("boleh ke (+2,-1): baris 7, kolom 3", () => {
    const board = createBoard({ "5-4": "red.ma" });
    expect(legal(board, 5, 4, 7, 3, Side.Red)).toBe(true);
  });

  it("boleh ke (+2,+1): baris 7, kolom 5", () => {
    const board = createBoard({ "5-4": "red.ma" });
    expect(legal(board, 5, 4, 7, 5, Side.Red)).toBe(true);
  });

  it("boleh ke (+1,+2): baris 6, kolom 6", () => {
    const board = createBoard({ "5-4": "red.ma" });
    expect(legal(board, 5, 4, 6, 6, Side.Red)).toBe(true);
  });

  it("boleh ke (-1,+2): baris 4, kolom 6", () => {
    const board = createBoard({ "5-4": "red.ma" });
    expect(legal(board, 5, 4, 4, 6, Side.Red)).toBe(true);
  });

  it("boleh ke (-2,+1): baris 3, kolom 5", () => {
    const board = createBoard({ "5-4": "red.ma" });
    expect(legal(board, 5, 4, 3, 5, Side.Red)).toBe(true);
  });

  it("boleh ke (-2,-1): baris 3, kolom 3", () => {
    const board = createBoard({ "5-4": "red.ma" });
    expect(legal(board, 5, 4, 3, 3, Side.Red)).toBe(true);
  });

  it("boleh ke (-1,-2): baris 4, kolom 2", () => {
    const board = createBoard({ "5-4": "red.ma" });
    expect(legal(board, 5, 4, 4, 2, Side.Red)).toBe(true);
  });

  it("boleh ke (+1,-2): baris 6, kolom 2", () => {
    const board = createBoard({ "5-4": "red.ma" });
    expect(legal(board, 5, 4, 6, 2, Side.Red)).toBe(true);
  });
});

// ============================================================
// Kuda — gerakan NON-L ditolak
// ============================================================
describe("Kuda - gerakan non-L ditolak", () => {
  it("tidak boleh bergerak lurus 1 langkah (seperti Bing)", () => {
    const board = createBoard({ "5-4": "red.ma" });
    expect(legal(board, 5, 4, 6, 4, Side.Red)).toBe(false);
  });

  it("tidak boleh bergerak lurus 2 langkah", () => {
    const board = createBoard({ "5-4": "red.ma" });
    expect(legal(board, 5, 4, 7, 4, Side.Red)).toBe(false);
  });

  it("tidak boleh bergerak diagonal (2,2)", () => {
    const board = createBoard({ "5-4": "red.ma" });
    expect(legal(board, 5, 4, 7, 6, Side.Red)).toBe(false);
  });

  it("tidak boleh diam di tempat", () => {
    const board = createBoard({ "5-4": "red.ma" });
    expect(legal(board, 5, 4, 5, 4, Side.Red)).toBe(false);
  });
});

// ============================================================
// Kuda — kaki diblokir (leg block)
// Kuda di (5,4). Kaki atas = (6,4). Kaki kanan = (5,5).
// Kaki bawah = (4,4). Kaki kiri = (5,3).
// ============================================================
describe("Kuda - kaki diblokir (leg block)", () => {
  it("kaki atas diblokir → tidak boleh ke (7,3)", () => {
    // Kaki atas = (6,4). Memblokir (+2,-1) dan (+2,+1)
    const board = createBoard({ "5-4": "red.ma", "6-4": "red.bing" });
    expect(legal(board, 5, 4, 7, 3, Side.Red)).toBe(false);
  });

  it("kaki atas diblokir → tidak boleh ke (7,5)", () => {
    const board = createBoard({ "5-4": "red.ma", "6-4": "red.bing" });
    expect(legal(board, 5, 4, 7, 5, Side.Red)).toBe(false);
  });

  it("kaki atas diblokir → gerakan lain tetap boleh (kaki kanan kosong)", () => {
    // Kaki kanan (5,5) kosong → (+1,+2) = (6,6) tetap valid
    const board = createBoard({ "5-4": "red.ma", "6-4": "red.bing" });
    expect(legal(board, 5, 4, 6, 6, Side.Red)).toBe(true);
  });

  it("kaki kanan diblokir → tidak boleh ke (6,6)", () => {
    // Kaki kanan = (5,5). Memblokir (+1,+2) dan (-1,+2)
    const board = createBoard({ "5-4": "red.ma", "5-5": "black.bing" });
    expect(legal(board, 5, 4, 6, 6, Side.Red)).toBe(false);
  });

  it("kaki kanan diblokir → tidak boleh ke (4,6)", () => {
    const board = createBoard({ "5-4": "red.ma", "5-5": "black.bing" });
    expect(legal(board, 5, 4, 4, 6, Side.Red)).toBe(false);
  });

  it("kaki bawah diblokir → tidak boleh ke (3,5)", () => {
    // Kaki bawah = (4,4). Memblokir (-2,+1) dan (-2,-1)
    const board = createBoard({ "5-4": "red.ma", "4-4": "red.bing" });
    expect(legal(board, 5, 4, 3, 5, Side.Red)).toBe(false);
  });

  it("kaki bawah diblokir → tidak boleh ke (3,3)", () => {
    const board = createBoard({ "5-4": "red.ma", "4-4": "red.bing" });
    expect(legal(board, 5, 4, 3, 3, Side.Red)).toBe(false);
  });

  it("kaki kiri diblokir → tidak boleh ke (4,2)", () => {
    // Kaki kiri = (5,3). Memblokir (-1,-2) dan (+1,-2)
    const board = createBoard({ "5-4": "red.ma", "5-3": "red.bing" });
    expect(legal(board, 5, 4, 4, 2, Side.Red)).toBe(false);
  });

  it("kaki kiri diblokir → tidak boleh ke (6,2)", () => {
    const board = createBoard({ "5-4": "red.ma", "5-3": "red.bing" });
    expect(legal(board, 5, 4, 6, 2, Side.Red)).toBe(false);
  });

  it("kaki diblokir oleh bidak lawan juga memblokir gerakan", () => {
    // Blokir berlaku terlepas dari warna bidak penghalang
    const board = createBoard({ "5-4": "red.ma", "6-4": "black.che" });
    expect(legal(board, 5, 4, 7, 3, Side.Red)).toBe(false);
  });
});

// ============================================================
// Kuda — tangkap dan tidak boleh tangkap bidak sendiri
// ============================================================
describe("Kuda - aturan tangkap", () => {
  it("boleh menangkap bidak lawan di destinasi L", () => {
    const board = createBoard({ "5-4": "red.ma", "7-3": "black.che" });
    expect(legal(board, 5, 4, 7, 3, Side.Red)).toBe(true);
  });

  it("tidak boleh menangkap bidak sendiri di destinasi", () => {
    const board = createBoard({ "5-4": "red.ma", "7-3": "red.bing" });
    expect(legal(board, 5, 4, 7, 3, Side.Red)).toBe(false);
  });

  it("kuda hitam boleh menangkap bidak merah (kaki kosong)", () => {
    // Hitam di (5,4), ke (7,3): dBaris=+2, dKolom=-1 → kaki di (6,4) harus kosong → valid
    const board = createBoard({ "5-4": "black.ma", "7-3": "red.bing" });
    expect(legal(board, 5, 4, 7, 3, Side.Black)).toBe(true);
  });

  it("kuda hitam boleh menangkap ke (+2,-1) jika kaki kosong", () => {
    const board = createBoard({ "5-4": "black.ma", "3-3": "red.bing" });
    // (-2,-1) dari (5,4) = (3,3). Kaki bawah = (4,4) harus kosong
    expect(legal(board, 5, 4, 3, 3, Side.Black)).toBe(true);
  });
});

// ============================================================
// Kuda — batas tepi papan
// ============================================================
describe("Kuda - batas tepi papan", () => {
  it("kuda di pojok a1 hanya punya 2 destinasi valid", () => {
    const board = createBoard({ "1-0": "red.ma" });
    // Dari (1,0): (+2,+1)=(3,1) kaki (2,0) kosong → valid
    expect(legal(board, 1, 0, 3, 1, Side.Red)).toBe(true);
    // (+1,+2)=(2,2) kaki (1,1) kosong → valid
    expect(legal(board, 1, 0, 2, 2, Side.Red)).toBe(true);
    // (-2,+1)=(−1,1) → keluar papan → tidak valid
    expect(legal(board, 1, 0, -1, 1, Side.Red)).toBe(false);
    // (+2,-1)=(3,-1) → kolom negatif → tidak valid
    expect(legal(board, 1, 0, 3, -1, Side.Red)).toBe(false);
  });

  it("kuda di tepi kolom kiri (kolom 0) tidak bisa ke kolom negatif", () => {
    const board = createBoard({ "5-0": "red.ma" });
    expect(legal(board, 5, 0, 4, -2, Side.Red)).toBe(false);
    expect(legal(board, 5, 0, 6, -2, Side.Red)).toBe(false);
  });

  it("kuda di tepi kolom kanan (kolom 8) tidak bisa ke kolom 9+", () => {
    const board = createBoard({ "5-8": "red.ma" });
    expect(legal(board, 5, 8, 4, 10, Side.Red)).toBe(false);
    expect(legal(board, 5, 8, 6, 10, Side.Red)).toBe(false);
  });
});
