// 나의 풀이
function solution(N, stages) {
  var answer = Array.from({ length: N }, () => 0);
  let counts = {};

  for (let i = 1; i <= N; i++) {
    counts[i] = 0;
  }

  for (let x of stages) {
    counts[x] = counts[x] + 1 || 1;
  }

  let entire = stages.length;

  answer = answer.map((_, i) => {
    entire = i < 1 ? entire : entire - counts[i];

    return [i + 1, counts[i + 1] / entire];
  });

  return answer.sort((a, b) => b[1] - a[1]).map(([k, v]) => k);
}

// 다른 사람 풀이 - 엄청 깔끔하다,, 분모를 저렇게 설정하는 방식도 있구나
function solution(N, stages) {
  let result = [];

  for (let i = 1; i <= N; i++) {
    const reach = stages.filter((item) => item >= i).length;
    const cur = stages.filter((item) => item === i).length;

    result.push([i, cur / reach]);
  }

  return result.sort((a, b) => b[1] - a[1]).map((x) => x[0]);
}
