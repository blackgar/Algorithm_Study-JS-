function solution(k, tangerine) {
  // 서로 다른 귤의 크기가 들어있는 배열이다.
  // 그럼 하나씩 돌면서 각 종류별로 개수를 어떤 배열에 담아놓는다.
  // 그리고 주어진 k개에서 가장 많은 수를 가진 귤의 종류의 개수부터 빼본다.
  // 빼고 나서 그 자리를 0개로 값을 바꾼다.
  // k가 0보다 작은 수가 됐을 때 배열안의 0의 개수를 return 해준다.
  var answer = 0;
  let gyulObj = {};
  tangerine.forEach((v) => (gyulObj[v] = ++gyulObj[v] || 1));
  let gyulArr = Object.values(gyulObj).sort((a, b) => a - b);
  while (k > 0) {
    k -= gyulArr.pop();
    answer++;
  }
  return answer;
}

console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
