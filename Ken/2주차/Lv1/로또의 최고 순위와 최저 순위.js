function solution(lottos, win_nums) {
  var answer = [];
  let lottoObj = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  const check = lottos.filter((v) => win_nums.includes(v));
  const unknown = lottos.filter((v) => v === 0);
  answer = [lottoObj[check.length + unknown.length], lottoObj[check.length]];
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
