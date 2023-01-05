function solution(n) {
  let ans = 1; // 기본적으로 자기 자신 포함 ex) 15 = 15
  for (let i = 1; i <= parseInt(n / 2); i++) {
    // 연속된 수의 합은 n의 절반값을 초과하면 성립 X
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        // 합치다 n과 동일하면
        ans++;
        break;
      } else if (sum > n) break; // n보다 크면
    }
  }
  return ans;
}

// 효율성 테스트 시간 초과
function solution(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        ans++;
        break;
      } else if (sum > n) break;
    }
  }
  return ans;
}
