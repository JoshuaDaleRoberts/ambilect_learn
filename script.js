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
    console.log(enPhrase);
}

function runSentence(){
    newSentence();
    document.getElementById("kitPhrase").innerHTML = capitalize(window.enPhrase); 
    document.getElementById("userAnswer").value = capitalize(window.kitPhrase); 
}

function checkLesson(){
    let a = document.getElementById("userAnswer").value;
    let b = window.kitPhrase;
    a = a.toLowerCase(); 
    b = b.toLowerCase();
    if (a == b) {
        answer.right();
    } else if (a != b && normalize(a) == normalize(b)) {
        answer.almost();
    } else {
        answer.wrong();
    }
    answer.clear(); 
}





const answer = {
    wrong: function(){
    answerSpace.style.backgroundColor = "red"
    answerSpace.style.color = "white"
    answerSpace.style.borderRadius = "5px"
    answerSpace.style.padding = "20px"
    answerSpace.innerHTML = `
        <p>That's not quite it!</p> 
        <br> 
        <input type='button' value='Try Again'>
        <input type='button' value='Move on'>
        `;
    },
    right: function(){
        answerSpace.style.backgroundColor = "#4bb361"
        answerSpace.style.color = "white"
        answerSpace.style.borderRadius = "5px"
        answerSpace.style.padding = "20px"
        answerSpace.innerHTML = `
        <p>Correct!</p> 
        <br> 
        <input type='button' value='New Sentence' id = "newSentence">
        `;
    },
    almost: function(){
        answerSpace.style.backgroundColor = "#dbe617"
        answerSpace.style.color = "black"
        answerSpace.style.borderRadius = "5px"
        answerSpace.style.padding = "20px"
        answerSpace.innerHTML = `
        <p>Check your accent marks and try again!</p> 
        <br> 
        <input type='button' value='Try Again' id="aTA">
        <input type='button' value='Move on'>
        `;
    },
    clear: function(){
        answerSpace.innerHTML = ""; 
        answerSpace.style = "";
    }
}


window.runSentence = runSentence; 
window.checkLesson = checkLesson; 
window.document.body.onload = runSentence(); 
window.document.body.onload = checkLesson(); 
window.document.getElementById("done").addEventListener("click", window.checkLesson);
window.document.getElementById("giveUp").addEventListener("click", window.runSentence);
window.document.getElementById("newSentence").addEventListener("click",window.runSentence);
