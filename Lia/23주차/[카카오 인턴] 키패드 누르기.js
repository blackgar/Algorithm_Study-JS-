function solution(numbers, hand) {
  const leftNum = [1, 4, 7];
  const rightNum = [3, 6, 9];

  var answer = "";
  let left = numbers.forEach((num) => {
    if (leftNum.includes(num)) answer += "L";
    else if (rightNum.includes(num)) answer += "R";
    else {
    }
  });
  return answer;
}
