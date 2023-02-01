function solution(storey) {
  const storeyList = String(storey)
    .split("")
    .map((v) => Number(v)); // 문자열 -> 배열
  storeyList.unshift(0); // 가장 앞자리 올림 위해 필요

  let result = 0; // 이동 횟수
  for (let i = storeyList.length - 1; i >= 0; i--) {
    // 첫째 자리 부터
    const pn = storeyList[i]; // 현재 자릿수의 숫자
    if (pn === 5) {
      // 5일 때 (앞자리에 따라 달라짐)
      if (storeyList[i - 1] >= 5) {
        // 앞자리가 5 보다 같거나 클 때
        result += 10 - pn;
        storeyList[i - 1]++; // 앞자리 +1
      } else {
        // 앞자리가 5 보다 작을 때
        result += pn;
      }
    } else if (pn < 5) {
      // 5 보다 작을 때
      result += pn;
    } else {
      // 5 보다 클 때
      result += 10 - pn;
      storeyList[i - 1]++; // 앞자리 +1
    }
  }

  return result;
}
