function solution(ingredient) {
  const stack = []; // 스택

  let ans = 0; // 포장하는 햄버거의 개수
  for (i of ingredient) {
    stack.push(i); // 일단 for문 돌면서 모든 요소 스택에 저장

    const check = stack.slice(-4).join(""); // 스택 끝에서부터 앞 4자리까지 추출
    if (check === "1231") {
      // 순서 맞다면
      ans++; // 햄버거 포장
      let r = 0;
      while (r < 4) {
        stack.pop(); // 포장한 재료 4개 스택에서 제거
        r++;
      }
    }
  }
  return ans;
}
