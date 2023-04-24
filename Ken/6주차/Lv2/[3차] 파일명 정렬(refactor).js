function solution(files) {
  let answer = [];

  // Head, number, tail
  // number는 5자리수를 넘을 수 없다.
  // head가 같다면 number로 오름차순 정렬한다.
  // head와 number가 같다면 입력 들어온 순서대로 정렬한다.
  // head는 대소문자 구분을 하지 않는다.

  // 1. head, number, tail로 쪼갠다. 쪼개는 기준은 문자를 만나다가 숫자를 만나면 5자리 이하인 수를 숫자로 가져오고 나머지는 tail처리 한다.
  // 2. 쪼갠 head를 키 값으로 들고 있는다. 거기에 숫자를 넣어서 오름차순 정렬해본다. 대신 숫자가 같다면 문자열을 그대로 순서를 유지한 상태로 정렬된 배열에 넣는다. [originHead, lowerHead, number, originNumber, tail] 형태로 lowerHead를 키값으로 된 객체에 넣는다.
  // 3. Head를 사전순으로 정렬한 후 그 키에 맞는 값들을 조합해서 배열에 순서대로 넣는다.

  let fileObj = {};
  for (const file of files) {
    let head = "";
    let number = "";
    for (const char of file) {
      if (isNaN(char) || char === " ") {
        if (number) break;
        head += char;
      } else if (!isNaN(char)) {
        if (number.length < 5) number += char;
        else break;
      }
    }
    fileObj[head.toLowerCase()]
      ? fileObj[head.toLowerCase()].push([Number(number), file])
      : (fileObj[head.toLowerCase()] = [[Number(number), file]]);
  }
  // console.log(fileObj)
  const keys = Object.keys(fileObj).sort();
  keys.forEach((key) =>
    fileObj[key].sort((a, b) => a[0] - b[0]).forEach((v) => answer.push(v[1]))
  );

  return answer;
}
