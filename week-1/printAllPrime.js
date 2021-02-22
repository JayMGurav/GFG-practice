const {isPrime} = require("./checkPrime");


// method 1 O(N * sqrt(N))
function getAllPrime1(limit) {
  for (let i = 0; i < limit; i++) { //O(N)
    if(isPrime(i)) return i;   //O(sqrt(N))
  }
}


// method 2 seive of eratosthenses

/**
 * todo
 */