function solution(survey, choices) {
  const type = {
    // 유형별 점수
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  const choiceList = {
    // 고정적인 크기의 점수
    1: 3,
    2: 2,
    3: 1,
    4: 0, // 필수 (생략하려면 아래 forEach에서 처리 필요)
    5: 1,
    6: 2,
    7: 3,
  };

  choices.forEach((v, i) => {
    // choices와 survey의 인덱스 동일하기 때문에 forEach
    let flag = 0; // survey[i]의 두 유형 중 어떤 것의 점수를 올릴 지 판단하기 위한 것
    if (v > 4) {
      flag = 1; // 5 이상이면 survey[i][1]
    }
    type[survey[i][flag]] += choiceList[v];
  });

  let ans = "";
  let cnt = 1;
  const temp = [0, 0];
  for (k in type) {
    // 객체 순회는 for in 만 가능 -> index로 비교가 어려워 temp와 cnt 사용
    if (cnt % 2 != 0) {
      // cnt 홀수이면
      temp[0] = k; // temp의 첫 번째 인덱스에 key 저장
      temp[1] = type[k]; // temp의 두 번째 인덱스에 value 저장
    } else {
      // cnt 짝수이면, 저장한 temp의 value와 현재 key의 value 비교
      if (temp[1] < type[k]) {
        // 현재 key의 value가 더 크면
        ans += k;
      } else {
        // temp의 value가 더 크면
        ans += temp[0];
      }
    }
    cnt += 1;
  }
  return ans;
}
