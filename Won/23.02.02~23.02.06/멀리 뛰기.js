function solution(n) {
  const dp = new Array(n + 1).fill(0);

  if (n < 3) return n; // 피보나치 수열을 따름 (n=1 -> 1개, n=2 -> 2개)

  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567; // 마지막에 나누는 것보다 효율적
  }
  return dp[n];
}

// 시간 초과
// function solution(n) {
//     const dx = [1, 2]

//     let result = 0
//     const que = [0]
//     while (que.length) {
//         const x = que.shift()

//         if (x > n) {
//             continue
//         }

//         if (x === n) {
//             result++
//         }

//         for (d of dx) {
//             const nx = x + d
//             que.push(nx)
//         }
//     }
//     return result % 1234567
// }
