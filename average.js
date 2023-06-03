function findAverage(array) {
    let sum = 0;
   for (let i = 0; i < array.length; i++) {
     sum += array[i];
   }  if (sum > 0) {
    sum /= array.length;
    return sum;
   } else {
      return 0;
   }
  }