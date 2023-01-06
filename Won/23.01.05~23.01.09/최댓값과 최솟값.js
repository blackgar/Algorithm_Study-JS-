function solution(s) {
  const sList = s.split(" ").map((v) => Number(v)); // 입력 받은 s를 공백을 기준으로 배열로 만드는데, 각 요소를 Number로 저장
  const sListSort = sList.sort((a, b) => a - b); // 오름차순 정렬

  return [sListSort[0], sListSort.at(-1)].join(" "); // 최소값과 최대값을 붙여 문자열로 변환
}
