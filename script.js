import { en } from "./english.js";

const randInt  = (n) => (Math.floor(n * Math.random()));


window.enPhrase = "placeholder"
window.kitPhrase = "placeholder"
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
    document.getElementById("kitPhrase").innerHTML = capitalize(window.kitPhrase); 
    document.getElementById("userAnswer").value = capitalize(window.enPhrase); 
}


window.runSentence = runSentence; 

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


function checkLesson(){
    let a = document.getElementById("userAnswer").value;
    let b = window.kitPhrase;
    if ( a == b) {
        document.getElementById("blank").innerHTML = "You got it!"
    } else {
        document.getElementById("blank").innerHTML = "Try again!"
    }
}


function normalize(string) {
    var result = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    return result
  }





window.runSentence = runSentence; 
