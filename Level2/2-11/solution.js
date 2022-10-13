// 나의 풀이
function solution(s) {
  s = s.split(" ").map((x) => Number(x));
  let min = s[0];
  let max = s[0];

  for (let x of s) {
    if (min > x) {
      min = x;
    }
    if (max < x) {
      max = x;
    }
  }

  return `${min} ${max}`;
}

// 다른 사람 풀이

3;
4;
5;
6;
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
