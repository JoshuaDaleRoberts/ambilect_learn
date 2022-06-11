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
    document.getElementById("kitPhrase").innerHTML = capitalize(window.enPhrase); 
    document.getElementById("userAnswer").value = capitalize(window.kitPhrase); 
}

window.runSentence = runSentence; 

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


function checkLesson(){
    let a = document.getElementById("userAnswer").value;
    let b = window.kitPhrase;
    a = a.toLowerCase(); 
    b = b.toLowerCase();
    let answerSpace = document.getElementById("answer")
    if ( a == b) {
        answerSpace.innerHTML = "You got it!"
    } else {
        answerSpace.innerHTML = `A: ${a} <br> B: ${b}`
    }
    if (a != b && normalize(a) == normalize(b)) {
        answerSpace.innerHTML = "Check your accent marks and try again! "
    }
}


function normalize(string) {
    var result = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    return result
}

function trying(){
   let answerSpace = document.getElementById("answer")
   const node = document.createElement("p");
   const textnode = document.createTextNode("Try again!");
   node.appendChild(textnode);
   answerSpace.style.backgroundColor = "red"
   answerSpace.style.color = "white"
   answerSpace.style.borderRadius = "5px"
   answerSpace.style.padding = "20px"
   document.getElementById("answer").appendChild(node);
   const c = document.createElement("input");
   const d = document.createTextNode("That's not quite right");
   c.appendChild(d);
   c.setAttribute("id", "newbutton");
   document.getElementById("answer").appendChild(c);
   let newButton = document.getElementById("newbutton");
   newButton.type = "button"
   newButton.value = "Try Again!"


}

window.document.body.onload = trying(); 
window.runSentence = runSentence; 
window.checkLesson = checkLesson; 
window.document.body.onload = runSentence(); 
window.document.getElementById("done").addEventListener("click",window.checkLesson)
window.document.getElementById("giveUp").addEventListener("click", window.runSentence)

