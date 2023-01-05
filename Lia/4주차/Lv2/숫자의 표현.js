function solution(s) {
  var answer = 0;

  for (let n = 0; n < s; n++) {
    let res = recurSum(n, n, s);
    console.log(res);
    if (res) {
      answer++;
    }
  }
  return answer;
}
function recurSum(cur, sum, s) {
  if (sum === s) {
    // console.log(sum);
    return true;
  }
  if (sum > s) return false;
  if (sum < s) {
    return recurSum(cur + 1, cur + 1 + sum, s);
  }
}
console.log(solution(15));
