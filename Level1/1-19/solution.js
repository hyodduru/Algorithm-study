// 나의 풀이
function solution(arr) {
  let answer = [];

  for (let x of arr) {
    if (answer[answer.length - 1] !== x) answer.push(x);
  }

  return answer;
}

// 다른 사람 풀이 -WoW 깔끔하다,,
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
