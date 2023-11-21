import CountCapitalWordsClient from "../../src/clients/CountCapitalStartingWords"

const createClientInstance = () => new CountCapitalWordsClient('Cliente');
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
        const numberOfCharacters = client.count('');
        expect(numberOfCharacters).toBe(0);
    });

    test('Should return the number of words starting with capital', () => {
        const client = createClientInstance();
        const numberOfCharacters = client.count('A, B, C');
        expect(numberOfCharacters).toBe(3);
    });

    test('Should return 0 when there are not words starting with capital', () => {
        const client = createClientInstance();
        const numberOfCharacters = client.count('a, b c');
        expect(numberOfCharacters).toBe(0);
    });
})