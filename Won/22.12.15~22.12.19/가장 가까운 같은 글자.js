function solution(s) {
  const sLength = s.length;
  const ans = new Array(sLength).fill(-1); // 결과물 초기화

  for (let i = 0; i < sLength; i++) {
    let cnt = 0; // 칸 수
    for (let j = i - 1; j >= 0; j--) {
      // 현재 인덱스 전부터 시작하여 뒤에서 앞으로 탐색
      cnt += 1;
      if (s[i] === s[j]) {
        //같은 글자
        ans[i] = cnt;
        break;
      }
    }
  }

  return ans;
}
