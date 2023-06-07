function checkForFactor (base, factor) {
    let n = base / factor
    return   base % Math.round(n) == 0?true:false;
  }