/*Consecutive strings*/

/*
* You are given an array(list) strarr of strings and an integer k.
*  Your task is to return the first longest string consisting of k consecutive strings taken in the array.
* n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/

function longestConsec(strarr, k) {
    let longest = "";
    for(let i=0; k>0 && i<=strarr.length-k; i++){
        let tempStr = strarr.slice(i,i+k).join("");

        if(tempStr.length > longest.length){
            longest = tempStr;
        }
    }
    return longest;
}
console.log(longestConsec([], 3));
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));


