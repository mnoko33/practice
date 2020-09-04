function logThis(){
  console.log(this);
}

const myObj = {
  logThis
}

myObj.logThis() // myObj