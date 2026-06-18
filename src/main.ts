import { renderBeranda } from "./ui/renderBeranda";
import { renderPapan } from "./ui/renderPapan";
import { createInitialBoard } from "./data/papan";
import { renderQuiz } from "./ui/renderQuiz";
import { SOAL_FACE_OFF, BOARD_SOAL_FACE_OFF } from "./data/quizFaceOff";
import { SOAL_PAO, BOARD_SOAL_PAO } from "./data/quizPao";
import { SOAL_BING, BOARD_SOAL_BING } from "./data/quizBing";
import { SOAL_MA, BOARD_SOAL_MA } from "./data/quizMa";
import { SOAL_XIANG, BOARD_SOAL_XIANG } from "./data/quizXiang";
import "./style.css";

const root = document.body;

function showBeranda(): void {
  renderBeranda(root);

  // Tombol "Lihat Papan"
  const btnPapan = root.querySelector(".js-btn-papan");
  if (btnPapan) {
    btnPapan.addEventListener("click", (e) => {
      e.preventDefault();
      showPapan();
    });
  }

  // Klik modul card → ke quiz
  const modulCards = root.querySelectorAll(".modul-card");
  modulCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const modulId = (card as HTMLElement).dataset.modulId;
      if (modulId === "modul-1") {
        showQuizFaceOff();
      } else if (modulId === "modul-2") {
        showQuizPao();
      } else if (modulId === "modul-3") {
        showQuizBing();
      } else if (modulId === "modul-4") {
        showQuizMa();
      } else if (modulId === "modul-5") {
        showQuizXiang();
      }
    });
  });
}

function showPapan(): void {
  const board = createInitialBoard();
  renderPapan(root, board, true);
}

function showQuizFaceOff(): void {
  renderQuiz(root, {
    soal: SOAL_FACE_OFF,
    boardMap: BOARD_SOAL_FACE_OFF,
    judulModul: "Modul 1 — General Face-off",
    modulId: "modul-1",
    onSelesai: (skor) => {
      // Simpan progress ke localStorage
      const progress = {
        selesai: skor.persen >= 70,
        mulai: true,
        skor: skor.persen,
      };
      localStorage.setItem("progress-modul-1", JSON.stringify(progress));
    },
  });
}

function showQuizPao(): void {
  renderQuiz(root, {
    soal: SOAL_PAO,
    boardMap: BOARD_SOAL_PAO,
    judulModul: "Modul 2 — Meriam (Pao)",
    modulId: "modul-2",
    onSelesai: (skor) => {
      const progress = {
        selesai: skor.persen >= 70,
        mulai: true,
        skor: skor.persen,
      };
      localStorage.setItem("progress-modul-2", JSON.stringify(progress));
    },
  });
}

function showQuizBing(): void {
  renderQuiz(root, {
    soal: SOAL_BING,
    boardMap: BOARD_SOAL_BING,
    judulModul: "Modul 3 — Prajurit (Bing)",
    modulId: "modul-3",
    onSelesai: (skor) => {
      const progress = {
        selesai: skor.persen >= 70,
        mulai: true,
        skor: skor.persen,
      };
      localStorage.setItem("progress-modul-3", JSON.stringify(progress));
    },
  });
}

function showQuizMa(): void {
  renderQuiz(root, {
    soal: SOAL_MA,
    boardMap: BOARD_SOAL_MA,
    judulModul: "Modul 4 — Kuda (Ma)",
    modulId: "modul-4",
    onSelesai: (skor) => {
      const progress = {
        selesai: skor.persen >= 70,
        mulai: true,
        skor: skor.persen,
      };
      localStorage.setItem("progress-modul-4", JSON.stringify(progress));
    },
  });
}

function showQuizXiang(): void {
  renderQuiz(root, {
    soal: SOAL_XIANG,
    boardMap: BOARD_SOAL_XIANG,
    judulModul: "Modul 5 — Gajah (Xiang)",
    modulId: "modul-5",
    onSelesai: (skor) => {
      const progress = {
        selesai: skor.persen >= 70,
        mulai: true,
        skor: skor.persen,
      };
      localStorage.setItem("progress-modul-5", JSON.stringify(progress));
    },
  });
}

// Listen for navigate-beranda custom event
window.addEventListener("navigate-beranda", () => {
  showBeranda();
});

// Initial load
showBeranda();
