/*Which are in*/

function inArray(array1,array2){
    const srt = array2.join(" ");
    return array1.filter(elem => srt.includes(elem)).sort();
}

console.log(inArray(["xyz", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(inArray(["live", "strong", "arp"],["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(inArray(["tarp", "mice", "bull"],["lively", "alive", "harp", "sharp", "armstrong"]));