function solution(priorities, location) {
  let list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));

  count = 0;
  while (true) {
    let cur = list.shift();
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}

// 처음에 풀려고 하다가 실패한 방식 ㅜ
function solution(priorities, location) {
  let count = 0;
  let answer = [];
  let list = {};

  const num = [...priorities].length;
  priorities.forEach((x, i) => (list[i] = x));

  while (priorities.length > 0) {
    if (priorities[0] === Math.max(...priorities)) {
      answer.push([priorities[0], count]);
      count = count + 1 >= num ? 0 : count + 1;
      priorities.shift();
    } else {
      priorities.push(priorities[0]);

      count = count + 1 >= num ? 0 : count + 1;
      priorities.shift();
    }
  }

  return answer?.indexOf(answer?.find(([a, b]) => b === location)) + 1;
}
