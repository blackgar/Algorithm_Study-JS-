function solution(s) {
  var answer = "";
  // 공백을 기준으로 split
  // split 배열 돌면서 첫번째 글자가 소문자인지 charCodeAt()함수로 체크하기
  // 소문자라면 대문자로 변경해주기, 아니면 그냥 단어 그대로 출력
  // 첫문자 제외하고 모두 소문자로 변경해주기
  // 공백이 연속으로 나오는 부분에 대한 처리 필요. 공백문자가 연속으로 나오면 공백문자를 그대로 살려서 추가해주어야 한다.
  const splitString = s.split(" ");
  const changeStr = [];
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === "") {
      changeStr.push("");
      continue;
    }
    if (
      splitString[i].charCodeAt(0) > 96 &&
      splitString[i].charCodeAt(0) < 123
    ) {
      changeStr.push(
        String.fromCharCode(splitString[i].charCodeAt(0) - 32) +
          splitString[i].slice(1).toLowerCase()
      );
    } else {
      changeStr.push(splitString[i][0] + splitString[i].slice(1).toLowerCase());
    }
  }
  answer = changeStr.join(" ");
  return answer;
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
console.log(solution("3people  unFollowed me"));
console.log(solution("3people unFollowed me "));
console.log(solution("ABC 212e hi baBY"));
