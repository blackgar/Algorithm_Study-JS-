function solution(X, Y) {
  var answer = "";
  let xObj = {},
    yObj = {},
    commonObj = {};
  // 반복문을 돌면서 X숫자와 Y숫자에 들어있는 숫자 개수를 객체에 저장
  for (const char of X) {
    xObj[char] = ++xObj[char] || 1;
  }
  for (const char of Y) {
    yObj[char] = ++yObj[char] || 1;
  }
  // 두 객체를 비교하면서 만약 같은 수가 있다면 두 객체의 값 중 작은 값이 공통되는 숫자이므로 그 공통되는 숫자만 commonObj에 넣어준다.
  for (const key in xObj) {
    if (key in yObj) {
      commonObj[key] = Math.min(xObj[key], yObj[key]);
    }
  }
  // key값이 숫자이므로 key만 배열로 만들어서 내림차순으로 정렬하면 공통되는 큰 숫자부터 정렬된다.
  const keys = Object.keys(commonObj).sort((a, b) => b - a);
  // 만약 keys에 길이가 0이면 짝꿍이 없으니 -1을 반환
  if (keys.length === 0) return "-1";
  // 0번째 인덱스의 값이 0이면 공통되는 수가 0밖에 없다는 뜻이므로 0을 반환
  if (keys[0] === "0") return "0";
  // 이제 정렬된 key값을 돌면서 commonObj의 값 만큼의 문자열을 answer에 더해준다(repeat 활용).
  for (const key of keys) {
    if (commonObj[key] > 0) answer += key.repeat(commonObj[key]);
  }
  return answer;
}

console.log(solution("100", "2345")); // "-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450")); // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"
console.log(solution("5100000", "4000001")); // "100000"
