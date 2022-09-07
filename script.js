import { lessonOne, lessonTwo, lessonThree, lessonFour, lessonFive } from "./lessons.js";

var correctAudio = new Audio('correct.mp3');
var wrongAudio = new Audio('wrong.mp3');

let answerState = "correct";
let triesLeft = 6; 
let canTry = true;

const normalize = (a) => a.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
const capitalize = (a) => a.charAt(0).toUpperCase() + a.slice(1);

var enPhrase = document.getElementById("enPhrase"); 
var userAnswer = document.getElementById("userAnswer"); 
window.enPhrase = window.lnPhrase = "";

function runSentence(){
    answer.clear(); 
    window.newSentence(); 
    enPhrase.innerHTML = capitalize(window.enPhrase); 
    userAnswer.value = ""
    //userAnswer.value = capitalize(window.lnPhrase); 
    triesLeft = 6;
    canTry = true;
    answer.unreveal();
}

function checkLesson(){
    let a = userAnswer.value; 
    let b = window.lnPhrase; 
    a = a.toLowerCase(); 
    b = b.toLowerCase();
    if (a == b) {
        answer.correct();
    } else if (normalize(a) == normalize(b)) {
        answer.almost(); 
    } else {
        answer.wrong(); 
    }
}

const answer = {
    wrong: function(){
        if (canTry) {
            answerState = "wrong"
            this.clear();
            document.getElementById("wrong").style.display = "block";
            if (triesLeft > 1) {
                triesLeft--
                document.getElementById("wrongTryNumber").innerHTML = triesLeft
            } else {
                triesLeft = 0; 
                document.getElementById("wrongTryNumber").innerHTML = triesLeft;
                this.reveal()
                canTry = false; 
            }
            //wrongAudio.play(); 
        }
    },
    correct: function(){
        if (canTry) {
            answerState = "correct"
            this.clear();
            document.getElementById("correct").style.display = "block";
            //correctAudio.play();
        }
    },
    almost: function(){
        if (canTry) {
            answerState = "almost"
            this.clear()
            document.getElementById("almost").style.display = "block";
            if (triesLeft > 1) {
                triesLeft--
                document.getElementById("almostTryNumber").innerHTML = triesLeft
            } else {
                triesLeft = 0; 
                document.getElementById("almostTryNumber").innerHTML = triesLeft;
                this.reveal()
                canTry = false; 
            }
           // wrongAudio.play(); 
        }
    },
    clear: function(){
        document.getElementById("wrong").style.display = "none";
        document.getElementById("correct").style.display = "none";
        document.getElementById("almost").style.display = "none";
    },
    reveal: function(){
        let answer = window.lnPhrase;
        if (answerState == "wrong") {
            document.getElementById("wrongRevealSpot").innerHTML = capitalize(answer);
        } else if (answerState == "almost") {
            document.getElementById("almostRevealSpot").innerHTML = capitalize(answer)
        }
        canTry = false; 
    },
    unreveal: function(){
        document.getElementById("wrongRevealSpot").innerHTML = ""
        document.getElementById("almostRevealSpot").innerHTML = ""
    },
}

function tokenCheck(){
    const lessonQuery = new URLSearchParams(window.location.search);
    let lessonNumber = lessonQuery.get("lesson"); 
    switch(lessonNumber) {
        case "1": window.newSentence = lessonOne;
        break;
        case "2": window.newSentence = lessonTwo;
        break;
        case "3": window.newSentence = lessonThree; 
        break; 
        case "4": window.newSentence = lessonFour;
        break;
        case "5": window.newSentence = lessonFive;
        break;
        default: window.newSentence = lessonOne
    } 
    runSentence(); 
}

function doAccents(){
    const start = ["a'","a`","a^","e'","e`","e^",'e"',"i'","i`","i^","o'","o`","o^","u'","u`","u^"];
    const end = ["á", "à", "â", "é", "è", "ê", "ë", "í", "ì", "î", "ó", "ò", "ô", "ú", "ù", "û"];
    const answerArea = userAnswer; 
    let userInput = answerArea.value
    for (let i = 0; i < start.length; i++) {
        userInput = userInput.replace(start[i],end[i])
    }
    answerArea.value = userInput; 
}   


userAnswer.addEventListener('input', doAccents)

document.getElementById("giveUp").onclick = runSentence;
document.getElementById("done").onclick = checkLesson; 

document.body.onload = tokenCheck(); 

document.getElementById("wrongContinue").addEventListener("click", runSentence);
document.getElementById("correctContinue").addEventListener("click", runSentence);
document.getElementById("almostContinue").addEventListener("click", runSentence);
document.getElementById("wrongTry").addEventListener("click", checkLesson);
document.getElementById("almostTry").addEventListener("click", checkLesson);
document.getElementById("wrongReveal").addEventListener("click", answer.reveal);
document.getElementById("almostReveal").addEventListener("click", answer.reveal);

//window.document.body.onload = answer.wrong(); 
