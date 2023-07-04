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
    //LITERATURE IN ENGLISH
    {
        question:   'One of these statements is true of the novel...',
        choice1: 'it is an exact reproduction of historical events',
        choice2:' characters are unimportant in it',
        choice3: "it is always the story of the author's life",
        choice4: 'it deals with human experience',
        answer: 4
    },
    {
        question:  ' One of the following writers is better known as a playwright than a novelist.',
        choice1:  'C. Achebe',
        choice2:  'C. Ekwensi',
        choice3: ' W. Soyinka',
        choice4:  'J.P. Clark',
        answer: 3
    },
    {
        question:   'The plot of a novel is best described as---',
        choice1: 'the bare outline of the story arranged in logical order',
        choice2: 'the story in all its details',
        choice3: 'the story grossly elaborated',
        choice4: 'a summary of the story',
        answer: 1
    },
    {
        question:  ' A narrative poem must--',
        choice1: 'preach a sermon',
        choice2: 'tell a story',
        choice3: 'describe natural scenery',
        choice4:' argue a question',
        answer: 2
    },
    {
        question:  ' Literature is studied as a subject at school because.....',
        choice1: 'it exposes students to the reality of life',
        choice2: 'it provides entertainment',
        choice3: 'it merely gives additional work to students',
        choice4: 'it teaches the use of words',
        answer: 4
    },
    {
        question: '  Poetry deals with one of the following',
        choice1: 'emotion only',
        choice2: 'death only',
        choice3: 'ideas only',
        choice4: 'emotion and ideas',
        answer: 4
    },
    {
        question: '  Drama is essentially different from poetry because it',
        choice1: 'always involve many characters',
        choice2: 'exists mainly in action',
        choice3: 'uses elevated language',
        choice4: 'uses local imagery',
        answer: 2
    },
    {
        question:   'Which of these statements best describes a comedy?',
        choice1: 'a play in which nobody dies',
        choice2: 'a play which makes us laugh',
        choice3: 'a play in which the hero is a clown',
        choice4: 'a play which ends happily',
        answer: 4
    },
    {
        question:  ' Which of the following adjectives best describes the character of Okonkwo in Things Fall Apart?',
        choice1: 'gentle',
        choice2: 'quick tempered',
        choice3: 'considerate',
        choice4: 'meek',
        answer: 2
    },
    {
        question:  " Artistically, Okonkwo's seven years exile is a devise used to----",
        choice1: 'introduce comic relief',
        choice2: 'keep Okonkwo at a distance from the movement of the mind Umuofia',
        choice3: 'serve as a warning to other members of the Umuofia community',
        choice4: 'de-emphasize the role of Okonkwo in the novel',
        answer: 3
    },
    {
        question:  ' The novel Things Fall Apart by China Achebe was first published in-',
        choice1: '1948',
        choice2: '1952',
        choice3: '1958',
        choice4: '1960',
        answer: 4
    },
    {
        question:  ' A sonnet is a poem of-',
        choice1: 'seven lines',
        choice2: 'three lines',
        choice3: 'four lines',
        choice4: 'fourteen lines',
        answer: 4
    },
    {
        question:  ' The antagonist in a tragedy is',
        choice1: 'any character in the tragedy',
        choice2: 'the wife of the protagonist',
        choice3: 'the character who provides comic relief',
        choice4: 'the character se in opposition to the main character',
        answer: 4
    },
    {
        question:  ' A statement that appears to say something opposite to common sense or the truth, but which may contain a truth is -',
        choice1: 'Oxymoron',
        choice2: 'parable',
        choice3: 'irony',
        choice4: 'paradox',
        answer: 4
    },
    {
        question:  ` "The leaves are withered.
        Roses fold and shrink
        Dog, the painting athlete shows his tongue
        A dwarled shadow flees.
        Hides under legs.
        Nuts wrinkle and crack.
        "poems in Four Parts" by W. Kamera
        One dominant image presented in the poem above is that of`,
        choice1: 'spent life',
        choice2: 'summer',
        choice3: 'death',
        choice4: 'tiredness',
        answer: 1
    },
    {
        question: '  An insincere literary work is known as-..',
        choice1: 'parody',
        choice2: 'paradox',
        choice3: 'satire',
        choice4: 'pathos',
        answer: 1
    },
    {
        question:  ' A novel which depicts the adventures of the main character who is usually something of a rogue is-',
        choice1: 'comedy',
        choice2: 'fable',
        choice3: 'prose',
        choice4: 'picaresque',
        answer: 4
    },
    {
        question: `  "Now I fear disturbance of the quiet season
        Winter shall come bring death from the sea
        Ruinous spring shall beat at our doors
        Root and shoot shall eat our eyes and our ears".
        The dramatic technique employed in this passage is---`,
        choice1: 'anticlimax',
        choice2: 'foreshadowing',
        choice3: 'flashback',
        choice4: 'irony',
        answer: 1
    },
    {
        question:  ' A creative techniques in which abstract entities such as virtues and vices are used with intended double meaning is called',
        choice1: 'tragedy',
        choice2: 'fallacy',
        choice3: 'allegory',
        choice4:' farce',
        answer: 3
    },
    {
        question:  ' In Literature, a round character is associated with.',
        choice1: 'Change and growth',
        choice2:' stability and determination',
        choice3:' simplicity and modesty',
        choice4:' running down other characters',
        answer: 1
    },
    
    
    //LITERATURE IN ENGLISH
    {
        question:  ' An image in poetry usually gives a clue to one of the following',
        choice1: 'rhyme',
        choice2: 'assonance',
        choice3: 'paradox',
        choice4: 'theme',
        answer: 4
    },
    {
        question:  ' One of the following terms applies to the discussion of both comedy and tragedy',
        choice1: 'Climax',
        choice2: 'happy ending',
        choice3: 'tragic hero',
        choice4:' alliteration',
        answer: 1
    },
    {
        question:  ' One of the peculiar features of drama in general is---',
        choice1: 'humour',
        choice2: 'satire',
        choice3: 'sarcasm',
        choice4: 'action',
        answer: 4
    },
    {
        question:  ' Dialogue is important in drama because -',
        choice1: 'it always makes the audience laugh',
        choice2: 'it is like a conversation',
        choice3: 'it reveals the minds of the characters',
        choice4: 'it makes the play last longer on stage',
        answer: 3
    },
    {
        question:  ' One of the following is a narrative technique in the novel-.',
        choice1: 'character',
        choice2: 'interesting story',
        choice3: 'flashback',
        choice4: 'logical conclusion',
        answer: 3
    },
    {
        question:   'Dialogue is important in drama because it -',
        choice1: 'helps the audience to improve their English usage',
        choice2: 'is usually funny and lively',
        choice3: 'helps audience to relax',
        choice4: 'reveals the minds of the characters in the play',
        answer: 4
    },
    {
        question:  ' A novel is -.',
        choice1: 'a long prose narrative fiction',
        choice2: 'an interesting story about a hero',
        choice3:' a prose writing that deals with various people',
        choice4:' the long story in which human characters represent abstract qualities',
        answer: 3
    },
    {
        question:  ' Identify the odd item in the following list.',
        choice1: 'prose',
        choice2: 'poetry',
        choice3: 'melodrama',
        choice4: 'catastrophe',
        answer: 2
    },
    {
        question:  ` "No, let them attack me. Is not ignorance that led the rat attack the cut? Ten thousand of them - let them - attack me. They have the arms they have the swords. But me... I only have one weapon and this I have used and mine is the victory...
        The one weapon which the speaker in the play The Gods are not to Blame refers to is`,
        choice1: 'prophecy',
        choice2: 'courage',
        choice3: 'truth',
        choice4: 'justice',
        answer: 2
    },
    {
        question:  ' A play is called a comedy when -',
        choice1: 'there is a peaceful atmosphere and laughter in it',
        choice2: 'nobody dies in it',
        choice3: 'there is no serious quarrel in it',
        choice4: 'there is a happy resolution of contradictions',
        answer: 3
    },
    {
        question: `  "I have said too much unto a heart of stone And laid my honour too unchary out".
        Twelfth Night by W. Shakespeare
        The above lamentation is an example of a`,
        choice1: 'Simile',
        choice2: 'metaphor',
        choice3: 'personification',
        choice4: 'zeugma',
        answer: 4
    },
    {
        question: `  "Hee thou great Anna! Whom three realms obey,
        Dost sometimes counsel - take and sometimes tea".
        The literary device used in this passage is`,
        choice1: 'antithesis',
        choice2: 'climax',
        choice3: 'epigram',
        choice4: 'anticlimax',
        answer: 3
    },
    {
        question:  ' "In the morning, Benjamin complained of a headache; at noon, he collapsed; by midnight, he was as dead and cold as stone". The dominant literary device in this statement is',
        choice1: 'simile',
        choice2: 'epigram',
        choice3: 'climax',
        choice4: 'anticlimax',
        answer: 3
    },
    {
        question:  ` "Though nothing can bring back the hour of spendour in the grass, of glory in the flower,
        We will grieve not, rather find
        Strength in what remains behind...
        "Ode - Intimations of Immorality"
        By William Wordsworth
        The above lines convey a sense of`,
        choice1: 'dejection',
        choice2: 'uneasy acceptance',
        choice3: 'deep distress',
        choice4: 'nostalgia',
        answer: 2
    },
    {
        question:  ` "There is something new, for example about my hands, a certain way of picking up my pipe or my fork. Or else, it is the fork that now has a certain way of getting picked up, I don't know. Just now, when I was on the point of coming into my room, I stopped short because I felt in my hand a cold object that attracted my attention by means of a sort of personality. I opened my hand and looked and it was simply the door knob"
        Nausea by Jean Paul Satre
        The style of writing in the passage can be described as`,
        choice1: 'introspective',
        choice2: 'confused',
        choice3: 'confrontational',
        choice4: 'passive',
        answer: 1
    },
    {
        question:  ` "Though we knew that something was wrong with our society, we made no attempt to assess it. Trinidad was too unimportant and we could never be convinced of the value of reading the history of a place which was, as everyone said, only a dot on the map of the world."
        The Middle Passage by V.S. Naipaul
        The writer here maintains that Trinidad`,
        choice1: 'was too insignificant to have a history',
        choice2: 'was so small that its people did not value its history',
        choice3: `was a mere dot and did not therefore attract people's attention`,
        choice4: 'lacked historical significance because it could not compete with the rest of the world.',
        answer: 2
    },
    {
        question: ` "Akosua Nowa has touched my manhood;
        Tell her, red ant upon the tree;
        If she passes this way, I am gone, I am gone to load my gun
        No matter how hidden deep her treasure,
        By my father's coffin I swear
        I'll shoot my way to it this day;son of the hunter King There is liquid fire in my gun...!
        "Akosa Nowa" by Joel de Graft
        The beauty of this poem is built upon its -`,
        choice1: 'rhythm',
        choice2: 'extended images of treasure and gun',
        choice3: "the protagonist's boastfulness",
        choice4: 'the arrangement of the lines',
        answer: 3
    },
    {
        question:  ` I thank God for creating me black
        For making of me
        Porter of all sorrows
        Sitting on my head
        The World
        I wear the Centaur's hide
        And I have carried the World since the first morning"
        "I Thank you God" by Bernard Dadie
        The poet's attitude here is being`,
        choice1: 'ironical',
        choice2: 'whimsical',
        choice3: 'sorrowful',
        choice4: 'sarcastic',
        answer: 1
    },
    {
        question:  ` "A great city is a battlefield... You need to be a fighter to live in it, not exist, mark you, live. Anybody can exist, dragging his soul around behind him like a worn-out coat; but living is different"
        "To Sir with Love" by E.R. Braithwaite
        The literary device predominantly used in this passage is-`,
        choice1: 'simile',
        choice2: 'oxymoron',
        choice3: 'symbolism',
        choice4: 'sarcasm',
        answer: 1
    },
    {
        question:  ` "If it is true that the world talks too much then let's all keep quiet and hear the eloquence of silence".
        "If it is True" by Richard Ntini
        One striking device used by the poet above is-`,
        choice1: 'rhythm',
        choice2: 'contrast',
        choice3: 'alliteration',
        choice4: 'end-rhyme',
        answer: 4
    }
    
]

   
    /*,
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: 10
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: 1
    },*/

//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = availableQuestions.length;

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