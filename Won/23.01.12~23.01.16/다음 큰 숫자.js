function solution(n) {
  function countOne(x) {
    // 2진수로 변환한 값에서 1의 개수 세는 함수
    let cnt = 0;
    for (i of x) {
      if (i === "1") cnt++;
    }
    return cnt;
  }

  let bin = n.toString(2); // n을 2진수로 변환
  const nCnt = countOne(bin); // 1의 개수 파악

  while (true) {
    n = n + 1; // n을 1씩 증가
    bin = n.toString(2); // 2진수로 변환
    const NextNCnt = countOne(bin); // 1의 개수 파악
    if (NextNCnt === nCnt) {
      // n과 1의 개수가 동일하면
      return n;
    }
  }
}
