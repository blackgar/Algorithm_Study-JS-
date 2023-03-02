function solution(clothes) {
  const myClothes = {}; // 카테고리 별 의상
  for (c of clothes) {
    // 해당 카테고리가 없다면 key: 카테고리, value: 의상 리스트 추가
    // 있다면 의상 리스트에 push
    myClothes[c[1]] ? myClothes[c[1]].push(c[0]) : (myClothes[c[1]] = [c[0]]);
  }

  let result = 1;
  for (mc in myClothes) {
    // 조합을 구하려면 각 카테고리에 있는 의상 리스트의 개수+1 곱해줌 (안입은 것 고려위해 +1)
    result *= myClothes[mc].length + 1;
  }

  return result - 1; // 아무것도 입지 않은 경우 -1
}
