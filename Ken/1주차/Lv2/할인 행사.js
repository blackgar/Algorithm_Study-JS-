function solution(want, number, discount) {
  var answer = 0;
  let wantObj = {};
  want.forEach((v, i) => (wantObj[v] = number[i]));
  for (let i = 0; i < discount.length - 9; i++) {
    let flag = true;
    let discountObj = {};
    discount
      .slice(i, i + 10)
      .forEach((v) => (discountObj[v] = ++discountObj[v] || 1));
    // console.log(tmp)

    for (const key in discountObj) {
      // console.log(discountObj, wantObj)
      // console.log(wantObj[key], discountObj[key])
      if (wantObj[key] !== discountObj[key]) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);
