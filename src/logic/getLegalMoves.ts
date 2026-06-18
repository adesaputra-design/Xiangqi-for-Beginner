import {
  type BoardState,
  type Position,
  type Piece,
  PieceType,
  Side,
} from "../data/types";
import { isLegalMove } from "./isLegalMove";

export interface LegalMove {
  ke: Position;
  /** "move" (hijau) vs "capture" (merah) */
  jenis: "move" | "capture";
}

/**
 * Mendapatkan semua langkah legal untuk sebuah bidak di posisi tertentu.
 */
export function getLegalMoves(
  board: BoardState,
  dari: Position
): LegalMove[] {
  const piece = board[dari.baris - 1][dari.kolom];
  if (!piece) return [];

  const moves: LegalMove[] = [];

  for (let r = 1; r <= 10; r++) {
    for (let c = 0; c < 9; c++) {
      if (r === dari.baris && c === dari.kolom) continue;

      const ke: Position = { baris: r, kolom: c };
      if (isLegalMove(board, dari, ke, piece.side)) {
        const target = board[r - 1][c];
        moves.push({
          ke,
          jenis: target ? "capture" : "move",
        });
      }
    }
  }

  return moves;
}