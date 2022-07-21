import { lessonOne, lessonTwo, lessonThree } from "./lessons.js";

var correctAudio = new Audio('correct.mp3');
var wrongAudio = new Audio('wrong.mp3');

const normalize = (a) => a.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
const capitalize = (a) => a.charAt(0).toUpperCase() + a.slice(1);

//window.newSentence = lessonOne; 

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
        //wrongAudio.play(); 
    },
    correct: function(){
        this.clear();
        document.getElementById("correct").style.display = "block";
        //correctAudio.play();
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
        default: window.newSentence = lessonOne
    } 
    runSentence(); 
}

const accents = {
    //á, à, â, é, è, ê, ë, í, ì, î, ó, ò, ô, ú, ù, û
    //accents are taken with 
    diacritics: ["á", "à", "â", "é", "è", "ê", "ë", "í", "ì", "î", "ó", "ò", "ô", "ú", "ù", "û"],
    replaceMe: ["a'","a`","a^","e'","e`","e^",'e"',"i'","i`","i^","o'","o`","o^","u'","u`","u^"],
    doAccents: function(){
        let userInput = document.getElementById("userAnswer").innerHTML;
        document.getElementById("forTesting").innerHTML = "weeho"
    }

}

window.document.body.onload = tokenCheck; 
window.answer = answer;
window.runSentence = runSentence; 
window.checkLesson = checkLesson; 
window.document.getElementById("giveUp").onclick = window.runSentence
window.document.getElementById("done").onclick = checkLesson; 
window.document.body.onload = window.runSentence(); 
window.document.body.onload = answer.wrong(); 
window.document.getElementById("userAnswer").oninput = accents.doAccents(); 