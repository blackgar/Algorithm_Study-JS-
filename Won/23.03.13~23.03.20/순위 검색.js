function solution(info, query) {
  const dict = {}; // 지원자 정보 저장

  // 해당 조건을 고려하지 않는 '-'를 포함한 경우의 수를 모두 저장함
  const cases = (arr) => {
    const all = "-";
    for (lang of [all, arr[0]]) {
      for (job of [all, arr[1]]) {
        for (career of [all, arr[2]]) {
          for (food of [all, arr[3]]) {
            dict[lang + job + career + food]
              ? dict[lang + job + career + food].push(Number(arr[4]))
              : (dict[lang + job + career + food] = [Number(arr[4])]);
          }
        }
      }
    }
  };

  // 지원자 정보들을 하나씩 저장
  for (i of info) {
    cases(i.split(" "));
  }

  // 지원자 정보 점수 정렬
  for (d in dict) {
    dict[d].sort((a, b) => {
      return a - b;
    });
  }

  // 점수 만족하는 지원자 수 찾기
  const bs = (arr, x) => {
    if (!arr) return 0; // 해당 key 없는 경우

    let left = 0;
    let right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] >= x) right = mid;
      else left = mid + 1;
    }
    return arr.length - left;
  };

  const result = [];
  for (q of query) {
    const temp = q.replaceAll("and ", "").split(" ");
    const cdt = temp.slice(0, 4).join(""); // 조건
    const score = temp[4]; // 점수
    result.push(bs(dict[cdt], score));
  }
  return result;
}
