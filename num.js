const stringToNumber = function(str){
    let num = parseFloat(str)
    return num;
    if (num === NaN)// put your code here
    return null;
  }

  function descendingOrder(n){
    let arr = Array.from(String(n), Number);
    arr.sort((a, b)=>b-a)
    return +arr.join('');;
   }

   function makeNegative(num) {
    return (num <=0)?num:-num// Code?
  }