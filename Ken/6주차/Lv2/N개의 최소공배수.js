function solution(arr) {
  var answer = 0;
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };
  const lcm = (a, b) => (a * b) / gcd(a, b);
  let tmp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    tmp = lcm(tmp, arr[i + 1]);
  }
  answer = tmp;
  return answer;
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
