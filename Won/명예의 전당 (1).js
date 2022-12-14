function solution(k, score) {
  const ans = [];
  const stack = []; // 명예의 전당
  let flag = false; // 명예의 전당 k명 도달했는지 확인
  for (s of score) {
    if (stack.length >= k && !flag) {
      // 명예의 전당 꽉찼고 첫 도달이면
      flag = true;
    }
    stack.push(s); // 명예의 전당에 점수 추가
    stack.sort((a, b) => a - b); // 명예의 전당 오름차순 정렬
    if (flag) {
      // 명예의 전당 넘친 상태 (stack에 k+1개 들어있는 경우)
      stack.shift(); // 오름차순이므로 가장 앞 점수 제거
    }
    ans.push(stack[0]); // 명예의 전당 최하위 점수 발표
  }
  return ans;
}
