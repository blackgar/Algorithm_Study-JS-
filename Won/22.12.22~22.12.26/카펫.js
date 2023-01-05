function solution(brown, yellow) {
  const by = brown + yellow;

  let ans = [0, 0];
  for (let i = 1; i * i <= by; i++) {
    // 갈색과 노란색 개수를 합친 것의 약수를 찾음 (약수는 쌍으로 존재하기에 i*i<=by)
    if (by % i === 0) {
      // 나누었을 때 나머지가 0인 것   ex) 12 => (1, 12), (2, 6), (3, 4)...
      let x = by / i; // 임시 가로
      let y = i; // 임시 세로
      if ((x - 2) * (y - 2) === yellow) {
        // 임시 가로세로 중 둘러싸고 있는 갈색을 제거했을 때 노란색 크기가 되는지
        ans[0] = x;
        ans[1] = y;
      }
    }
  }
  return ans;
}
