/*Growth of a Population*/

/*
* p0 == population at the beginning of a year;
* percent ==  population regularly increases per year;
* aug == inhabitants coming or leaving each year;
*  p == population to equal or surpass;
*
* the function nbYear should return "n" number of entire years needed to get a population greater or equal to "p".
*/

function nbYear(p0, percent, aug, p) {
    let n =0;
    while (p0 < p) {
        p0 = Math.floor(p0 + (p0 * percent/100) + aug);
        n++;
    }
    return n;
}

console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));