function solution(new_id) {
  var answer = "";
  // 1. 아이디를 바꿔야하는 7단계가 있다.
  // 2. 이 7단계가 필요한지 여부를 확인하는 함수 하나를 만든다.
  // 3. 7단계를 각각 실행할 수 있는 또 다른 하나의 함수 안에 7단계의 함수를 구현한다.
  // 4. 필요한지 여부를 확인하는 함수로 1~7단계를 순차적으로 돌리면서 해당 단계에 걸리면 다시 이 함수를 실행하게 return
  // 5. 재귀로 계속 처리한다음 최종 결과물을 내뱉을 수 있도록 구현한다.

  // 1단계 모든 대문자 소문자로 치환
  const upper = [...new_id].map((v) => v.toLowerCase());

  // 2단계 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표 제외한 모든 문자 제거
  const number = /[0-9]/;
  const alphabet = /[a-z]/;
  const special = /[_\-.]/;
  const allowId = upper.filter(
    (v) => number.test(v) || alphabet.test(v) || special.test(v)
  );

  // 3단계 마침표가 2번 이상 연속된 부분은 하나의 마침표로 치환
  let combineId = allowId.filter((v, i) =>
    i > 0 && v === "." && allowId[i - 1] === v ? false : true
  );

  // 4단계 마침표가 처음이나 끝에 위치한다면 제거하기
  while (
    (combineId[0] === "." || combineId[combineId.length - 1] === ".") &&
    combineId.length
  ) {
    // console.log(combineId);
    if (combineId[0] === ".") combineId.shift();
    if (combineId[combineId.length - 1] === ".") combineId.pop();
  }
  // console.log(combineId);
  // 5단계 빈 문자열이라면 a를 대입
  if (!combineId.length) combineId.push("a");
  // 6단계 길이가 16자 이상이면 첫 15개의 문자를 제외한 나머지 문자 모두 제거. 만약 제거 후에 마침표가 제일 끝에 위치하면 끝에 위치한 마침표 제거
  if (combineId.length > 15) combineId = combineId.slice(0, 15);
  while (combineId[combineId.length - 1] === ".") {
    if (combineId[combineId.length - 1] === ".") combineId.pop();
  }

  // 7단계 길이가 2자 이하라면, new_id의 마지막 문자를 new_id가 길이가 3이 될 때까지 반복해서 채운다.
  while (combineId.length < 3) {
    combineId.push(combineId[combineId.length - 1]);
  }
  answer = combineId.join("");
  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm")); // bat.y.abcdefghi
console.log(solution("z-+.^.")); // z--
console.log(solution("=.=")); // aaa
console.log(solution("123_.def")); // 123_.def
console.log(solution("abcdefghijklmn.p")); //abcdefghijklmn
console.log(solution("b=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.x")); // b.x
console.log(solution("./././././abcd/././././.")); // abcd
