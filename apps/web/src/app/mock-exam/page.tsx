import { MockExam } from './mock-exam';
import { questionBank } from '../../data/question-bank';
export default function MockExamPage() { return <MockExam questions={questionBank} />; }
