/**
 * a = bq + r
 * 0 ≤ r < b
 */

// Time: O(log(min(a, b)))
function gcd(a,b) {
  if(a == 0) return b;
  return gcd(b%a, a);
}