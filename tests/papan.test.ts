import { describe, it, expect } from "vitest";
import {
  createBoard,
  createInitialBoard,
} from "../src/data/papan";
import {
  type BoardState,
  type Piece,
  PieceType,
  Side,
} from "../src/data/types";

describe("createBoard", () => {
  it("should return empty 10×9 board when no pieces given", () => {
    const board = createBoard({});
    expect(board).toHaveLength(10);
    for (const baris of board) {
      expect(baris).toHaveLength(9);
      for (const sel of baris) {
        expect(sel).toBeNull();
      }
    }
  });

  it("should place a piece at the correct position", () => {
    const board = createBoard({ "1-4": "red.jiang" });
    const piece = board[0][4];
    expect(piece).not.toBeNull();
    expect(piece!.type).toBe(PieceType.Jiang);
    expect(piece!.side).toBe(Side.Red);
  });

  it("should place black piece at correct position", () => {
    const board = createBoard({ "10-4": "black.jiang" });
    const piece = board[9][4];
    expect(piece).not.toBeNull();
    expect(piece!.type).toBe(PieceType.Jiang);
    expect(piece!.side).toBe(Side.Black);
  });

  it("should place multiple pieces", () => {
    const board = createBoard({
      "1-4": "red.jiang",
      "10-4": "black.jiang",
      "3-1": "red.pao",
    });
    expect(board[0][4]?.type).toBe(PieceType.Jiang);
    expect(board[9][4]?.type).toBe(PieceType.Jiang);
    expect(board[2][1]?.type).toBe(PieceType.Pao);
  });

  it("should handle null values by skipping them (leave cell empty)", () => {
    const board = createBoard({ "5-5": null });
    expect(board[4][5]).toBeNull();
  });

  it("should handle empty string values by skipping them", () => {
    const board = createBoard({ "5-5": "" });
    expect(board[4][5]).toBeNull();
  });

  it("should throw for invalid baris (0)", () => {
    expect(() => createBoard({ "0-4": "red.jiang" })).toThrow(
      "Invalid position"
    );
  });

  it("should throw for invalid baris (11)", () => {
    expect(() => createBoard({ "11-4": "red.jiang" })).toThrow(
      "Invalid position"
    );
  });

  it("should throw for invalid kolom (9)", () => {
    expect(() => createBoard({ "5-9": "red.jiang" })).toThrow(
      "Invalid position"
    );
  });

  it("should throw for invalid kolom (-1)", () => {
    expect(() => createBoard({ "5--1": "red.jiang" })).toThrow(
      "Invalid position"
    );
  });

  it("should throw for invalid side", () => {
    expect(() => createBoard({ "5-4": "blue.jiang" })).toThrow(
      "Invalid side"
    );
  });

  it("should throw for invalid piece type", () => {
    expect(() => createBoard({ "5-4": "red.nonexistent" })).toThrow(
      "Invalid piece type"
    );
  });

  it("should throw for malformed key", () => {
    expect(() => createBoard({ "abc": "red.jiang" })).toThrow(
      "Invalid position"
    );
  });

  it("should accept all 7 piece types", () => {
    const types = [
      PieceType.Jiang,
      PieceType.Shi,
      PieceType.Xiang,
      PieceType.Ma,
      PieceType.Che,
      PieceType.Pao,
      PieceType.Bing,
    ];
    for (let i = 0; i < types.length; i++) {
      const board = createBoard({ [`${i + 1}-0`]: `red.${types[i]}` });
      expect(board[i][0]?.type).toBe(types[i]);
    }
  });
});

describe("createInitialBoard", () => {
  const board = createInitialBoard();

  it("should have 10 rows and 9 columns", () => {
    expect(board).toHaveLength(10);
    for (const baris of board) {
      expect(baris).toHaveLength(9);
    }
  });

  it("should have exactly 32 pieces (16 each side)", () => {
    let redCount = 0;
    let blackCount = 0;
    for (const baris of board) {
      for (const sel of baris) {
        if (sel) {
          if (sel.side === Side.Red) redCount++;
          if (sel.side === Side.Black) blackCount++;
        }
      }
    }
    expect(redCount).toBe(16);
    expect(blackCount).toBe(16);
  });

  it("should have Jiang at correct positions", () => {
    expect(board[0][4]?.type).toBe(PieceType.Jiang);
    expect(board[0][4]?.side).toBe(Side.Red);
    expect(board[9][4]?.type).toBe(PieceType.Jiang);
    expect(board[9][4]?.side).toBe(Side.Black);
  });

  it("should have Che (Benteng) at corners", () => {
    // Merah: baris 1, kolom 0 dan 8
    expect(board[0][0]?.type).toBe(PieceType.Che);
    expect(board[0][0]?.side).toBe(Side.Red);
    expect(board[0][8]?.type).toBe(PieceType.Che);
    expect(board[0][8]?.side).toBe(Side.Red);
    // Hitam: baris 10, kolom 0 dan 8
    expect(board[9][0]?.type).toBe(PieceType.Che);
    expect(board[9][0]?.side).toBe(Side.Black);
    expect(board[9][8]?.type).toBe(PieceType.Che);
    expect(board[9][8]?.side).toBe(Side.Black);
  });

  it("should have Pao at correct positions", () => {
    // Merah: baris 3, kolom 1 dan 7
    expect(board[2][1]?.type).toBe(PieceType.Pao);
    expect(board[2][1]?.side).toBe(Side.Red);
    expect(board[2][7]?.type).toBe(PieceType.Pao);
    expect(board[2][7]?.side).toBe(Side.Red);
    // Hitam: baris 8, kolom 1 dan 7
    expect(board[7][1]?.type).toBe(PieceType.Pao);
    expect(board[7][1]?.side).toBe(Side.Black);
    expect(board[7][7]?.type).toBe(PieceType.Pao);
    expect(board[7][7]?.side).toBe(Side.Black);
  });

  it("should have Bing at correct positions (5 per side)", () => {
    const redBingKolom = [0, 2, 4, 6, 8];
    for (const c of redBingKolom) {
      expect(board[3][c]?.type).toBe(PieceType.Bing);
      expect(board[3][c]?.side).toBe(Side.Red);
    }
    const blackBingKolom = [0, 2, 4, 6, 8];
    for (const c of blackBingKolom) {
      expect(board[6][c]?.type).toBe(PieceType.Bing);
      expect(board[6][c]?.side).toBe(Side.Black);
    }
  });

  it("should have 2 Shi, 2 Xiang, 2 Ma per side at correct rows", () => {
    // Merah: baris 1
    const redPieces = [
      { kolom: 1, type: PieceType.Ma },
      { kolom: 2, type: PieceType.Xiang },
      { kolom: 3, type: PieceType.Shi },
      { kolom: 5, type: PieceType.Shi },
      { kolom: 6, type: PieceType.Xiang },
      { kolom: 7, type: PieceType.Ma },
    ];
    for (const { kolom, type } of redPieces) {
      expect(board[0][kolom]?.type).toBe(type);
      expect(board[0][kolom]?.side).toBe(Side.Red);
    }
    // Hitam: baris 10
    const blackPieces = [
      { kolom: 1, type: PieceType.Ma },
      { kolom: 2, type: PieceType.Xiang },
      { kolom: 3, type: PieceType.Shi },
      { kolom: 5, type: PieceType.Shi },
      { kolom: 6, type: PieceType.Xiang },
      { kolom: 7, type: PieceType.Ma },
    ];
    for (const { kolom, type } of blackPieces) {
      expect(board[9][kolom]?.type).toBe(type);
      expect(board[9][kolom]?.side).toBe(Side.Black);
    }
  });
});

describe("BoardState immutability / structure", () => {
  it("should be cloneable without shared references", () => {
    const board = createInitialBoard();
    const clone: BoardState = board.map((baris) => [...baris]);

    // Modify clone
    clone[0][4] = null;
    // Original harus tetap ada
    expect(board[0][4]?.type).toBe(PieceType.Jiang);
  });

  it("should represent empty board faithfully", () => {
    const empty = createBoard({});
    for (const baris of empty) {
      for (const sel of baris) {
        expect(sel).toBeNull();
      }
    }
  });
});