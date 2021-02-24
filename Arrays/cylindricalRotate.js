/**
 * Given an array, cyclically rotate the array clockwise by one.
 * input [1,2,3,4,5]
 * output [5,1,2,3,4] 
 */


const arr = [1,2,3,4,5];

//  Method 1
// Time: O(N), Space: O(1)
function cylindricalRotate1(arr, n = arr.length) {
  let temp = arr[n-1];
  for(i = n-1; i > 0; i--){
    arr[i] = arr[i-1]
  }
  arr[0] = temp;
}

console.log(cylindricalRotate1(arr));



// Method2 
function cylindricalRotate2(arr) {
  arr.unshift(arr.pop())
}