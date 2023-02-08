function solution(progresses, speeds) {
  // 남은 일수 = (전체 작업량-현재 작업량)/작업 속도
  const rem = progresses.map((v, i) => {
    return Math.ceil((100 - v) / speeds[i]);
  });

  const result = []; // 각 배포마다 몇 개의 기능이 배포되는지
  let cnt = 1;
  // 뒤에 있는 기능이 남은 일수가 적다고 해도 앞의 기능이 끝나야 배포 가능
  // for문 한 번 돌면서 현재 요소가 바로 앞의 남은 일수보다 적으면 개수 더해 감
  // 바로 앞 보다 많다면 같이 배포를 못한다는 뜻이므로 지금까지 센 개수를 push하고 cnt 초기화 (그 지점이 기준이 됨)
  for (let i = 1; i < rem.length; i++) {
    if (rem[i - 1] < rem[i]) {
      result.push(cnt);
      cnt = 1;
    } else {
      cnt += 1;
      rem[i] = rem[i - 1];
    }
  }

  if (cnt) result.push(cnt);

  return result;
}
