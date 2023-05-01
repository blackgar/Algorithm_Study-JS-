function solution(n, t, m, p) {
  var answer = "";
  // const a = 3223123
  // console.log(a.toString(16))
  let i = 0;
  let turn = 0;
  while (answer.length < t) {
    // 내가 현재 1번째로 해야 하고 참가하는 인원이 4명이면 turn이 1부터 시작할때는 나머지가 내 차례이면
    for (const char of i.toString(n)) {
      if (turn % m === p - 1) answer += char.toUpperCase();
      if (answer.length > t - 1) break;
      turn++;
    }
    i++;
  }
  return answer;
}
