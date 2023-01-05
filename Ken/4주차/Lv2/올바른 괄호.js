function solution(s) {
  var answer = true;
  let phraseObj = {};
  let open = 0;
  if (s[0] === ")" || s[s.length - 1] === "(") return false;
  // [...s].forEach(v => phraseObj[v] = ++phraseObj[v] || 1);
  // if (phraseObj["("] !== phraseObj[")"]) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") open++;
    else if (s[i] === ")") {
      if (open === 0) return false;
      else open--;
    }
  }
  if (open > 0) return false;
  return answer;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
