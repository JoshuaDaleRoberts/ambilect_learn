export const ln = {
  v: function(verb, tense, subj) {
    let finalVerb = ""; let objMark = ""; 
    if (verb.includes(" ")) {
      let spPos = verb.indexOf(" ")
      objMark = verb.substring(spPos, verb.length);
      finalVerb = verb.substring(0, spPos);
    } else {
      finalVerb = verb
    }
    // 0 - past, 1 - present, 2 - future, 3 - imperative
    if (typeof(subj) === "string"){
      switch(subj){
        case "ngai": subj = 0; break;
        case "yo" : subj = 1; break; 
        case "ye" : subj = 2; break;
        case "biso" : subj = 3; break; 
        case "bino" : subj = 4; break;
        case "bango" : subj = 5; break; 
        default: subj = 6; 
      }
    } 


    let normal = (finalVerb.slice(0, 2) === "ko") && (finalVerb.slice(-1) === "a");
    if (!normal) { return  `Error: finalverb was ${finalVerb}` };
    if (subj > 7 || subj < 0) { return "error: invalid subject" };
    const prefixes = ["na", "o", "a", "to", "bo", "ba", "e"]
    let prefix = prefixes[subj]; 
    switch (tense){
      case 0: finalVerb = prefix + finalVerb.slice(2, -1) + "i"; break;
      case 1: finalVerb =  prefix + finalVerb.slice(2)+ "ki";     break;
      case 2: finalVerb = prefix + finalVerb;                    break;
      case 3: finalVerb =  finalVerb.slice(2); break; 
      default: finalVerb =  "Error: invalid text";
    }
    return finalVerb + objMark;
  },
  ps: function(word){ return "na " + word},
  pn: function(person, number, animacy){
    person -= 1;
    if(animacy == undefined){ animacy = 1 }
    if (!animacy && !number){ return "e" }
    let pron = [
      ["na","o","a"],
      ["to","bo","ba"]
    ];
    return pron[number][person];
  },
  getClass: function(noun){
    
  },
}