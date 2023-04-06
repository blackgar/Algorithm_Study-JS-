function solution(land) {
  for (let i = 1; i < land.length; i++) {
    // land 1행 부터 (이전 행의 최대값을 더해나가기 위함)
    for (let j = 0; j < 4; j++) {
      // 해당 행의 각 열에 이전 행의 열 중 최대값 더함 (연속된 열 불가)
      const temp = land[i - 1][j]; // 이전 행 같은 열 임시 저장
      land[i - 1][j] = -1; // 연속된 열 선택되지 않게 -1로 초기화
      land[i][j] += Math.max(
        land[i - 1][0],
        land[i - 1][1],
        land[i - 1][2],
        land[i - 1][3]
      );
      land[i - 1][j] = temp;
    }
  }
  return Math.max(...land.at(-1));
}

// 시간 초과
function solution(land) {
  const leng = land.length;

  const dfs = (x, y, sum) => {
    if (x === leng - 1) {
      result = Math.max(result, sum);
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (i === y) continue;
      dfs(x + 1, i, sum + land[x + 1][i]);
    }
  };

  let result = 0;
  for (let i = 0; i < 4; i++) {
    dfs(0, i, land[0][i]);
  }

  return result;
}
