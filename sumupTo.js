/**
Good morning! Here's your coding interview problem for today.

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

*/


function sumUpTo(arr, n) {
  if(n<0)throw new RangeError('N should be non-negative integer');
  for(let i = 0, limit = arr.length; i < limit; i++){//can use binary search here so comp is O(logN);
    if(arr.includes(n - arr[i])){ 
      return true;
    }
  }
  return false;
}

console.log(sumUpTo([10, 15, 3, 7], 17));