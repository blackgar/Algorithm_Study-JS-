function solution(elements) {
  let len = elements.length;
  const combinations = {};
  const combinationSet = new Set();
  for (let i = 0; i < len - 1; i++) {
    elements.push(elements[i]);
  }
  // 결국 요소 하나인 것부터 그를 조합한 합들의 부분 수열을 구하는 것이므로 set나 object의 특성을 활용해서 해당 부분 수열의 값들을 다 넣어놓고 마지막 고유의 값들만 가져오면 문제 해결
  // 결국 input을 예시로 들면 7 / 7, 9 / 7, 9, 1 / 7, 9, 1, 1 / 7, 9, 1, 1, 4 / 9 / 9, 1 / 9, 1, 1 / 9, 1, 1, 4 / 9, 1, 1, 4, 7 /
  // 위처럼 결국 모든 조합을 다 찾게 되므로 set나 객체로 중복된 값을 배제할 수 있다.
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = 0; j < len; j++) {
      sum += elements[i + j];
      // combinations[sum] = 1;
      combinationSet.add(sum);
    }
  }
  // console.log(combinations);

  // return Object.keys(combinations).length;
  return combinationSet.size;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
