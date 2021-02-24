/**
 * 
 * Given an integral number N. The task is to find the count of digits present in this number.
 * ex: N = 2019
 * output: the number of digits in N(2019) is 4
 * 
 * 
 * note: | (Bitwise OR) also acts as floor so 2.233 | 0 = 2
 */


//  method1
// Time: O(N), Space: O(1)
function numOfDigits1(n) {
  let digits = 0;
  while (n!==0) {
    digits+=1;
    n = n/10 | 0;
  }
  return digits;
}

numOfDigits1(2019);


////////////////////////////////////////////////////


// method 2
// Time: O(1), Space: O(1)
function numOfDigits2(n, count = 0) {
  // using recursive
  if(n==0){ return count};
  return numOfDigits2(n/10 | 0, count+1);
}

console.log(numOfDigits2(2230));



////////////////////////////////////////////////////


// method 2
// Time: O(1), Space: O(1)
function numOfDigits3(n) {
  // using logarithms
  return Math.log10(n)+1 | 0;
}

// console.log(numOfDigits3(20234));





//////////////////////////////////////////////////////

// Method3 another silly method
// Time: O(1), Space: O(1)
function numOfDigits4(n) {
  return n.toString().length;
}

// console.log(numOfDigits4(24));
