function solution(elements) {
  const elementsLength = elements.length;

  const ans = new Set(); // 중복되는 값 제외하기 위해 set
  for (let l = 1; l <= elementsLength; l++) {
    // 길이 1부터 elements 길이까지 연속 부분 수열 확인
    for (let i = 0; i < elementsLength; i++) {
      // 시작지점 인덱스
      let sum = 0; // 수열의 합 저장
      for (let j = i; j < i + l; j++) {
        // j는 시작지점 i부터 l만큼 길이까지 봄
        const newJ = j % elementsLength; // 원형이기 때문에 인덱스 넘어가는 부분을 %로 처리
        sum += elements[newJ];
      }
      ans.add(sum);
    }
  }
  return ans.size;
}
