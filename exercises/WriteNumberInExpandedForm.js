/*Write Number in Expanded Form*/
/*
* You will be given a number and you will need to return it as a string in Expanded Form.
*/

// function expandedForm(num) {
//     let strForm = [];
//     num = `${num}`.split("").reverse();
//     for (let i =0, j = 1; i < num.length; i++, j *=10) {
//         if (num[i]*j > 0) strForm.push(`${num[i]*j}`);
//     }
//     return strForm.reverse().join(" + ");
// }

const expandedForm = n => n.toString()
    .split("")
    .reverse()
    .map( (a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));