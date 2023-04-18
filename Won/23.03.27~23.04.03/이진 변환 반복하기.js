function solution(s) {
  const result = new Array(2).fill(0); // [0, 0]

  let ns = s;
  while (ns !== "1") {
    result[0]++; // 이진 변환 횟수 증가
    ns = ns
      .split("")
      .map((v, i) => {
        if (v === "1") return v;
        else {
          result[1]++; // 0 개수 증가
          return ""; // 0 제거
        }
      })
      .join("")
      .length.toString(2); // 문자열 길이를 이진 변환
  }
  return result;
}
