export const kit = {
  v: function(verb, tense){
    let finalVerb = ""; let objMark = "";
    if (verb.includes(" ")) {
      let spPos = verb.indexOf(" ")
      objMark = verb.substring(spPos, verb.length);
      verb = verb.substring(0, spPos);
    }
    //tenses
    //0 = present
    if (tense == 0){

    }
    //1 = present progressive, 
    //2 = future
    //3 = past 
    //4 = past participle has 
    //5 = past progressive
    finalVerb = finalVerb + objMark
    return finalVerb
  }
}