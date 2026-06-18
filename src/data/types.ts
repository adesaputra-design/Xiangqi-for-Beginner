export enum PieceType {
  Jiang = "jiang", // Raja / Jenderal
  Shi = "shi", // Menteri / Penasihat
  Xiang = "xiang", // Gajah
  Ma = "ma", // Kuda
  Che = "che", // Benteng
  Pao = "pao", // Meriam
  Bing = "bing", // Prajurit
}

export enum Side {
  Red = "red",
  Black = "black",
}

export interface Piece {
  type: PieceType;
  side: Side;
}

/**
 * BoardState: 10 baris × 9 kolom
 * Baris 1 = bawah (dari perspektif Merah), Baris 10 = atas
 * Kolom 0 = a, Kolom 8 = i
 * null = sel kosong
 */
export type BoardState = (Piece | null)[][];

/**
 * Koordinat posisi di papan
 * baris 1–10, kolom a–i (0–8)
 */
export interface Position {
  baris: number; // 1–10
  kolom: number; // 0–8 (a–i)
}