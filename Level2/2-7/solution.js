// 연속으로 같은 값이 있으면 빼준다.
// 다시 빼준다.반복
// 모두 제거하면 return 1 아닐경우 return 0

// 처음 풀었던 방식 - 시간 초과로 오류남 ㅠ
function solution(s) {
  let answer = s.split("");

  while (answer.some((x, i) => x === answer[i + 1])) {
    answer.forEach((x, i) => {
      if (answer[i] === answer[i + 1]) {
        answer.splice(i, 2);
      }
    });
  }

  return answer.length === 0 ? 1 : 0;
}

// 그다음 방식 - stack 활용하기
function solution(s) {
  let stack = [];

  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }

  return stack.length ? 0 : 1;
}
