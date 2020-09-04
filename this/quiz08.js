function logThis(){
  console.log(this);
}

class myClass {
  logThat(){
    logThis()
  }
}

const myClassInstance = new myClass()
myClassInstance.logThat()