/*Strip Comments*/

function solution(input, markers) {
    return input.replace(new RegExp(`\\s?[${markers.join("")}].*`, "g"), "");
}
console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]));
console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));
console.log(solution("a\nc\nd $e f g", ["$"]));