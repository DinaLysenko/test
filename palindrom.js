function isPalindrome(x) {
    let xToLowerCase = x.toLowerCase();
    let str = xToLowerCase.split('').reverse().join('');
    return xToLowerCase == str?true:false;
  }