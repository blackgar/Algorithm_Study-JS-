function solution(files) {
  return files.sort((a, b) => {
    const headRegexr = /^\D+/; // ^: 시작 포함, \D+: 하나 혹은 그 이상 연결된 문자
    const headA = a.match(headRegexr)[0].toLowerCase();
    const headB = b.match(headRegexr)[0].toLowerCase();

    if (headA < headB) return -1;
    if (headA > headB) return 1;

    const numberRegexr = /\d+/; // \d+: 하나 혹은 그 이상 연결된 숫자
    const numberA = Number(a.match(numberRegexr)[0]);
    const numberB = Number(b.match(numberRegexr)[0]);

    return numberA - numberB;
  });
}
