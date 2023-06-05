function reverseWords(str) {
    return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
  }

  const reverseSeq = n => {
    let arr =[];
    for (let i = 1; i <= n; i++ ){
     arr.push(i);
    } return arr.reverse();
  };