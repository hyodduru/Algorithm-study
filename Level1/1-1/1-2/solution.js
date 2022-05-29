function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
const new_id = "...!@BaT#*..y.abcdefghijklm";
console.log(solution(new_id));

// ^ : 문자열의 시작
// \w : word를 표현. 알파벳 + 숫자 + _ 중의 한 문자
// \ : 특수문자 사용
