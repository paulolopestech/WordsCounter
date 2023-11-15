import WordsSubjectInterface from "../ports/usecases/WordsSubject_interface";
import Client from "../ports/usecases/Client_interface";

export default class WordsSubject implements WordsSubjectInterface {
    private static wordsSubjectInstance: WordsSubject;
    clients: Client[];

    private constructor() {
        this.clients = [];
    };

    public static getInstance(): WordsSubject {
        if (!WordsSubject.wordsSubjectInstance) {
            WordsSubject.wordsSubjectInstance = new WordsSubject();
        }
        return WordsSubject.wordsSubjectInstance;
    };

    subscribe(client: Client) {
        console.log(`${client.name} se inscreveu em Words Subject!\n`);
        this.clients.push(client);
    };

    unsubscribe(client: Client) {
        const index: number = this.clients.indexOf(client);

        if (index > -1) {
            this.clients.splice(index, 1);
            return;
        };
    };

    publish(message: String) {
        this.clients.forEach((client: Client) => {
            client.update(message);
        });
    };
}