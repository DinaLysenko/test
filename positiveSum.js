function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr == 0) {
        return 0;
      }
       if (arr[i] > 0) {
         sum += arr[i];
          }  
              } return sum;
    }