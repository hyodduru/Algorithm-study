// 나의 풀이
function solution(numbers) {
  var answer = numbers
    .map((c) => String(c))
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
