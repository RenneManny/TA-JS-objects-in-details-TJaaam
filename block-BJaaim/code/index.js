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
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question');

        const titleElement = document.createElement('h2');
        titleElement.textContent = this.title;

        const optionsList = document.createElement('ul');
        this.options.forEach(option => {
            const optionItem = document.createElement('li');
            optionItem.textContent = option;
            optionsList.appendChild(optionItem);
        });

        questionContainer.appendChild(titleElement);
        questionContainer.appendChild(optionsList);

        document.body.appendChild(questionContainer);
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
        const scoreElement = document.createElement('div');
        scoreElement.textContent = `Score: ${this.score}`;
        document.body.appendChild(scoreElement);
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
