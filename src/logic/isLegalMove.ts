import {
  type BoardState,
  type Position,
  type Piece,
  PieceType,
  Side,
} from "../data/types";

// ============================================================
// Face-off Detection
// ============================================================

/**
 * Mengecek apakah dua Jenderal saling berhadapan (face-off) di papan.
 * Face-off terjadi jika dua Jiang berada di kolom yang sama
 * dan tidak ada bidak lain di antara mereka.
 */
export function isFaceOff(board: BoardState): boolean {
  let redJiangPos: Position | null = null;
  let blackJiangPos: Position | null = null;

  // Cari posisi kedua Jiang
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 9; c++) {
      const piece = board[r][c];
      if (piece?.type === PieceType.Jiang) {
        if (piece.side === Side.Red) {
          redJiangPos = { baris: r + 1, kolom: c };
        } else {
          blackJiangPos = { baris: r + 1, kolom: c };
        }
      }
    }
  }

  // Jika salah satu Jiang tidak ada, tidak mungkin face-off
  if (!redJiangPos || !blackJiangPos) return false;

  // Jika tidak di kolom yang sama, tidak face-off
  if (redJiangPos.kolom !== blackJiangPos.kolom) return false;

  // Cek apakah ada bidak di antara mereka
  const kolom = redJiangPos.kolom;
  const barisMin = Math.min(redJiangPos.baris, blackJiangPos.baris);
  const barisMax = Math.max(redJiangPos.baris, blackJiangPos.baris);

  for (let r = barisMin + 1; r < barisMax; r++) {
    if (board[r - 1][kolom] !== null) {
      return false; // Ada blocker
    }
  }

  // Tidak ada blocker → face-off
  return true;
}

// ============================================================
// Simulasi langkah (dry-run): apa yang terjadi pada board
// jika sebuah langkah dilakukan?
// ============================================================

function simulateMove(
  board: BoardState,
  dari: Position,
  ke: Position
): BoardState {
  const newBoard: BoardState = board.map((baris) => [...baris]);
  newBoard[ke.baris - 1][ke.kolom] = newBoard[dari.baris - 1][dari.kolom];
  newBoard[dari.baris - 1][dari.kolom] = null;
  return newBoard;
}

// ============================================================
// Palace check
// ============================================================

function isInPalace(baris: number, kolom: number, side: Side): boolean {
  // Merah: baris 1–3, kolom 3–5
  // Hitam: baris 8–10, kolom 3–5
  if (kolom < 3 || kolom > 5) return false;
  if (side === Side.Red) return baris >= 1 && baris <= 3;
  return baris >= 8 && baris <= 10;
}

// ============================================================
// isLegalMove — Main function
// ============================================================

/**
 * Mengecek apakah sebuah langkah legal.
 * - Memvalidasi gerakan dasar bidak
 * - Memvalidasi tidak menangkap bidak sendiri
 * - Memvalidasi langkah tidak menciptakan face-off
 *
 * Catatan: Fase 3 hanya implementasi Jiang. Piece lain
 * mengembalikan false (belum diimplementasi).
 */
export function isLegalMove(
  board: BoardState,
  dari: Position,
  ke: Position,
  side: Side
): boolean {
  // Validasi koordinat dasar
  if (
    dari.baris < 1 ||
    dari.baris > 10 ||
    dari.kolom < 0 ||
    dari.kolom > 8 ||
    ke.baris < 1 ||
    ke.baris > 10 ||
    ke.kolom < 0 ||
    ke.kolom > 8
  ) {
    return false;
  }

  const piece = board[dari.baris - 1][dari.kolom];
  if (!piece) return false; // Tidak ada bidak di posisi asal

  // Hanya bisa menggerakkan bidak sendiri
  if (piece.side !== side) return false;

  // Tidak boleh menangkap bidak sendiri
  const target = board[ke.baris - 1][ke.kolom];
  if (target && target.side === side) return false;

  // Validasi gerakan per jenis bidak
  let moveValid = false;

  switch (piece.type) {
    case PieceType.Jiang:
      moveValid = isValidJiangMove(dari, ke, side);
      break;
    // Piece lain belum diimplementasi — return false
    default:
      moveValid = false;
  }

  if (!moveValid) return false;

  // Simulasikan langkah dan cek face-off
  const newBoard = simulateMove(board, dari, ke);
  if (isFaceOff(newBoard)) return false;

  return true;
}

// ============================================================
// Jiang movement validation
// ============================================================

function isValidJiangMove(
  dari: Position,
  ke: Position,
  side: Side
): boolean {
  // Hanya boleh 1 langkah ortogonal
  const dBaris = Math.abs(ke.baris - dari.baris);
  const dKolom = Math.abs(ke.kolom - dari.kolom);

  // Tepat 1 langkah: (1,0) atau (0,1)
  if (!((dBaris === 1 && dKolom === 0) || (dBaris === 0 && dKolom === 1))) {
    return false;
  }

  // Harus tetap dalam palace
  if (!isInPalace(ke.baris, ke.kolom, side)) {
    return false;
  }

  return true;
}