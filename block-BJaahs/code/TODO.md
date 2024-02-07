If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Without Object
```js
const title = 'Where is the capital of Jordan';
const options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
const correctAnswerIndex = 1;

function isAnswerCorrect(index) {
  return index === correctAnswerIndex;
}

function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

// Testing
console.log(isAnswerCorrect(1)); // Output: true
console.log(getCorrectAnswer()); // Output: Amaan

```
- Organize using object
```js 
const question = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
};

// Testing
console.log(question.isAnswerCorrect(1)); // Output: true
console.log(question.getCorrectAnswer()); // Output: Amaan

```
- Use a function to create object
```js
function createQuestion(title, options, correctAnswerIndex) {
  return {
    title,
    options,
    correctAnswerIndex,
    isAnswerCorrect(index) {
      return index === correctAnswerIndex;
    },
    getCorrectAnswer() {
      return options[correctAnswerIndex];
    }
  };
}

const question = createQuestion(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);

// Testing
console.log(question.isAnswerCorrect(1)); // Output: true
console.log(question.getCorrectAnswer()); // Output: Amaan



```




- Convert the function to use `this` keyword
```js



```
- Write test by creating two objects also test both methods.

### To test use the following data

```js
const testData = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
};
```
