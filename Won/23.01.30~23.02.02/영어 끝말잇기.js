function solution(n, words) {
  const result = [0, 0];

  const prev = []; // 이전에 등장했던 단어
  let turn = 0; // 차례
  for (let i = 0; i < words.length; i++) {
    const peopleNumber = i % n; // 사람 번호
    if (peopleNumber === 0) turn++; // 사람 번호가 0이면 첫번째 사람으로 다시 온 것

    if (i > 0) {
      // 끝말잇기 시작이 아닐 때
      // 앞사람이 말한 단어의 마지막 문자로 시작하는지 확인
      if (words[i - 1].at(-1) !== words[i][0]) {
        result[0] = peopleNumber + 1;
        result[1] = turn;
        break;
      }
      // 이전에 등장했던 단어인지 확인
      if (prev.includes(words[i])) {
        result[0] = peopleNumber + 1;
        result[1] = turn;
        break;
      }
    }
    prev.push(words[i]);
  }

  return result;
}
