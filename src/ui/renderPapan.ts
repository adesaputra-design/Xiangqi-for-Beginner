import {
  type BoardState,
  type Piece,
  type Position,
  PieceType,
  Side,
} from "../data/types";

// ============================================================
// Konstanta rendering
// ============================================================

/** Ukuran SVG viewport */
const BOARD_WIDTH = 540;
const BOARD_HEIGHT = 600;
const PADDING = 40;
const CELL_W = (BOARD_WIDTH - PADDING * 2) / 8; // 57.5
const CELL_H = (BOARD_HEIGHT - PADDING * 2) / 9; // 57.77...

/** Radius bidak */
const PIECE_R = 20;

// ============================================================
// Helper koordinat
// ============================================================

function cellX(kolom: number): number {
  return PADDING + kolom * CELL_W;
}

function cellY(baris: number): number {
  // baris 1 = paling bawah (Merah), baris 10 = paling atas
  return PADDING + (10 - baris) * CELL_H;
}

// ============================================================
// Label bilingual
// ============================================================

const NAMA_BIDAK: Record<PieceType, string> = {
  [PieceType.Jiang]: "Raja (Jiang)",
  [PieceType.Shi]: "Menteri (Shi)",
  [PieceType.Xiang]: "Gajah (Xiang)",
  [PieceType.Ma]: "Kuda (Ma)",
  [PieceType.Che]: "Benteng (Che)",
  [PieceType.Pao]: "Meriam (Pao)",
  [PieceType.Bing]: "Prajurit (Bing)",
};

const SIMBOL_BIDAK: Record<PieceType, Record<Side, string>> = {
  [PieceType.Jiang]: { red: "帥", black: "將" },
  [PieceType.Shi]: { red: "仕", black: "士" },
  [PieceType.Xiang]: { red: "相", black: "象" },
  [PieceType.Ma]: { red: "傌", black: "馬" },
  [PieceType.Che]: { red: "俥", black: "車" },
  [PieceType.Pao]: { red: "炮", black: "砲" },
  [PieceType.Bing]: { red: "兵", black: "卒" },
};

// ============================================================
// Render Papan
// ============================================================

function renderGrid(): string {
  let lines = "";

  // Garis horizontal (10 baris)
  for (let r = 0; r < 10; r++) {
    const y = cellY(r + 1);
    lines += `<line x1="${cellX(0)}" y1="${y}" x2="${cellX(8)}" y2="${y}" stroke="#3d2b1f" stroke-width="1"/>`;
  }

  // Garis vertikal — dengan sungai di tengah (antara baris 5 dan 6)
  // Kolom 1–7 (a–g) vertikal penuh
  for (let c = 1; c <= 7; c++) {
    const x = cellX(c);
    // Atas (baris 6–10)
    lines += `<line x1="${x}" y1="${cellY(6)}" x2="${x}" y2="${cellY(10)}" stroke="#3d2b1f" stroke-width="1"/>`;
    // Bawah (baris 1–5)
    lines += `<line x1="${x}" y1="${cellY(1)}" x2="${x}" y2="${cellY(5)}" stroke="#3d2b1f" stroke-width="1"/>`;
  }
  // Kolom 0 dan 8 vertikal penuh (tepi kiri-kanan)
  for (const c of [0, 8]) {
    const x = cellX(c);
    lines += `<line x1="${x}" y1="${cellY(1)}" x2="${x}" y2="${cellY(10)}" stroke="#3d2b1f" stroke-width="1.5"/>`;
  }

  // Garis diagonal di istana (palace)
  // Istana Merah: (kolom 3, baris 1) ↔ (kolom 5, baris 3) dan (kolom 5, baris 1) ↔ (kolom 3, baris 3)
  lines += `<line x1="${cellX(3)}" y1="${cellY(1)}" x2="${cellX(5)}" y2="${cellY(3)}" stroke="#3d2b1f" stroke-width="1"/>`;
  lines += `<line x1="${cellX(5)}" y1="${cellY(1)}" x2="${cellX(3)}" y2="${cellY(3)}" stroke="#3d2b1f" stroke-width="1"/>`;
  // Istana Hitam: (kolom 3, baris 8) ↔ (kolom 5, baris 10) dan (kolom 5, baris 8) ↔ (kolom 3, baris 10)
  lines += `<line x1="${cellX(3)}" y1="${cellY(8)}" x2="${cellX(5)}" y2="${cellY(10)}" stroke="#3d2b1f" stroke-width="1"/>`;
  lines += `<line x1="${cellX(5)}" y1="${cellY(8)}" x2="${cellX(3)}" y2="${cellY(10)}" stroke="#3d2b1f" stroke-width="1"/>`;

  // Label sungai
  const riverY = (cellY(5) + cellY(6)) / 2;
  lines += `<text x="${BOARD_WIDTH / 2}" y="${riverY}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="#8b7355" font-weight="bold" letter-spacing="8">楚 河　　　　漢 界</text>`;

  // Label koordinat kolom (a–i) di bawah dan atas
  const kolomLabels = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  for (let c = 0; c < 9; c++) {
    const x = cellX(c);
    lines += `<text x="${x}" y="${cellY(1) + 18}" text-anchor="middle" font-size="10" fill="#6b5a40">${kolomLabels[c]}</text>`;
    lines += `<text x="${x}" y="${cellY(10) - 12}" text-anchor="middle" font-size="10" fill="#6b5a40">${kolomLabels[c]}</text>`;
  }

  // Label koordinat baris (1–10) di kiri dan kanan
  for (let r = 1; r <= 10; r++) {
    const y = cellY(r);
    lines += `<text x="${cellX(0) - 14}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="10" fill="#6b5a40">${r}</text>`;
    lines += `<text x="${cellX(8) + 14}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="10" fill="#6b5a40">${r}</text>`;
  }

  // Cross-hash di tepi kiri-kanan (seperti papan asli)
  for (const c of [0, 8]) {
    for (let r = 2; r <= 4; r++) {
      if ((r + c) % 2 === 0) continue;
      const cx = cellX(c);
      const cy = cellY(r);
      const s = 5;
      lines += `<line x1="${cx - s}" y1="${cy - s}" x2="${cx + s}" y2="${cy + s}" stroke="#3d2b1f" stroke-width="0.5" opacity="0.4"/>`;
      lines += `<line x1="${cx - s}" y1="${cy + s}" x2="${cx + s}" y2="${cy - s}" stroke="#3d2b1f" stroke-width="0.5" opacity="0.4"/>`;
    }
    for (let r = 7; r <= 9; r++) {
      if ((r + c) % 2 === 0) continue;
      const cx = cellX(c);
      const cy = cellY(r);
      const s = 5;
      lines += `<line x1="${cx - s}" y1="${cy - s}" x2="${cx + s}" y2="${cy + s}" stroke="#3d2b1f" stroke-width="0.5" opacity="0.4"/>`;
      lines += `<line x1="${cx - s}" y1="${cy + s}" x2="${cx + s}" y2="${cy - s}" stroke="#3d2b1f" stroke-width="0.5" opacity="0.4"/>`;
    }
  }

  return lines;
}

function renderPieces(board: BoardState): string {
  let pieces = "";
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 9; c++) {
      const piece = board[r][c];
      if (!piece) continue;
      const cx = cellX(c);
      const cy = cellY(r + 1);
      const symbol = SIMBOL_BIDAK[piece.type][piece.side];
      const nama = NAMA_BIDAK[piece.type];
      const fillColor = piece.side === Side.Red ? "#c0392b" : "#1a1a1a";
      const strokeColor = piece.side === Side.Red ? "#922b21" : "#000000";
      const textColor = piece.side === Side.Red ? "#f5deb3" : "#e8d5b7";

      pieces += `
        <g class="piece" data-row="${r}" data-col="${c}" data-side="${piece.side}" data-type="${piece.type}">
          <title>${nama} (${piece.side === Side.Red ? "Merah" : "Hitam"})</title>
          <circle cx="${cx}" cy="${cy}" r="${PIECE_R}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>
          <circle cx="${cx}" cy="${cy}" r="${PIECE_R - 4}" fill="none" stroke="${textColor}" stroke-width="0.8" opacity="0.5"/>
          <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="${textColor}" font-weight="bold" style="pointer-events:none;">${symbol}</text>
        </g>`;
    }
  }
  return pieces;
}

// ============================================================
// Public API
// ============================================================

export interface RenderPapanOptions {
  board: BoardState;
  /** ID container yang akan di-render */
  containerId?: string;
  /** Apakah tampilkan label koordinat */
  showCoordinates?: boolean;
}

export function renderPapanSVG(options: RenderPapanOptions): string {
  const { board } = options;

  const svg = `
    <svg
      viewBox="0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}"
      xmlns="http://www.w3.org/2000/svg"
      class="papan-svg"
      role="img"
      aria-label="Papan Xiangqi 9×10"
    >
      <!-- Background -->
      <rect x="0" y="0" width="${BOARD_WIDTH}" height="${BOARD_HEIGHT}" fill="#f5deb3" rx="4"/>

      <!-- Grid -->
      ${renderGrid()}

      <!-- Pieces -->
      ${renderPieces(board)}
    </svg>`;

  return svg;
}

/**
 * Render papan ke DOM container.
 */
export function renderPapan(
  container: HTMLElement,
  board: BoardState
): void {
  container.innerHTML = `
    <div class="papan-container">
      <div class="papan-wrapper">
        ${renderPapanSVG({ board })}
      </div>
    </div>
  `;
}