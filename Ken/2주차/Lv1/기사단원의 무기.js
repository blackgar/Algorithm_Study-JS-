function solution(number, limit, power) {
  var answer = 0;
  const divisorArr = [1];
  let tmp = [];
  for (let i = 2; i < number + 1; i++) {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        tmp.push(j);
        if (i / j !== j) tmp.push(i / j);
      }
      if (tmp.length > limit) break;
    }
    tmp.length > limit ? divisorArr.push(power) : divisorArr.push(tmp.length);
    tmp = [];
  }
  // console.log(divisorArr)
  answer = divisorArr.reduce((a, b) => a + b);

  return answer;
}
console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21
