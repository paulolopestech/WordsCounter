import ClientInterface from "../ports/usecases/Client_interface";

export default class CountCapitalWordsClient implements ClientInterface {
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
        let capitalWords = wordsArray.filter(word => /^[A-Z]/.test(word));
        return capitalWords.length;
    };

    update(message: String, count: any = this.count) {
        try {
            console.log(`${this.name} recebeu a atualização: ${message}`);
            const counter = count(message);
            console.log(`${this.name} encontrou ${counter} palavras iniciadas com letras maiúsculas na mensagem\n\n`);
            this.messages.push(message);
        } catch (error) {
            return 'Erro'
        }
    };

    showMessages() {
        this.messages.forEach((message: String) => {
            console.log('Mensagem: ', message);
        });
    };
};