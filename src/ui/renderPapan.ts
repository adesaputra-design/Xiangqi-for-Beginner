import {
  type BoardState,
  type Piece,
  type Position,
  PieceType,
  Side,
} from "../data/types";
import { getLegalMoves, type LegalMove } from "../logic/getLegalMoves";

// ============================================================
// Konstanta rendering
// ============================================================

const BOARD_WIDTH = 540;
const BOARD_HEIGHT = 600;
const PADDING = 40;
const CELL_W = (BOARD_WIDTH - PADDING * 2) / 8;
const CELL_H = (BOARD_HEIGHT - PADDING * 2) / 9;
const PIECE_R = 20;

// ============================================================
// Helper koordinat
// ============================================================

function cellX(kolom: number): number {
  return PADDING + kolom * CELL_W;
}

function cellY(baris: number): number {
  return PADDING + (10 - baris) * CELL_H;
}

// ============================================================
// Label bilingual
// ============================================================

/** Nama bidak bilingual + singkatan WXF */
const NAMA_BIDAK: Record<PieceType, string> = {
  [PieceType.Jiang]: "Jenderal / Raja (K)",
  [PieceType.Shi]: "Menteri / Penasihat (A)",
  [PieceType.Xiang]: "Gajah (E)",
  [PieceType.Ma]: "Kuda (H)",
  [PieceType.Che]: "Benteng (R)",
  [PieceType.Pao]: "Meriam (C)",
  [PieceType.Bing]: "Prajurit (P)",
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
// State interaktif
// ============================================================

let selectedPiece: Position | null = null;
let legalMoves: LegalMove[] = [];
let currentBoard: BoardState | null = null;

// ============================================================
// Render Grid
// ============================================================

function renderGrid(): string {
  let lines = "";

  for (let r = 0; r < 10; r++) {
    const y = cellY(r + 1);
    lines += `<line x1="${cellX(0)}" y1="${y}" x2="${cellX(8)}" y2="${y}" stroke="#3d2b1f" stroke-width="1"/>`;
  }

  for (let c = 1; c <= 7; c++) {
    const x = cellX(c);
    lines += `<line x1="${x}" y1="${cellY(6)}" x2="${x}" y2="${cellY(10)}" stroke="#3d2b1f" stroke-width="1"/>`;
    lines += `<line x1="${x}" y1="${cellY(1)}" x2="${x}" y2="${cellY(5)}" stroke="#3d2b1f" stroke-width="1"/>`;
  }
  for (const c of [0, 8]) {
    const x = cellX(c);
    lines += `<line x1="${x}" y1="${cellY(1)}" x2="${x}" y2="${cellY(10)}" stroke="#3d2b1f" stroke-width="1.5"/>`;
  }

  // Diagonal istana
  lines += `<line x1="${cellX(3)}" y1="${cellY(1)}" x2="${cellX(5)}" y2="${cellY(3)}" stroke="#3d2b1f" stroke-width="1"/>`;
  lines += `<line x1="${cellX(5)}" y1="${cellY(1)}" x2="${cellX(3)}" y2="${cellY(3)}" stroke="#3d2b1f" stroke-width="1"/>`;
  lines += `<line x1="${cellX(3)}" y1="${cellY(8)}" x2="${cellX(5)}" y2="${cellY(10)}" stroke="#3d2b1f" stroke-width="1"/>`;
  lines += `<line x1="${cellX(5)}" y1="${cellY(8)}" x2="${cellX(3)}" y2="${cellY(10)}" stroke="#3d2b1f" stroke-width="1"/>`;

  // Label sungai
  const riverY = (cellY(5) + cellY(6)) / 2;
  lines += `<text x="${BOARD_WIDTH / 2}" y="${riverY}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="#8b7355" font-weight="bold" letter-spacing="8">楚 河　　　　漢 界</text>`;

  // Koordinat WXF: lajur 9 (kiri) → 1 (kanan) dari perspektif Merah
  // kolom 0 = lajur 9, kolom 8 = lajur 1
  for (let c = 0; c < 9; c++) {
    const wxfFile = 9 - c; // 9, 8, 7, ..., 1
    const x = cellX(c);
    lines += `<text x="${x}" y="${cellY(1) + 18}" text-anchor="middle" font-size="10" fill="#6b5a40">${wxfFile}</text>`;
    lines += `<text x="${x}" y="${cellY(10) - 12}" text-anchor="middle" font-size="10" fill="#6b5a40">${wxfFile}</text>`;
  }
  for (let r = 1; r <= 10; r++) {
    const y = cellY(r);
    lines += `<text x="${cellX(0) - 14}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="10" fill="#6b5a40">${r}</text>`;
    lines += `<text x="${cellX(8) + 14}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="10" fill="#6b5a40">${r}</text>`;
  }

  // Cross-hash
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

// ============================================================
// Render Highlights
// ============================================================

function renderHighlights(): string {
  if (!selectedPiece || legalMoves.length === 0) return "";

  // Highlight selected piece
  const scx = cellX(selectedPiece.kolom);
  const scy = cellY(selectedPiece.baris);
  let output = `<rect x="${scx - PIECE_R - 2}" y="${scy - PIECE_R - 2}" width="${PIECE_R * 2 + 4}" height="${PIECE_R * 2 + 4}" rx="99" fill="none" stroke="#0077cc" stroke-width="2.5" stroke-dasharray="6 3" opacity="0.9"/>`;

  // Highlight legal moves
  for (const move of legalMoves) {
    const mx = cellX(move.ke.kolom);
    const my = cellY(move.ke.baris);
    const target = currentBoard?.[move.ke.baris - 1]?.[move.ke.kolom];

    if (target) {
      // Capture → ring merah
      output += `<circle cx="${mx}" cy="${my}" r="${PIECE_R + 3}" fill="none" stroke="#dc2626" stroke-width="2.5" opacity="0.85"/>`;
      output += `<circle cx="${mx}" cy="${my}" r="5" fill="#dc2626" opacity="0.6"/>`;
    } else {
      // Move → dot hijau
      output += `<circle cx="${mx}" cy="${my}" r="7" fill="#16a34a" opacity="0.7"/>`;
      output += `<circle cx="${mx}" cy="${my}" r="11" fill="none" stroke="#16a34a" stroke-width="1.5" opacity="0.4"/>`;
    }
  }

  return output;
}

// ============================================================
// Render Pieces
// ============================================================

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
          <title>${nama} (${piece.side === Side.Red ? "Merah" : "Hitam"}) — Klik untuk lihat langkah legal</title>
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
  containerId?: string;
  showCoordinates?: boolean;
  /** Mode interaktif: klik bidak untuk highlight langkah legal */
  interactive?: boolean;
}

export function renderPapanSVG(options: RenderPapanOptions): string {
  const { board } = options;
  currentBoard = board;

  const svg = `
    <svg
      viewBox="0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}"
      xmlns="http://www.w3.org/2000/svg"
      class="papan-svg"
      role="img"
      aria-label="Papan Xiangqi 9×10"
    >
      <rect x="0" y="0" width="${BOARD_WIDTH}" height="${BOARD_HEIGHT}" fill="#f5deb3" rx="4"/>
      ${renderGrid()}
      ${renderHighlights()}
      ${renderPieces(board)}
    </svg>`;

  return svg;
}

export function renderPapan(
  container: HTMLElement,
  board: BoardState,
  interactive = true
): void {
  currentBoard = board;
  selectedPiece = null;
  legalMoves = [];

  container.innerHTML = `
    <div class="papan-container">
      <a href="#" class="papan-back-btn" id="btn-back-beranda">← Kembali ke Beranda</a>
      <div class="papan-wrapper" id="papan-wrapper">
        ${renderPapanSVG({ board })}
      </div>
    </div>
  `;

  // Attach back button
  const backBtn = container.querySelector("#btn-back-beranda");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      selectedPiece = null;
      legalMoves = [];
      window.dispatchEvent(new CustomEvent("navigate-beranda"));
    });
  }

  if (!interactive) return;

  // Attach click handlers to pieces via SVG
  const svg = container.querySelector(".papan-svg");
  if (!svg) return;

  svg.addEventListener("click", (e) => {
    const target = e.target as SVGElement;
    const pieceGroup = target.closest(".piece") as SVGGElement | null;

    if (!pieceGroup) {
      // Klik di luar bidak → deselect
      selectedPiece = null;
      legalMoves = [];
      rerenderPapan(container, board);
      return;
    }

    const baris = parseInt(pieceGroup.dataset.row || "", 10) + 1;
    const kolom = parseInt(pieceGroup.dataset.col || "", 10);

    if (isNaN(baris) || isNaN(kolom)) return;

    selectedPiece = { baris, kolom };
    legalMoves = getLegalMoves(board, selectedPiece);
    rerenderPapan(container, board);
  });
}

function rerenderPapan(container: HTMLElement, board: BoardState): void {
  const wrapper = container.querySelector("#papan-wrapper");
  if (!wrapper) return;
  wrapper.innerHTML = renderPapanSVG({ board });
}