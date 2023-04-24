//
function solution(targets) {
  // s 기준 내림차순 정렬
  targets.sort((a, b) => {
    return b[0] - a[0];
  });
  let result = 1,
    check = targets.shift()[0]; // result: 요격 미사일 수, check: 첫번째 s
  targets.forEach((v, i) => {
    // 다음 타켓의 e <= check(이전 타겟의 s) -> 범위가 겹치지 않으면
    if (v[1] <= check) {
      check = v[0];
      result++; // 미사일 개수 추가
    }
  });
  return result;
}
