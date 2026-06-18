import { renderBeranda } from "./ui/renderBeranda";
import { renderPapan } from "./ui/renderPapan";
import { createInitialBoard } from "./data/papan";
import "./style.css";

function showBeranda(container: HTMLElement): void {
  renderBeranda(container);

  // Event listener untuk tombol "Lihat Papan"
  const btn = container.querySelector(".js-btn-papan");
  if (btn) {
    btn.addEventListener("click", () => showPapan(container));
  }
}

function showPapan(container: HTMLElement): void {
  const board = createInitialBoard();
  renderPapan(container, board);

  // Tambahkan tombol kembali ke beranda
  const wrapper = container.querySelector(".papan-wrapper");
  if (wrapper) {
    const backBtn = document.createElement("a");
    backBtn.href = "#";
    backBtn.className = "papan-back-btn";
    backBtn.textContent = "← Kembali ke Beranda";
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showBeranda(container);
    });
    wrapper.parentElement?.insertBefore(backBtn, wrapper);
  }
}

const root = document.body;
showBeranda(root);
