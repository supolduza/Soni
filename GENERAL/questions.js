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
    {
        question: '..............is the main concern of the Police as a tool for Safety',
        choice1: 'Maintenance of market peace',
        choice2: 'Indiscriminate arrest of citizens',
        choice3:  'Punishing offenders with detention',
        choice4:  'Maintenance of public peace',

        answer: 4
    },
    {
        question: 'Who was the first indigenous Inspector General of Police?',
        choice1: 'Adams Smith',
        choice2: 'Solomon Arase ',
        choice3:  'Louis Edet',
        choice4:  'Tafa Balogun',

        answer: 3
    },
    {
        question: 'Police orderlies are attached to VIPs to',
        choice1: 'Provide shade',
        choice2: 'Open car doors',
        choice3:  'Provide security',
        choice4:  'Become bags carrers',

        answer: 3
    },
    {
        question: 'The Nigeria Police Force is an agency of government...',
        choice1: 'Judiciary',
        choice2: 'Executive',
        choice3:  'Legislature',
        choice4:  'All of the above',

        answer: 2
    },
    {
        question: 'One of the followings is not a duty of a Police Officer ',
        choice1: 'Torturing of suspects',
        choice2: 'Investigation of cases',
        choice3:  'Arresting of suspect',
        choice4:  'Prosecution of accused persons',

        answer: 1
    },
    {
        question: 'Which rank are graduates of the Police Academy expected to be commissioned on successful completion of their course?',
        choice1: 'Superintendent of Police',
        choice2: 'Assistant Superintendent of Police',
        choice3:  'Graduate Superintendent of Police',
        choice4:  'Graduate Police Officer',

        answer: 2
    },
    {
        question: 'Who is the head of Nigeria police Force in your state?',
        choice1: 'Assistant Inspector General of Police',
        choice2: 'Assistant Commissioner of Police ',
        choice3:  'Commissioner of Police',
        choice4:  'Divisional Police Officer',

        answer: 3
    },
    {
        question: 'What is the best reason why people give information to the Police?',
        choice1: 'To gain Police favour',
        choice2: 'To help the Police and the society',
        choice3:  'To get reward from the Police',
        choice4:  'To revenge against their enemies',

        answer: 2
    },
    {
        question: 'The ______________ are the colours of the Nigeria Police Flag.',
        choice1:' Blue, White, Green',
        choice2: 'Blue, Yellow, Red ',
        choice3:  'Blue, Yellow, Green',
        choice4:  'Blue, Green, Purple',

        answer: 3
    },
    {
        question: 'The head of the Police Force in Nigeria is addressed as.',
        choice1: 'Senior Inspector of police',
        choice2: 'Inspector General of Police',
        choice3:  'Principal Inspector of Police',
        choice4:  'Inspector of Naval Police',

        answer: 2
    },
    {
        question:  'In what year was the Nigeria Police Academy Wudil-Kano being upgraded to a degree awarding institution?',
        choice1: 'June, 2010',
        choice2: 'June, 2011',
        choice3:  'September, 2010',
        choice4:  'September, 2011',

        answer: 4
    },
    {
        question: '.....is the longest serving Senate President of Nigeria.',
        choice1: 'Sen. Bukola Saraki',
        choice2: 'Sen. Chuba Okadigbo',
        choice3:  'Sen. Evans Enwerem',
        choice4:  'Sen. David Mark',

        answer: 4
    },
    {
        question: 'Nigeria was amalgamated in ',
        choice1: '1914',
        choice2: '1930',
        choice3:  '1916',
        choice4: '1960',

        answer: 1
    },
    {
        question:  'Which of these Nigerian states has the least numbers of local government Areas?',
        choice1: 'Nasarawa State',
        choice2: 'Delta State',
        choice3:  'Bayelsa State',
        choice4:  'Abia State',

        answer: 3
    },
    {
        question: 'Which of these is the lead internal security agency in Nigeria?',
        choice1:  'Nigeria Security and Civil Defence Corps',
        choice2:  'Nigeria Armed Forces ',
        choice3:  'Nigeria Police Force',
        choice4:  'Directorate of Security Services',

        answer: 3
    },
    {
        question:  'Nigeria is currently in which Republic?',
        choice1: '5th',
        choice2: '1st ',
        choice3:  '4th',
        choice4:  '6th',

        answer: 3
    },
    {
        question: 'One of these involves the ability to distinguish right from wrong and to behave accordingly',
        choice1: 'Immorality',
        choice2: 'Morality',
        choice3:  'Fanaticism',
        choice4:  'Satanism',

        answer: 2
    },
    {
        question: 'Today, every country strives to ensure the safety and security of its citizens for all of these reasons except.',
        choice1: 'To increase the quality of its citizens',
        choice2: 'To ensure peaceful coexistence among its citizens',
        choice3:  'To promote high tradition among its citizens',
        choice4:  'To ensure infrastructural development of the country.',

        answer: 3
    },
    {
        question: "The acronym 'NPF' stands for what?",
        choice1: 'Northern Police Force',
        choice2: 'Nigeria Police Force',
        choice3:  'Non Pay Payment Funds',
        choice4:  'No Permanent Friend' ,

        answer: 2
    },
    {
        question:  'How many Federal Constituencies does Nigeria have?',
        choice1:  '360',
        choice2: '366',
        choice3:  '108',
        choice4:  '380',

        answer: 1
    },
    /*{
        question:  'If 5^x = a and 5^y = b, then ab =',
        choice1:  '5^xy',
        choice2:  '5^x+y',
        choice3:  '10^x+y',
        choice4:  '25^xy',

        answer: 1
    },*/
    {
        question: ' At Police Secondary School, Kano 100 seniors are taking Igbo language and 80 seniors are taking Hausa. If 20 seniors are taking both Igbo and Hausa, what is the ratio of the numbers of seniors taking only Igbo to the number taking only Hausa?',
        choice1: '3/4',
        choice2: '4/5',
        choice3: '5/4',
        choice4:  '4/3',

        answer: 4
    },
    {
        question:  'In the sequence 1, 2, 3, -4, 1, 2, 3, -4,.., the numbers 1, 2, 3, -4 repeat indefinitely. What is the sum of the first 150 terms?',
        choice1:  '300',
        choice2:  '77',
        choice3:  '37',
        choice4:  '3',

        answer: 2
    },
    {
        question:  'If a set of number consist of 1/4 and 1/6,  what number can be added to the set to make the average(arithmetic mean) also equal to 1/4?',
        choice1:	'1/6',
        choice2:	'1/5',
        choice3:	'1/4',
        choice4:	'1/3',

        answer: 4
    },
    /*{
        question: 'If x != -2, then 5x2-20/5x+10 =',
        choice1:	'x - 2',
        choice2:	'x - 10',
        choice3:	'5x + 2',
        choice4:	'x + 2',

        answer: 1
    },*/
    {
        question: 'Two positive integers differ by question:  The sum of their squares is 169. Find the larger integer.',
        choice1:  '4',
        choice2:  '5',
        choice3: ' 9',
        choice4:  '12',

        answer: 4
    },/*
    {
        question: 'In 40 minutes, Kunle walks question: 5km and Binta walks question: 5km, in kilometers per hour, how much faster is Kunle walking?',
        choice1:  '1',
        choice2:  'question: 0',
        choice3:  'question: 5',
        choice4:  'question: 5',

        answer: 1
    },
    {
        question: 'If five less than y is six more than x + 1, then by how much is x less than y?',
        choice1:  '12',
        choice2:  '6',
        choice3:  '10',
        choice4:  '11',

        answer: 1
    },*/
    {
        question: 'What is the ratio of the circumference of a circle to its radius?',
        choice1:  'π/2',
        choice2:  'π',
        choice3:  '√π',
        choice4:  '2π',

        answer: 4
    },
    {
        question: 'What is the surface area of a cube whose volume is 64?',
        choice1:  '16',
        choice2:  '128',
        choice3:  '96',
        choice4:  '384',

        answer: 3
    },
    {
        question: 'We shall not.... IJMB next May',
        choice1:  'sit in ',
        choice2:  'sit at ',
        choice3:  'sit for ',
        choice4:  'sit to',

        answer: 3
    },
    {
        question: 'It is sad that the rich _________ pity the poor.',
        choice1:  "doesn't" ,
        choice2: " don't" ,
        choice3:  "do" ,
        choice4: " did",

        answer: 2
    },/*
    {
        question:  'The motorcycle nearly hit Jane and',
        choice1: ' me ',
        choice2:  'I ',
        choice3:  'myself ',
        choice4:  'mine',

        answer: 1
    },
    {
        question: 'I found my friends sitting ..',
        choice1:  'in' ,
        choice2:  'at ',
        choice3:  'under ',
        choice4: ' on',

        answer: 1
    },*/

    {
        question:  'It is about time you________ to the beach.',
        choice1:  'go ',
        choice2:  'have gone ',
        choice3:  'went ',
        choice4:  'going',

        answer: 3
    },
    {
        question:  'A few days after the resumption of classes, lazy students started counting down to the next',
        choice1:  'recreation',
        choice2:  'vacation',
        choice3:  'dismissal',
        choice4:  'reopening',

        answer: 2
    },
    {
        question: 'Mrs Ejira is flexible in matters concerning adolescents but her husband is______',
        choice1:  'aggressive',
        choice2:  'irrational',
        choice3:  'agreeable',
        choice4:  'rigid',

        answer: 4
    },
    {
        question: 'Ivy has deferred her birthday party but her friends insist that she ... the date.',
        choice1:  'postpone',
        choice2:  'retain',
        choice3:  'cancel',
        choice4:  'call off',

        answer: 2
    },
    {
        question: 'He informed the villagers that voting was voluntary rather than',
        choice1:  'discretionary',
        choice2:  'enforced',
        choice3: ' necessary',
        choice4:  'compulsory',

        answer: 4
    },
    {
        question: "Is this pattern important?  It's _________to study well.",
        choice1:  'too important', 
        choice2:  "that important" ,
        choice3: ' very important' ,
        choice4: 'Important enough',

        answer: 3
    },


    // ANOTHER PART OF THE GENERAL QUESTIONS //

//All candidates MUST answer all questions in this section
    {    
        question: '  ________.is the full meaning of NPF',
        choice1: 'Nigeria Prison Force',
        choice2: 'No Permanent Friend',
        choice3: 'Nigeria Police Forum ',
        choice4: ' Nigeria Police Force',

        answer: 4
    },
    {
        question: ' Police is a ___________ ..organisation',
        choice1: 'Peace making',
        choice2: 'War loving',
        choice3: 'Terrorist',
        choice4: 'All of the above',

        answer: 1
    },
    {
        question:  'Which of these arms of government works hand in hand with the Police in carrying out its constitutional responsibility of interpreting the laws and sanctioning offenders?',
        choice1: 'Executive',
        choice2: 'Legislature' ,
        choice3:  'Judiciary',
        choice4: 'All of the above',

        answer: 3
    },
    {
        question:  'The image maker of the Police in your state is ..',
        choice1: 'Force Public Relations Officers (FPRO)',
        choice2: 'Police Public Relations Officer (PPRO)',
        choice3: 'Divisional Police Officer (DPO)',
        choice4: 'Divisional Crime Officer (DCO)',

        answer: 2
    },/*
    {
        question:  'Who is the present Chairman of the Police Service Commission?',
        choice1: 'Ibrahim K. Idris',
        choice2:' Mohammed ...... Abubakar',
        choice3: 'Mike M. Okiro',
        choice4: 'Sunday Ehindero',

        answer: 1
    },
    {
        question:  'The following were Nigerians Inspectors General of Police except?',
        choice1: 'Mr. choice3: W. Duncan',
        choice2: 'Alh. Kam Salem',
        choice3: 'Mr. Suleman Abba',
        choice4: 'Mr. Suleman Fakai',

        answer: 1
    },
    {
        question:  'The Nigeria Police Force headquarters is situated at?',
        choice1: 'Lagos',
        choice2: 'Portharcourt',
        choice3: 'Lokoja',
        choice4: 'Abuia',

        answer: 1
    },
    {
        question:  'The following requirements are considered for recruitment into the Nigeria Police Force with the exception of.',
        choice1: 'Height',
        choice2: 'Age',
        choice3: 'Religion',
        choice4: 'Educational Qualification',

        answer: 1
    },
    {
        question: ' Which of these instruments is used by the Police scene of Crime investigator to restrict access to the scene of crime?',
        choice1: 'Caution Tape',
        choice2: 'Gun Powder',
        choice3: 'Plain Paper',
        choice4: 'Jack Knife',

        answer: 1
    },
    {
        question: ' Which of these is an act of Aggression?',
        choice1: 'Dancing',
        choice2: 'Laughing',
        choice3: 'Violence',
        choice4: 'Clapping',

        answer: 1
    },
    {
        question:  'The national Chairman of All Progressive Congress (APC) is',
        choice1: 'President Muhammadu Buhari',
        choice2: 'Chief John Odegie Oyegun',
        choice3: 'Alh. Ali Modu Sheriff',
        choice4: 'BamangaTukur',

        answer: 1
    },
    {
        question: ' Who is the Speaker of the House of Representatives in Nigeria?',
        choice1: 'Sen. Godwills Akpabio',
        choice2: 'Hon. Femi Gbajabiahmila',
        choice3: 'Hon. Yakubu Doraga',
        choice4: 'Hon. Johnbull Shakarau',

        answer: 1
    },
    {
        question:  '    ...is a Nigeria town that is famous in blacksmithing work.',
        choice1: 'Ukum, Benue State',
        choice2: 'Awka, Anambra State',
        choice3: 'Ajeokuta, Kogi State',
        choice4: 'Wudil, Kano State',

        answer: 1
    },
    {
        question:  'Which one of these is not an effect of drug abuse?',
        choice1: 'Increase in Crime Rate',
        choice2: 'Frequent illness',
        question:  'Premature death',
        choice4: 'Promotion of friends',

        answer: 1
    },
    {
        question: ' One of the actions listed bellows is not an offence in Nigeria?',
        choice1: 'Rape',
        choice2: 'Stealing',
        choice3: 'Cheating',
        choice4: 'Cash withdrawal',

        answer: 1
    },
    {
        question: ' Which form of marriage recently stirred the international politics?',
        choice1: 'Court marriage',
        choice2: 'Sharia marriage ',
        choice3: 'Gay marriage',
        choice4: 'Christian marriage',

        answer: 1
    },
    {
        question: ' Which of these social vices are the Nigeria Police Force being accused of by the Public?',
        choice1: 'Dishonesty',
        choice2: 'Corruption',
        choice3: 'Incivility',
        choice4: 'Unprofessionalism',

        answer: 1
    },
    {
        question:  'Which of these is the likely experience of a country that is involved in violent crimes and victimization?',
        choice1: 'Destruction of property',
        choice2: 'Destruction of human lives',
        choice3: 'Lack of infrastructural development',
        choice4: 'All of the above',

        answer: 1
    },
    {
        question:  'The 2015 general Elections that produced the incumbent president of Nigeria was held on which date?',
        choice1: '11th March, 2015',
        choice2: '28th March, 2015',
        choice3: '28th April, 2015',
        choice4: '11th April, 2015',

        answer: 1
    },
    {
        question:  'Which one of these countries is at the same time a country and a continent?',
        choice1: 'Singapore',
        choice2: 'South Africa',
        choice3: 'Australia',
        choice4: 'Kuwait',

        answer: 1
    },
    {
        question:  'The motorcar has had an enormous',
        choice1: 'in daily life',
        choice2: 'on daily life',
        choice3: 'in daily lives',
        choice4: 'to daily life',

        answer: 1
    },
    {
        question: "Is this pattern important? - It's -- - to study well.",
        choice1: 'too important',
        choice2: 'that important',
        choice3: 'very important',
        choice4: 'important enough',

        answer: 1
    },
    {
        question:  'The fewer bags you take     - trouble you will have',
        choice1: 'the fewer',
        choice2: 'the less',
        choice3: 'the little',
        choice4: 'the least',

        answer: 1
    },
    {
        question:  'We hire out bicycle',
        choice1: 'by hours',
        choice2: 'by the hours',
        choice3: 'by an hour',
        choice4: 'for hours',

        answer: 1
    },
    {
        question:  'Why are you always jealous ........ other people?',
        choice1: 'of',
        choice2: 'at' ,
        choice3: 'about',
        choice4: 'with',

        answer: 1
    },
    {
        question:  `From the options lettered A-D, choose the one that is most nearly opposite in meaning to the capitalized word(s) and can at the same time; fill the gap in the sentence.

        The chairman's speech was rather VERBOSE but the guest speaker's was ..,`,
        choice1: 'captivating',
        choice2: 'confusing',
        choice3: 'controlled',
        choice4: 'concise',

        answer: 1
    },
    {
        question:  'The day started with an OVERCAST sky, then suddenly it became',
        choice1: 'shiny',
        choice2: 'bright',
        choice3: 'light',
        choice4: 'blurred',

        answer: 1
    },
    {
        question:  'John was PERTURBED about his poor examination results while his friend remained .',
        choice1: 'sober',
        choice2: 'tranquil',
        choice3: 'scanty',
        choice4: 'shallow',

        answer: 1
    },
    {
        question:  'Rain forests are LUXURIANT while plants in the savannah have ... growth.',
        choice1: 'slow',
        choice2: 'small',
        choice3: 'scanty',
        choice4: 'shallow',

        answer: 1
    },
    {
        question:  'This is a country of extremes where a few people live in ... in the midst of widespread PENURY.',
        choice1: 'affluence',
        choice2: 'poverty',
        choice3: 'pleasure',
        choice4: 'enrichment',

        answer: 1
    },
    {
        question:  'What is the smallest integer,  x, for which x, x+5, and 2x -5 can be the lengths of the sides of a triangle?',
        choice1: '8',
        choice2: '9',
        choice3: '11',
        choice4: '12',

        answer: 1
    },
    {
        question:  'If 120% of P is equal to 80% of Q, which of the following is equal to P + Q?',
        choice1: '2.5P',
        choice2: '2P',
        choice3: '1.5P',
        choice4: '5P',

        answer: 1
    },
    {
        question:  'If Henry drove 220 kilometers between 10:00 choice1:M. and 1:40 P.M., what was his average speed, in kilometres per hour?',
        choice1: '54',
        choice2: '60',
        choice3: '55',
        choice4: '45',

        answer: 2 //correct
    },
    {
        question:  'Let f(x) = x-4  What is the smallest integer for which f(x) is defined?',
        choice1: '0',
        choice2: '4',
        choice3: '3',
        choice4: '5',

        answer: 1
    },
    {
        question:  'If (79) (74) = 7, what is d in terms of a, b, and c?',
        choice1: ' ' ,
        choice2: 'c-a-b',
        choice3: 'c - ab',
        choice4:' a+b',

        answer: 1


    },*/
    {
        question:  'If the ratio of APC to PDP on a committee is 3:5, what percent of the committee members are PDP members?',
        choice1: '62.5%',
        choice2: 'It cannot be determine from the information given',
        choice3: '37.5%',
        choice4: '60%',

        answer: 1 //correct
    },/*
    {
        question:  'If the height of a cylinder is 4 times its circumference, what is the volume of the cylinder in terms of its circumference, C?',
        choice1: ' ',
        choice2: '262',
        choice3: ' ',
        choice4: '4',

        answer: 1
    },
    {
        question:  `The measure of the three angles in a triangle is in the ratio
        1:1:question:  Which of the following must be true?
        I. The triangle is isosceles
        II. The triangle is a right triangle
        III. The triangle is equilateral`,
        choice1: 'None',
        choice2: 'I and III only',
        choice3: 'I and II only',
        choice4: 'I only',

        answer: 1
    },*/
    {
        question:  'If  a - b = 10, b - c = 20 and c - d = 30, what is the value of a - d?',
        choice1: '50',
        choice2: '100',
        choice3: '60',
        choice4: '80',

        answer: 3
    },/*
    {
        question: 'What is the value of k if the line that passes through (3, -3) and (k, 5) has a slope of ? ?',
        choice1: 'question: 33',
        choice2: '10',
        choice3: '15',
        choice4: ' ',

        answer: 1
    }*/
]




//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 40;

startGame = () => {
    questionCounter = 0
    score = 0;
    availableQuestions = [...questions];
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