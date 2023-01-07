/*first character that repeats*/

function firstDup (s) {
    for (let i =0; i < s.length; i++) {
        for (let j = i+1; j < s.length; j++) {
            if (s[i] === k[j]) return s[i];
        }
    }
}

// function firstDup (s) {
//     return s[s.search(/(.).*\1/ )]
// }

// function firstDup (s) {
//     for (var i = 0; i < s.length; ++i) {
//         if (s.lastIndexOf(s[i]) != i) return s[i];
//     }
// }

console.log(firstDup('tweet'));
console.log(firstDup('Ode to Joy'));
console.log(firstDup('bar'));