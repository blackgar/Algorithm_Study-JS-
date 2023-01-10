// sliding window
function solution(elements) {
  let answer = 0;
  // 세는 단위 : 1 ~ elements.length
  let sum = new Set();
  for (let i = 1; i < elements.length + 1; i++) {
    // 최초 합 구하기
    let firstSum = elements.slice(0, i);
    console.log(firstSum);
  }
  return answer;
}

solution([7, 9, 1, 1, 4]);
