function solution(t, p) {
  let result = 0; // p 보다 작거나 같은 수

  const lenP = p.length; // p 길이
  for (let i = 0; i < t.length - lenP + 1; i++) {
    const temp = t.slice(i, i + lenP);
    if (Number(p) >= Number(temp)) result++;
  }
  return result;
}
