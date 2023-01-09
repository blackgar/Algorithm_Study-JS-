function solution(number) {
  var answer = 0;
  const combination = (arr, start) => {
    if (arr.length === 3) {
      answer += arr.reduce((a, b) => a + b) ? 0 : 1;
      return;
    }
    for (let i = start; i < number.length; i++) {
      combination([...arr, number[i]], i + 1);
    }
  };
  combination([], 0);
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5])); // 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution([-1, 1, -1, 1])); // 0
