function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a);
  let l = 0;
  let r = people.length - 1;

  while (l < r) {
    var sum = people[l] + people[r];
    if (sum > limit) {
      l++;
    } else {
      l++;
      r--;
    }
    answer++;
  }
  if (l == r) answer++;
  return answer;
}

// 다른 사람 풀이
function solution(people, limit) {
  people.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  return people.length - i;
}
