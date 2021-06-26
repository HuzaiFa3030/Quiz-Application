var user = document.getElementById('username')
var pass = document.getElementById('Password')
var quesSec = document.getElementById('question')
var mixQues, currentQI;
var loginDiv = document.getElementById('login')
var ansBtn = document.getElementById('answer-btn')
var score = 0;
var quesDiv = document.getElementById('quesAns-div')
var loginBtn = document.getElementById('login-btn')
var nextBtn = document.getElementById('next-btn')
var submitBtn = document.getElementById("submit-btn")
var resultSec = document.getElementById("result")
var scoreDiv = document.getElementById("score-div")
var headingDiv = document.getElementById("heading")
var min = 0
var sec = 0
var msec = 0
var minutes = document.getElementById('min')
var seconds = document.getElementById('sec')
var miliseconds = document.getElementById('msec')



loginBtn.addEventListener('click', login);
nextBtn.addEventListener('click', () => {
    currentQI++
    nextQues()
})
submitBtn.addEventListener('click', showResult)


function login() {
    var enterUser = (user.value).toLowerCase()
    var userPass = (pass.value).toLowerCase()
    if (enterUser === 'huzaifa' && userPass === '123') {
        alert('Login Sucessfull')
        quesDiv.classList.remove('hide')
        mixQues = questions.sort(() => Math.random() - .5)
        currentQI = 0
        start();
        nextQues();
    } else {
        alert('Invalid')
    }
}

function start() {
    interval = setInterval(function() {
        msec++
        miliseconds.innerHTML = msec
        if (msec >= 100) {
            sec++
            seconds.innerHTML = sec
            msec = 0

        } else
        if (sec >= 60) {
            min++
            minutes.innerHTML = min
            sec = 0
        }
    }, 10)
}

function pause() {
    clearInterval(interval)
}

function nextQues() {
    hideNextBtn()
    headingDiv.classList.remove('hide')
    quesSec.classList.remove('hide')
    ansBtn.classList.remove('hide')
    showQues(mixQues[currentQI])
}

function showQues(question) {
    quesSec.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAns)
        ansBtn.appendChild(button)
    })
}

function selectAns(e) {
    var selectedAns = e.target
    var correct = selectedAns.dataset.correct
    setClass(document.body, correct)
    Array.from(ansBtn.children).forEach(button => {
        button,
        button.dataset.correct
        headingDiv.classList.add('hide')
        quesSec.classList.add('hide')
        ansBtn.classList.add('hide')

    })
    if (mixQues.length > currentQI + 1) {
        nextBtn.classList.remove('hide')
    } else {
        submitBtn.classList.remove('hide')
        pause()
    }
}


function showResult() {
    scoreDiv.classList.remove('hide')
    submitBtn.classList.add('hide')
    resultSec.innerHTML = ('Your JavaScript Score : ' + score + ' ' + 'out of' + ' ' + questions.length)
}


function hideNextBtn() {
    loginDiv.classList.add('hide')
    nextBtn.classList.add('hide')
    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild)
    }
}

function setClass(element, correct) {
    clearClass(element)
    if (correct) {
        score++
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}





//Question Section //
var questions = [{
        question: "Hyper Text Markup Language Stand For?",
        answers: [
            { text: "JavaScript", correct: false },
            { text: "XHTML", correct: false },
            { text: "CSS", correct: false },
            { text: "HTML", correct: true },
        ]
    },
    {
        question: "Which language is used for styling web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "JQuery", correct: false },
            { text: "CSS", correct: true },
            { text: "XML", correct: false },
        ]
    },
    {
        question: "The hardest natural substance found on earth is",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false },
        ]
    },
    {
        question: "Who invented JavaScript?",
        answers: [
            { text: "Douglas Crockford", correct: false },
            { text: "Sheryl Sandberg", correct: false },
            { text: "Brendan Eich", correct: true },
            { text: "Dr Tariq", correct: false },
        ]
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: [
            { text: "Node.js", correct: false },
            { text: "TypeScript", correct: false },
            { text: "Script.js", correct: false },
            { text: "npm", correct: true },
        ]
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: [
            { text: "Angular", correct: false },
            { text: "ESLint", correct: true },
            { text: "jQuery", correct: false },
            { text: "RequireJS", correct: false },
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: '4', correct: true },
            { text: '12', correct: false },
            { text: '18', correct: false },
            { text: '22', correct: false },
        ]
    },
    {
        question: "What is 2 * 4?",
        answers: [
            { text: '4', correct: false },
            { text: '12', correct: false },
            { text: '8', correct: true },
            { text: '22', correct: false },
        ]
    }, {
        question: "What is 2 / 2?",
        answers: [
            { text: '4', correct: false },
            { text: '1', correct: true },
            { text: '18', correct: false },
            { text: '22', correct: false },
        ]
    }, {
        question: "What is 5 - 2?",
        answers: [
            { text: '4', correct: false },
            { text: '12', correct: false },
            { text: '18', correct: false },
            { text: '3', correct: true },
        ]
    },
]