/*Roman Numerals Decoder*/

function solution (roman) {
    const romanNum = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let result = romanNum[roman[0]];

    for (let curr = 0, next = 1; next < roman.length; curr++, next++) {
        result += romanNum[roman[next]];
        if (romanNum[roman[curr]] < romanNum[roman[next]]) {
            result -= 2 * romanNum[roman[curr]];
        }
    }
    return result;
}

console.log(solution('XXI'));
console.log(solution('IV'));
console.log(solution('MDCLXVI'));
