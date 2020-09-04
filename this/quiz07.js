function logThis(){
  'use strict'
  console.log(this);
}

function myFunc(){
  logThis();
}

const someObj = new myFunc()