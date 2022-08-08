// 나의 풀이
function solution(numbers) {
  let answers = [];

  for (let lt = 0; lt < numbers.length - 1; lt++) {
    for (let rt = lt + 1; rt <= numbers.length - 1; rt++) {
      if (lt !== rt) answers.push(numbers[lt] + numbers[rt]);
    }
  }

  return [...new Set(answers)].sort((a, b) => a - b);
}

// 다른 사람 풀이
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue; // 동일한 index는 skip
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer = [...new Set(answer)].sort((a, b) => a - b);
  console.log(answer);
  return answer;
}
