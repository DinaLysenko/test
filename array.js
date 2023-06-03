function arrayPlusArray(arr1, arr2) {
    let s = 0;
    for (i = 0; i < ([].concat(arr1, arr2)).length; i++){
       s += ([].concat(arr1, arr2))[i];
    }
    return s
  }
  console.log(arrayPlusArray(arr1, arr2))