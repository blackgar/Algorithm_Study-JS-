function solution(n) {
  const dp = new Array(n + 1).fill(0);

  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567; // return 할 때 나누게 되면 자료형의 범위 넘어감
  }
  return dp[n];
}
