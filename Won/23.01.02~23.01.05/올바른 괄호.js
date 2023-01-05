function solution(s) {
  if (s.length <= 1) return false;

  const stack = [];
  for (i of s) {
    if (i === "(") stack.push(i); // 시작 괄호는 무조건 stack에 쌓음
    else {
      if (stack.length) stack.pop(); // stack에 괄호 있을 때만 제거
      else return false; // 제거할 괄호 없으면 올바르지 않은 것
    }
  }

  if (stack.length) return false; // stack에 괄호 남아있다면
  else return true;
}

// 더 빠른 방법
function solution(s) {
  if (s.length <= 1) return false;

  let stack = 0; // 배열이 아닌 숫자로 판단
  for (i of s) {
    if (i === "(") stack++;
    else {
      if (stack > 0) stack--;
      else return false;
    }
  }

  if (stack > 0) return false;
  else return true;
}
