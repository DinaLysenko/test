function reusableFunction() {
    console.log("Hi World");
  }
   reusableFunction();

   function functionWithArgs(arg1, arg2) {
    console.log(arg1 + arg2);
  }
  functionWithArgs(1, 2);
  functionWithArgs(7, 9);

  function timesFive(num) {
    return num * 5;
  }
  const answer = timesFive(0);
  console.log(answer);

let myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
   const myVar = "foo";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  console.log('outside myLocalScope', myVar);

  const outerWear = "T-Shirt";
function myOutfit() {
const outerWear = "sweater";
    return outerWear;
}
myOutfit();

let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum = sum + 5;
}
addThree();
addFive();

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);