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
Number.prototype.sin = function() {return Math.sin(this);}
Number.prototype.cos = function() {return Math.cos(this);}
Number.prototype.tan = function() {return Math.tan(this);}
Number.prototype.abs = function() {return Math.abs(this);}
Number.prototype.toPowerOf = function(exponent) {return Math.pow(this,exponent);}
Number.prototype.toText = function() {return String.fromCharCode(this);}
