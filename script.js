import { en } from "./english.js";

const randInt  = (n) => (Math.floor(n * Math.random()));
const normalize = (a) => a.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
const capitalize = (a) => a.charAt(0).toUpperCase() + a.slice(1);

const answerSpace = document.getElementById("answer")
window.enPhrase = window.kitPhrase = ""

function newSentence(){
    const enSubjs = ["I","you","he","we","you all","they"];
    const kitSubjs = ["mu","nge","yandi","betu","benu","bau"];
    const enVerbs = ['leave','enter','depart','escape','run away','remain','stay','get lost','go out','go down','go','come','fly','come back','return']
    const kitVerbs = ['bikala','kota','katuka','tina','zaula','bikala','vwanda','zimbala','basika','kĭta','kwenda','kwiza','timuka','vutukisa','vutula'];
    let subjNum = randInt(enSubjs.length);
    let verbNum = randInt(enVerbs.length);
    window.enPhrase = `${enSubjs[subjNum]} ${en.v(enVerbs[verbNum], 0, subjNum)}`;
    window.kitPhrase = `${kitSubjs[subjNum]} ${kitVerbs[verbNum]}`;
}

function runSentence(){
    answer.clear(); 
    newSentence();
    document.getElementById("enPhrase").innerHTML = capitalize(window.enPhrase); 
    document.getElementById("userAnswer").value = capitalize(window.kitPhrase); 
}

function checkLesson(){
    let a = document.getElementById("userAnswer").value; 
    let b = window.kitPhrase; 
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
        document.getElementById("wrong").style.display = "block";
    },
    correct: function(){
        document.getElementById("correct").style.display = "block";
    },
    almost: function(){
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
window.document.body.onload = runSentence(); 
window.document.body.onload = answer.wrong(); 

