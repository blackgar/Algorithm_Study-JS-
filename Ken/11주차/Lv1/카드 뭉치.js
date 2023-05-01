function solution(cards1, cards2, goal) {
  // let start = new Date()
  const flag = goal.every((word) => {
    if (cards1[0] === word) {
      cards1.shift();
      return true;
    } else if (cards2[0] === word) {
      cards2.shift();
      return true;
    } else {
      return false;
    }
  });
  // let end = new Date()
  // console.log(end - start)
  return flag ? "Yes" : "No";
}
function solution(cards1, cards2, goal) {
  // let start = new Date()
  let cards1Index = 0;
  let cards2Index = 0;
  const flag = goal.every((word) => {
    if (cards1[cards1Index] === word) {
      cards1Index++;
      return true;
    } else if (cards2[cards2Index] === word) {
      cards2Index++;
      return true;
    } else {
      return false;
    }
  });
  // let end = new Date()
  // console.log(end - start)
  return flag ? "Yes" : "No";
}
