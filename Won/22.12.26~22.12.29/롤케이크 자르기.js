function solution(topping) {
  let ans = 0;

  const chul = new Map(); // 철수
  const bro = new Set(); // 동생
  for (t of topping) {
    chul.set(t, (chul.get(t) || 0) + 1); // 철수한테 일단 다 넣어서 전체 개수 파악
  }

  for (t of topping) {
    chul.set(t, chul.get(t) - 1); // 철수한테 빼서
    bro.add(t); // 동생에게 줌
    if (chul.get(t) === 0) {
      // 해당 토핑이 더이상 철수한테 없다면
      chul.delete(t); // 철수에 있는 토핑 제거
    }
    if (chul.size === bro.size) ans++; // 철수와 동생의 토핑 종류 개수 동일하면 방법+1
  }
  return ans;
}
