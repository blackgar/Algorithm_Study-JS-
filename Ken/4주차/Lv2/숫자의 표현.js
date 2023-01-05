function solution(n) {
  var answer = 0;
  let i = 1,
    j = 1,
    tmp = 0;
  // 주어진 숫자 /2 + 1까지 자연수들로 구성된다.
  // 1부터 연속되는 자연수로 구성되는지 체크한다. 하나씩 숫자를 늘려나가면서 찾는다.
  while (i < Math.ceil(n / 2)) {
    // console.log(tmp, i, j, answer)
    tmp += j;
    if (tmp < n) {
      j++;
      continue;
    } else if (tmp === n) answer++;
    i++;
    j = i;
    tmp = 0;
    // console.log(tmp, i, j, answer)
  }
  answer++;
  return answer;
}

console.log(solution(15));
console.log(solution(11));
