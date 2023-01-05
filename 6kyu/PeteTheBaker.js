/*Pete, the baker*/

const cakes = (needs, has) => Math.min(...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0)));

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));