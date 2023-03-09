function solution(n, m, section) {
  let result = 0; // 페인트칠해야 하는 최소 횟수
  let temp = 0; // 어디까지 페인트칠 했는지
  while (section.length) {
    const s = section.shift();
    if (temp < s) {
      // s번 영역이 temp 범위를 벗어났다면
      result++; // 페인트칠 횟수 추가
      temp = s + (m - 1); // s에서 m 길이만큼 칠함
    }
  }
  return result;
}
