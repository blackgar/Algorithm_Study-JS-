function solution(s) {
  const reg = /^[0-9]+$/;
  return (s.length === 4 || s.length === 6) && reg.test(s);
}
