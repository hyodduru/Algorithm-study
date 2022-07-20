//나의 풀이
function solution(lottos, win_nums) {
  const all = lottos.length;
  let min = 0;
  let max = 0;

  lottos.forEach((lotto) => {
    if (win_nums.includes(lotto)) min++;
  });

  max += lottos.filter((lotto) => !lotto).length + min;

  max = max > all ? all : max;
  max = max === 0 ? 1 : max;
  min = min === 0 ? 1 : min;

  return [all - max + 1, all - min + 1];
}

// 다른 사람 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
