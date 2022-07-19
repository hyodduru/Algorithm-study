// 나의 풀이
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, money) => {
      if (budget - money >= 0) {
        budget -= money;
        return count + 1;
      } else {
        return count;
      }
    }, 0);
}

// 다른 사람 풀이
function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  var sum = 0;
  for (var i = 0; i < d.length; i++) {
    if (budget < sum + d[i]) break;
    sum += d[i];
    answer++;
  }

  return answer;
}

// 다른 사람 풀이 2 - 이방법도 신선한 것 같다,,, 빌려줘야하는 총 금액 > 예산 일 경우 계속 팀 하나씩 빼기 -> 초과된 금액 없는 경우 남아있는 팀의 갯수 return
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}
