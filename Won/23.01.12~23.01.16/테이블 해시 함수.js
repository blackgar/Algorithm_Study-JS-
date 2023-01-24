function solution(data, col, row_begin, row_end) {
  data.sort(function (a, b) {
    return a[col - 1] - b[col - 1] || b[0] - a[0]; // 앞의 식이 0일 경우 뒤에 식으로 정렬
  });

  let result = 0;
  for (let i = row_begin - 1; i < row_end; i++) {
    // row_begin 부터 row_end 까지
    const si = data[i].reduce(function add(sum, currValue) {
      // 나머지들의 합
      return sum + (currValue % (i + 1));
    }, 0);
    result = result ^ si; // bitwise XOR 연산자
  }
  return result;
}
