function solution(X, Y) {
  const ans = []; // 공통으로 나타나는 정수
  const countX = new Array(10).fill(0); // 0~9 빈 배열 생성
  const countY = new Array(10).fill(0);

  for (x of X) {
    // X 숫자 개수
    countX[x]++;
  }
  for (y of Y) {
    // Y 숫자 개수
    countY[y]++;
  }

  countX.forEach((value, index) => {
    if (value && countY[index]) {
      // X, Y 공통으로 나타나는 숫자
      const min = Math.min(value, countY[index]); // X, Y 중 적은 쪽 찾기
      ans.push(String(index).repeat(min));
    }
  });

  if (!ans.length) {
    // 짝꿍이 존재하지 않을 때
    return "-1";
  }

  if (!Number(ans.join(""))) {
    // 짝꿍이 0으로만 구성되어 있을 때
    return "0";
  }

  return ans.reverse().join("");
}

// 시간 초과 (테스트 11~15)
function solution(X, Y) {
  const ans = []; // 공통으로 나타나는 정수
  let sum = 0;

  for (x of X) {
    // X 순회하며
    if (Y.includes(x)) {
      // Y에 X의 요소 x가 존재한다면
      Y = Y.replace(x, "-"); // Y에 있는 동일한 요소 변경
      ans.push(x); // 공통 숫자 수집
      sum += Number(x);
    }
  }

  if (!ans.length) {
    // 짝꿍이 존재하지 않을 때
    return "-1";
  }
  if (sum) {
    ans.sort((a, b) => b - a); // 내림차순 정렬
    const joinAns = ans.join("");
    return joinAns;
  } else {
    // 짝꿍이 0으로만 구성되어 있을 때
    return "0";
  }
}
