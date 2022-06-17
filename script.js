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
        this.clear()
        document.getElementById("wrong").style.display = "block";
    },
    correct: function(){
        this.clear()
        document.getElementById("correct").style.display = "block";
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


const add = {
    aCaron: function(){
        let a = document.getElementById("userAnswer").value;
        a += "ă";
        document.getElementById("userAnswer").value = a; 
    }, 
    aAcute: function(){
        let a = document.getElementById("userAnswer").value;
        a += "á";
        document.getElementById("userAnswer").value = a; 
    },
    eCaron: function(){
        let a = document.getElementById("userAnswer").value;
        a += "ĕ";
        document.getElementById("userAnswer").value = a; 
    },
    eAcute: function(){
        let a = document.getElementById("userAnswer").value;
        a += "é";
        document.getElementById("userAnswer").value = a; 
    },
    iAcute: function(){
        let a = document.getElementById("userAnswer").value;
        a += "í";
        document.getElementById("userAnswer").value = a; 
    },
    oAcute: function(){
        let a = document.getElementById("userAnswer").value;
        a += "ó";
        document.getElementById("userAnswer").value = a; 
    }

}


window.answer = answer;
window.runSentence = runSentence; 
window.checkLesson = checkLesson; 

window.document.getElementById("giveUp").onclick = window.runSentence
window.document.getElementById("done").onclick = checkLesson; 

window.document.getElementById("aCaron").onclick = add.aCaron; 
window.document.getElementById("aAcute").onclick = add.aAcute; 
window.document.getElementById("eCaron").onclick = add.eCaron; 
window.document.getElementById("eAcute").onclick = add.eAcute; 
window.document.getElementById("iAcute").onclick = add.iAcute; 
window.document.getElementById("oAcute").onclick = add.oAcute; 


window.document.body.onload = runSentence(); 
window.document.body.onload = answer.wrong(); 

