import ClientInterface from "../ports/usecases/Client_interface";

export default class CountWordsClient implements ClientInterface {
    name: String;
    messages: String[];

    constructor(name: String) {
        this.name = name;
        this.messages = [];
    }
    
    count(message: String): Number {
        let trimmedString = message.trim();
        let stringWithoutHyphensUnderscores = trimmedString.replace(/(\s[-_]\s)|([-_]\s)|(\s[-_])/g, ' ');
        if (trimmedString === "" || stringWithoutHyphensUnderscores === "") {
            return 0;
        }
        let wordsArray = stringWithoutHyphensUnderscores.split(/\s+/);
        return wordsArray.length;
    };

    update(message: String, count: any = this.count) {
        console.log(`${this.name} recebeu a atualização: ${message}`);
        const counter = this.count(message);
        console.log(`${this.name} encontrou ${counter} palavras na mensagem\n\n`);
        this.messages.push(message);
    };
};