class myClass {
  logThis = () => {
    console.log(this);
  }
}

const myObj = { name: 'sagiv' };

const myClassInstance = new myClass()
myClassInstance.logThis.call(myObj)