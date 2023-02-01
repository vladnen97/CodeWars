/*Most frequently used words in a text*/

function topThreeWords(text) {
    const uniqueWords = {};
    const regexp = new RegExp("([A-Za-z][A-Za-z']*)", "g");
    text = text.toLowerCase().match(regexp);
    if (text === null) return [];
    for (let word of text) {
        (uniqueWords.hasOwnProperty(word)) ? uniqueWords[word] = uniqueWords[word] + 1 : uniqueWords[word] = 1;
    }

    return Object
        .keys(uniqueWords)
        .sort(function(a,b){return uniqueWords[b]-uniqueWords[a]})
        .slice(0,3)
}

// const topThreeWords = text => {
//     let total = (text.toLowerCase().match(/\b[a-z']+\b/g)||[]).reduce((acc,cur) => (acc[cur] = (acc[cur]||0) + 1, acc), {});
//     return Object.keys(total).sort((a,b) => total[b] - total[a]).slice(0,3);
// };

console.log(topThreeWords("  //wont won't won't "));
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));