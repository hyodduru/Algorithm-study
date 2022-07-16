//나의 풀이
function solution(n, lost, reserve) {
  const students = {};

  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }

  lost.forEach((lost) => (students[lost] -= 1));

  reserve.forEach((reserve) => (students[reserve] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i] -= 1;
      students[i - 1] += 1;
    }

    if (students[i] === 2 && students[i + 1] === 0) {
      students[i] -= 1;
      students[i + 1] += 1;
    }
  }

  let cnt = 0;
  for (key in students) {
    if (students[key] >= 1) cnt++;
  }

  return cnt;
}
