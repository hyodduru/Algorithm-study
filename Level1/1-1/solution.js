// 나의 풀이  -  오답
// 처리 결과를 return 해야한다.

// function solution(id_list, report, k) {
//   const reportedPeople = Array.from(new Set(report)).map(
//     (report) => report.split(" ")[1]
//   ); // 중복되지 않은 report를 배열화하여 신고받은 사람들로만 배열로 구성한다.

//   const reportedPeopleCount = {};

//   for (let x of reportedPeople) {
//     reportedPeopleCount[x] = reportedPeopleCount[x] + 1 || 1;
//   } // 신고받은 사람을 key로, 신고받은 횟수를 value로 한다.

//   const filteredPeople = Object.entries(reportedPeopleCount)
//     .filter((x) => x[1] >= k)
//     .map((x) => x[0]); // k번 이상 신고 받은 사람들을 배열로 만든다.

//   const filteredReport = report.filter((x) =>
//     filteredPeople.includes(x.split(" ")[1])
//   ); // report중 k번 이상 신고 받은 건들로 filter 한다.

//   const answer = {};
//   for (let x of id_list) answer[x] = 0; // 각 유저를 key 값으로, 각 유저가 받은 메일의 수를 value로 한다.

//   for (const key in answer) {
//     for (let x of filteredReport) {
//       if (key === x.split(" ")[0]) answer[key]++;
//     }
//   } // filteredReport의 array 내의 첫번째 아이템(신고한 사람)과 answer 의 key 값이 동일하다면  +1 해준다.

//   return Object.values(answer);
// }

// const id_list = ["muzi", "frodo", "apeach", "neo"];
// const report = [
//   "muzi frodo",
//   "apeach frodo",
//   "frodo neo",
//   "muzi neo",
//   "apeach muzi",
// ];
// const k = 2;

// console.log(solution(id_list, report, k)); //[2,1,1,0]

// 문제 해결 순서
// 1. list_id를 key값으로 갖는 객체를 만든다. 그 값으로는 다 0으로 초기화
//(중간 과정) k번 이상 신고당한 아이들 찾아내기
// 2. report에 있는 앞자리 아이와 위의 key 값이 일치할때하고 뒤의 아이가 신고당한 아이다? count 해주기
// 3. 값들로만 return 해주기 Object.values

// => 정답률 8프로 ㅠ 이렇게 풀지 말 것,,

// 모범 답안
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });

  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }

  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }

  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

console.log(solution(id_list, report, k)); //[2,1,1,0]
