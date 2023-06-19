function solution(n) {
  let result = 2; // n을 나눌 자연수

  // result를 2부터 1씩 증가시키며 나누어 봄
  while (true) {
    const rem = n % result; // 나머지

    if (rem === 1) break; // 나머지가 1이면 중단

    result++;
  }
  return result;
}
