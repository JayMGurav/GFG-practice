/**
 * 
 * n = 25 output = 5
 * n = 27 output is 5
 * n = 35 output 5
 */



//  method 1 Brute force
// Time: O(sqrt(N)), Space: O(1)
 function sqrt1(num) {
   for (let i = 0; i < num; i++) {
     if(i*i === num) return i;
     if(i*i > num) return i-1;
   }
 }

//  method 2 Brute force
// Time: O(log N, Space: O(1)
 function sqrt2(num) {
   if(num == 0 || num == 1){
     return num;
   }
   let s = 1, l = num,ans;
   while (s <= l) {
     let m = (s+l)/2;
     if(m*m === num) return m;
     if(m*m < num){
       s = m+1;
       ans = m;
     } 
     else{
       l = m-1;
     }
   }
   return ans;
     
 }

 console.log(sqrt2(27));
 



 /**
  * Gurss game
  * count rfequency of num in soerted arr
  */