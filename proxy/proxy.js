function State (callback) {
  return new Proxy(this, {
    get (target, property) {
      return target[property];
    },
    set (target, property, value) {
      const oldValue = target[property];
      target[property] = value;

      if (oldValue && oldValue !== value && callback) {
        callback(property, oldValue, value);
      }
    }
  })
}

function onChanges (property, oldValue, value) {
  // 조건
  // this.render();
  console.log('fn :', property, oldValue, value)
}

let obj = new State(onChanges);
obj.data = [3, 3, 3];

// obj.data[0] = 1
console.log(obj.data);
// console.log(obj)