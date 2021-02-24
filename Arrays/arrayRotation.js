/**
 *  Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements
 * input: arr = [1,2,3,4,5,6] d=2
 * output: [3,4,5,6,1,2]
 */

const arr = [1,2,3,4,5,6], d = 2;


// method 1
// Time: O(N), Space: O(d)
function arrRotate1(arr, d, n = arr.length) {
  if(!d) return;
  let tempArr = arr.slice(0,d);
  for(let i = 0, j = d; i < n-d; i++, j++ ){
    arr[i] = arr[j]
  }
  for(let i = 0, j = n-d; i < tempArr.length; i++, j++){
    arr[j] = tempArr[i]
  }
  return arr;
 }


//  console.log(arrRotate1(arr, d));


// Method 2
// Time: O(N^2), Space: O(1);
function arrRotate2(arr, d, n = arr.length) {
  if(!d) return;
  for(let i = 0; i < d; i++){
    let firstElem = arr[0];
    for(let j = 0; j < n-1;j++){
      arr[j] = arr[j+1]; 
    }
    arr[n-1] = firstElem;
  }
  return arr;
 }

//  console.log(arrRotate2(arr, d));

// Method 3
// Time: O(N), Space: O(1)
function arrRotate3(arr, d, n = arr.length) {
  if(!d) return;
  let dElemArr = arr.splice(0,d);
  arr.push(...dElemArr.reverse())
  return arr;
}

//  console.log(arrRotate3(arr, d));
