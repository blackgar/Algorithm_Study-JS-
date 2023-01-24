function solution(n) {
  var answer = 0;
  const binaryN = [...n.toString(2)].filter((v) => v === "1").length;
  // console.log(binaryN)
  while (true) {
    n++;
    if ([...n.toString(2)].filter((v) => v === "1").length === binaryN) {
      answer = n;
      break;
    }
  }
  return answer;
}

console.log(solution(78));
console.log(solution(15));
