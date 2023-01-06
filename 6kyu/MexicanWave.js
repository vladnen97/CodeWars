/*Mexican Wave*/

function wave(str){
    let result = [];
    str.split("").map((char, i) => {
        if (char !== " ") {
            result.push(str.slice(0, i) + char.toUpperCase() + str.slice(i + 1));
        }
    });
    return result;
}

// console.log(wave("hello"));
// console.log(wave("Codewars"));
console.log(wave("two words"));


