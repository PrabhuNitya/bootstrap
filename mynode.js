/**
 * Created by jmy on 2016/3/16.
 */

var disc = require("./module.js");

module.exports = function(a, b, c, next) {
    if(a == 0) {
        next(new err)
    }
}

var a = 1, b = 4, c = 1;

var delta = function(a, b, c) {
    return b * b - 4 * a * c;
}

var root1 = (-b + Math.sqrt(delta(a, b, c))) / (2 * a);
var root2 = (-b - Math.sqrt(delta(a, b, c))) / (2 * a);

console.log("root are " + root1 + " and " + root2);