function solution(k, m, score) {
  const sortScore = score.sort((a, b) => b - a);

  let ans = 0;
  let cnt = 0; // m개씩 담기 위해 개수 저장
  for (s of sortScore) {
    cnt += 1;
    if (cnt === m) {
      // m개가 되면
      ans += s * m; // 내림차순이기 때문에 m개가 되었을 때 s가 가장 작음
      cnt = 0; // 다시 세기위해 0으로 초기화
    }
  }
  return ans;
}
