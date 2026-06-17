import { describe, it, expect, beforeEach } from "vitest";
import { DAFTAR_MODUL } from "../src/data/modules";
import { renderBeranda, type StatusModul } from "../src/ui/renderBeranda";

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

describe("renderBeranda", () => {
  let container: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    container = document.createElement("div");
  });

  it("should render beranda structure", () => {
    renderBeranda(container);
    expect(container.querySelector(".beranda")).toBeTruthy();
    expect(container.querySelector(".beranda__judul")).toBeTruthy();
    expect(container.querySelector(".modul-list")).toBeTruthy();
  });

  it("should render all 5 module cards", () => {
    renderBeranda(container);
    const cards = container.querySelectorAll(".modul-card");
    expect(cards).toHaveLength(5);
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