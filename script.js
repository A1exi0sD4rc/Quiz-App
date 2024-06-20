let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Elon Musk",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Albert Einstein",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet HTML?",
        "answer_1": "Heute Total Motivierte Laune",
        "answer_2": "Hypertext Markup Language",
        "answer_3": "Hyper Technological Modern Language",
        "answer_4": "Hochmoderner Technischer Modul Logarithmus",
        "right_answer": 2
    },
    {
        "question": "Wie hebt man Text in HTML <b>fett</b> hervor?",
        "answer_1": "&ltText fett schreiben&gt",
        "answer_2": "b /b",
        "answer_3": "&ltb&gt&lt/b&gt",
        "answer_4": "&ltbold&gt&lt/bold&gt",
        "right_answer": 3
    },
    {
        "question": "Wie wird eine Variable in JavaScript richtig geschrieben?",
        "answer_1": "let status = true",
        "answer_2": "status true;",
        "answer_3": "Let = status = true",
        "answer_4": "let status = true;",
        "right_answer": 4
    },
]
let currentQuestion = 0;
let answerRight = 0;


function init() {
    document.getElementById('max-questions').innerHTML = questions.length;

    showQuestion();
    updateProgress();
}


function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('container-result').classList.remove('d-none');
        document.getElementById('container-game').classList.add('d-none');

        document.getElementById('right-answer').innerHTML = answerRight;
        document.getElementById('number-questions').innerHTML = currentQuestion;
        document.getElementById('card-img').src = './img/cup.png';
    } else {
        let question = questions[currentQuestion];

        document.getElementById('question').innerHTML = question["question"];
        document.getElementById('answer_1').innerHTML = question["answer_1"];
        document.getElementById('answer_2').innerHTML = question["answer_2"];
        document.getElementById('answer_3').innerHTML = question["answer_3"];
        document.getElementById('answer_4').innerHTML = question["answer_4"];
        document.getElementById('current-question').innerHTML = currentQuestion + 1;
    }
}


function answer(answer) {
    let selectAnswer = answer;
    let rightAnswer = questions[currentQuestion]["right_answer"];

    if (selectAnswer !== rightAnswer) {
        document.getElementById(`answer_${selectAnswer}`).parentNode.classList.add('bg-danger');
    } else {
        answerRight++;
    }
    document.getElementById(`answer_${rightAnswer}`).parentNode.classList.add('bg-success');
    document.getElementById('next-question').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-question').disabled = true;
    resetAnswer();
    updateProgress();
    showQuestion();
}


function resetAnswer() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger', 'bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger', 'bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger', 'bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger', 'bg-success');
}


function updateProgress() {
    let calulateProgress = 100 * currentQuestion / questions.length;

    document.getElementById('quiz-progress').ariaValueMax = questions.length;
    document.getElementById('quiz-progress').innerHTML = `<b>${calulateProgress}%</b>`;
}