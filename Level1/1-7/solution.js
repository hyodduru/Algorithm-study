// 나의 풀이
function solution(array, commands) {
  let answer = commands.map(
    ([a, b, c]) => array.slice(a - 1, b).sort((a, b) => a - b)[c - 1]
  );

  return answer;
}

// 다른 사람 풀이 - slice 대신 filter를 썼다는 차이가 있음
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
