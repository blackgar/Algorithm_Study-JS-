function solution(s, skip, index) {
  var answer = "";

  // 1. 문자열 s에 들어있는 모든 글자를 index 숫자만큼 뒤의 알파벳으로 바꿔준다.
  // 2. 알파벳이 z를 넘어가면 a로 다시 돌아온다.
  // 3. skip에 들어있는 알파벳은 지나친다.

  // 문자열 s를 인덱스 0부터 s.length-1 까지 돌면서 각 문자를 하나씩 변환해주는데,
  // 그 과정에서 각 문자를 ascii코드로 변환하여 하나씩 index 만큼 올려주는데 만약 skip에 해당하는 글자를
  // 만나게 되면 해당 문자는 건너뛰고 카운트 한다.

  [...s].forEach((v) => {
    let tmpIndex = index;
    let tmpWord = v.charCodeAt(0);
    while (tmpIndex > 0) {
      tmpWord++;
      if (tmpWord > 122) tmpWord = 97 + (tmpWord % 123);
      if (!skip.includes(String.fromCharCode(tmpWord))) tmpIndex--;
    }

    answer += String.fromCharCode(tmpWord);
  });

  return answer;
}
