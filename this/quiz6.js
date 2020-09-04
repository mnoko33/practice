function logThis(){
  console.log(this);
}

const someObj = new logThis()