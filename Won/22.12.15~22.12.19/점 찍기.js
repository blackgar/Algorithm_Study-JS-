function solution(k, d) {
  let ans = 0;
  for (let i = 0; i <= d; i = i + k) {
    // i가 0일 때, 제곱근한 값이 4, 최대값이므로 4/k = 2 ((0,4), (0,2)), (0,0) 포함 위해 +1 => 3
    // i가 2일 때, 제곱근한 값이 3.46, 3.46/k = 1 (2,2), (2,0) 포함 위해 +1 => 2
    // i가 4일 때, 제곱근한 값이 0, 0/k = 0, (4,0) 포함 위해 +1 => 1
    ans += Math.floor(Math.sqrt(Math.pow(d, 2) - Math.pow(i, 2)) / k) + 1;
  }

  return ans;
}

// 테스트 11, 13, 14 시간 초과
function solution(k, d) {
  const expoD = d ** 2;
  const rem = parseInt(d / k);

  let ans = 0;
  for (let i = 0; i <= rem; i++) {
    for (let j = 0; j <= rem; j++) {
      if ((i * k) ** 2 + (j * k) ** 2 > expoD) {
        break;
      }
      ans += 1;
    }
  }

  return ans;
}
