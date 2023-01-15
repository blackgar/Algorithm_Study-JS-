function solution(food) {
  var answer = "";
  let first = [];
  let second = [];
  food.forEach((v, idx) => {
    for (let i = 0; i < Math.floor(v / 2); i++) {
      first.push(idx);
      // second.unshift(idx);
    }
  });
  first.forEach((v) => (answer += v));
  answer += "0";
  first.forEach((v, i) => (answer += first[first.length - 1 - i]));
  // answer = first.join("") + "0" + second.join("")

  return answer;
}
console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
