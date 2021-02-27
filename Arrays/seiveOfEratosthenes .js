/**
 * Return all primes upto given limit
 */


 function seive(n) {
   const arr = Array.from({length:n}, (_,i) => i >= 2 ? i : false ),
    limit = Math.sqrt(n);
  
    for(let i = 0; i < limit; i++){
      let j = i*i;
      while (j<=n) {
        arr[j] = flase;
        j+=i;
      }
    }
 
    return arr.filter(Boolean);
  }