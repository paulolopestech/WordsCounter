import ClientInterface from "../ports/usecases/Client_interface";

export default class CountEvenCharactersWordsClient implements ClientInterface {
    name: String;
    messages: String[];

    constructor(name: String) {
        this.name = name;
        this.messages = [];
    }

    count(message: String): Number {
        let trimmedString = message.trim();
        if (trimmedString === "") {
            return 0;
        }
        let wordsArray = trimmedString.split(/\s+/);
        let evenLengthWords = wordsArray.filter(word => word.length % 2 === 0);
        return evenLengthWords.length;
    };

    update(message: String) {
        console.log(`${this.name} recebeu a atualização: ${message}`);
        const counter = this.count(message);
        console.log(`${this.name} encontrou ${counter} palavras com número par de caracteres na mensagem\n\n`);
        this.messages.push(message);
    };

    showMessages() {
        this.messages.forEach((message: String) => {
            console.log('Mensagem: ', message);
        });
    };
};