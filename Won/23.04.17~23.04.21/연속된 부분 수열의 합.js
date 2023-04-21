function solution(sequence, k) {
  const result = [];
  let p = 0,
    sum = 0; // p: 수열 시작 위치, sum: 수열 합
  sequence.forEach((v, i) => {
    sum += v; // 수열 더해감

    // 합이 k 보다 크면, 작아질 때까지 앞에서 부터 뺌 (연속된 수열이기 때문)
    if (sum > k) {
      while (sum > k) {
        sum -= sequence[p++];
      }
    }

    // 합이 k와 같으면, result에 추가
    if (sum === k) {
      result.push([i - p, p, i]); // 수열 길이, 시작 인덱스, 마지막 인덱스
    }
  });

  // 수열 길이를 기준으로 오름차순
  result.sort((a, b) => {
    return a[0] - b[0];
  });
  return [result[0][1], result[0][2]];
}
