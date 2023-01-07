/*First non-repeating character*/

function firstNonRepeatingLetter(s) {
    let t=s.toLowerCase();
    for (let i=0;i<t.length;i++) {
        if (t.indexOf(t[i]) === t.lastIndexOf(t[i])) return s[i];
    }
    return "";
}

console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('moonmen'));
console.log(firstNonRepeatingLetter('sTreSS'));

