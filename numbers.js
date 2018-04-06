// Examples:
// toObject(): var a = 31; a = a.toObject();
// sin(): var a = 31; a = a.sin();
// cos(): var a = 31; a = a.cos();
// tan(): var a = 31; a = a.tan();
// abs(): var a = 31; a = a.abs();
// toPowerOf(): var a = 2; a = a.toPower(3);

Number.prototype.toObject = function() {
var a = new Object();
a.type = "number";
a.objectified = true;
a.value = this.valueOf();
return a;
}
Number.prototype.sin = function() {Math.sin(this.valueOf);}
Number.prototype.cos = function() {Math.cos(this.valueOf);}
Number.prototype.tan = function() {Math.tan(this.valueOf);}
Number.prototype.abs = function() {Math.abs(this.valueOf);}
Number.prototype.toPowerOf = function(exponent) {Math.pow(this.valueOf,exponent);}
Number.toText = function() {String.charcode(this.valueOf);}
