function solution(arr) {
  if (arr.length === 1) return arr[0]; // arr 길이 1이면 하나뿐인 요소가 최소공배수

  // 비교할 두 수
  let n1 = arr.shift();
  let n2;

  while (arr.length) {
    // arr 요소 없어질 때까지
    n2 = arr.shift();

    // 최소공배수 공식
    const temp = n1 * n2;
    while (n1 % n2 !== 0) {
      const n = n1; // n1 임시로 담을 변수
      n1 = n2;
      n2 = n % n2;
    }
    n1 = temp / n2;
  }
  return n1;
}
