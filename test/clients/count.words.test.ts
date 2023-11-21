import CountWordsClient from "../../src/clients/CountWords";


const createClientInstance = () => new CountWordsClient('Cliente');
const countMock = (value: number) => value;


describe('Testing update method', () => {
    test('Should start with an empty array of messages', () => {
        const client = createClientInstance();
        expect(client.messages.length).toEqual(0);
    });

    test('Should store a message on receive it', () => {
        const client = createClientInstance();
        client.update('message', countMock);
        expect(client.messages.length).toEqual(1);
        expect(client.messages[0]).toEqual('message');
    });
})

describe('Testing count method', () => {
    test('Should return 0 if message is empty', () => {
        const client = createClientInstance();
        const numberOfWords = client.count('');
        expect(numberOfWords).toBe(0);
    });

    test('Should return the number of words', () => {
        const client = createClientInstance();
        const numberOfWords = client.count('A, B, C');
        expect(numberOfWords).toBe(3);
    });
})