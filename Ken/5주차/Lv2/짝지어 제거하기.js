function solution(s) {
  var answer = -1;

  // 짝지어진 소문자끼리 제거 후 이어붙인다. 배열에 값을 넣다가 같은 값 만나면 pop. 배열에 값이 남아있으면 0 없으면 1

  const stack = [];
  for (const char of s) {
    if (char === stack[stack.length - 1]) stack.pop();
    else stack.push(char);
  }

  return stack.length === 0 ? 1 : 0;
}
console.log(solution("baabaa"));
console.log(solution("cdcd"));
console.log(solution("abcdefghhgfedcbc"));
console.log(solution("abcdefghhgfedcba"));
