/*String incrementer*/

function incrementString (strng) {
    let array = strng.match("([a-z]*.*[a-z])?(\\d+)?");

    if (array[2] === undefined) return array[1] + 1;
    array[1] = array[1] || "";

    let num = `${parseInt(array[2], 10) + 1}`;
    let n = array[2].length - num.length;

    for (let i =0; i < n; i++) {
        num = '0' + num;
    }

    return array[1] + num;
}

// let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1);

console.log(incrementString("foo"));
console.log(incrementString("1"));
console.log(incrementString("foobar000"));
console.log(incrementString("foo0043"));
console.log(incrementString("foobar999"));

