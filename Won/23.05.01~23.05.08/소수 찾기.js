function solution(n) {
  const isPrime = new Array(n + 1).fill(true); // 모두 소수로 가정하여 초기화 (true)
  isPrime[1] = false;

  for (let i = 2; i < n + 1; i++) {
    if (i * i > n) break;

    if (!isPrime[i]) continue;

    // 배수는 모두 소수가 아님
    for (let j = i * i; j < n + 1; j += i) {
      isPrime[j] = false;
    }
  }

  return isPrime.slice(1).filter((el) => el === true).length;
}
