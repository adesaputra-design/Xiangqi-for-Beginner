import { bacaRiwayatSesi, bacaLevelAktif, simpanLevelAktif, hitungRataAkurasi } from "../logic/sesiLatihan";
import type { SesiRecord, TipeTaktik } from "../logic/quizEngine";

/**
 * Render halaman riwayat progress Latihan Taktik.
 * 
 * Dipanggil dari main.ts via tombol "Lihat Progress" di beranda,
 * menggantikan isi root element.
 */
export function renderRiwayat(container: HTMLElement): void {
  const semua = bacaRiwayatSesi();
  const levelAktif = bacaLevelAktif();

  // Take last 7 sessions
  const riwayat7 = semua.slice(-7).reverse(); // newest first

  // Build session rows
  let tabelHtml = "";
  if (riwayat7.length === 0) {
    tabelHtml = `
      <div class="riwayat-kosong">
        <span class="riwayat-kosong__ikon">📋</span>
        <p class="riwayat-kosong__teks">
          Belum ada riwayat latihan.<br/>
          Mulai sesi Latihan Taktik pertamamu!
        </p>
      </div>`;
  } else {
    const rows = riwayat7
      .map((r, i) => {
        const labelBaru = i === 0 ? " <span class='riwayat-baru'>Terbaru</span>" : "";
        return `
          <div class="riwayat-row">
            <span class="riwayat-row__tanggal">${r.tanggal}${labelBaru}</span>
            <span class="riwayat-row__level">Lv.${r.level}</span>
            <span class="riwayat-row__akurasi">${r.akurasi}%</span>
          </div>`;
      })
      .join("");

    tabelHtml = `
      <div class="riwayat-tabel">
        <div class="riwayat-tabel__header">
          <span>Tanggal</span>
          <span>Level</span>
          <span>Akurasi</span>
        </div>
        <div class="riwayat-tabel__body">
          ${rows}
        </div>
      </div>`;
  }

  // Build accumulated tipeTaktik breakdown from last 7 sessions
  let breakdownHtml = "";
  if (riwayat7.length > 0) {
    const tipeList: { tipe: TipeTaktik; label: string; ikon: string }[] = [
      { tipe: "serangan", label: "Serangan", ikon: "⚔️" },
      { tipe: "pertahanan", label: "Pertahanan", ikon: "🛡️" },
      { tipe: "posisi", label: "Posisi", ikon: "📐" },
      { tipe: "endgame", label: "Endgame", ikon: "🏁" },
    ];

    const rows = tipeList
      .map((t) => {
        const totalError = riwayat7.reduce(
          (sum, r) => sum + (r.errorPerTipe[t.tipe] || 0),
          0
        );
        // Estimate total questions per tipe from sessions (assume 10 per session)
        const totalSoal = riwayat7.reduce((sum, r) => {
          // Count how many of this tipe in each session (estimate from session size)
          // Since we don't store total per tipe, use a heuristic:
          // If errorPerTipe all zero, skip
          const allZero = Object.values(r.errorPerTipe).every((v) => v === 0);
          if (allZero) return sum + 2.5; // placeholder avg
          const total = Object.values(r.errorPerTipe).reduce((a, b) => a + b, 0);
          const proporsi = total > 0 ? r.errorPerTipe[t.tipe] / total : 0.25;
          return sum + Math.round((10 - total) * proporsi + r.errorPerTipe[t.tipe]);
        }, 0);

        const benar = Math.max(0, totalSoal - totalError);
        const persen = totalSoal > 0 ? Math.round((benar / totalSoal) * 100) : 0;
        const isLemah = persen < 70 && totalSoal > 0;

        return `
          <div class="riwayat-breakdown-row ${isLemah ? "riwayat-breakdown-row--lemah" : ""}">
            <span class="riwayat-breakdown-row__ikon">${t.ikon}</span>
            <span class="riwayat-breakdown-row__label">${t.label}</span>
            <span class="riwayat-breakdown-row__nilai">${benar}/${totalSoal} benar</span>
            <span class="riwayat-breakdown-row__persen ${isLemah ? "riwayat-breakdown-row__persen--lemah" : ""}">${persen}%</span>
          </div>`;
      })
      .join("");

    breakdownHtml = `
      <div class="riwayat-seksi">
        <h3 class="riwayat-seksi__judul">Akurasi per Taktik (7 sesi terakhir)</h3>
        <div class="riwayat-breakdown">
          ${rows}
        </div>
      </div>`;
  }

  // Naik level banner
  let naikLevelHtml = "";
  if (semua.length >= 5) {
    const rata5 = hitungRataAkurasi(semua.slice(-5));
    if (rata5 >= 80 && levelAktif < 3) {
      const nextLevel = levelAktif + 1;
      naikLevelHtml = `
        <div class="riwayat-banner">
          <div class="riwayat-banner__ikon">🎯</div>
          <p class="riwayat-banner__teks">
            Rata-rata 5 sesi terakhir: <strong>${rata5}%</strong><br/>
            Pertimbangkan naik ke Level ${nextLevel}
          </p>
          <button class="riwayat-banner__btn js-naik-level" data-level="${nextLevel}">
            Naik ke Level ${nextLevel}
          </button>
          <button class="riwayat-banner__btn-batal js-batal-naik">
            Nanti dulu
          </button>
        </div>`;
    }
  }

  container.innerHTML = `
    <div class="riwayat-container">
      <div class="riwayat-header">
        <h1 class="riwayat-header__judul">📊 Progress Latihan</h1>
        <p class="riwayat-header__sub">Level Aktif: <strong>${levelAktif}</strong></p>
      </div>

      <div class="riwayat-seksi">
        <h3 class="riwayat-seksi__judul">7 Sesi Terakhir</h3>
        ${tabelHtml}
      </div>

      ${breakdownHtml}
      ${naikLevelHtml}

      <div class="riwayat-actions">
        <button class="riwayat-back-btn js-back-beranda">← Kembali ke Beranda</button>
      </div>
    </div>
  `;

  // Attach naik level event
  const btnNaik = container.querySelector(".js-naik-level") as HTMLElement;
  if (btnNaik) {
    btnNaik.addEventListener("click", () => {
      const newLevel = parseInt(btnNaik.dataset.level || "1", 10);
      simpanLevelAktif(newLevel);
      // Re-render with new level
      renderRiwayat(container);
    });
  }

  const btnBatal = container.querySelector(".js-batal-naik") as HTMLElement;
  if (btnBatal) {
    btnBatal.addEventListener("click", () => {
      // Remove banner and re-render
      renderRiwayat(container);
    });
  }

  // Attach back button
  const btnBack = container.querySelector(".js-back-beranda") as HTMLElement;
  if (btnBack) {
    btnBack.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("navigate-beranda"));
    });
  }
}