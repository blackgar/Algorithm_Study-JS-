function solution(data, col, row_begin, row_end) {
  var answer = 0;
  // 첫번재 col은 기본키이므로 중복되지 않는다.
  // 주어진 col번째 값을 기준으로 오름차순으로 정렬한다.
  // 만약 동일한 값이 있다면 기본키를 기준으로 내림차순 정렬한다.
  // 정렬된 데이터에서 i번째 튜플에 대해서 각 컬럼의 값을 i로 나눈 나머지들의 합으로 정리하고
  // row_begin부터 row_end인 S_I값을 bitwise XOR한 값을 리턴하라.

  // 1. col번째 값을 기준으로 오름차순 정렬한 배열을 만든다.
  data.sort((a, b) => a[col - 1] - b[col - 1]);
  // 2. 그다음 이 배열을 돌면서 같은 값을 가진 행끼리 배열에 모아서 sortData라는 배열에 push한다. col번째 값이 같은 것들이 발견되면 해당 값들을 tmp 배열에 담아서 기본키를 기준으로 내림차순 정렬한다음 sortData 배열에 넣는다.
  // flat으로 3차원 배열을 2차원 배열로 만든다.
  let sortedData = [];
  let tmp = [];
  for (let i = 0; i < data.length; i++) {
    if (tmp.length !== 0 && tmp[tmp.length - 1][col - 1] === data[i][col - 1])
      tmp.push(data[i]);
    else
      i !== 0
        ? (sortedData.push(tmp.sort((a, b) => b[0] - a[0])), (tmp = [data[i]]))
        : (tmp = [data[i]]);
    if (i === data.length - 1) sortedData.push(tmp);
  }
  sortedData = sortedData.flat();
  // console.log(sortedData)

  const sData = [];
  // 3. 정렬된 값들 중 row_begin ~ row_end까지의 값들을 i로 나눈 나머지 값을 누적해서 배열안에 담아둔다.
  for (let i = row_begin; i < row_end + 1; i++) {
    sData.push(sortedData[i - 1].map((v) => v % i).reduce((a, b) => a + b));
    // console.log(sortedData[i-1], sortedData[i-1].map(v => v % i).reduce((a, b) => a+b))
  }
  // console.log(sData)
  answer = sData.reduce((a, b) => a ^ b);
  return answer;
}

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);
