// 나의 풀이
function solution(answers) {
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = { 1: 0, 2: 0, 3: 0 };

  for (let i = 0; i < answers.length; i++) {
    a.push(a[i]);
    b.push(b[i]);
    c.push(c[i]);
  }

  count[1] = answers.filter((x, i) => x === a[i]).length;
  count[2] = answers.filter((x, i) => x === b[i]).length;
  count[3] = answers.filter((x, i) => x === c[i]).length;

  let answer = "";
  let max = 0;

  for ([k, v] of Object.entries(count)) {
    if (max < v) {
      max = v;
      answer = k;
    }
    if (max === v && answer !== k) answer = `${answer}, ${k}`;
  }

  return answer.split(",").map((x) => Number(x));
}

// 다른 사람 풀이 => a1[i % a.length] 이 방법이 정말 기발한 것 같다,, 굳이 새로 안채워줘도 되고!
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
