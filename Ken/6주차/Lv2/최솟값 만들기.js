function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[B.length - i - 1];
  }
  return answer;
}

console.log([1, 4, 2], [5, 4, 4]);
console.log([1, 2], [3, 4]);
