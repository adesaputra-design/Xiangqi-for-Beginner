import { describe, it, expect, beforeEach } from "vitest";
import { DAFTAR_MODUL } from "../src/data/modules";
import { renderBeranda } from "../src/ui/renderBeranda";

describe("DAFTAR_MODUL", () => {
  it("should have 5 modules", () => {
    expect(DAFTAR_MODUL).toHaveLength(5);
  });

  it("should have unique ids", () => {
    const ids = DAFTAR_MODUL.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("should have positive estimasiMenit for all modules", () => {
    for (const modul of DAFTAR_MODUL) {
      expect(modul.estimasiMenit).toBeGreaterThan(0);
    }
  });
});

describe("renderBeranda — structure", () => {
  let container: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    container = document.createElement("div");
  });

  it("should render beranda container", () => {
    renderBeranda(container);
    expect(container.querySelector(".beranda")).toBeTruthy();
  });

  it("should render new header title", () => {
    renderBeranda(container);
    const judul = container.querySelector(".beranda__judul");
    expect(judul).toBeTruthy();
    expect(judul!.textContent).toBe("Latihan Taktik Xiangqi");
  });

  it("should render new header description", () => {
    renderBeranda(container);
    const deskripsi = container.querySelector(".beranda__deskripsi");
    expect(deskripsi).toBeTruthy();
    expect(deskripsi!.textContent).toContain("26 teknik rahasia skakmat");
  });

  it("should have two sections: Prasyarat and Latihan Taktik", () => {
    renderBeranda(container);
    const seksi = container.querySelectorAll(".beranda__seksi");
    expect(seksi).toHaveLength(2);

    const judulSeksi = container.querySelectorAll(".beranda__seksi-judul");
    expect(judulSeksi).toHaveLength(2);
    expect(judulSeksi[0].textContent).toBe("Prasyarat");
    expect(judulSeksi[1].textContent).toBe("Latihan Taktik");
  });

  it("should render all 5 module cards in Prasyarat section", () => {
    renderBeranda(container);
    const cards = container.querySelectorAll(".modul-list .modul-card");
    expect(cards).toHaveLength(5);
  });

  it("should show badge 'Prasyarat X' on each module card", () => {
    renderBeranda(container);
    const badges = container.querySelectorAll(".modul-card__badge");
    expect(badges).toHaveLength(5);
    expect(badges[0].textContent).toBe("Prasyarat 1");
    expect(badges[4].textContent).toBe("Prasyarat 5");
  });

  it("should render all modules as Segera Hadir initially", () => {
    renderBeranda(container);
    const statuses = container.querySelectorAll(".modul-card__status");
    for (const el of statuses) {
      expect(el.textContent).toBe("Segera Hadir");
      expect(el.classList.contains("status-segera")).toBe(true);
    }
  });

  it("should render module time estimates", () => {
    renderBeranda(container);
    const estimations = container.querySelectorAll(".modul-card__estimasi");
    expect(estimations).toHaveLength(5);
    for (const el of estimations) {
      expect(el.textContent).toMatch(/menit/);
    }
  });

  it("should show Selesai when localStorage has selesai: true", () => {
    localStorage.setItem(
      "progress-modul-1",
      JSON.stringify({ selesai: true })
    );
    renderBeranda(container);
    const statuses = container.querySelectorAll(".modul-card__status");
    expect(statuses[0].textContent).toBe("Selesai ✓");
    expect(statuses[0].classList.contains("status-selesai")).toBe(true);
  });

  it("should show Lanjutkan when localStorage has mulai: true but not selesai", () => {
    localStorage.setItem("progress-modul-2", JSON.stringify({ mulai: true }));
    renderBeranda(container);
    const statuses = container.querySelectorAll(".modul-card__status");
    expect(statuses[1].textContent).toBe("Lanjutkan →");
    expect(statuses[1].classList.contains("status-lanjutkan")).toBe(true);
  });
});

describe("renderBeranda — Latihan Taktik gate logic", () => {
  let container: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    container = document.createElement("div");
  });

  it("should show Latihan Taktik locked when no prasyarat completed", () => {
    renderBeranda(container);

    const terkunci = container.querySelector(".taktik-card--terkunci");
    expect(terkunci).toBeTruthy();

    const status = terkunci!.querySelector(".status-terkunci");
    expect(status).toBeTruthy();
    expect(status!.textContent).toBe("Selesaikan semua Prasyarat dulu");

    const icon = terkunci!.querySelector(".taktik-card__icon");
    expect(icon!.textContent).toBe("🔒");
  });

  it("should show Latihan Taktik locked when some prasyarat completed but not all", () => {
    localStorage.setItem(
      "progress-modul-1",
      JSON.stringify({ selesai: true })
    );
    localStorage.setItem(
      "progress-modul-2",
      JSON.stringify({ selesai: true })
    );
    localStorage.setItem(
      "progress-modul-3",
      JSON.stringify({ selesai: true })
    );
    // modul-4 and modul-5 not completed

    renderBeranda(container);

    const terkunci = container.querySelector(".taktik-card--terkunci");
    expect(terkunci).toBeTruthy();
  });

  it("should show Latihan Taktik active when all 5 prasyarat completed", () => {
    for (let i = 1; i <= 5; i++) {
      localStorage.setItem(
        `progress-modul-${i}`,
        JSON.stringify({ selesai: true })
      );
    }

    renderBeranda(container);

    const aktif = container.querySelector(".taktik-card--aktif");
    expect(aktif).toBeTruthy();

    const status = aktif!.querySelector(".status-siap");
    expect(status).toBeTruthy();
    expect(status!.textContent).toBe("Mulai Latihan →");

    const icon = aktif!.querySelector(".taktik-card__icon");
    expect(icon!.textContent).toBe("🧩");
  });

  it("should show Latihan Taktik active when all prasyarat selesai with skor >= 70", () => {
    for (let i = 1; i <= 5; i++) {
      localStorage.setItem(
        `progress-modul-${i}`,
        JSON.stringify({ selesai: true, skor: 85 })
      );
    }

    renderBeranda(container);

    const aktif = container.querySelector(".taktik-card--aktif");
    expect(aktif).toBeTruthy();
    expect(container.querySelector(".taktik-card--terkunci")).toBeFalsy();
  });

  it("should have js-taktik-card and data-action on active card", () => {
    for (let i = 1; i <= 5; i++) {
      localStorage.setItem(
        `progress-modul-${i}`,
        JSON.stringify({ selesai: true })
      );
    }

    renderBeranda(container);

    const card = container.querySelector(".js-taktik-card");
    expect(card).toBeTruthy();
    expect((card as HTMLElement).dataset.action).toBe("mulai-latihan");
  });

  it("should not have js-taktik-card when locked", () => {
    renderBeranda(container);

    expect(container.querySelector(".js-taktik-card")).toBeFalsy();
  });

  it("should still render 5 modul cards even when Latihan Taktik is active", () => {
    for (let i = 1; i <= 5; i++) {
      localStorage.setItem(
        `progress-modul-${i}`,
        JSON.stringify({ selesai: true })
      );
    }

    renderBeranda(container);

    const modulCards = container.querySelectorAll(".modul-card");
    expect(modulCards).toHaveLength(5);
  });

  it("should show 'Lihat Papan' button in both locked and unlocked states", () => {
    renderBeranda(container);
    expect(container.querySelector(".js-btn-papan")).toBeTruthy();

    // Clear and render with all completed
    for (let i = 1; i <= 5; i++) {
      localStorage.setItem(
        `progress-modul-${i}`,
        JSON.stringify({ selesai: true })
      );
    }
    const container2 = document.createElement("div");
    renderBeranda(container2);
    expect(container2.querySelector(".js-btn-papan")).toBeTruthy();
  });
});