// 나의 풀이
function solution(record) {
  let idList = {};

  for (let x of record) {
    idList[x.split(" ")[1]] = x.split(" ")[2] || idList[x.split(" ")[1]];
  }

  return record
    .filter((x) => x.split(" ")[0] !== "Change")
    .map((x) => {
      const action =
        x.split(" ")[0] === "Enter" ? "들어왔습니다." : "나갔습니다.";
      const name = `${idList[x.split(" ")[1]]}님이`;

      return `${name} ${action}`;
    });
}
// record for문을 돌면서 각각의 id => 에 해당하는 아이디로 일단 정리
// mapping 하여 return 해주기

// 다른 사람의 풀이 - map을 활용한 방식
function solution(record) {
  let ret = [];
  const uids = new Map();

  record.forEach((entry) => {
    let [command, uid, nick] = entry.split(" ");
    if (command === "Enter" || command === "Change") uids.set(uid, nick);
  });

  record.forEach((entry) => {
    let [command, uid] = entry.split(" ");
    if (command === "Enter") ret.push(`${uids.get(uid)}님이 들어왔습니다.`);
    if (command === "Leave") ret.push(`${uids.get(uid)}님이 나갔습니다.`);
  });

  return ret;
}
