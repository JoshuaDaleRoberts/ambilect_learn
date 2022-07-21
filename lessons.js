export function lessonOne(){
  const en1 = ['good morning', 'good day', 'good afternoon', 'good evening', 'hello', 'goodbye', 'thank you'];
  const tl1 = ['magandang umaga', 'magandang tanghali', 'magandang hapon', 'magandang gabi', 'kamusta', 'paalam', 'salamat']; 
  let a = randInt(en1.length);
  let b = randInt(2); 
  window.enPhrase = en1[a]; 
  window.tlPhrase = tl1[a]; 
  if (b && a<4 ){
      window.enPhrase = en1[a] + " (polite)"; 
      window.tlPhrase = tl1[a] + " po"
  }
}

export function lessonTwo(){
  window.enPhrase = "I GOT IT TO WORK";
  window.tlPhrase = "WAHOO"
}
