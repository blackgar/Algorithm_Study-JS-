// 6시 시작
// 준호는 처음에 병사 n명을 가지고 있습니다.
// 매 라운드마다 enemy[i]마리의 적이 등장합니다.
// 남은 병사 중 enemy[i]명 만큼 소모하여 enemy[i]마리의 적을 막을 수 있습니다.
// 예를 들어 남은 병사가 7명이고, 적의 수가 2마리인 경우, 현재 라운드를 막으면 7 - 2 = 5명의 병사가 남습니다.
// 남은 병사의 수보다 현재 라운드의 적의 수가 더 많으면 게임이 종료됩니다.
// 게임에는 무적권이라는 스킬이 있으며, 무적권을 사용하면 병사의 소모없이 한 라운드의 공격을 막을 수 있습니다.
// 무적권은 최대 k번 사용할 수 있습니다.

// 더해나가
// 근데 그게 n보다 커
// 만약 K가 남아있으면
// 지금까지 무찌른 라운드 중 가장 적이 많은 라운드를 무적권으로 써서 0으로 만들어
// 그 인덱스 + 1 을 반환해

function solution(n, k, enemy) {
  if (enemy.length === k) {
    return k;
  }

  summation = enemy[0];
  answer = [enemy[0]];
  for (let i = 1; i < enemy.length; i++) {
    summation += enemy[i];
    answer.push(enemy[i]);
    if (summation >= n && k > 0) {
      const maximum = Math.max(...answer);
      const idx = answer.indexOf(maximum);
      answer.splice(idx, 1, 0);
      k--;
    }
    if (k === 0) {
      return answer.length;
    }
    console.log(answer);
  }

  return answer;
}
console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
