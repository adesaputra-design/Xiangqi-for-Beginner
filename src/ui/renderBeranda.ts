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

function renderModulCard(modul: ModulInfo, index: number): string {
  const status = bacaStatusDariStorage(modul.id);
  const label = statusLabel(status);
  const cssClass = statusClass(status);
  const prasyaratKe = index + 1;

  return `
    <li class="modul-card" data-modul-id="${modul.id}">
      <span class="modul-card__badge">Prasyarat ${prasyaratKe}</span>
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

function semuaPrasyaratSelesai(): boolean {
  for (let i = 1; i <= 5; i++) {
    const status = bacaStatusDariStorage(`modul-${i}`);
    if (status !== "selesai") return false;
  }
  return true;
}

function renderSeksiLatihanTaktik(terbuka: boolean): string {
  if (terbuka) {
    return `
      <li class="taktik-card taktik-card--aktif js-taktik-card" data-action="mulai-latihan">
        <div class="taktik-card__header">
          <span class="taktik-card__icon">🧩</span>
          <h2 class="taktik-card__nama">Latihan Taktik</h2>
        </div>
        <div class="taktik-card__meta">
          <span class="taktik-card__estimasi">⏱ 10 soal / sesi</span>
          <span class="taktik-card__status status-siap">Mulai Latihan →</span>
        </div>
      </li>
    `;
  }

  return `
    <li class="taktik-card taktik-card--terkunci">
      <div class="taktik-card__header">
        <span class="taktik-card__icon">🔒</span>
        <h2 class="taktik-card__nama">Latihan Taktik</h2>
      </div>
      <div class="taktik-card__meta">
        <span class="taktik-card__estimasi"></span>
        <span class="taktik-card__status status-terkunci">Selesaikan semua Prasyarat dulu</span>
      </div>
    </li>
  `;
}

export function renderBeranda(container: HTMLElement): void {
  const terbuka = semuaPrasyaratSelesai();
  const cards = DAFTAR_MODUL.map((modul, index) => renderModulCard(modul, index)).join("");
  const latihanTaktik = renderSeksiLatihanTaktik(terbuka);

  container.innerHTML = `
    <div class="beranda">
      <header class="beranda__header">
        <h1 class="beranda__judul">Latihan Taktik Xiangqi</h1>
        <p class="beranda__deskripsi">
          Asah insting kompetisi dengan puzzle taktik dari 26 teknik rahasia skakmat.
        </p>
      </header>

      <section class="beranda__seksi">
        <h2 class="beranda__seksi-judul">Prasyarat</h2>
        <ol class="modul-list">
          ${cards}
        </ol>
      </section>

      <section class="beranda__seksi">
        <h2 class="beranda__seksi-judul">Latihan Taktik</h2>
        <ol class="taktik-list">
          ${latihanTaktik}
        </ol>
      </section>

      <div class="beranda__papan-link">
        <a href="#" class="btn-papan js-btn-papan">🏁 Lihat Papan Posisi Awal</a>
      </div>

      <footer class="beranda__footer">
        <p>Belajar xiangqi tidak pernah semudah ini 🇨🇳</p>
      </footer>
    </div>
  `;
}