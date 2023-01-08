function solution(s) {
  var answer = "";
  let splitStr = s
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);
  answer += splitStr[0] + " ";
  answer += splitStr[splitStr.length - 1];
  return answer;
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
