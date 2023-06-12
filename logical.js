function testLogicalAnd(val) {
    if (25<= val && val<=50) {
           return "Yes";
       }
   return "No";
  }
  
  function testLogicalOr(val) {
     if (10>val || val>20) {
     return "Outside";
   }
   return "Inside";
  }
  
  
  function testElse(val) {
   let result = "";
     if (val > 5) {
     result = "Bigger than 5";
   }
   else {
     result = "5 or Smaller";
   }
   return result;
  }
  
  function testElseIf(val) {
   if (val > 10) {
     return "Greater than 10";
   }
   else if (val < 5) {
     return "Smaller than 5";
   } else {
   return "Between 5 and 10";
  }
  }
  
  function orderMyLogic(val) {
   if (val < 5) {
     return "Less than 5";
   } else if (val < 10) {
     return "Less than 10";
   } else {
     return "Greater than or equal to 10";
   }
  }
  
  function testSize(num) {
  if (num < 5) {
   return "Tiny";
  } else if (num < 10) {
   return "Small";
  } else if (num < 15) {
   return "Medium";
  } else if (num < 20) {
   return "Large";
  } else if (num >= 20) {
   return "Huge";
  } else {
   return "Change Me";
  }
  }
  
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
  function golfScore(par, strokes) {
   if (strokes == 1) {
   return names[0];
  } else if (strokes <= par-2) {
   return names[1];
  } else if (strokes == par-1) {
   return names[2];
  } else if (strokes == par) {
   return names[3];
  } else if (strokes == par+1) {
   return names[4];
  } else if (strokes == par+2) {
   return names[5];
  } else if (strokes >= par+3) {
   return names[6]
  } else {
   return "Change Me";
  }
  }
  