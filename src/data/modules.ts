export interface ModulInfo {
  id: string;
  nama: string;
  estimasiMenit: number;
}

export const DAFTAR_MODUL: ModulInfo[] = [
  {
    id: "modul-1",
    nama: "General Face-off (Raja Berhadapan)",
    estimasiMenit: 15,
  },
  {
    id: "modul-2",
    nama: "Meriam (Pao)",
    estimasiMenit: 15,
  },
  {
    id: "modul-3",
    nama: "Prajurit (Bing)",
    estimasiMenit: 10,
  },
  {
    id: "modul-4",
    nama: "Kuda (Ma)",
    estimasiMenit: 15,
  },
  {
    id: "modul-5",
    nama: "Gajah (Xiang)",
    estimasiMenit: 10,
  },
];