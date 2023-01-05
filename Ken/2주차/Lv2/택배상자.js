function solution(order) {
  var answer = 0;
  const subContainer = [];
  // 무조건 1번 택배부터 시작
  // 1번 택배와 order[i] 비교한다.
  // 같으면 2번 택배와 order[i+1]택배 비교한다. answer++
  // 다르면 subcontainer[-1]의 택배와 order[i] 비교한다.
  // 같으면 subContainer.pop()하고 i+1한다. answer++
  // 다르면 subContainer.push()한다.

  // 4 3 1 2 5 기준으로 i = 0, box = 1 출발
  // 1번 택배와 order[i](4번 택배) 비교 => 다르다.
  // subContainer[-1]과 4번 택배 비교 => 다르다.
  // 그럼 subContainer에 넣고 box + 1
  // 다음 2번 택배와 order[i](4번 택배) 비교 => 다르다.
  // subContainer[-1](1)과 4번 택배 비교 => 다르다.
  // push box+1
  // 3, 4 => 다르다.
  // 2, 4 => 다르다.
  // push box+1
  // 4, 4 => 같다. box+1, i + 1, answer+1
  // 4, 3 => 다르다.
  // 3, 3 => 같다. i + 1, answer+1
  // 4, 1 => 다르다.
  // 2, 1 => 다르다.
  // push box + 1
  // 5, 1 => 다르다.
  // 5, 4 => 다르다.
  // 더 push할게 없네? break
  let i = 0;
  let box = 1;
  let flag = true;
  while (
    flag &&
    box <= order.length &&
    i < order.length &&
    subContainer.length >= 0
  ) {
    if (order[i] === subContainer[subContainer.length - 1]) {
      subContainer.pop();
    } else if (box === order[i]) {
      box < order.length ? box++ : null;
    } else {
      box < order.length ? (subContainer.push(box), box++) : null;
      if (
        box === order.length &&
        order[i] !== subContainer[subContainer.length - 1] &&
        box !== order[i]
      )
        flag = false;
      continue;
    }
    i++;
    answer++;
  }
  return answer;
}
console.log(solution([4, 3, 1, 2, 5]));
console.log(solution([5, 4, 3, 2, 1]));
console.log(solution([1, 3, 5, 4, 2]));
