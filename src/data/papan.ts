import { BoardState, PieceType, Side, type Piece } from "./types";

/**
 * Helper untuk menyusun posisi papan kustom dari deskripsi ringkas.
 * Dipakai di test cases — tidak dipakai di production render.
 *
 * Format: { "baris-kolom": "red.jiang", "baris-kolom": null, ... }
 * - baris: 1–10
 * - kolom: 0–8 (a–i)
 *
 * Hanya sel yang disebutkan yang di-set; sisanya null.
 */
export function createBoard(
  pieces: Record<string, string | null>
): BoardState {
  const board: BoardState = Array.from({ length: 10 }, () =>
    Array.from({ length: 9 }, () => null)
  );

  for (const [key, value] of Object.entries(pieces)) {
    if (value === null || value === "") {
      continue;
    }
    const [barisStr, kolomStr] = key.split("-");
    const baris = parseInt(barisStr, 10);
    const kolom = parseInt(kolomStr, 10);

    if (isNaN(baris) || isNaN(kolom) || baris < 1 || baris > 10 || kolom < 0 || kolom > 8) {
      throw new Error(`Invalid position: ${key}`);
    }

    const [sideStr, typeStr] = value.split(".");
    const side = sideStr as Side;
    const type = typeStr as PieceType;

    if (!Object.values(Side).includes(side)) {
      throw new Error(`Invalid side: ${sideStr} at ${key}`);
    }
    if (!Object.values(PieceType).includes(type)) {
      throw new Error(`Invalid piece type: ${typeStr} at ${key}`);
    }

    board[baris - 1][kolom] = { type, side };
  }

  return board;
}

/**
 * Posisi awal xiangqi standar.
 * Perspektif: Merah di bawah (baris 1–5), Hitam di atas (baris 6–10).
 */
export function createInitialBoard(): BoardState {
  return createBoard({
    // Baris 1: Merah (bawah) — Benteng, Kuda, Gajah, Menteri, Raja, Menteri, Gajah, Kuda, Benteng
    "1-0": "red.che",
    "1-1": "red.ma",
    "1-2": "red.xiang",
    "1-3": "red.shi",
    "1-4": "red.jiang",
    "1-5": "red.shi",
    "1-6": "red.xiang",
    "1-7": "red.ma",
    "1-8": "red.che",
    // Baris 3: Merah — Meriam
    "3-1": "red.pao",
    "3-7": "red.pao",
    // Baris 4: Merah — Prajurit
    "4-0": "red.bing",
    "4-2": "red.bing",
    "4-4": "red.bing",
    "4-6": "red.bing",
    "4-8": "red.bing",
    // Baris 7: Hitam — Prajurit
    "7-0": "black.bing",
    "7-2": "black.bing",
    "7-4": "black.bing",
    "7-6": "black.bing",
    "7-8": "black.bing",
    // Baris 8: Hitam — Meriam
    "8-1": "black.pao",
    "8-7": "black.pao",
    // Baris 10: Hitam (atas)
    "10-0": "black.che",
    "10-1": "black.ma",
    "10-2": "black.xiang",
    "10-3": "black.shi",
    "10-4": "black.jiang",
    "10-5": "black.shi",
    "10-6": "black.xiang",
    "10-7": "black.ma",
    "10-8": "black.che",
  });
}