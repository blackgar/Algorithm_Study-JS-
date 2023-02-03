function solution(numbers) {
  const result = new Array(numbers.length).fill(-1); // 미리 index 만들어 놓음 (stack에 남는 것들을 -1 처리해주기 위함)

  const stack = [[numbers[0], 0]]; // stack에 index 같이 넣어줌 (result index 찾기 위함)
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > stack[stack.length - 1][0]) {
      // numbers의 요소가 stack 마지막 수 보다 크다면
      while (stack.length && numbers[i] > stack[stack.length - 1][0]) {
        // stack에서 더 큰 값이 있을 때까지 빼줌
        const temp = stack.pop();
        result[temp[1]] = numbers[i]; // result의 해당 index에 넣어줌
      }
    }
    stack.push([numbers[i], i]); // 다음 것과 비교하기 위해 stack에 넣음
  }
  return result;
}
