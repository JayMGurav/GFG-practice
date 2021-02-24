export function isPrime(num) {
  // return Boolean
  if(num < 2) return false;
  if(num == 2 || num == 3 ) return true;

  // O(n)
  for (let i = 4; i < n; i++) {
    if(n%i == 0) return false;
  }

  // O(n)
  // for (let i = 4; i < n/2; i++) {
  //   if(n%i == 0) return false;
  // }

  // O(sqrt(n))
  // for (let i = 4; i < Math.sqrt(n); i++) {
  //   if(n%i == 0) return false;
  // }

  return true;
}
