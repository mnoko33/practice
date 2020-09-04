function logThis(){
  console.log(this);
}

const myObj = {
  foo: function(){
    logThis();
  }
}

myObj.foo()