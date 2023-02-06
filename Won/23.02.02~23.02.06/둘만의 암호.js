function solution(s, skip, index) {
  const alpha = [];
  for (let i = 0; i < 26; i++) {
    alpha.push(String.fromCharCode(i + 97)); // 알파벳 소문자 리스트 생성
  }

  let result = "";
  for (a of s) {
    // s의 알파벳 하나씩 가져옴
    let aIdx = alpha.indexOf(a); // 가져온 알파벳의 현재 인덱스 확인
    let cnt = 0; // skip 아닐 때만 count
    while (true) {
      if (cnt === index) break; // skip 제외하고 index 만큼 뒤로 갔다면 멈춤

      aIdx = (aIdx + 1) % 26; // z를 넘어갈 경우 다시 a로 돌아가기 위해 %26
      if (!skip.includes(alpha[aIdx])) cnt++; // skip에 없을 때만 count
    }
    result += alpha[aIdx]; // 이동이 끝난 인덱스에 있는 알파벳을 결과에 담음
  }
  return result;
}
