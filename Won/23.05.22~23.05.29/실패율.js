function solution(N, stages) {
  const failure = new Array(N + 1).fill([]);

  stages.forEach((v) => {
    if (v <= N)
      if (failure[v].length) failure[v][1]++;
      else failure[v] = [v, 1];
  });

  let people = stages.length;
  failure.forEach((v, i) => {
    if (v.length) {
      const temp = failure[i][1];
      failure[i][1] = temp / people;
      people -= temp;
    } else failure[i] = [i, 0];
  });

  const result = failure.slice(1, N + 1).sort((a, b) => {
    return b[1] - a[1];
  });

  return result.map((v) => v[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
