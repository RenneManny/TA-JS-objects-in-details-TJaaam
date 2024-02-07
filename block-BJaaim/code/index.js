class Question {
    constructor(title, options, correctAnswer) {
        this.title = title;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    isCorrect(answer) {
        return answer === this.correctAnswer;
    }

    getCorrectAnswer() {
        return this.correctAnswer;
    }

    createUI() {
        console.log(`Question: ${this.title}`);
        console.log('Options:');
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }
}

class Quiz {
    constructor(allQuestions) {
        this.allQuestions = allQuestions;
        this.activeIndex = 0;
        this.score = 0;
    }

    nextQuestion() {
        if (this.activeIndex < this.allQuestions.length - 1) {
            this.activeIndex++;
            this.allQuestions[this.activeIndex].createUI();
        } else {
            console.log('No more questions!');
        }
    }

    createUI() {
        this.allQuestions[this.activeIndex].createUI();
    }

    updateScore() {
        console.log(`Score: ${this.score}`);
    }
}

// Example usage:

// Creating questions
const question1 = new Question(
    'What is the capital of France?',
    ['Paris', 'London', 'Berlin', 'Rome'],
    'Paris'
);

const question2 = new Question(
    'What is the largest planet in our solar system?',
    ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    'Jupiter'
);

// Creating a quiz with the questions
const quiz = new Quiz([question1, question2]);

// Creating UI for the quiz
quiz.createUI();

// Answering a question
const userAnswer = 'Paris'; // Assume user selected Paris
if (question1.isCorrect(userAnswer)) {
    quiz.score++;
    quiz.updateScore();
}

// Moving to the next question
quiz.nextQuestion();
