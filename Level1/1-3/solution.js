// 전화 표시 위치 : [0,0]
// 1. position :  0~9의 위치 (전화표시를 기준으로)
// 2. h: 왼쪽, 오른쪽 최종위치

function solution(numbers, hand) {
  hand = hand === "right" ? "R" : "L";
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
  let h = { L: [1, 1], R: [1, 1] };

  return numbers
    .map((x) => {
      if (/[147]/.text(x)) {
        h.L = [position[x], 1];
        return "L";
      }

      if (/[369]/.text(x)) {
        h.R = [position[x], 1];
        return "R";
      }

      let distL = Math.abs(position[x] - h.L[0]) + h.L[1];
      let distR = Math.abs(position[x] - h.R[0]) + h.R[1];

      if (distR === distL) {
        h[hand] = [position[x], 0];
        return hand;
      }

      if (distR > distL) {
        h.L = [position[x], 0];
        return "L";
      }

      h.R = [position[x], 0];
      return "R";
    })
    .join("");
}
