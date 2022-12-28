function solution(number) {
  let ans = 0;

  const comb = (n, r, s, cnt) => {
    // 조합
    if (cnt === r) {
      const temp = c.reduce(function add(sum, cur) {
        return sum + cur; // 뽑은 3개의 합
      }, 0);
      if (temp === 0) ans++; // 합이 0일 결우
    } else {
      for (let i = s; i < n - r + cnt + 1; i++) {
        c[cnt] = number[i];
        comb(n, r, i + 1, cnt + 1);
      }
    }
  };

  const n = number.length; // n개 중
  const r = 3; // 3개를 뽑음
  const c = new Array(r).fill(0); // 뽑은 3개를 담을 배열

  comb(n, r, 0, 0);

  return ans;
}
