export const en = {
    v: function(verb, tense, subj) {
        /* verb is the verb in question, string
        tense :    0 = present, 1 = present progressive, 2 = future(will), 3 = past (ed), 4 = past participle has (ed) , 5 = past progressive
        subject:   0 = I, 1 = you, 2 = he, 3 = we, 4 = you all, 5 = they */
        let finalVerb = ""; let objMark = "";
        const vowels = ["a", "i", "o", "u"];
        const irregularVerbs = [
          'be', 'beat', 'become', 'begin', 'bet', 'bite', 'break', 'bring', 'build', 'burn', 'buy', 
          'catch', 'choose', 'come', 'cut', 'dig', 'do', 'dream', 'drink', 'drive', 'eat', 'fall', 
          'feel', 'fight', 'find', 'fly', 'forget', 'forgive', 'get', 'give', 'go', 'grow', 'hang', 
          'have', 'hear', 'hide', 'hit', 'hold', 'hurt', 'keep', 'know', 'learn', 'leave', 'lend', 
          'lose', 'make', 'meet', 'pay', 'put', 'read', 'ride', 'ring', 'run', 'say', 'see', 'sell', 
          'send', 'set','sing', 'sleep', 'speak', 'stand', 'sweep', 'swim', 'take', 'teach', 'tear', 'tell', 
          'think', 'throw', 'understand', 'wake', 'wear', 'weep', 'win', 'write'
        ];
        const irregPast = [
          'were', 'beat', 'became', 'began', 'bet', 'bit', 'broke', 'brought', 'built', 'burnt', 
          'bought', 'caught', 'chose', 'came', 'cut', 'dug', 'did', 'dreamt', 'drank', 'drove', 
          'ate', 'fell', 'felt', 'fought', 'found', 'flew', 'forgot', 'forgave', 'got', 'gave', 
          'went', 'grew', 'hung', 'had', 'heard', 'hid', 'hit', 'held', 'hurt', 'kept', 'knew', 
          'learnt', 'left', 'lent', 'lost', 'made', 'met', 'paid', 'put', 'read', 'rode', 'rang', 
          'ran', 'said', 'saw', 'sold', 'sent', 'set','sang', 'slept', 'spoke', 'stood', 'swept', 'swam', 
          'took', 'taught', 'tore', 'told', 'thought', 'threw', 'understood', 'woke', 'wore', 'wept', 
          'won', 'wrote'];
        const irregPP = [
          'been', 'beaten', 'become', 'begun', 'bet', 'bitten', 'broken', 'brought', 'built', 'burnt', 
          'bought', 'caught', 'chosen', 'come', 'cut', 'dug', 'done', 'dreamt', 'drunk', 'driven', 'eaten', 
          'fallen', 'felt', 'fought', 'found', 'flown', 'forgotten', 'forgiven', 'got', 'given', 'gone', 
          'grown', 'hung', 'had', 'heard', 'hidden', 'hit', 'held', 'hurt', 'kept', 'known', 'learnt', 
          'left', 'lent', 'lost', 'made', 'met', 'paid', 'put', 'read', 'ridden', 'rung', 'run', 'said', 
          'seen', 'sold', 'sent','set', 'sung', 'slept', 'spoken', 'stood', 'swept', 'swum', 'taken', 'taught',
           'torn', 'told', 'thought', 'threw', 'understood', 'waken', 'worn', 'wept', 'won', 'written'
        ];
      
        if (verb.includes(" ")) {
          let spPos = verb.indexOf(" ")
          objMark = verb.substring(spPos, verb.length);
          verb = verb.substring(0, spPos);
        }
      
        let lastLetter = verb.charAt(verb.length - 1);
        let secondLast = verb.charAt(verb.length - 2);
        let thirdLast = verb.charAt(verb.length - 3)
        let softEnd = 
          ((vowels.indexOf(lastLetter) == -1) && 
          ((vowels.indexOf(secondLast) > -1) || secondLast == "e" )) && 
          lastLetter !== "y" &&
         (vowels.indexOf(thirdLast) == -1 && thirdLast != "e") ;
      
      let irreg = (irregularVerbs.indexOf(verb) > -1)
    
        if (tense == 0) {
          if (subj == 2) {
            if (vowels.indexOf(verb.indexOf(verb.length - 1)) > -1) {
              finalVerb = verb + "es"
            } else if (verb.endsWith("y")) {
              if (vowels.indexOf(secondLast) > -1) {
                finalVerb = verb + "s"
              } else {
                finalVerb = verb.substring(0, verb.length - 1) + "ies"
              }
            } else {
              finalVerb = verb + "s"
            }
          } else (finalVerb = verb)
          if (verb == "be") {
            switch (subj) {
              case 0: finalVerb = "am"; break;
              case 2: finalVerb = "is"; break;
              default: finalVerb = "are";
            }
          }
          if (verb == "have" && subj == 2) { finalVerb = "has" }
        }
        //ing verbs
        if (tense == 1 || tense == 5) {
          if (verb.endsWith("e") && verb != "be") {
            if (verb.endsWith("ee") || verb.endsWith("oe") || verb.endsWith("ye")) {
              verb = verb + "ing"
            } else if (verb.endsWith("ie")) {
              verb = verb.substring(0, verb.length - 2) + "ing"
            } else if (verb.length < 4) {
              verb = verb + verb.charAt(verb.length) + "ing"
            } else {
              verb = verb.substring(0, verb.length - 1) + "ing"
            }
          } else { 
              if (softEnd){
                  verb = verb + lastLetter + "ing";
              } else {
              verb = verb + "ing" 
              }
            }
      
          if (tense == 1) {
            if (subj == 0) { 
              finalVerb = "am " + verb 
            } else if (subj == 2) { 
              finalVerb = "is " + verb 
            } else { 
              finalVerb = "are " + verb 
            }
          } else {
            if (subj == 0 || subj == 2) { 
              finalVerb = "was " + verb 
            } else { 
              finalVerb = "were " + verb 
            }
          }
        }
        //future tense
        if (tense == 2) {
          finalVerb = "will " + verb
        }
        //simple past
        let past = "";
        if (tense == 3 || tense == 4) {
          if (verb.endsWith("e")) {
            finalVerb = verb + "d"
          } else if (verb.endsWith("ey") || verb.endsWith("ay")) {
            finalVerb = verb + "ed"
          } else if (verb.endsWith("y") && (vowels.indexOf(secondLast) == -1)) {
            finalVerb = verb.substring(0, (verb.length - 1)) + "ied";
          } else if (softEnd) {
            finalVerb = verb + verb.charAt(verb.length - 1) + "ed";
          } else {
            finalVerb = verb + "ed";
          }
          past = finalVerb;
          if (irreg) { finalVerb = irregPast[(irregularVerbs.indexOf(verb))]; }
          if (verb == "be") {
            if (subj == 0 || subj == 2) {
              finalVerb = "was"
            } else {
              finalVerb = "were"
            }
          }
        }
      
        //past participle
        if (tense == 4) {
          let aux = "have";
          if (subj == 2) { aux = "has" };
          finalVerb = aux + " " + past;
          if (irreg) {
            finalVerb = aux + " " + irregPP[irregularVerbs.indexOf(verb)];
          }
        }
      
        finalVerb = finalVerb + objMark
        return finalVerb
    
    },
    p: function(noun) {
      const irregnoun = ['aircraft','analysis','antithesis','appendix','axis','bacterium','basis','bison','cactus','child','codex','crisis','criterion','datum','diagnosis','die','ellipsis','faux pas','fish','focus','foot','formula','fungus','goose','index','larva','locus','louse','man','matrix','medium','moose','mouse','nebula','nucleus','oasis','offspring','ox','parenthesis','phenomenon','quiz','radius','referendum','series','sheep','shrimp','species','stimulus','stratum','swine','syllabus','synopsis','thesis','tooth','tuna','vertex','woman',]
      const irregplural = ['aircraft','analyses','antitheses','appenices','axes','bacteria','bases','bison','cacti','children','codices','crises','criteria','data','diagnoses','dice','ellipses','faux pas', 'fish','foci','feet','formulae','fungi','geese','indices','larvae','loci','lice','men','matrices','media','moose','mice','nebulae','nuclei','oases','offspring','oxen','parentheses','phenomena','quizzes','radii','referenda','series','sheep','shrimp','species','stimuli','strata','swine','syllabi','synopses','theses','teeth','tuna','vertices','women',]
      const esEndings = ['s', 'x', 'ch', 'sh', 'z']
      //these arrays are used in later rules
      let finalNoun = `${noun}s`
      //sets the default that can be overridden
      for (let i = 0; i < esEndings.length; i++) {
        let esend = false;
        var ending = esEndings[i];
        esend = (noun.endsWith(ending))
        if (esend) {
          finalNoun = `${noun}es`
        }
      }
      //This checks for the esEndings array, which then changes the s to an es
      if (noun.endsWith('f')) {
        let root = noun.slice(0, -1); finalNoun = `${root}ves`;
      }
      //this one changes ultimate f to ve before adding the s
      if (noun.endsWith('fe')) {
        let root = noun.slice(0, -2); finalNoun = `${root}ves`;
      }
      //does the same but with fe to ve
      if (!(['a', 'e', 'i', 'o', 'u'].indexOf(noun.charAt(noun.length - 2)) > -1) && (noun.charAt(noun.length - 1) === 'y')) {
        let root = noun.slice(0, -1);
        finalNoun = `${root}ies`;
      }
      // if a noun ends in a not-vowel then y, the y is changed to ie before adding s. 
      if (!(['a', 'e', 'i', 'o', 'u'].indexOf(noun.charAt(noun.length - 2)) > -1) && (noun.charAt(noun.length - 1) === 'o')) {
        finalNoun = `${noun}es`;
      }
      for (let i = 0; i < irregnoun.length; i++) {
        if (noun === irregnoun[i]) { finalNoun = irregplural[i];}
      }
      return finalNoun
    },
    pos: function(noun) {
      let final = noun + "'s";
      let last = noun.charAt(noun.length-1); 
      if (last =="s" || last == "x") {
        final = noun + "'";
      }
     return final;
    }
}
