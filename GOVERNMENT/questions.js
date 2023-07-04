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
    question:   'Government as an institution of a state can best be defined as a body that',
    choice1: 'recruits and trains political leaders',
    choice2: 'settles disputes and interprets laws for the state',
    choice3: 'legislates, executes and interprets laws for the state',
    choice4: 'conducts elections for the state.',
    answer:  3
    },
    {
    question:   'The rule of law refers to the principles of',
    choice1: 'legality and impartiality',
    choice2: 'the supreme power of rulers',
    choice3: 'the immunity of judges from legal actions',
    choice4: 'the orderly execution of government policies.',
    answer:  1
    },
    {
    question:  ' Which of the following is an obligation of a citizen?',
    choice1: 'Attending political rallies',
    choice2: 'taking part in Independence Day celebration.',
    choice3: 'Contesting elections.',
    choice4: 'paying respect to the national flag.',
    answer:  4
    },
    {
    question:   'Diplomatic immunity is a limitation to',
    choice1: 'the theory of separation of powers',
    choice2: 'principles of checks and balances',
    choice3: 'parliamentary supremacy',
    choice4: 'the rule of law.',
    answer:  4
    },
    {
    question:   'In which of the following party systems are all shades of opinions and interests adequately represented?',
    choice1: 'Zero party',
    choice2: 'One party', 
    choice3: 'Two party',
    choice4: 'Multi party.',
    answer:  4
    },
    {
    question:   'Which of the following is the lowest class of people in the hierarchy of feudal system?' ,
    choice1: 'Nobles',
    choice2: 'Serfs',
    choice3: 'Lords',
    choice4: 'Manor',
    answer:  2
    },
    {
    question:   'Which of the following is supreme in a feudal system?',
    choice1: 'Judiciary',
    choice2: 'Legislature',
    choice3: 'Constitution',
    choice4: 'Executive',
    answer:  3
    },
    {
    question:   'Which of the following is a feature of an elite party?',
    choice1: 'members are recruited from the working class' ,
    choice2: 'the leadership is composed of aristocrats and wealthy merchants',
    choice3: 'it usually consists of existing associations, clubs and trade unions.',
    choice4:	'Its leadership has certain techniques which attracts supporters.',
    answer:  3
    },
    {
    question:  	'The system of voting on behalf of another person is known as',
    choice1: 'Voting by lot',
    choice2: 'Casting votes',
    choice3: 'Voting by proxy',
    choice4: 'Preference voting.',
    answer:  3
    },
    {
    question:   'In which of the following system of government are ceremonial and executive powers usually fused?',
    choice1: 'Parliamentary',
    choice2: 'Presidential',
    choice3: 'Collegial',
    choice4: 'Confederal',
    answer:  1
    },
    {
    question:   "Which of the following is a source of the country's constitution?",
    choice1: 'Mandamus',
    choice2: 'Judicial precedents,',
    choice3: 'Injunction',
    choice4: 'Political decisions.',
    answer:  2
    },
    {
    question:   'Which of the following factors limits the expression of public opinion?',
    choice1: 'The type of government in a state',
    choice2: 'The establishment of private media organizations',
    choice3: 'The high literacy rate of the citizens',
    choice4: 'Religious belief of the citizens',
    answer:  1
    },
    {
    question:   'Which of the following best describes the relationship between the central and the component government in a federation?',
    choice1: 'The central government collects revenue for the component governments',
    choice2: 'the central and component governments have equal powers',
    choice3: 'the central govemment legislates for the component government',
    choice4: 'the central government is weaker than the component governments.',
    answer:  3
    },
    {
    question:   'The appointment, promotions and discipline of civil servants are the responsibility of the' ,
    choice1: 'Civil Service Union',
    choice2: 'Judicial Service Commission',
    choice3: 'Civil Service Commission',
    choice4: 'Electoral Commission.',
    answer:  3
    },
    {
    question:   'The grant of the right to vote is called',
    choice1: 'enfranchisement',
    choice2: 'disqualification',
    choice3: 'prohibition',
    choice4: 'participation',
    answer:  1
    },
    {
    question:   'Which of the following factors may work against a representative system of government?',
    choice1:' High literacy of the electorate',
    choice2: 'the introduction of universal adult suffrage',
    choice3: 'independent electoral commission',
    choice4: 'Rigging of elections.',
    answer:  4
    },
    {
    question:   'The Nigeria federal legislature is called the',
    choice1: 'Senate',
    choice2: 'Congress',
    choice3: 'National Assembly',
    choice4: 'House of Representative',
    answer:  3
    },
    {
    question:   'The Nigeria first constitution was the',
    choice1: 'Lyttleton constitution',
    choice2: 'Clifford constitution',
    choice3: 'Macpherson Constitution',
    choice4: 'Independence constitution.',
    answer:  1
    },
    {
    question:   'The concept of regionalism in Nigeria was the first introduced by the',
    choice1: 'Independence constitution',
    choice2: 'Macpherson Constitution',
    choice3: "Richard's constitution",
    choice4: 'Lyttleton Constitution.',
    answer:  3
    },
    {
    question:  'Which of the following military regimes in Nigeria played a prominent role in the liberation of colonized African states?',
    choice1: 'Aguiyi Ironsi',
    choice2: 'Murtala/Obsanjo',
    choice3: 'Muhammadu Buhari',
    choice4: 'Ibrahim Babangida.',
    answer:  2
    },
    //GOVERNMENT rc4
    {
    question:   'Veto power in a presidential system lies with the',
    choice1: 'Attorney General',
    choice2: 'Chief of Army Staff',
    choice3: 'Executive President',
    choice4: 'Prime Minister',
    answer:  3
    },
    {
    question:  " Mussolini's fascism and Hitler's Nazism are good examples of",
    choice1: 'Anarchy',
    choice2: 'Feudalism',
    choice3: 'Totalitarianism',
    choice4: 'Oligarchy',
    answer:  3
    },
    {
    question:   'An order directing a detainee to be brought before the court is called',
    choice1: 'Habeas corpus',
    choice2: 'An appearance',
    choice3: 'An injunction',
    choice4: 'A referendum.',
    answer:  1
    },
    {
    question:   'An undesirable feature of capitalism is',
    choice1: 'Exploitation',
    choice2: 'Market economy',
    choice3: 'Profit motive',
    choice4: 'Free competition.',
    answer:  1
    },
    {
    question:   'Authoritarianism is least inherent in',
    choice1: 'Feudalism',
    choice2: 'Fascism',
    choice3: 'Democracy',
    choice4: 'Monarchy',
    answer:  3
    },
    {
    question:   'The programme of a political party is known as its',
    choice1: 'Constitution',
    choice2: 'Document',
    choice3: 'Manifesto',
    choice4: 'Propaganda',
    answer:  3
    },
    {
    question:   'The acquisition of political powers through hereditary means is a feature of',
    choice1: 'Communalism',
    choice2: 'Capitalism',
    choice3: 'Oligarchy',
    choice4: 'Monarchy',
    answer:  4
    },
    {
    question:   'If the federal government and the unit government are to preserve their autonomy, the',
    choice1: 'Federal government must be supreme',
    choice2: 'Unit government must be supreme',
    choice3: 'Judiciary must be supreme',
    choice4: 'Constitution must be supreme.',
    answer:  4
    },
    {
    question:   'The administrative head of public corporation in Nigeria is the',
    choice1: 'Managing Director',
    choice2: 'Secretary',
    choice3: 'Board of Directors',
    choice4: 'Chairman',
    answer:  1
    },
    {
    question:   'Red tapism in the civil service refers to',
    choice1: 'The use of red tapes on legal documents',
    choice2: 'Slowness of actions',
    choice3: 'The cooperation between civil servants and politicians',
    choice4: 'The politicization of civil servants.',
    answer:  2
    },
    {
    question:  ' The system which allows private individuals and companies to own and control the means of production is known as',
    choice1: 'Socialism',
    choice2: 'Fascism',
    choice3: 'Capitalism',
    choice4: 'Communism',
    answer:  3
    },
    {
    question:   'The powers allocated to the central government in a federation are contained in the',
    choice1: 'Central legislative list',
    choice2: 'Exclusive legislative list',
    choice3: 'Residual list',
    choice4: 'Concurrent legislative list.',
    answer:  2
    },
    {
    question:  ' Delegated legislation has the advantage of',
    choice1: 'Enlightening the public about law making procedure',
    choice2: 'Saving parliamentary time',
    choice3: 'Reducing expenses of the legislature',
    choice4: 'Preventing the executive from becoming too powerful.',
    answer:  2
    },
    {
    question:   'The Nigerian Macpherson constitution of 1951 was significant for',
    choice1: 'The introduction of Electoral College',
    choice2: 'Providing for the office of the prime Minister',
    choice3: 'The creation of states',
    choice4: 'Establishing the Supreme Court',
    answer:  1
    },
    {
    question:   "Immediately after the Nigerian civil war, Gowon's regime embarked on",
    choice1: 'Rejuvenation, Resettlement and Reconstruction',
    choice2: 'Reconciliation, Rehabilitation and Reconstruction',
    choice3: 'Rebuilding, Rejuvenation and Rehabilitation',
    choice4:' Rehabilitation, Renaissance and Repression.',
    answer:  2
    },
    {
    question:  ' Traditional Rulers appointed by the British to implement Indirect Rule in Eastern Nigeria were called',
    choice1: 'Palace Chiefs',
    choice2: 'Village Chiefs',
    choice3: 'Warrant Chiefs',
    choice4: 'Crown Chiefs',
    answer:  3
    },
    {
    question:   'In the federation of Nigeria, states are equally represented in the',
    choice1: 'Senate',
    choice2:' House of Representatives',
    choice3: 'Judiciary',
    choice4: 'National Population Commission.',
    answer:  1
    },
    {
    question:  ' Checks and balances were features of pre-colonial political administration of the',
    choice1: 'Hausa',
    choice2: 'Yoruba',
    choice3: 'Igbo',
    choice4: 'Fulani',
    answer:  2
    },
    {
    question:  ' In the pre-colonial Hausa/Fulani system, the appointment of an Emir in the Caliphate was approved by the',
    choice1: 'Sardauna of Sokoto and Alkali',
    choice2: 'Galadima and the Waziri',
    choice3: 'Shehu of Borno and the Galadima',
    choice4: 'Sultan of Sokoko and Emir of Gwandu.',
    answer:  4
    },
    {
    question:  'One of the problems facing Economic Community of West African States (ECOWAS) is that',
    choice1: 'Member states do not attend meetings regularly',
    choice2: 'Member states do not have a common currency',
    choice3: 'Some member states want to contribute large funds to the community',
    choice4: 'It is a rival to the Organization of African Unity.',
    answer:  2
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