String.prototype.splitBrackets=function(open,close) {
var a = [""];
var brackets = 0;
for(var i=0; i<this.length; i++) {
  if (this[i]===open) {
  brackets += 1;
    if(brackets === 1){
    a.push("");
    } else {a[a.length-1] += this[i];}
  } else if (this[i]===close) {
  brackets -= 1;if(brackets!==0){a[a.length-1] += this[i];}
  } else {
  a[a.length-1] += this[i];
  }
}
  return a;
}
String.prototype.toObject = function() {
var a = new Object();
a.type = "string";
a.objectified = true;
a.value = this.valueOf();
return a;
}
String.prototype.toNumberMap = function() {
var arr = [];
  for(var i=0; i<this.length; i++) {
arr.push(this.charCodeAt(i));
}
  return arr;
}
