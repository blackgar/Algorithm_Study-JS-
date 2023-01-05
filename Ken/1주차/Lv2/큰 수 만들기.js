function solution(number, k) {
  let answer = "";
  let i = 0;
  let del = 0;
  const stack = [];
  // console.log(stack, number[i], number.length);
  // 스택에 먼저 숫자를 넣는다.
  // 다음 수를 넣을 때 스택의 제일 오른쪽 값과 비교한다.
  // 작으면 빼고 큰거 넣는다
  // 만약 앞에 수가 두개 이상 있으면 다 비교해서 작으면 빼고 나서 stack에 수를 넣는다.
  // stack에 들어가는 숫자가 number.length - k만큼 들어가면 break
  while (true) {
    if (stack[stack.length - 1] < number[i]) {
      if (del === k) break;
      stack.pop();
      del++;
    } else {
      if (i >= number.length - 1) break;
      stack.push(number[i]);
      i++;
    }
    // console.log(stack, number[i]);
  }
  // console.log(stack);
  // console.log([...number].slice(i));
  if (stack.length !== number.length - k)
    answer = answer = stack.concat([...number].slice(i)).join("");
  else answer = stack.join("");
  // console.log("answer", answer);
  return answer;
}

console.log(solution("12", 1));
// [] 1 => [1] 2 => [2] break
console.log(solution("21", 1));
// [] 2 => [2] 1 =>
console.log(solution("213", 2));
console.log(solution("312", 2));
console.log(solution("123", 2));
console.log(solution("1924", 2));
console.log(solution("9412", 2));
console.log(solution("1249", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
