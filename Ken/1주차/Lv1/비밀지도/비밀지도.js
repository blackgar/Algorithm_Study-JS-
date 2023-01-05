function solution(n, arr1, arr2) {
  var answer = [];

  // 2진법의 특성을 이용한다. 2진법을 구할 때 숫자가 주어지면 2로 나눈 나머지를 통해 2^0의 값부터 구할 수 있다.
  for (let i = 0; i < n; i++) {
    let tmp = "";
    // 반복문을 돌면서 2로 나눴을 때 나머지가 둘 다 0 이라면 그 부분은 비어있는 칸이 되고 둘 중 하나라도 1이라면 그 칸은 벽이 된다.
    for (let j = 0; j < n; j++) {
      if (arr1[i] % 2 === 0 && arr2[i] % 2 === 0) {
        // 2^0 자리부터 하나씩 앞으로 숫자가 채워지기 때문에 칸에 맞는 문자를 지금까지 구한 tmp값 앞에 추가해준다.
        tmp = " " + tmp;
      } else {
        tmp = "#" + tmp;
      }
      // 나머지가 1인 경우에는 나머지를 뺀 값을 다음 계산할 값으로 넘겨줘야 하므로 2로 나눴을 때 값을 내린 값으로 갱신
      arr1[i] = Math.floor(arr1[i] / 2);
      arr2[i] = Math.floor(arr2[i] / 2);
    }
    answer.push(tmp);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
