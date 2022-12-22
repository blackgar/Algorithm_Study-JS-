function solution(number, k) {
  let stack = [];
  for (n of number) {
    while (
      stack.length &&
      Number(stack[stack.length - 1]) < Number(n) &&
      k > 0
    ) {
      // stack에 있는 마지막 요소가 n보다 크거나 같을 때까지 제거 (stack이 비어있지 않고, k가 0이 아닐 때)
      stack.pop();
      k -= 1;
    }
    stack.push(n);
  }

  if (k) {
    // 가장 큰 수가 number의 앞쪽에 있는 경우 while문에 들어가지 않을 수 있기 때문에 k가 남음
    stack = stack.slice(0, stack.length - k); // k만큼 stack의 길이 자름
  }

  return stack.join("");
}

// function solution(number, k) {
//   let ans = 0;

//   const comb = (n, r, s, cnt) => {
//     if (Number(temp.join("")) < ans) {
//       return;
//     }
//     if (cnt === r) {
//       ans = Math.max(ans, Number(temp.join("")));
//     } else {
//       for (let i = s; i < n - r + cnt + 1; i++) {
//         temp[cnt] = number[i];
//         comb(n, r, i + 1, cnt + 1);
//       }
//     }
//   };

//   const N = number.length;
//   const R = N - k;

//   const temp = new Array(R).fill(0);

//   comb(N, R, 0, 0);

//   return String(ans);
// }
