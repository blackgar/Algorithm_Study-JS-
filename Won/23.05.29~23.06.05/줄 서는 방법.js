function solution(n, k) {
  const people = Array.from({ length: n }, (_, i) => i + 1); // 1번부터 n번까지 사람
  let fac = people.reduce((ac, v) => ac * v, 1); // n!

  const result = []; // k번째 방법
  while (result.length < n) {
    fac = fac / people.length;
    result.push(...people.splice(Math.floor((k - 1) / fac), 1));
    k = k % fac;
  }

  return result;
}

console.log(solution(3, 5));
