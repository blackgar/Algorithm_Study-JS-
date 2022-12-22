function solution(lottos, win_nums) {
  const rank = {
    // 로또의 순위 정하는 방식
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  let sameCount = 0; // 당첨 번호와 같은 구매 번호 개수
  let zeroCount = 0; // 알아볼 수 없는 번호 개수

  for (lotto of lottos) {
    if (win_nums.includes(lotto)) {
      // 당첨 번호에 포함되어 있다면
      sameCount += 1;
    } else if (lotto === 0) {
      // 알아볼 수 없다면
      zeroCount += 1;
    }
  }

  const ans = new Array(2).fill(""); // 최고 순위, 최저 순위
  ans[0] = rank[sameCount + zeroCount];
  ans[1] = rank[sameCount];

  return ans;
}
