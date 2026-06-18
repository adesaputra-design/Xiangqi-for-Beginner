import { describe, it, expect } from "vitest";
import { createBoard } from "../src/data/papan";
import { isLegalMove, isFaceOff } from "../src/logic/isLegalMove";
import { Side, PieceType, type BoardState } from "../src/data/types";

// ============================================================
// Helper: panggil isLegalMove dengan koordinat baris-kolom
// ============================================================
function legal(
  board: BoardState,
  dariBaris: number,
  dariKolom: number,
  keBaris: number,
  keKolom: number,
  side: Side
): boolean {
  return isLegalMove(board, { baris: dariBaris, kolom: dariKolom }, { baris: keBaris, kolom: keKolom }, side);
}

// ============================================================
// Jiang: basic movement within palace
// ============================================================
describe("Jiang - basic movement", () => {
  it("should allow one step forward within palace (red)", () => {
    const board = createBoard({ "1-4": "red.jiang" });
    expect(legal(board, 1, 4, 2, 4, Side.Red)).toBe(true);
  });

  it("should allow one step backward within palace (red)", () => {
    const board = createBoard({ "2-4": "red.jiang" });
    expect(legal(board, 2, 4, 1, 4, Side.Red)).toBe(true);
  });

  it("should allow one step left within palace (red)", () => {
    const board = createBoard({ "1-4": "red.jiang" });
    expect(legal(board, 1, 4, 1, 3, Side.Red)).toBe(true);
  });

  it("should allow one step right within palace (red)", () => {
    const board = createBoard({ "1-4": "red.jiang" });
    expect(legal(board, 1, 4, 1, 5, Side.Red)).toBe(true);
  });

  it("should allow one step forward within palace (black)", () => {
    const board = createBoard({ "10-4": "black.jiang" });
    expect(legal(board, 10, 4, 9, 4, Side.Black)).toBe(true);
  });

  it("should allow one step backward within palace (black)", () => {
    const board = createBoard({ "9-4": "black.jiang" });
    expect(legal(board, 9, 4, 10, 4, Side.Black)).toBe(true);
  });

  it("should allow one step left within palace (black)", () => {
    const board = createBoard({ "10-4": "black.jiang" });
    expect(legal(board, 10, 4, 10, 3, Side.Black)).toBe(true);
  });

  it("should allow one step right within palace (black)", () => {
    const board = createBoard({ "10-4": "black.jiang" });
    expect(legal(board, 10, 4, 10, 5, Side.Black)).toBe(true);
  });
});

// ============================================================
// Jiang: diagonal moves are NOT allowed
// ============================================================
describe("Jiang - diagonal forbidden", () => {
  it("should reject diagonal move (red)", () => {
    const board = createBoard({ "1-4": "red.jiang" });
    expect(legal(board, 1, 4, 2, 5, Side.Red)).toBe(false);
  });

  it("should reject diagonal move (black)", () => {
    const board = createBoard({ "10-4": "black.jiang" });
    expect(legal(board, 10, 4, 9, 3, Side.Black)).toBe(false);
  });
});

// ============================================================
// Jiang: cannot move outside palace
// ============================================================
describe("Jiang - palace boundary", () => {
  it("should reject moving below row 1 (red palace bottom)", () => {
    const board = createBoard({ "1-4": "red.jiang" });
    expect(legal(board, 1, 4, 0, 4, Side.Red)).toBe(false);
  });

  it("should reject moving above row 3 (red palace top)", () => {
    const board = createBoard({ "3-4": "red.jiang" });
    expect(legal(board, 3, 4, 4, 4, Side.Red)).toBe(false);
  });

  it("should reject moving left of col 3 (red palace)", () => {
    const board = createBoard({ "1-3": "red.jiang" });
    expect(legal(board, 1, 3, 1, 2, Side.Red)).toBe(false);
  });

  it("should reject moving right of col 5 (red palace)", () => {
    const board = createBoard({ "1-5": "red.jiang" });
    expect(legal(board, 1, 5, 1, 6, Side.Red)).toBe(false);
  });

  it("should reject moving below row 8 (black palace top)", () => {
    const board = createBoard({ "8-4": "black.jiang" });
    expect(legal(board, 8, 4, 7, 4, Side.Black)).toBe(false);
  });

  it("should reject moving above row 10 (black palace bottom)", () => {
    const board = createBoard({ "10-4": "black.jiang" });
    expect(legal(board, 10, 4, 11, 4, Side.Black)).toBe(false);
  });

  it("should reject moving left of col 3 (black palace)", () => {
    const board = createBoard({ "10-3": "black.jiang" });
    expect(legal(board, 10, 3, 10, 2, Side.Black)).toBe(false);
  });

  it("should reject moving right of col 5 (black palace)", () => {
    const board = createBoard({ "10-5": "black.jiang" });
    expect(legal(board, 10, 5, 10, 6, Side.Black)).toBe(false);
  });
});

// ============================================================
// Jiang: cannot move more than 1 step
// ============================================================
describe("Jiang - step limit", () => {
  it("should reject moving 2 steps horizontally", () => {
    const board = createBoard({ "2-4": "red.jiang" });
    expect(legal(board, 2, 4, 2, 6, Side.Red)).toBe(false);
  });

  it("should reject moving 2 steps vertically", () => {
    const board = createBoard({ "1-4": "red.jiang" });
    expect(legal(board, 1, 4, 3, 4, Side.Red)).toBe(false);
  });

  it("should reject knight-like move", () => {
    const board = createBoard({ "2-4": "red.jiang" });
    expect(legal(board, 2, 4, 4, 5, Side.Red)).toBe(false);
  });
});

// ============================================================
// Jiang: capture opponent piece
// ============================================================
describe("Jiang - capture", () => {
  it("should allow capturing opponent piece within palace", () => {
    const board = createBoard({
      "1-4": "red.jiang",
      "2-4": "black.bing",
    });
    expect(legal(board, 1, 4, 2, 4, Side.Red)).toBe(true);
  });

  it("should reject capturing own piece", () => {
    const board = createBoard({
      "1-4": "red.jiang",
      "2-4": "red.bing",
    });
    expect(legal(board, 1, 4, 2, 4, Side.Red)).toBe(false);
  });
});

// ============================================================
// Jiang: blocked by own piece
// ============================================================
describe("Jiang - blocked by own piece", () => {
  it("should reject moving to square occupied by own piece", () => {
    const board = createBoard({
      "2-4": "red.jiang",
      "1-4": "red.shi",
    });
    expect(legal(board, 2, 4, 1, 4, Side.Red)).toBe(false);
  });
});

// ============================================================
// Face-off: two Jiangs facing each other on same column
// ============================================================
describe("Face-off detection", () => {
  it("should detect face-off: both Jiangs on same column with no blocker (red moves)", () => {
    const board = createBoard({
      "10-4": "black.jiang",
      "3-4": "red.jiang",
    });
    // Red Jiang pada kolom 4, Black Jiang pada kolom 4 — NO pieces between
    // Ini ilegal sebagai posisi (seharusnya tidak bisa terjadi), tapi fungsi
    // isLegalMove akan mengecek face-off saat board state sudah seperti ini.
    // Face-off terdeteksi: dua Jiang di kolom sama, no blocker.
    expect(isFaceOff(board)).toBe(true);
  });

  it("should not detect face-off: Jiangs on different columns", () => {
    const board = createBoard({
      "10-4": "black.jiang",
      "1-3": "red.jiang",
    });
    expect(isFaceOff(board)).toBe(false);
  });

  it("should not detect face-off: piece between two Jiangs", () => {
    const board = createBoard({
      "10-4": "black.jiang",
      "5-4": "red.bing",
      "1-4": "red.jiang",
    });
    expect(isFaceOff(board)).toBe(false);
  });

  it("should not detect face-off: blocker is opponent piece", () => {
    const board = createBoard({
      "10-4": "black.jiang",
      "5-4": "black.pao",
      "1-4": "red.jiang",
    });
    expect(isFaceOff(board)).toBe(false);
  });
});

// ============================================================
// Face-off: moving a piece that creates face-off is ILLEGAL
// ============================================================
describe("Face-off — moving blocker creates illegal position", () => {
  it("should reject moving the only blocker off the column", () => {
    // Red Jiang di (1,4), Black Jiang di (10,4), Red Bing di (5,4) sbg blocker
    // Red Bing pindah ke (5,3) → creates face-off → ILLEGAL for Red
    const board = createBoard({
      "1-4": "red.jiang",
      "5-4": "red.bing",
      "10-4": "black.jiang",
    });
    expect(legal(board, 5, 4, 5, 3, Side.Red)).toBe(false);
  });

  it("should reject moving the only blocker (opponent piece) off the column", () => {
    // Black Pao sbg blocker, Black tries to move it
    const board = createBoard({
      "1-4": "red.jiang",
      "5-4": "black.pao",
      "10-4": "black.jiang",
    });
    expect(legal(board, 5, 4, 5, 3, Side.Black)).toBe(false);
  });

  // NOTE: Test "blocker moves along same column" dan "multiple blockers" akan
  // diaktifkan di Fase 4 setelah Bing/Pao diimplementasi di isLegalMove.
  // Saat ini hanya Jiang yang diimplementasi (Fase 3 scope).
  it.todo("should allow moving blocker along the same column (face-off maintained blocked) - need Bing impl", () => {
    const board = createBoard({
      "1-4": "red.jiang",
      "5-4": "red.bing",
      "10-4": "black.jiang",
    });
    expect(legal(board, 5, 4, 6, 4, Side.Red)).toBe(true);
  });

  it.todo("should allow moving a piece that is NOT the only blocker - need Pao impl", () => {
    const board = createBoard({
      "1-4": "red.jiang",
      "5-4": "red.bing",
      "7-4": "red.pao",
      "10-4": "black.jiang",
    });
    expect(legal(board, 5, 4, 6, 4, Side.Red)).toBe(true);
  });
});

// ============================================================
// Face-off: Jiang itself moving to create face-off
// ============================================================
describe("Face-off — Jiang moving creates face-off", () => {
  it("should reject Jiang moving within palace that creates face-off", () => {
    // Red Jiang (1,3), Black Jiang (10,3) — same col 3, nothing between
    // Wait — this is already face-off. Let's set up a scenario where
    // Red Jiang at (1,4) moves to (1,3) and Black Jiang at (10,3) → face-off
    const board = createBoard({
      "1-4": "red.jiang",
      "10-3": "black.jiang",
    });
    expect(legal(board, 1, 4, 1, 3, Side.Red)).toBe(false);
  });

  it("should allow Jiang moving to column without opponent Jiang", () => {
    const board = createBoard({
      "1-4": "red.jiang",
      "10-5": "black.jiang",
    });
    expect(legal(board, 1, 4, 1, 3, Side.Red)).toBe(true);
  });
});

// ============================================================
// Face-off: captured blocker creates face-off → illegal
// ============================================================
describe("Face-off — capturing opponent blocker creates face-off", () => {
  it("should reject capturing opponent blocker if it creates face-off", () => {
    // Red Jiang (1,4), Black Jiang (10,4).
    // Black Bing at (5,4) — if Red Pao captures it, face-off created
    const board = createBoard({
      "1-4": "red.jiang",
      "5-4": "black.bing",
      "10-4": "black.jiang",
      "3-4": "red.pao",
    });
    // Actually, let's simplify: Red Jiang at (1,4), Black Jiang at (10,4)
    // Black Shi at (5,4) is the only blocker
    // Red Pao captures Black Shi at (5,4) → face-off → illegal
    // But wait, isLegalMove for Pao capture is separate logic.
    // Let's just test: if Red Jiang captures the blocker, that's also face-off
    // Red Jiang at (1,4) cannot capture Black Shi at (2,4) if that 
    // leaves face-off... but (1,4) and (10,4), Shi at (2,4) — if Jiang captures Shi
    // at (2,4), still blocker (nothing changed for face-off because Jiang moved up)
    // Better scenario: black blocker, Red Jiang moves to capture it:
    const board2 = createBoard({
      "1-4": "red.jiang",
      "2-4": "black.bing", // blocker
      "10-4": "black.jiang",
    });
    // Red Jiang moves from (1,4) to (2,4) capturing black Bing
    // After this: Red Jiang at (2,4), Black Jiang at (10,4), same column, nothing between → FACE-OFF
    // This should be ILLEGAL
    expect(legal(board2, 1, 4, 2, 4, Side.Red)).toBe(false);
  });

  it("should allow capturing blocker if another blocker remains", () => {
    const board = createBoard({
      "1-4": "red.jiang",
      "2-4": "black.bing",
      "5-4": "red.bing",
      "10-4": "black.jiang",
    });
    // Red Jiang captures Black Bing at (2,4) → Red Bing at (5,4) still blocks → OK
    expect(legal(board, 1, 4, 2, 4, Side.Red)).toBe(true);
  });
});



