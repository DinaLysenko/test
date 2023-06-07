function arrayPlusArray(arr1, arr2) {
    let s = 0;
    for (i = 0; i < ([].concat(arr1, arr2)).length; i++){
       s += ([].concat(arr1, arr2))[i];
    }
    return s
  }
  console.log(arrayPlusArray(arr1, arr2))

  const myArray = ["str", 8];

//   const myArray = [[1,2], [3, 4]];

// const myArray = [50, 60, 70];
const myData = myArray[0];

// const myArray = [18, 64, 99];
myArray[0] = 45;

const myArray = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [[10, 11, 12], 13, 14],
 ];
//   const myData = myArray[2][1];

const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

function oddOrEven(array) {
  let arrySum=0;
  for(let i=0;i<array.length;i++){
    arrySum=arrySum+array[i];
  }
     if(arrySum===0){
    return "even";
  }else if(arrySum%2===0){
    return "even";
  }
  else{
    return "odd";
  }
}

const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray = myArray.shift();

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

const myList = [["Banana", 5], ["Bread", 3], ["Milk", 4], ["Cheese", 18], ["Eggs", 10]];

function nextInLine(arr, item) {
    arr.push(item);
  const removed = arr.shift();
  return removed;
}