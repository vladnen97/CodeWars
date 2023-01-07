/*First non-repeating character*/

function firstNonRepeatingLetter(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) === i && s.indexOf(s[i]) === i) return s[i];
    }
    return "";
}

console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('moonmen'));

