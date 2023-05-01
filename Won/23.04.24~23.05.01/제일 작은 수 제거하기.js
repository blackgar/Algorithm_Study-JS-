function solution(arr) {
  if (arr.length === 1) return [-1]; // 배열 길이 1일 때, 제거 시 빈 배열 -> [-1] 리턴

  const result = [];
  const minValue = Math.min(...arr); // 가장 작은 수
  arr.forEach((v) => {
    if (v !== minValue) result.push(v); // 가장 작은 수가 아닐 때 result에 추가
  });
  return result;
}
