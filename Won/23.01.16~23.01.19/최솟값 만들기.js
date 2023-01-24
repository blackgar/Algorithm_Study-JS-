function solution(A, B) {
  // A에서 가장 큰 요소와 B에서 가장 작은 요소를 곱하면서 더해나가면 최소
  A.sort(function (a, b) {
    // A를 내림차순 정렬
    return b - a;
  });

  B.sort(function (a, b) {
    // B를 오름차순 정렬
    return a - b;
  });

  let result = 0;
  for (let i = 0; i < A.length; i++) {
    result += A[i] * B[i];
  }
  return result;
}
