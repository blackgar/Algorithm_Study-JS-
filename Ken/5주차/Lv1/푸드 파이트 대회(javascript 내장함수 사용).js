function solution(food) {
  var answer = "";
  let number = [];
  food.forEach((v, idx) => number.push(Math.floor(v / 2)));
  number.forEach((v, i) => (answer += i.toString().repeat(v)));
  answer += "0";
  number.forEach(
    (v, i) =>
      (answer += (number.length - 1 - i)
        .toString()
        .repeat(number[number.length - 1 - i]))
  );

  return answer;
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
