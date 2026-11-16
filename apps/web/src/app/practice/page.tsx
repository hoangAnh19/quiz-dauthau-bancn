import { questionBank } from '../../data/question-bank';
import { PracticeClient } from './practice-client';

export default function PracticePage() {
  return <PracticeClient questions={questionBank} />;
}
