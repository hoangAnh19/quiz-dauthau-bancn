import { MockExam } from './mock-exam';
import { questionBank } from '../../data/question-bank';

function createInitialExam() {
  const shuffled = [...questionBank];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target]!, shuffled[index]!];
  }

  return shuffled.slice(0, 70);
}

export default function MockExamPage() {
  return <MockExam questions={questionBank} initialExam={createInitialExam()} />;
}
