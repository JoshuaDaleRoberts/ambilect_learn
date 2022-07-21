import { en } from "./english.js";
import { lessonOne } from "./lessons.js";
import { lessonTwo } from "./lessons.js";

var correctAudio = new Audio('correct.mp3');
var wrongAudio = new Audio('wrong.mp3');

const normalize = (a) => a.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
const capitalize = (a) => a.charAt(0).toUpperCase() + a.slice(1);

window.newSentence = lessonOne; 

const answerSpace = document.getElementById("answer")
window.enPhrase = window.tlPhrase = ""

function runSentence(){
    answer.clear(); 
    window.newSentence(); 
    document.getElementById("enPhrase").innerHTML = capitalize(window.enPhrase); 
    document.getElementById("userAnswer").value = ""
    document.getElementById("userAnswer").value = capitalize(window.tlPhrase); 
}

function checkLesson(){
    let a = document.getElementById("userAnswer").value; 
    let b = window.tlPhrase; 
    a = a.toLowerCase(); 
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
        this.clear();
        document.getElementById("wrong").style.display = "block";
        wrongAudio.play(); 
    },
    correct: function(){
        this.clear();
        document.getElementById("correct").style.display = "block";
        correctAudio.play();
    },
    almost: function(){
        this.clear()
        document.getElementById("almost").style.display = "block";
    },
    clear: function(){
        document.getElementById("wrong").style.display = "none";
        document.getElementById("correct").style.display = "none";
        document.getElementById("almost").style.display = "none";
    }
}



window.answer = answer;
window.runSentence = runSentence; 
window.checkLesson = checkLesson; 
window.document.getElementById("giveUp").onclick = window.runSentence
window.document.getElementById("done").onclick = checkLesson; 
window.document.body.onload = window.runSentence(); 

function tokenCheck(){
    const lessonQuery = new URLSearchParams(window.location.search);
    let lessonNumber = lessonQuery.get("lesson"); 
    switch(lessonNumber) {
        case "1": window.newSentence = lessonOne;
        break;
        case "2": window.newSentence = lessonTwo;
        break;
        default: window.newSentence = lessonOne
    } 
    runSentence(); 
}

window.document.body.onload = tokenCheck; 