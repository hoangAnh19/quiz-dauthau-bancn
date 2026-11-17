import rawQuestions from '../../../../tmp/pdfs/parsed.json';

export type Answer = 'A' | 'B' | 'C' | 'D';

export type QuizQuestion = {
  id: number;
  question: string;
  options: Record<Answer, string>;
  answer: Answer;
};

// Khóa đáp án theo "Dap An STT 430-Chia 25 chuyen de.docx" ngày 17/11/2026.
const answerKey = `A,D,D,B,A,D,A,B,D,D,D,D,C,C,C,C,A,C,C,A,B,C,C,C,A,A,C,C,A,A,B,C,D,B,A,A,D,A,A,A,A,D,B,A,A,D,D,B,C,A,A,A,C,A,C,C,B,D,C,B,B,B,B,C,C,C,D,D,B,A,A,A,A,A,B,C,A,D,C,A,B,A,B,A,B,B,D,B,A,D,A,B,B,C,B,A,B,D,B,A,B,B,C,C,C,B,C,B,A,D,A,A,A,C,D,C,A,A,A,D,A,B,D,D,A,A,C,A,A,D,B,D,D,A,D,B,B,A,B,B,C,A,B,C,B,A,D,A,B,B,B,D,A,B,C,D,C,A,B,C,C,D,A,B,B,C,A,B,B,B,D,C,B,D,A,C,B,D,B,C,A,C,A,D,A,D,A,A,A,D,D,A,A,C,B,C,D,A,C,A,A,A,B,D,C,D,C,C,D,C,B,C,B,D,D,D,D,A,B,D,C,C,A,D,C,B,D,D,C,D,D,A,C,A,B,B,A,C,C,D,C,C,C,A,C,B,D,D,C,A,D,D,D,A,A,A,D,A,A,A,D,D,D,C,A,D,C,D,B,C,C,B,C,D,B,B,D,B,B,B,B,B,B,C,C,C,D,A,D,A,C,D,B,B,B,B,B,B,B,B,B,B,B,B,D,A,A,B,A,C,C,D,C,C,A,C,C,B,B,B,D,D,C,C,C,C,C,A,B,A,D,A,D,B,B,D,D,D,A,A,C,D,C,D,A,C,B,B,B,C,B,C,D,D,C,C,D,C,B,A,D,A,D,A,D,C,B,C,D,C,A,D,D,A,B,C,B,A,A,A,B,B,C,B,B,C,C,C,D,C,D,B,A,D,B,D,B,C,B,B,B,D,D,C,C,B,D,D,B,B,D,D,D,D,D,D,D,B,D,D,B,D,A,D,B,B,A,B,C,A` .split(',') as Answer[];

function cleanImportedText(value: string): string {
  return value
    .replace(/={3,}\s*PAGE\s+\d+\s*={3,}(?:\s+\d+)?/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getOptions(block: string): Record<Answer, string> {
  const compact = cleanImportedText(block);
  const markers = [...compact.matchAll(/([ABCD])\s*\.\s*/g)];
  const start = markers.findIndex((marker, index) =>
    marker[1] === 'A'
    && markers[index + 1]?.[1] === 'B'
    && markers[index + 2]?.[1] === 'C'
    && markers[index + 3]?.[1] === 'D',
  );
  const matches = start < 0 ? [] : markers.slice(start, start + 4);
  const options = Object.fromEntries(matches.map((match, index) => {
    const textStart = (match.index ?? 0) + match[0].length;
    const textEnd = index === matches.length - 1 ? compact.length : (matches[index + 1]?.index ?? compact.length);
    return [match[1], compact.slice(textStart, textEnd).trim()];
  })) as Partial<Record<Answer, string>>;
  if (!options.A || !options.B || !options.C || !options.D) {
    throw new Error('Không thể đọc đủ 4 phương án của câu hỏi.');
  }
  return options as Record<Answer, string>;
}

if (rawQuestions.length !== 430 || answerKey.length !== 430) {
  throw new Error('Ngân hàng câu hỏi hoặc khóa đáp án không đủ 430 câu.');
}

export const questionBank: QuizQuestion[] = rawQuestions.map((item, index) => ({
  id: item.n,
  question: cleanImportedText(item.question),
  options: getOptions(item.block),
  answer: answerKey[index]!,
}));
