function solution(players, callings) {
  const obj = {};
  players.forEach((v, i) => (obj[v] = i + 1));

  callings.forEach((v) => {
    const forwardPlayerName = players[obj[v] - 2];
    const forwardPlayerRank = obj[forwardPlayerName]; // 따라잡은 사람의 등수
    const callingPlayerName = v;
    const callingPlayerRank = obj[v]; // 불린 이름의 등수
    players[forwardPlayerRank - 1] = v;
    players[callingPlayerRank - 1] = forwardPlayerName;
    obj[forwardPlayerName] = callingPlayerRank;
    obj[callingPlayerName] = forwardPlayerRank;
  });

  return players;
}

console.log(solution());
