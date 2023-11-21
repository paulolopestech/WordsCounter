# WordsCounter
#### Observer Pattern Implementation in TypeScript and Unit Tests

This repository contains a simple implementation of the Observer pattern in TypeScript, with three specific classes: CountCapitalStartingWords, CountWords, and CountWordsWithEvenNumberOfChars. All these classes are "Observers" and implement the ClientInterface interface. They include the count and update methods from the Observer pattern, along with an additional showMessages method that displays all received messages.

## Prerequisites
Before getting started, ensure you have the following installed on your machine:

Node.js: [Download and Install Node.js](https://nodejs.org/en)

## Install Project Dependencies
```bash
npm install
```

## Run Project
```bash
npm start
```

## Run Unit Tests
```bash
npm test
```


## Classes
1. CountCapitalStartingWords
   - This class counts words that start with uppercase letters in a string.

2. CountWords
    - This class counts the number of words in a string.

3. CountWordsWithEvenNumberOfChars
    - This class counts the number of words that have an even number of characters in a string.


4. Observable
    - The Observable class is the class to which the aforementioned classes subscribe. It contains the standard Observer pattern methods: subscribe, unsubscribe, and publish.

## Unit Tests
Unit tests have been developed using the Jest framework. Make sure to have Jest installed either globally or locally in your project.

To run the tests, execute the following command:

```bash
 npm test
```

## Example Usage
```typescript
// Create an instance of Observable
const observable = new Observable();

// Create instances of observer classes
const countCapitalStartingWords = new CountCapitalStartingWords();
const countWords = new CountWords();
const countWordsWithEvenNumberOfChars = new CountWordsWithEvenNumberOfChars();

// Subscribe observer classes to the Observable
observable.subscribe(countCapitalStartingWords);
observable.subscribe(countWords);
observable.subscribe(countWordsWithEvenNumberOfChars);

// Publish a message
observable.publish("Your Message");

// Display messages collected by observer classes
countCapitalStartingWords.showMessages();
countWords.showMessages();
countWordsWithEvenNumberOfChars.showMessages();
```