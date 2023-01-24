function solution(people, limit) {
  const peopleSort = people.sort(function (a, b) {
    // 내림차순 정렬
    return b - a;
  });

  let result = 0;
  let start = 0;
  let end = peopleSort.length - 1;
  while (start <= end) {
    if (peopleSort[start] + peopleSort[end] <= limit) end--;
    result++;
    start++;
  }
  return result;
}

// 효율성 테스트 시간 초과
function solution(people, limit) {
  const peopleSort = people.sort(function (a, b) {
    return b - a;
  });

  let result = 0;
  while (peopleSort.length) {
    const w = peopleSort.shift();
    if (w + peopleSort.at(-1) > limit) {
      result++;
    } else {
      peopleSort.pop();
      result++;
    }
  }
  return result;
}
