function solution(elements) {
  let len = elements.length;
  const combinations = {};
  for (let i = 0; i < len - 1; i++) {
    elements.push(elements[i]);
  }
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < elements.length - i + 1; j++) {
      let tmp = elements.slice(j, j + i).reduce((a, b) => a + b);
      combinations[tmp] = 1;
      // console.log(tmp)
    }
  }
  // console.log(combinations)
  return Object.keys(combinations).length;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
