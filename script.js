let questions = [
    {
        "question": "Welche Farbe hat ein Giraffenhals von innen?",
        "answer_1": "Pink",
        "answer_2": "Schwarz",
        "answer_3": "Grün",
        "answer_4": "Blau",
        "right_answer": 2
    },
    {
        "question": "Was machen Ameisen, wenn sie betrunken sind?",
        "answer_1": "Sie laufen im Kreis",
        "answer_2": "Sie schlafen ein",
        "answer_3": "Sie helfen anderen betrunkenen Ameisen",
        "answer_4": "Sie gehen gerade nach Hause",
        "right_answer": 4
    },
    {
        "question": "Wie viele Herzen hat ein Oktopus?",
        "answer_1": "Eins",
        "answer_2": "Zwei",
        "answer_3": "Drei",
        "answer_4": "Vier",
        "right_answer": 3
    },
    {
        "question": "Welches Tier schläft am meisten pro Tag?",
        "answer_1": "Koala",
        "answer_2": "Faultier",
        "answer_3": "Katze",
        "answer_4": "Fledermaus",
        "right_answer": 1
    },
    {
        "question": "Wie nennt man eine Gruppe von Flamingos?",
        "answer_1": "Schwarm",
        "answer_2": "Herde",
        "answer_3": "Kolonie",
        "answer_4": "Flug",
        "right_answer": 3
    },
    {
        "question": "Wie lange dauert es, bis sich ein Strauß hinlegt, wenn er sich bedroht fühlt?",
        "answer_1": "Sofort",
        "answer_2": "Nach 5 Sekunden",
        "answer_3": "Nach 10 Sekunden",
        "answer_4": "Er legt sich nie hin",
        "right_answer": 1
    },
    {
        "question": "Welches Tier kann durch seine Haut atmen?",
        "answer_1": "Frosch",
        "answer_2": "Krokodil",
        "answer_3": "Papagei",
        "answer_4": "Wal",
        "right_answer": 1
    },
    {
        "question": "Welches Tier hat das lauteste Geräusch in der Tierwelt?",
        "answer_1": "Löwe",
        "answer_2": "Blauwal",
        "answer_3": "Elefant",
        "answer_4": "Wolf",
        "right_answer": 2
    },
    {
        "question": "Welche der folgenden Früchte schwimmt auf Wasser?",
        "answer_1": "Apfel",
        "answer_2": "Banane",
        "answer_3": "Mango",
        "answer_4": "Pflaume",
        "right_answer": 1
    },
    {
        "question": "Was ist die durchschnittliche Anzahl an Spinnen, die ein Mensch im Schlaf pro Jahr verschluckt?",
        "answer_1": "0",
        "answer_2": "3",
        "answer_3": "8",
        "answer_4": "12",
        "right_answer": 1
    },
    {
        "question": "Welches Tier ist bekannt dafür, dass es mit seiner eigenen Stimme in Ohnmacht fällt?",
        "answer_1": "Esel",
        "answer_2": "Ziege",
        "answer_3": "Hund",
        "answer_4": "Pinguin",
        "right_answer": 2
    },
    {
        "question": "Was passiert, wenn man Cola und Mentos mischt?",
        "answer_1": "Nichts",
        "answer_2": "Es entsteht eine Explosion",
        "answer_3": "Die Cola wird grün",
        "answer_4": "Es wird zu Gelatine",
        "right_answer": 2
    }
];


let currentQuestion = 0;
let rightQuestions = 0;


function init(){
    renderCardNumber()
    renderQuestion()
}


function renderCardNumber(){
    document.getElementById('all_cards').innerHTML = questions.length;
}


function renderQuestion(){

    if (currentQuestion >= questions.length) {
        // Endscreen!!!
        document.getElementById('end_screen').style = '';
        document.getElementById('question_body').style = 'display: none';

        document.getElementById('question_amount').innerHTML = questions.length;
        document.getElementById('right_question_amount').innerHTML = rightQuestions;
        document.getElementById('header_image').src = 'img/winner.jpg';
    } else {

    let question = questions[currentQuestion];

    document.getElementById('actual_card').innerHTML = currentQuestion +1;
    
    document.getElementById('questiontext').innerHTML = question["question"];
    document.getElementById('answer_1').innerHTML = question["answer_1"];
    document.getElementById('answer_2').innerHTML = question["answer_2"];
    document.getElementById('answer_3').innerHTML = question["answer_3"];
    document.getElementById('answer_4').innerHTML = question["answer_4"];
}
}


function answer(selection){
let question = questions[currentQuestion];

console.log('Selected answer is: ', selection);

let selectedQuestionNumber = selection.slice(-1);
console.log('Selected Question Number is: ', selectedQuestionNumber);
console.log('Current question is: ', question['right_answer']);


// let idOfRightAnswer = 'answer_2';
// wird zu:
let idOfRightAnswer = `answer_${question['right_answer']}`;


if (selectedQuestionNumber == question['right_answer']) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
    rightQuestions++;
} else {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
}
document.getElementById('next_button').disabled = false;
}


function nextQuestion(){
    currentQuestion++; // z.B. von 0 auf 1
    document.getElementById('next_button').disabled = true;
    resetAnswerButtons();
    renderQuestion();  
}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}