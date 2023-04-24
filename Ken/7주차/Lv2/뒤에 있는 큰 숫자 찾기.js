function solution(numbers) {
  var answer = [];
  numbers.forEach((_) => answer.push(0));
  // 반복문을 돌면서 숫자를 만난다. stack에 담는다. stack에 담은 마지막 수와 현재 수를 비교한다.
  // 만약 현재 숫자가 크면 stack을 pop 하고 현재 수를 answer에 담는다.
  // 만약 같거나 작으면 stack에 담아둔다.
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  if (stack.length > 0) {
    for (const index of stack) {
      answer[index] = -1;
    }
  }

  return answer;
}
