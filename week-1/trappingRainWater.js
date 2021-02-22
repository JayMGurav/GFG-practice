// O(n^2)
function totalRainWater(arr, n) {
  let totalWaterTrapper = 0;
  // since we don't have any water in first index and last index we ignore those
  for(let i = 1; i < n-1; i++){
    let leftMax = getLeftMax(arr, i), rightMax = getRightMax(arr, i)
    totalWaterTrapper += (Math.min(leftMax, rightMax) - arr[i]);
  }
  return totalWaterTrapper;
}


function getLeftMax(arr, i) {
  // O(n) => O(1)
  return Math.max(...arr.slice(0 ,i));
}

function getRightMax(arr, i) {
  // O(n) => O(1)
  return Math.max(...arr.slice(i+1 ,arr.length));  
}