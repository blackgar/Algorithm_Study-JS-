function solution(msg) {
  var answer = [];
  let msgObj = {};
  for (let i = 0; i < 26; i++) {
    msgObj[String.fromCharCode(65 + i)] = i + 1;
  }
  // console.log(msgObj)
  // 1. A~Z 까지 1~26을 차지한다.
  // 2. 현재 글자와 다음 글자를 합쳐서 그게 사전에 있는지 확인한다 있다면 일단 해당 색인번호를 들고 있고 그 다음 글자를 또 확인한다.
  // 3. 만약에 그 다음 글자가 합쳐진 단어가 사전에 없다면 사전에 다음 색인번호로 추가하고 그 글자부터 다시 사전을 검색해 나간다.
  // 즉, 글자는 계속해서 나아가되 중간중간 글자를 확인하는 과정이 필요하다
  let lastWord = "";
  let tmp = "";
  for (let i = 0; i < msg.length; i++) {
    // 일단 단어를 넣는다.
    // 그리고 이미 있는 단어라면 다음 단어 검사하러 간다.
    console.log(msg[i], tmp, lastWord, answer);
    tmp += msg[i];
    if (msgObj[tmp] !== undefined) {
      lastWord = tmp;
      // 만약 없는 단어라면 앞에 있던 단어들까지 색인 번호를 추가하고
      // 새로운 단어를 찾으러 떠나본다.
      if (i === msg.length - 1) answer.push(msgObj[tmp]);
    } else {
      answer.push(msgObj[lastWord]);
      msgObj[tmp] = Object.values(msgObj).sort((a, b) => b - a)[0] + 1;
      tmp = msg[i];
      lastWord = msg[i];
    }
    console.log(msg[i], tmp, lastWord, answer);
  }

  return answer;
}

console.log(solution("KAKAO"));
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
console.log(solution("ABABABABABABABAB"));
// console.log(
//   solution(
//     "THATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITIS"
//   )
// );
