function solution(nums) {
  const uniqueNums = [...new Set(nums)].length;

  return uniqueNums <= nums.length / 2 ? uniqueNums : nums.length / 2;
}

// 다른 사람 풀이 - Math.floor 제외하고는 거의 비슷하게들 푼 것 같다!
function solution(nums) {
  const leng = [...new Set(nums)].length;
  const n = Math.floor(nums.length / 2);
  return leng >= n ? n : leng;
}
