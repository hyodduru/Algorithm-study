//나의 풀이
function solution(numbers, target) {
  let answer = 0;

  function DFS(v, sum) {
    if (v === numbers.length) {
      if (sum === target) answer++;
    } else {
      DFS(v + 1, sum + numbers[v]);

      DFS(v + 1, sum - numbers[v]);
    }
  }

  DFS(0, 0);

  return answer;
}

// target의 값에 도달하면 멈추고 answer++;
// +를 하는 경우의 수, -를 하는 경우의 수
