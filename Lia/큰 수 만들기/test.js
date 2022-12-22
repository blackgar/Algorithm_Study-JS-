//
function solution(number, k) {
  var answer = "";

  let high = number[0];
  for (let i = 1; i < number.length; i++) {
    if (number[i] < high) {
      k--;
    }
    if (number[i] > high) {
      high = number[i];
    }
  }
  return answer;
}

console.log(solution("4177242841", 4));
