/**
 *  return index of element found in arr or -1 if not found
 */

// Method 1
// Time: O(N), Space: O(1)
 function linearSearch(arr, x, n = arr.length) {
   for (let i = 0; i < n-1; i++) {
     if(arr[i] == x) return i;
   }
   return -1;
 }


//  console.log(linearSearch([1,5,6,4,3,8,7], 3));


///////////////////////////////////////////////////////////////////////


// Method 2 for sorted array (Binary Search)
// Time: O(log N), Space: O(1)
function binarySearch(arr, x, n = arr.length) {
  let start = 0, finish = n-1; 
  // if(x < arr[mid]) start
  while(start <= finish){
    let mid = (start+finish)/2 | 0;
       
    if(arr[mid] === x)return mid;
    if(x < arr[mid]) finish = mid-1;
    else start = mid + 1;
  }
  return -1;
}


 console.log(binarySearch([1,2,3,4,5,6,7], 5));