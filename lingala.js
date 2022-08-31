export const ln = {
  v: function(verb, tense, subj) {
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
    let normal = (verb.slice(0, 2) === "ko") && (verb.slice(-1) === "a");
    if (!normal) { return "error: invalid verb" };
    if (subj > 7 || subj < 0) { return "error: invalid subject" };
    const prefixes = ["na", "o", "a", "to", "bo", "ba", "e"]
    let prefix = prefixes[subj]; 
    switch (tense){
      case 0: return prefix + verb.slice(2, -1) + "i"; break;
      case 1: return prefix + verb.slice(2)+ "ki";     break;
      case 2: return prefix + verb;                    break;
      case 3: return verb.slice(2); break; 
      default: return "Error: invalid text";
    }
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