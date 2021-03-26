
// Given a number, write a function to output its reverse digits.
//  (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number 
// should still be negative when reversed.




function reverseNumber(n) {
    if(n<0){
      n = n + "";
      return parseInt(n.split("").reverse().join("")) *-1;
    }
   n = n + "";
   return parseInt(n.split("").reverse().join(""))
    
  }