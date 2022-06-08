import en from "english.js";
const randInt = (n) => Math.floor(n * Math.random); 


let enPhrase, kitPhrase;
function newSentence(){
    const enSubjs = ["I","you","he","we","you all","they"];
    const kitSubjs = ["mu","nge","yandi","betu","benu","bau"];
    const enVerbs = ['leave','enter','depart','escape','run away','remain','stay','get lost','go out','go down','go','come','fly','come back','return']
    const kitVerbs = ['bikala','kota','katuka','tina','zaula','bikala','vwanda','zimbala','basika','kĭta','kwenda','kwiza','timuka','vutukisa','vutula'];
    let subjNum = randInt(enSubjs.length);
    let verbNum = randInt(enVerbs.length);
    enPhrase = `${enSubjs[subjNum]} ${en.v(enVerbs[verbNum], 0, subjNum)}`;
    kitPhrase = `${kitSubjs[subjNum]} ${kitVerbs[verbNum]}`;
}

function runSentence(){
    newSentence();
    document.getElementById("kitPhrase").innerHTML = kitPhrase; 
    document.getElementById("userAnswer").value = enPhrase; 
}


function test(){
    document.getElementById("Test").innerHTML = "THIS IS HAPPENNING";
}
window.runSentence = runSentence; 
window.test = test
