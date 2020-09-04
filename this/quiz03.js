const logThis = () => {
  console.log(this);
}

const myObj = {
  foo: logThis
}

myObj.foo()