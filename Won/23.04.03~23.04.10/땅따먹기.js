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
