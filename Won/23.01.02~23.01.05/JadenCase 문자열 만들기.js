function solution(s) {
  s = s.toLowerCase();
  const ans = s.replace(/\b[a-z]/g, (char) => char.toUpperCase());
  // \b : 문자의 경계선, g : 일치하는 패턴 모두 변경

  return ans;
}
