// 나의 풀이
function solution(absolutes, signs) {
  absolutes = absolutes.map((absolute, i) => (signs[i] ? absolute : -absolute));

  return absolutes.reduce((a, b) => a + b, 0);
}

// 다른 사람 풀이 - 우와 훨씬 간결하다,,
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
