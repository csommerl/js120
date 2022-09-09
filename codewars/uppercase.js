String.prototype.isUpperCase = function() {
  if (this.valueOf().toUpperCase() === this.valueOf()) {
    return true;
  } else {
    return false;
  }
}

console.log('C'.isUpperCase());
