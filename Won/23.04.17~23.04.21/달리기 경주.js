// 시간 초과 (10 ~ 13)
function solution(players, callings) {
  callings.forEach((v) => {
    const idx = players.indexOf(v);
    const temp = players[idx - 1];

    players[idx - 1] = v;
    players[idx] = temp;
  });
  return players;
}
