function solution(k, m, score) {
  var answer = 0;
  score = score.sort((a, b) => a - b).slice(score.length % m);
  for (let i = 0; i < score.length; i += m) {
    answer += score[i] * m;
  }
  return answer;
}

// const solution = (_, m, s) =>
//   s
//     .sort()
//     .filter((_, i) => !((s.length - i) % m))
//     .reduce((a, v) => a + v, 0) * m;

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); //8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
console.log(solution(2, 5, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1])); // 20
