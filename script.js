import { en } from "./english.js";

function randInt(n) {
    return (Math.floor(n * Math.random())); 
}


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
    document.getElementById("kitPhrase").innerHTML = window.kitPhrase; 
    document.getElementById("userAnswer").value = window.enPhrase; 
}


window.runSentence = runSentence; 

function test(){
    document.getElementById("test").innerHTML = randInt(10);
}

window.test = test; 
