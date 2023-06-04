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