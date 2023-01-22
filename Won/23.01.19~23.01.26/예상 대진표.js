function solution(n, a, b) {
  let result = 0;
  while (true) {
    // 항상 이긴다고 가정하기 때문에 무조건 만나게 됨
    if ((a === 0 && b === 1) || (a === 1 && b === 0) || a === b) break;

    result++; // 라운드 증가
    // a와 b를 2로 나눈 후 올림을 하면 붙는 사람끼리 숫자가 같아짐 (다만 1번과 2번은 0과 1로 되기 때문에 break에서 처리)
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return result;
}
