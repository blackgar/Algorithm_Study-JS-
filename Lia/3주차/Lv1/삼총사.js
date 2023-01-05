function solution(number) {
  let answer = 0;
  function summation(arr, start) {
    combination = 0;
    if (arr.length === 3) {
      for (const num in arr) {
        combination += num;
      }
      if (combination === 0) {
        answer++;
      }
      return;
    }
    for (let i = start; i < number.length; i++) {
      solution(number, i + 1);
    }
  }
  summation(number, 0);
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
