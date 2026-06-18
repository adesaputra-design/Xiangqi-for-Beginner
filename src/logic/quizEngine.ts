export interface QuizSoal {
  id: string;
  pertanyaan: string;
  pilihan: string[];
  /** Index jawaban yang benar (0–3) */
  kunci: number;
  penjelasan: string;
  /** Key ke board kustom di createBoard, atau null kalau tidak pakai gambar */
  boardKey: string | null;
}

export interface QuizSession {
  soal: QuizSoal[];
  currentIndex: number;
  jawaban: (number | null)[]; // null = belum dijawab
  selesai: boolean;
}

export function createQuizSession(soal: QuizSoal[]): QuizSession {
  return {
    soal,
    currentIndex: 0,
    jawaban: new Array(soal.length).fill(null),
    selesai: false,
  };
}

export function jawabSoal(
  session: QuizSession,
  pilihanIndex: number
): { benar: boolean; kunci: number; penjelasan: string } {
  const current = session.soal[session.currentIndex];
  const benar = pilihanIndex === current.kunci;

  session.jawaban[session.currentIndex] = pilihanIndex;

  return {
    benar,
    kunci: current.kunci,
    penjelasan: current.penjelasan,
  };
}

export function lanjutSoal(session: QuizSession): void {
  session.currentIndex++;
  if (session.currentIndex >= session.soal.length) {
    session.selesai = true;
  }
}

export function hitungSkor(session: QuizSession): {
  benar: number;
  total: number;
  persen: number;
} {
  let correct = 0;
  for (let i = 0; i < session.soal.length; i++) {
    if (session.jawaban[i] === session.soal[i].kunci) {
      correct++;
    }
  }
  return {
    benar: correct,
    total: session.soal.length,
    persen: Math.round((correct / session.soal.length) * 100),
  };
}

/** Dapatkan soal-soal yang salah untuk diulang */
export function soalSalah(session: QuizSession): QuizSoal[] {
  const salah: QuizSoal[] = [];
  for (let i = 0; i < session.soal.length; i++) {
    if (session.jawaban[i] !== null && session.jawaban[i] !== session.soal[i].kunci) {
      salah.push(session.soal[i]);
    }
  }
  return salah;
}