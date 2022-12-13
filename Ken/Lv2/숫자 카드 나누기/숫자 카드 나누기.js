// 약수를 찾아주는 함수 (시간 복잡도 logN으로 처리)
function checkDivisor(num) {
  let tmp = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (i * i === num) tmp.push(i);
    else if (num % i === 0) {
      tmp.push(i);
      tmp.push(num / i);
    }
  }
  // 문제에서 가장 큰 수부터 확인해서 반환하라고 했으므로 큰 수부터 정렬
  tmp = tmp.sort((a, b) => b - a);
  return tmp;
}

// 이 문제의 핵심은 결국 어느 숫자 하나가 자기 카드의 수를 모두 나눌 수 있어야 하고 상대 카드의 숫자를 모두 나눌 수 없어야 한다는 것이다. 즉, 가지고 있는 카드 중 하나의 약수를 활용하면 된다. 그 약수 들 중 가장 큰 수부터 나눠서 자기 카드는 다 나눠지고 상대 카드는 나눠지지 않는 수를 찾으면 된다.
function solution(arrayA, arrayB) {
  let answer = 0,
    numA = 0,
    numB = 0;

  // 약수 찾기, A배열 안의 수들 중 아무거나 하나의 약수를 구하고 B배열 안의 수들 중 하나의 약수를 구한다.
  const arrayADivisors = checkDivisor(arrayA[0]);
  const arrayBDivisors = checkDivisor(arrayB[0]);
  // A가 가진 카드 중 하나의 약수를 하나씩 꺼내서 A 카드를 나눠서 다 나눠지는지 확인한다.
  for (const divisor of arrayADivisors) {
    if (
      // 자기 카드가 다 나누어지는지, 상대방 카드는 모두 나눠지지 않는지 확인
      // every를 써서 하나라도 조건을 만족못하면 반복을 더 하지 않고 결과값을 반환할 수 있게 해서 시간복잡도 개선
      arrayA.every((number) => number % divisor === 0) &&
      arrayB.every((number) => number % divisor !== 0)
    ) {
      // 찾았다면 애초에 약수는 가장 큰 수부터 정렬되어 있으므로 조건을 만족하는 가장 큰 수를 찾았으니 break
      numA = divisor;
      break;
    }
  }
  for (const divisor of arrayBDivisors) {
    if (
      arrayB.every((number) => number % divisor === 0) &&
      arrayA.every((number) => number % divisor !== 0)
    ) {
      numB = divisor;
      break;
    }
  }
  // 둘 중 더 큰 수를 결과로 반환
  answer = Math.max(numA, numB);
  return answer;
}

console.log(solution([10, 17], [5, 20])); // 0
console.log(solution([10, 20], [5, 17])); // 10
console.log(solution([14, 35, 119], [18, 30, 102])); // 7
console.log(solution([11, 22], [100, 201, 301])); // 11
console.log(solution([1], [2])); // 2
console.log(solution([1, 1, 1], [2, 2, 2])); // 2
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11])); // 0
