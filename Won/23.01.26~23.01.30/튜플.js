function solution(s) {
  // slice(1, s.length-2) -> {2},{2,1},{2,1,3},{2,1,3,4
  // replaceAll('{', "") -> 2},2,1},2,1,3},2,1,3,4
  // split("},") -> ['2', '2,1', '2,1,3', '2,1,3,4']
  // map(v => { return v.split(',') }) -> [['2'], ['2', '1'], ['2', '1', '3'], ['2', '1', '3', '4']]
  const ns = s
    .slice(1, s.length - 2)
    .replaceAll("{", "")
    .split("},")
    .map((v) => {
      return v.split(",");
    })
    .sort((a, b) => {
      return a.length - b.length; // 길이 작은 것 부터 result에 없는 것을 추가
    });

  let result = [];
  for (let i = 0; i < ns.length; i++) {
    for (let j = 0; j < ns[i].length; j++) {
      const temp = Number(ns[i][j]); // 2차원 배열 돌면서 요소 숫자로 변환
      if (!result.includes(temp)) result.push(temp); // result에 해당 요소 없으면 추가
    }
  }
  return result;
}
