function solution(n) {
  let result = 0; // 건전지 사용량
  // n에서 내려간다고 생각 ()
  while (n) {
    if (n % 2) {
      // 나머지가 있다면
      n = Math.floor(n / 2); // 점프
      result++; // 건전지 사용
    } else {
      // 나머지가 없다면
      n /= 2; // 순간이동
    }
  }
  return result;
}
