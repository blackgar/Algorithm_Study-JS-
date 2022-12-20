function solution(want, number, discount) {
  const discountLength = discount.length;

  let ans = 0;
  // discount의 요소를 10개씩 확인하며 조건에 맞는지 비교
  for (let i = 0; i < discountLength - 10 + 1; i++) {
    const temp = new Array(want.length).fill(0);
    for (let j = i; j < i + 10; j++) {
      const idx = want.indexOf(discount[j]);
      if (idx !== -1) {
        temp[idx] += 1;
      }
    }
    if (String(temp) === String(number)) {
      ans += 1;
    }
  }

  return ans;
}
