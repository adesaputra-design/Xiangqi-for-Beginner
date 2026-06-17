import { DAFTAR_MODUL, type ModulInfo } from "../data/modules";

export type StatusModul = "selesai" | "lanjutkan" | "segera-hadir";

function bacaStatusDariStorage(id: string): StatusModul {
  try {
    const dataStr = localStorage.getItem(`progress-${id}`);
    if (!dataStr) return "segera-hadir";
    const data = JSON.parse(dataStr);
    if (data?.selesai === true) return "selesai";
    if (data?.mulai === true) return "lanjutkan";
    return "segera-hadir";
  } catch {
    return "segera-hadir";
  }
}

function statusLabel(status: StatusModul): string {
  switch (status) {
    case "selesai":
      return "Selesai ✓";
    case "lanjutkan":
      return "Lanjutkan →";
    case "segera-hadir":
      return "Segera Hadir";
  }
}

function statusClass(status: StatusModul): string {
  switch (status) {
    case "selesai":
      return "status-selesai";
    case "lanjutkan":
      return "status-lanjutkan";
    case "segera-hadir":
      return "status-segera";
  }
}

function renderModulCard(modul: ModulInfo): string {
  const status = bacaStatusDariStorage(modul.id);
  const label = statusLabel(status);
  const cssClass = statusClass(status);

  return `
    <li class="modul-card">
      <div class="modul-card__header">
        <h2 class="modul-card__nama">${modul.nama}</h2>
      </div>
      <div class="modul-card__meta">
        <span class="modul-card__estimasi">⏱ ${modul.estimasiMenit} menit</span>
        <span class="modul-card__status ${cssClass}">${label}</span>
      </div>
    </li>
  `;
}

export function renderBeranda(container: HTMLElement): void {
  const cards = DAFTAR_MODUL.map(renderModulCard).join("");

  container.innerHTML = `
    <div class="beranda">
      <header class="beranda__header">
        <h1 class="beranda__judul">Xiangqi untuk Pemula</h1>
        <p class="beranda__deskripsi">
          Belajar aturan xiangqi (catur Cina) selangkah demi selangkah — dari dasar
          hingga mahir. Setiap modul berisi eksplorasi papan interaktif dan quiz.
        </p>
      </header>

      <section class="beranda__modul">
        <ol class="modul-list">
          ${cards}
        </ol>
      </section>

      <footer class="beranda__footer">
        <p>Belajar xiangqi tidak pernah semudah ini 🇨🇳</p>
      </footer>
    </div>
  `;
}