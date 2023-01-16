function solution(ingredient) {
  var answer = 0;
  // 1-2-3-1 이어야 한다.
  // 배열에 숫자를 담으면서 마지막 4개가 햄버거인 경우를 찾고 삭제한 뒤 다음 숫자를 넣으면서 또다른 햄버거가 생기는지 체크해주면 된다.
  const stack = [];
  const step = [1, 2, 3, 1];
  for (const ing of ingredient) {
    stack.push(ing);
    if (
      stack.length > 3 &&
      stack.slice(stack.length - 4, stack.length).every((v, i) => v === step[i])
    ) {
      stack.splice(stack.length - 4, 4);
      answer++;
    }
  }

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
console.log(solution([1, 2, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 2, 3, 1, 2, 3, 1, 3, 1, 2, 3, 1, 1]));
console.log(solution([1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1]));
