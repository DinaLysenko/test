function reverseWords(str) {
    return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
  }

  const reverseSeq = n => {
    let arr =[];
    for (let i = 1; i <= n; i++ ){
     arr.push(i);
    } return arr.reverse();
  };

  function nameShuffler(str){
    return str.split(' ').reverse().join(' ');//Shuffle It
  }

  function digitize(n) {
    return Array.from(String(n)).reverse().map(i=>Number(i));
  }
  console.log(digitize(35231))