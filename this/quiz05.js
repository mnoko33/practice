const logThis = () => {
  console.log(this);
}

const myObj = { name: "sag1v" }

logThis.apply(myObj)