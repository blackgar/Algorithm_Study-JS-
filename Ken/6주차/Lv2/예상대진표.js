function solution(n, a, b) {
  var answer = 1;
  const checkNum = (num) => {
    if (num % 2) return (num + 1) / 2;
    else return num / 2;
  };
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  while (true) {
    if (max % 2 === 0 && max - min === 1) break;
    else {
      max = checkNum(max);
      min = checkNum(min);
      answer++;
    }
  }

  return answer;
}

console.log(solution(8, 4, 7));
console.log(solution(8, 4, 5));
