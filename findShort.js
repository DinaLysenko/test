function findShort(s){
    let arr = s.split(" ").map(e=>e.length).sort((a,b)=>a-b);
     return arr[0];
    }