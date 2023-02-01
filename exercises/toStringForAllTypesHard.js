/*toString method for all types of data (hard)*/

Array.prototype.toString = function() {
    return '[' + this.map(m => typeof m === 'string' ? "'" + m.toString() + "'" : m.toString()).join(',') + ']';
}
