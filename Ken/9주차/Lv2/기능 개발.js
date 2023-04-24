function checkCompletion(arr, index) {
  let flag = true;
  let cnt = 0;
  // console.log(arr);
  for (let i = index; i < arr.length; i++) {
    if (arr[i] >= 100) {
      cnt += 1;
      continue;
    } else {
      flag = false;
    }
    if (!flag) break;
  }
  return cnt;
}

function solution(progresses, speeds) {
  var answer = [];

  // 매일 작업 speeds만큼 진행이 가능하다.
  // 100%가 되면 배포가 가능하다.
  // 완료된 기능 이전의 기능들이 완료가 안됐다면 배포가 불가능하다.
  // 하루에 배포는 한번만 가능하다.

  // 100번의 반복문을 돈다.(진척도는 최소 1이고 최대 작업치인 100을 채우기 위해서는 100일이 필요하므로)
  // 반복문을 돌면서 같은 인덱스에 해당하는 speeds를 progress에 더해준다.
  // 그리고 progress를 확인해서 100 이상의 작업이 있는지 확인한다.
  // 100 이상의 작업이 연속적으로 나타나면 cnt+1 해주고 연속이 끊기는 부분에서 멈추고 다시 작업을 재개한다.
  // 이때 체크할 변수 tmp를 두고 tmp는 마지막으로 배포한 곳의 index를 가지고 있으면서 작업을 지속적으로 체크할 수 있도록 한다.
  let index = 0;
  for (let i = 0; i < 100; i++) {
    // progresses[i] >= 100 ? null : (progresses[i] += speeds[i]);
    progresses.forEach((_, i) => (progresses[i] += speeds[i]));
    const cnt = checkCompletion(progresses, index);
    if (cnt > 0) answer.push(cnt);
    index += cnt;
    if (index === progresses.length) break;
  }
  return answer;
}
