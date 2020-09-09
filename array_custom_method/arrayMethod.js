// forEach
Array.prototype.customeForEach = function (fn) {
  for (let idx = 0; idx < this.length; idx++) {
    fn(this[i], i);
  }
}

// map
Array.prototype.customMap = function (fn) {
  const result = [];
  for (let idx = 0; idx < this.length; idx++) {
    result.push(fn(this[idx]));
  }
  return result;
}

// filter
Array.prototype.customFilter = function (fn) {
  const result = [];
  for (let idx = 0; idx < this.length; idx++) {
    if (fn(this[idx])) {
      result.push(this[idx]);
    }
  }
  return result;
}

// find
Array.prototype.customFind = function (fn) {
  for (let idx = 0; idx < this.length; idx++) {
    if (fn(this[idx])) {
      return this[idx];
    }
  }
  return -1;
}

// reduce
Array.prototype.customReduce = function (fn, acc) {
  for (let idx = 0; idx < this.length; idx++) {
    acc = fn(this[idx], acc);
  }
  return acc;
}
