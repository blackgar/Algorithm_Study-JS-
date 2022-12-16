function solution(arrayA, arrayB) {
  const gcd = (a, b) => {
    // 최대공약수 (유클리드 호제법)
    const temp = a % b;
    if (!temp) return b;
    return gcd(b, temp);
  };

  const gcdInit = [arrayA[0], arrayB[0]]; // N개를 비교하기 위해 첫번째 요소 초기화
  for (let i = 1; i < arrayA.length; i++) {
    // 두 요소의 최대공약수를 구한 후 최대공약수와 다음 요소의 최대 공약수를 구해나감
    gcdInit[0] = gcd(gcdInit[0], arrayA[i]); // (두 배열의 길이 동일)
    gcdInit[1] = gcd(gcdInit[1], arrayB[i]);
  }

  const ans = [
    gcdInit[0] === 1 ? 0 : gcdInit[0],
    gcdInit[1] === 1 ? 0 : gcdInit[1],
  ]; // 최대공약수가 없으면 1로 초기화되므로 출력을 위해 최대공약수 없을 시 0으로

  const checkArray = (n, array) => {
    for (a of array) {
      // 다른 배열의 요소들 중 나눌 수 있는 것이 있는지 확인
      if (a % gcdInit[n] === 0) {
        // 나눌 수 있다면
        ans[n] = 0; // 기각
        break;
      }
    }
  };

  if (ans[0]) {
    // A 최대공약수 있는 경우
    checkArray(0, arrayB);
  }
  if (ans[1]) {
    // B 최대공약수 있는 경우
    checkArray(1, arrayA);
  }

  return Math.max(...ans);
}
