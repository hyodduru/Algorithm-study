function solution(s) {
  const nums = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let answer = s;

  for (let i = 0; i < nums.length; i++) {
    let arr = answer.split(nums[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

// 풀이 설명
// 1. 받아온 s를 nums 내의 아이템들로 split 해줌.
// 2. split으로 인해 비워진 아이템은 join내에 i를 넣어줌으로서 숫자로 그 자리를 메꾸어줌.

// 다른 풀이 - replace도 잘 활용해보자
function solution(s) {
  s = s
    .replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9);
  return Number(s);
}

// 또다른 풀이 - RegExp 잘 몰랐는데 이렇게도 풀 수 있구나,,
function solution(s) {
  let charSet = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let [key, value] of Object.entries(charSet)) {
    let re = new RegExp(key, "g");
    s = s.replace(re, value);
  }
  return parseInt(s);
}
