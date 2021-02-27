// method 1 O(N * sqrt(N))


function getAllPrime1(limit) {
  for (let i = 0; i < limit; i++) { //O(N)
    if(isPrime(i)) return i;   //O(sqrt(N))
  }
}


// method 2 seive of eratosthenses

function seive(n) {
  // 
  const arr = Array.from({length:n}, (_,i) => i >=2 ? i : false),
    limit = Math.sqrt(n);

  for(let i = 2; i < limit; i++){
    let j = i*i;
    while (j <= n) {
      arr[j] = false;
      j = j+i;
    }
  }

  return arr.filter(Boolean);
}


console.log(seive(20));