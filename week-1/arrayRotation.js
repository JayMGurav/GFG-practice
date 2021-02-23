/**
 * 
 *  Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements. 
 * 
 */

//  method 1
// Time: O(N), Space: O(d)
function arrRotate1(arr, d, n = arr.length) {
  if(arr == null || n == 0) return;
  // since it is left rotation we get first d elements in some temp arr
  const tempArr = arr.slice(0,d);
  
  // shift n-d elements to 0-d position
  for(let i = 0, j = d; i < n-d; i++, j++){
    arr[i] = arr[j];
  }
  // change last d elem to elems from tempArr
  arr.splice(n-d, tempArr.length, ...tempArr);
  
  return arr;
}


// arrRotate1([1, 2, 3, 4, 5, 6, 7], 2);




//////////////////////////////////////////////////////////////////

// method 2
// Time: O(d*N), Space: O(1)



function arrRotate2(arr, d, n = arr.length) {
  if(arr == null || n == 0) return;
  
  // shift n-d elements to 0-d position
  for(let i = 0; i < d; i++){
    let temp = arr[0];
    for(j=0; j < n-1; j++){
      arr[j] = arr[j+1];
    }
    arr[n-1] = temp;
  }  
}


// arrRotate2([1, 2, 3, 4, 5, 6, 7], 2);




////////////////////////////////////////////////////////////////

// method 3
// Time: O(N), Space: O(1)

function arrRotate3(arr, d) {
  if(d==0) return;
  // for (let i = 0; i < d; i++) {
  //   const firstElem = arr.shift()
  //   arr.push(firstElem);
  // }

  const removedElem = arr.splice(0, d);
  arr.push(...removedElem.reverse());
  console.log(arr);;
  
}

arrRotate3([1, 2, 3, 4, 5, 6, 7], 2);
