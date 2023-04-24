function solution(priorities, location) {
  var answer = 0;

  // 주어지는 우선순위가 있고 그 우선순위에서 제일 높은 숫자부터 출력이 되어야 한다. 제일 높은 숫자가 여러개라면 그냥 마주하는대로 출력하면 된다.
  // 우선순위가 가장 높은게 아니라면 queue의 마지막으로 옮긴다.

  // stack을 하나 준비하고 거기에 우선순위를 오름차순 정렬해서 넣는다.
  // 오름차순한 마지막과 현재 priority가 일치하면 stack.pop() & priorities.shift() 한다.
  // 일치하지 않을때는 priorities.push(priorities.shift())

  let cnt = 0;
  const stack = [...priorities].sort((a, b) => a - b);
  priorities[location] = [priorities[location], "this"];
  // console.log(priorities)
  // console.log(stack)

  while (priorities.length > 0) {
    if (
      priorities[0].length > 1 &&
      priorities[0][0] === stack[stack.length - 1]
    ) {
      cnt++;
      answer = cnt;
      break;
    }
    if (priorities[0] === stack[stack.length - 1]) {
      cnt++;
      priorities.shift();
      stack.pop();
    } else {
      priorities.push(priorities.shift());
    }
  }

  // while ()
  return answer;
}
