Object.prototype.isObjectified = function() {return this.objectified!==undefined;}
Object.prototype.toNumber = function() {
  if(this.isObjectified) {
  if(this.type==="number"){
  return this.value;
  }
  }
}
Object.prototype.toStringObjectified = function() {
  if(this.isObjectified) {
  if(this.type==="number"){
  return this.value.toString();
  } else {return this.value;}
  }
}
