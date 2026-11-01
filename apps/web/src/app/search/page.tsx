import { SearchQuestions } from './search-questions';
import { questionBank } from '../../data/question-bank';
export default function SearchPage(){ return <SearchQuestions questions={questionBank} />; }
