function solution(numbers) {
  let answer = 0;

  let arr = Array.from({ length: 10 }).fill(0);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = i;
  }

  arr.forEach((item) => {
    if (!numbers.includes(item)) answer += item;
  });

  return answer;
}
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
console.log(solution(numbers)); // 14

// 0~9 로 이루어진 array 만든다.
//  Numbers 각각의 item이 해당하는 array에 존재하고 있는지 확인한다.
// 없는 아이를 answer에 더해준다!

// 다른 사람의 풀이
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// 45 = 1~9 까지의 합,, 좀 충격

// 다른 사람의 풀이 2
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
