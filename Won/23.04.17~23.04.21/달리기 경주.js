function solution(players, callings) {
  const dict = {}; // name: rank

  // 플레이어들의 이름 별 현재 등수 저장
  players.forEach((v, i) => {
    dict[v] = i;
  });

  // 선수 이름 부를때마다 dict과 players 순서 변경
  callings.forEach((v) => {
    const idx = dict[v]; // 부른 선수의 현재 등수
    const temp = players[idx - 1]; // 부른 선수의 바로 앞 선수 이름

    dict[v]--; // 부른 선수 등수 -1
    dict[temp]++; // 부른 선수의 바로 앞 선수 등수 +1

    players[idx - 1] = v; // 부른 선수 등수 -1
    players[idx] = temp; // 부른 선수의 바로 앞 선수 등수 +1
  });
  return players;
}

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
