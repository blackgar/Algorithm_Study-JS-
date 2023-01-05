function solution(k, score) {
  let answer = [];
  let honer = [];
  let min;

  for (let i = 0; i < score.length; i++) {
    // k일까지는 모두 명예의 전당 입성
    if (i < k) honer.push(score[i]);
    // 현재 명예의 전당에서 제일 작은 숫자 찾기
    min = Math.min(...honer);
    // k일 이후부터는 현재 가수의 점수와 명예의 전당 최저점과 비교해서 해당 스코어를 배열에서 splice로 변경해준다.
    if (i >= k) {
      if (score[i] > min) {
        let minIndex = honer.lastIndexOf(min);
        honer.splice(minIndex, 1, score[i]);
      }
    }
    // 그리고 최저점을 찾아서 answer에 넣어준다.
    min = Math.min(...honer);
    answer.push(min);
  }
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
