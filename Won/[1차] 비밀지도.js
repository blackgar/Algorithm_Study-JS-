function solution(n, arr1, arr2) {
  const newArr1 = [];
  const newArr2 = [];

  const binary = (arr, newArr) => {
    // 이진수로 변환하는 함수
    for (a of arr) {
      let temp = a.toString(2); // 변환
      if (temp.length < n) {
        temp = "0".repeat(n - temp.length) + temp; // 빈자리 만큼 앞에 0 붙여줌
      }
      newArr.push(temp);
    }
  };

  binary(arr1, newArr1);
  binary(arr2, newArr2);

  const ans = new Array(n).fill(""); // 출력
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (newArr1[i][j] === "1" || newArr2[i][j] === "1") {
        // 둘 중 하나라도 벽이 있다면
        ans[i] += "#";
      } else {
        ans[i] += " ";
      }
    }
  }
  return ans;
}
