console.log('this quiz app is dedicated to: Sonia David - LomL')

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [

    //  ECONOMICS 2016 QUESTIONS  //
    {
        question:  'Which of the following taxes is a progressive tax?',
          choice1:  'Income tax',
          choice2: 'custom tax.',
          choice3: 'sales tax',
          choice4: 'excise daty',
          answer: 1
    },
    {
        question:  'Find the mean of 8, 3, 5, 2, 7, 5, 7, 3, 6, 7',
          choice1:  '5.1',
          choice2: '5.2',
          choice3: '5.3',
          choice4: 	'5.4',
          answer: 3
    },

    {
        question:  `Find the mode of the set of numbers: 2, 6, 7, 6, 8, 5, 2, 4, 2, 4, 5, 5,2`,
          choice1:  '2',
          choice2: '4',
          choice3: '5',
          choice4: '7',
          answer: 3
    },
    {
        question:  'Find the median of the following percentage: 43%, 76%, 64%, 37%, 76%, 54%',
          choice1:  '64%',
          choice2: '54%',
          choice3: '118%',
          choice4: '59%',
          answer: 4
    },
    {
    question:  'A demand curve can shift because of changing',
          choice1:  'Income',
          choice2: 'Prices of related goods',
          choice3: 'Taste',
          choice4: 'all of the above',
          answer: 4
    },
    {
        question:  'Opportunity cost of goods is',
          choice1:  'The time lost in finding it',
          choice2: 'The expenditure on the goods',
          choice3: 'The quantity of goods sacrificed to get another unit of those goods',
          choice4: 'The loss of interest in using savings',
          answer: 3
    },

    {
        question:  'If your income during one year is N10,000 and the following year it is N12,000, then it has increased by..',
          choice1:  '20%',
          choice2: '2%',
          choice3: '12%',
          choice4: '16%',
          answer: 1
    },
    {
        question:  'When a market is in equilibrium',
          choice1:  'Quantity demand equals quantity supply',
          choice2: 'Excess demand and excess supply are zero',
          choice3: 'The market is cleared by the equilibrium price',
          choice4: 'All of the above',
          answer: 4
    },
    {
        question: ' When total utility reaches its maximum, then marginal utility will be',
          choice1:  'Minimum',
          choice2: 'Average',
          choice3: 'Zero',
          choice4: 'Negative',
          answer: 3
    },
    {
        question:  'Marginal utility is equal to average utility at that time when average utility is..',
          choice1:  'Increasing',
          choice2: 'Maximum',
          choice3: 'Falling',
          choice4: 'Minimum',
          answer: 2
    },

    {
        question:  'Which of the following taxes is a progressive tax?',
          choice1:  'Income tax',
          choice2: 'custom tax',
          choice3: 'sales tax',
          choice4: 'excise duty',
          answer: 1
    },
    {
        question:  'A supply curve is directly affected by',
          choice1:  'Technology',
          choice2: 'Input costs',
          choice3: 'Government regulation',
          choice4: 'all of the above',
          answer: 4
    },
    {
        question:  'The value of goods and services produced in a country within a year is called?',
          choice1:  'National income at factor cost',
          choice2: 'net national output',
          choice3: 'net national product at market prices',
          choice4: 'gross national product at market prices',
          answer: 4
    },
    {
        question:  'What happens to marginal cost when average cost increases?',
          choice1:  'Marginal cost is below average cost',
          choice2: 'Marginal cost is above average cost',
          choice3: 'Marginal cost is equal to average variable cost',
          choice4: 'Marginal cost is equal to average cost',
          answer: 2
    },

    {
        question:  'Which of the following is more effective in controlling prices in the long run?',
          choice1:  'Decrease in production',
          choice2: 'increase in production',
          choice3: 'decrease in the rate of interest',
          choice4: 'increase in the rate of employment',
          answer: 2
    },
    {
        question:  'The balance of payment comprises',
          choice1:  'a current account of goods and services only',
          choice2: 'a capital account of financial assets only',
          choice3: 'official settlement accounts only',
          choice4: 'all of these',
          answer: 4
    },
    {
        question:  'Other things being equal, what causes a decrease in demand?',
          choice1:  'rise in the price of the substitute',
          choice2: 'fall in the price of the commodity',
          choice3: 'rise in the income of the consumer',
          choice4: 'rise in the price of the commodity',
          answer: 4
    },

    // ECONOMICS 2017 QUESTIONS //

    {
        question:  "Utility means",
        choice1:   'Power to satisfy a want',
        choice2:   'Usefulness',
        choice3:   'Willingness of a person',
        choice4:   'Harmfulness',
        answer:  1
        },
        {
        question:  "At point of satiety, marginal utility is",
        choice1:   'Zero',
        choice2:   'Positive',
        choice3:   'Maximum',
        choice4:   'Negative',
        answer:  1
        
        },
        {
        question:  'Economic planning is an essential feature of',
        choice1:   'Capitalist economy',
        choice2:   'socialist economy',
        choice3:   'mixed economy',
        choice4:   'dual economy',
        answer:  2
        },
        {
        question:  'Commercial Banks perform the following functions except',
        choice1:   'Accepting deposit',
        choice2:   'Giving out loans',
        choice3:   'Issuing new currency',
        choice4:   'Making payment to customers',
        answer:  3
        },
        {
        question: ' What is the total number of commercial banks we have in Nigeria?',
        choice1:   '22',
        choice2:   '23',
        choice3:   '24',
        choice4:   '25',
        answer:  1
        },
        {
        question:  'Which of these Banks is the apex bank in Nigeria?',
        choice1:   'First bank',
        choice2:  ' Zenith bank',
        choice3:   'Central bank',
        choice4:   'Bank of industry',
        answer:  3
        },
        
        {
        question:   'Selecting from available alternative is',
        choice1:   'Choice',
        choice2:   'Scarcity',
        choice3:   'Opportunity cost',
        choice4:   'Scale of preference',
        answer:  1
        },
        {
        question:   'The arrangement of wants according to their importance is called',
        choice1:   'Choice',
        choice2:   'Scarcity',
        choice3:   'Opportunity cost',
        choice4:   'Scale of preference',
        answer:  4
        },
        {
        question:   'Which of these is a necessity good?',
        choice1:   'Rice',
        choice2:   'Beans',
        choice3:   'Maize',
        choice4:   'Salt',
        answer:  4
        },
        {
        question:   'The fastest growing economy in Africa is',
        choice1:   'South Africa',
        choice2:   'Kenya',
        choice3:   'Ghana',
        choice4:   'Nigeria',
        answer:  4
        },
    //
        {
        question:   'The Bank that control all other banks in Nigeria is',
        choice1:   'Central Bank',
        choice2:   'First bank',
        choice3:   'Agricultural bank',
        choice4:   'Unity Bank',
        answer:  1
        },
        {
        question:   `When Qd = 2p - 1, and Qs = 4. Find the equilibrium price`,
        choice1:   '1.0',
        choice2:   '1.5',
        choice3:   '2.0',
        choice4:   '2.5',
        answer:  4
        },
        {
        question:  ' The following are cash crops except',
        choice1:   'Rubber',
        choice2:   'Cocoa',
        choice3:   'Ginger',
        choice4:   'Beans',
        answer:  4
        },
        {
        question:  ' When the negative income effect is greater than substitution effect, it is the case of which one of the following?',
        choice1:   'Giffen goods',
        choice2:   'Inferior goods',
        choice3:   'Luxury goods',
        choice4:   'Normal goods',
        answer:  2
        },
        {
        question:   'Which one of the following statements is correct?\
        Consumption possibility frontier is same as',
        choice1:   'the indifference curve',
        choice2:   'the budget line',
        choice3:   'the production possibility frontier',
        choice4:   'the demand curve',
        answer:  3
        },
        {
        question:  `A firm has certain initial equilibrium price, when demand
        function QD = 50 - 3P and supply function is 20 + 3P. If the
        firm's demand function is shifted to C = 68 - 3P, what is the
        initial equilibrium price and the new equilibrium price, respectively?`,
        choice1:   '5 and 6',
        choice2:   '5 and 8',
        choice3:   '6 and 8',
        choice4:  ' 8 and 5',
        answer:  3
        },
        {
        question:  'Which one of the following statements is correct?',
        choice1:   'Demand for factors of production is an independent demand',
        choice2:   'Demand for factors of production is a derived demand',
        choice3:   'Demand for factors of production is a reciprocal demand',
        choice4:   'Demand for factors of production is same as the demand for commodities',
        answer:  2
        },
        {
        question:   'The value of money is',
        choice1:   'its purchasing power',
        choice2:   'its ability to reduce demand',
        choice3:   'its ability to increase supply',
        choice4:  ' its ability to increase production',
        answer:  1
        },
        {
        question:  'If MPC is equal to 0.7, what is the value of MPS?',
        choice1:   '1.0',
        choice2:   '3.0',
        choice3:   '0.13',
        choice4:   '0.30',
        answer:  2
        },
        {
            question: 'when elasticity is zero, the demand curve is...',
            choice1: 'perfectly elastic',
            choice2: 'perfectly inelastic',
            choice3: 'concave',
            choice4: 'downward slopping',
            answer: 2
        },
        {
            question: 'inferior goods are referred to in economics as goods...',
            choice1: 'whose quality is low',
            choice2: 'consumed by poor people',
            choice3: 'whose consumption falls when consumers\' income rises',
            choice4: 'none of the above',
            answer: 3
        },
        {
            question: 'a commercial bank is unique in that it is the only institution that....',
            choice1: 'accepts deposites',
            choice2: 'can transfer money from one place to another for its customers',
            choice3: 'makes loan to private people and businessmen',
            choice4: 'none of the above',
            answer: 1
        },
        {
            question: 'which of the following financial assets consist the lowest rate of interest in nigeria?',
            choice1: 'commercial bills',
            choice2: 'call money',
            choice3: 'treasury bills',
            choice4: 'development loan stocks',
            answer: 1
        }

]

//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 40;

startGame = () => {
    questionCounter = 0
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();

    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        //go to the end page...
        return window.location.assign('./end-page.html');
    }

    questionCounter++;
    //questionCounterText.innerText = questionCounter + '/' + MAX_QUESTIONS;
    progressText.innerText = `Question: ${questionCounter}/${MAX_QUESTIONS}`;
    //UPDATE THE PROGRESS BAR
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        //selectedChoice.parentElement.classList.remove(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
}); 

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

game.classList.remove('hidden');
loader.classList.add('hidden');
startGame();