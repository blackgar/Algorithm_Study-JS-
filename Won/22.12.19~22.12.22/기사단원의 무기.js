function solution(number, limit, power) {
  let ans = 0;

  for (let i = 1; i <= number; i++) {
    let cnt = 0; // 해당 number의 약수의 개수
    for (let j = 1; j * j <= i; j++) {
      // j는 루트 i 보다 클 필요 없음 (약수는 쌍으로 존재)
      if (i % j === 0) {
        cnt += 1;
        if (j * j != i) {
          cnt += 1;
        }
      }
    }
    if (cnt > limit) {
      // 제한수치 초과
      ans += power; // 정해진 power
    } else {
      ans += cnt;
    }
  }
  return ans;
}
