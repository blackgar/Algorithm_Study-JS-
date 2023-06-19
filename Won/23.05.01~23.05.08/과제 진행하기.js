function solution(plans) {
  // [과제 이름, 과제 시작 시간(분으로 환산), 걸리는 시간]
  // 과제 시작 시간 기준으로 오름차순 정렬
  const plansFormat = plans
    .map((v, i) => {
      const temp = v[1].split(":");
      const startTime = Number(temp[0]) * 60 + Number(temp[1]);
      return [v[0], startTime, Number(v[2])];
    })
    .sort((a, b) => {
      return a[1] - b[1];
    });

  const result = [];
  const startPlan = plansFormat.shift();
  const stack = [startPlan]; // 진행중 과제
  let curTime = startPlan[1]; // 현재 시간

  // result에 과제 총 개수가 다 찰때까지 curTime을 1씩 증가시키며 반복
  while (result.length < plans.length) {
    if (stack.length) {
      // 진행중 과제가 있다면
      stack.at(-1)[2]--; // 가장 최근에 진행중인 과제의 걸리는 시간 -1
      if (stack.at(-1)[2] === 0) {
        // 가장 최근에 진행중인 과제가 끝났다면
        result.push(stack.pop()[0]); // stack에서 제거 후 result에 추가
      }
    }

    curTime++; // 현재 시간 +1

    // 새로운 과제가 남아있고, 가장 빨리 시작하는 새로운 과제가 현재 시간과 같다면
    // 새로운 과제 목록에서 제거 후 stack에 추가
    if (plansFormat.length && plansFormat[0][1] === curTime)
      stack.push(plansFormat.shift());
  }
  return result;
}
