/*toString method for all types of data*/

Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
    function () { return JSON.stringify(this); }






