function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let cnt = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let w = j + 1; w < nums.length; w++) {
        if (isPrime(nums[i] + nums[j] + nums[w])) {
          cnt++;
        }
      }
    }
  }
  return cnt;
}
