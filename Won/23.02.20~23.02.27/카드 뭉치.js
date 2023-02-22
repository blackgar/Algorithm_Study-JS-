function solution(cards1, cards2, goal) {
  let flag = true; // cards1와 cards2로 goal 만들 수 있다
  for (g of goal) {
    // goal 순서대로 하나씩
    if (cards1[0] === g)
      cards1.shift(); // cards1의 첫번째 요소에 있으면, 첫번째 요소 제거
    else if (cards2[0] === g)
      cards2.shift(); // cards2의 첫번째 요소에 있으면, 첫번째 요소 제거
    else {
      // 둘 다 없으면, flag 변경 후 탈출
      flag = false;
      break;
    }
  }
  if (flag) return "Yes";
  else return "No";
}
