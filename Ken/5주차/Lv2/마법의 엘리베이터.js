function solution(storey) {
  var answer = 0;
  const storeyStr = storey.toString();
  let i = storeyStr.length - 1;
  while (i >= 0) {
    if (
      (storey % 10 === 5 &&
        (Math.floor(storey / 10) % 10 === 5 ||
          Math.floor(storey / 10) % 10 === 9)) ||
      storey % 10 > 5
    ) {
      answer += 10 - (storey % 10);
      storey = Math.floor(storey / 10) + 1;
    } else {
      answer += storey % 10;
      storey = Math.floor(storey / 10);
    }
    i--;
    storey >= 10 ? i++ : null;
  }
  return answer;
}

console.log(solution(16));
console.log(solution(2554));
console.log(solution(95959));
console.log(solution(59595));
console.log(solution(9999));
