function solution(nums) {
  const choice = nums.length / 2; // 선택할 종류 수

  const setNums = new Set(nums); // 가장 많은 종류 선택 목적 -> set으로 중복 제거

  const lenSetNums = setNums.size; // set의 길이
  if (choice <= lenSetNums)
    return choice; // 연구실의 종류가 더 많아도 최대 choice까지 선택 가능
  else return lenSetNums; // 연구실의 종류가 더 적으면 최대 연구실 종류만큼 선택 가능
}
