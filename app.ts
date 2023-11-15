import CountCapitalWordsClient from "./src/clients/CountCapitalStartingWords";
import CountWordsClient from "./src/clients/CountWords";
import CountEvenCharactersWordsClient from "./src/clients/CountWordsWithEvenNumbersOfChar";
import WordsSubject from "./src/services/WordsSubject";


const countWords = new CountWordsClient('Count Words');
const countCapitalWords = new CountCapitalWordsClient('Count Capital');
const countWordsWithEvenNumbers = new CountEvenCharactersWordsClient('Count Even Characters Words');

const subject = WordsSubject.getInstance();

subject.subscribe(countWords);
subject.subscribe(countCapitalWords);
subject.subscribe(countWordsWithEvenNumbers);

subject.publish('COFFEE is good,');