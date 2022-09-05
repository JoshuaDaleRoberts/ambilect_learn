import { en } from "./english.js";
import { ln } from "./lingala.js"; 

const randInt  = (n) => (Math.floor(n * Math.random()));

export function lessonOne(){
  const en1 = ['woman','man','sibling','house','work','fruit','vegetables','water','good','bad']
  const ln1 = ['mwasi','mobali','dnedo','ndako','mosala','mbuma','ndunda','mayi','malamu','mabe']
  let r1 = randInt(en1.length);
  window.enPhrase = en1[r1];
  window.lnPhrase = ln1[r1]; 
}

export function lessonTwo(){
  const en1 = ['be','have','want','make','buy','think','speak','know','be able','have to'];
  const ln1 = ['kozala','kozala na','kolinga','kosala','kosomba','kokanisa','koloba','koyeba','kokoka','kosengela']; 
  let r1 = randInt(en1.length); 
  window.enPhrase = en1[r1];
  window.lnPhrase = ln1[r1]; 
}

export function lessonThree(){
  const en1 = ['be','have','want','make','buy','think','speak','know','be able','have to'];
  const ln1 = ['kozala','kozala na','kolinga','kosala','kosomba','kokanisa','koloba','koyeba','kokoka','kosengela']; 
  const en2 = ['I','you','he','she','we','you all','they'];
  const ln2 = ['ngai','yo','ye','ye','biso','bino','bango']

  let r1 = randInt(en1.length); 
  let r2 = randInt(en2.length);

 
  window.enPhrase = en2[r2] + " " + en.v(en1[r1], 0, en2[r2]);
  window.lnPhrase = ln.v(ln1[r1], 0, ln2[r2]);
}

export function lessonFour(){
  const en1 = ['ladder','basket','door','clock','trash can','key','toilet','chair','broom','kitchen','window','bed','table','rope','bottle','house','soap','room','mirror'];
  const ln1 = ['ebuteli','ekolo','ekuke','epimolo ya sa','fulu','fungola','kabine','kiti','kombo','kuku','lininisi','mbeto','mesa','mokulu','molangi','ndako','sabuni','suku','talatala'];
  let r1 = randInt(en1.length); 
  window.enPhrase = en1[r1];
  window.lnPhrase = ln1[r1]; 
}

export function lessonFive(){
  const en1 = ['ladder','basket','door','clock','trash can','key','toilet','chair','broom','kitchen','window','bed','table','rope','bottle','house','soap','room','mirror'];
  const ln1 = ['ebuteli','ekolo','ekuke','epimolo ya sa','fulu','fungola','kabine','kiti','kombo','kuku','lininisi','mbeto','mesa','mokulu','molangi','ndako','sabuni','suku','talatala'];
  const en2 = ['I','you','he','she','we','you all','they','Nsaku','Yudi','Mboya','Mona','Ana','Kabu'];
  const ln2 = ['ngai','yo','ye','ye','biso','bino','bango','Nsaku','Yudi','Mboya','Mona','Ana','Kabu'];
  let r1 = randInt(en1.length);
  let r2 = randInt(en2.length);   
  window.enPhrase = en.ps(en2[r2]) + " " + en1[r1]; 
  window.lnPhrase = ln1[r1] + " " + ln.ps(ln2[r2]);
}