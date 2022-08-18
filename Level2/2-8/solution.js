// 나의 풀이
function solution(progresses, speeds) {
  var answer = [];
  let completeDate = progresses.map((x, i) => Math.ceil((100 - x) / speeds[i]));

  let max = 0;

  for (let x of completeDate) {
    if (max >= x) {
      answer[answer.length - 1]++;
    } else {
      answer.push(1);
      max = x;
    }
  }

  return answer;
}
// [100-93/1, 100-30/30, 100-55/5]   Math.ceil
// [7,3,9]
//[{7 : 1}]
// [{7 : 2}]
// [{7 : 2}, {9 : 1}]
