import { MockExam } from './mock-exam';
import { questionBank } from '../../data/question-bank';

function createInitialExam() {
  const shuffled = [...questionBank];
  let seed = 27_752_026;

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    seed = (seed * 1_664_525 + 1_013_904_223) >>> 0;
    const target = seed % (index + 1);
    [shuffled[index], shuffled[target]] = [shuffled[target]!, shuffled[index]!];
  }

  return shuffled.slice(0, 70);
}

export default function MockExamPage() {
  return <MockExam questions={questionBank} initialExam={createInitialExam()} />;
}
