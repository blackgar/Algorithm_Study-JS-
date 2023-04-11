function solution(x, y, n) {
  const INF = 9999999;
  const dp = new Array(y + 1).fill(INF); // 0 ~ y
  dp[x] = 0;
  for (let i = x; i <= y; i++) {
    const temp1 = i - n;
    if (temp1 >= x) {
      if (dp[i]) dp[i] = Math.min(dp[i], dp[temp1] + 1);
      else dp[i] = dp[temp1] + 1;
    }

    const temp2 = i / 2;
    if (temp2 >= x && i % 2 === 0) {
      if (dp[i]) dp[i] = Math.min(dp[i], dp[temp2] + 1);
      else dp[i] = dp[temp2] + 1;
    }

    const temp3 = i / 3;
    if (temp3 >= x && i % 3 === 0) {
      if (dp[i]) dp[i] = Math.min(dp[i], dp[temp3] + 1);
      else dp[i] = dp[temp3] + 1;
    }
  }

  if (dp[y] === INF) return -1; // INF가 그대로 있다면 y로 만들지 못한 것
  else return dp[y];
}
