// 나의 풀이
//1. participantList라는 객체 생성 후 participant내의 이름들을 key값으로, 해당 이름의 갯수를 value로 설정
//2. completion 내의 이름이 participantList내에 있을 경우 갯수를 1씩 차감해줌
//3. participantList내의 갯수(value)가 0보다 큰 이름을 return
function solution(participant, completion) {
  let participantList = {};

  for (let x of participant) {
    participantList[x] = participantList[x] + 1 || 1;
  }

  for (let x of completion) {
    participantList[x] = participantList[x] - 1 || 0;
  }

  return Object.entries(participantList).filter(
    ([_, value]) => value > 0
  )[0][0];
}

// 다른 사람의 풀이- map을 활용한 풀이도 좋은 것 같다!
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}
