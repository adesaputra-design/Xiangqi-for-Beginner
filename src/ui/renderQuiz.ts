import {
  type QuizSession,
  type QuizSoal,
  type TipeTaktik,
  createQuizSession,
  jawabSoal,
  lanjutSoal,
  hitungSkor,
  soalSalah,
} from "../logic/quizEngine";
import type { BoardState } from "../data/types";
import { renderPapanSVG } from "./renderPapan";
import { createBoard } from "../data/papan";
import { hitungErrorPerTipe } from "../logic/sesiLatihan";

// ============================================================
// State quiz lokal
// ============================================================

let session: QuizSession | null = null;
let boardMap: Record<string, Record<string, string | null>> = {};
let onSelesaiCallback: ((skor: ReturnType<typeof hitungSkor>, session: QuizSession) => void) | null = null;

// ============================================================
// Render Quiz
// ============================================================

export interface QuizConfig {
  soal: QuizSoal[];
  boardMap?: Record<string, Record<string, string | null>>;
  judulModul: string;
  modulId: string;
  onSelesai?: (skor: ReturnType<typeof hitungSkor>, session: QuizSession) => void;
}

export function renderQuiz(container: HTMLElement, config: QuizConfig): void {
  session = createQuizSession(config.soal);
  boardMap = config.boardMap || {};
  onSelesaiCallback = config.onSelesai || null;

  renderSoal(container, config.judulModul);
}

// ============================================================
// Render satu soal
// ============================================================

function renderSoal(container: HTMLElement, judulModul: string): void {
  if (!session || session.selesai) {
    renderSkor(container, judulModul);
    return;
  }

  const soal = session.soal[session.currentIndex];
  const total = session.soal.length;
  const currentNum = session.currentIndex + 1;

  // Render papan jika ada
  let boardHtml = "";
  if (soal.boardKey && boardMap[soal.boardKey]) {
    const board = createBoard(boardMap[soal.boardKey]);
    boardHtml = `
      <div class="quiz-board">
        ${renderPapanSVG({ board, showCoordinates: false })}
      </div>`;
  }

  const pilihanHtml = soal.pilihan
    .map(
      (p, i) => `
    <button class="quiz-pilihan-btn" data-index="${i}" type="button">
      <span class="quiz-pilihan-label">${String.fromCharCode(65 + i)}</span>
      <span class="quiz-pilihan-text">${p}</span>
    </button>`
    )
    .join("");

  container.innerHTML = `
    <div class="quiz-container">
      <a href="#" class="papan-back-btn" id="btn-back-modul">← Kembali ke Daftar Modul</a>
      <div class="quiz-header">
        <h2 class="quiz-judul">${judulModul}</h2>
        <p class="quiz-progress">Soal ${currentNum} dari ${total}</p>
      </div>
      ${boardHtml}
      <div class="quiz-soal">
        <p class="quiz-pertanyaan">${soal.pertanyaan}</p>
      </div>
      <div class="quiz-pilihan">
        ${pilihanHtml}
      </div>
      <div class="quiz-feedback" id="quiz-feedback" style="display:none;"></div>
      <div class="quiz-actions" id="quiz-actions" style="display:none;">
        <button class="quiz-lanjut-btn" id="btn-lanjut">Lanjut →</button>
      </div>
    </div>
  `;

  // Attach event handlers
  attachQuizEvents(container, judulModul);
}

// ============================================================
// Event handlers
// ============================================================

function attachQuizEvents(container: HTMLElement, judulModul: string): void {
  // Back to beranda
  const backBtn = container.querySelector("#btn-back-modul");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      session = null;
      window.dispatchEvent(new CustomEvent("navigate-beranda"));
    });
  }

  // Pilihan buttons
  const pilihanBtns = container.querySelectorAll(".quiz-pilihan-btn");
  pilihanBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!session || session.selesai) return;
      const index = parseInt((btn as HTMLElement).dataset.index || "", 10);
      handleJawaban(container, index, judulModul);
    });
  });

  // Lanjut button
  const lanjutBtn = container.querySelector("#btn-lanjut");
  if (lanjutBtn) {
    lanjutBtn.addEventListener("click", () => {
      if (!session) return;
      lanjutSoal(session);
      renderSoal(container, judulModul);
    });
  }
}

// ============================================================
// Handle jawaban
// ============================================================

function handleJawaban(
  container: HTMLElement,
  pilihanIndex: number,
  judulModul: string
): void {
  if (!session) return;

  const result = jawabSoal(session, pilihanIndex);

  // Disable semua tombol pilihan
  const pilihanBtns = container.querySelectorAll(".quiz-pilihan-btn");
  pilihanBtns.forEach((btn) => {
    (btn as HTMLButtonElement).disabled = true;
    const idx = parseInt((btn as HTMLElement).dataset.index || "", 10);
    if (idx === result.kunci) {
      btn.classList.add("quiz-pilihan--benar");
    } else if (idx === pilihanIndex && !result.benar) {
      btn.classList.add("quiz-pilihan--salah");
    }
  });

  // Tampilkan feedback
  const feedback = container.querySelector("#quiz-feedback") as HTMLElement;
  if (feedback) {
    feedback.style.display = "block";
    feedback.innerHTML = `
      <div class="quiz-feedback__icon">${result.benar ? "✅" : "❌"}</div>
      <div class="quiz-feedback__status">${result.benar ? "Benar!" : "Salah"}</div>
      <div class="quiz-feedback__penjelasan">${result.penjelasan}</div>
    `;
  }

  // Tampilkan tombol lanjut
  const actions = container.querySelector("#quiz-actions") as HTMLElement;
  if (actions) {
    actions.style.display = "block";
  }
}

// ============================================================
// Render Skor Akhir
// ============================================================

function renderSkor(container: HTMLElement, judulModul: string): void {
  if (!session) return;

  const skor = hitungSkor(session);
  const salah = soalSalah(session);
  const isiPuzzle = session.soal.length > 0 && session.soal[0].tipeTaktik !== undefined;

  const passingGrade = skor.persen >= 70;

  // Build taktik breakdown (only for puzzle sessions)
  let taktikHtml = "";
  if (isiPuzzle) {
    const errorPerTipe = hitungErrorPerTipe(
      session.soal as any[],
      session.jawaban
    );
    const tipeList: { tipe: TipeTaktik; label: string; ikon: string }[] = [
      { tipe: "serangan", label: "Serangan", ikon: "⚔️" },
      { tipe: "pertahanan", label: "Pertahanan", ikon: "🛡️" },
      { tipe: "posisi", label: "Posisi", ikon: "📐" },
      { tipe: "endgame", label: "Endgame", ikon: "🏁" },
    ];

    const rows = tipeList
      .map((t) => {
        const totalTipe = session!.soal.filter(
          (s) => s.tipeTaktik === t.tipe
        ).length;
        const error = errorPerTipe[t.tipe];
        const benar = totalTipe - error;
        const persen = totalTipe > 0 ? Math.round((benar / totalTipe) * 100) : 0;
        const isLemah = persen < 50 && totalTipe > 0;

        if (totalTipe === 0) return "";

        return `
          <div class="breakdown-row ${isLemah ? "breakdown-row--lemah" : ""}">
            <span class="breakdown-row__ikon">${t.ikon}</span>
            <span class="breakdown-row__label">${t.label}</span>
            <span class="breakdown-row__nilai">${benar}/${totalTipe} benar</span>
            <span class="breakdown-row__persen ${isLemah ? "breakdown-row__persen--lemah" : "breakdown-row__persen--baik"}">${persen}%</span>
          </div>`;
      })
      .filter(Boolean)
      .join("");

    taktikHtml = `
      <div class="quiz-breakdown">
        <h3 class="quiz-breakdown__judul">Breakdown per Taktik</h3>
        <div class="breakdown-list">
          ${rows}
        </div>
      </div>`;
  }

  container.innerHTML = `
    <div class="quiz-container quiz-skor">
      <div class="quiz-header">
        <h2 class="quiz-judul">${judulModul} — Hasil</h2>
      </div>
      <div class="quiz-skor__ring">
        <div class="quiz-skor__nilai">${skor.persen}%</div>
        <div class="quiz-skor__detail">${skor.benar} / ${skor.total} benar</div>
      </div>
      ${isiPuzzle
        ? `<div class="quiz-skor__status ${passingGrade ? "lulus" : "gagal"}">
        ${passingGrade ? "🎉 Latihan Selesai! Bagus sekali!" : "📚 Coba lagi — analisis taktikmu di bawah"}
      </div>`
        : `<div class="quiz-skor__status ${passingGrade ? "lulus" : "gagal"}">
        ${passingGrade ? "🎉 Modul Selesai! Bagus sekali!" : "📚 Coba lagi — minimal 70% untuk lulus"}
      </div>`
      }
      ${taktikHtml}
      ${
        salah.length > 0
          ? `
        <div class="quiz-ulang">
          <p>Sempurnakan pemahamanmu: ${salah.length} soal bisa diulang</p>
          <button class="quiz-ulang-btn" id="btn-ulang-salah">🔄 Ulangi Soal yang Salah</button>
        </div>`
          : ""
      }
      <div class="quiz-actions">
        <button class="quiz-back-btn" id="btn-back-to-modules">← Kembali ke Daftar Modul</button>
      </div>
    </div>
  `;

  // Callback onSelesai (save progress) — pass full session for errorPerTipe
  if (onSelesaiCallback) {
    onSelesaiCallback(skor, session);
  }

  // Attach events
  const ulangBtn = container.querySelector("#btn-ulang-salah");
  if (ulangBtn && salah.length > 0) {
    ulangBtn.addEventListener("click", () => {
      if (!session) return;
      session.selesai = false;
      session.soal = salah;
      session.currentIndex = 0;
      session.jawaban = new Array(salah.length).fill(null);
      renderSoal(container, `${judulModul} (Ulang)`);
    });
  }

  const backBtn = container.querySelector("#btn-back-to-modules");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      session = null;
      window.dispatchEvent(new CustomEvent("navigate-beranda"));
    });
  }
}