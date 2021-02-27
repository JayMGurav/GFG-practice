
// method 1
function factorial1(n) {
  let fact = 1;
  for(let i = n; i >= 1; i--){
    fact = fact*i;
  }
  return fact;
}

// method 2
function factorial2(n) {
  if(n==0 || n==1) return 1;
  return n * factorial2(n-1);
}