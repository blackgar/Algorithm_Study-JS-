function solution(name, yearning, photo) {
  const dict = {}; // 사람 이름: 그리움 점수
  for (let i = 0; i < name.length; i++) {
    dict[name[i]] = yearning[i];
  }

  const result = [];
  photo.forEach((pt) => {
    let sum = 0;
    pt.forEach((p) => {
      sum += dict[p] ? dict[p] : 0; // 삼항연산자 처리 안할 시 NaN
    });
    result.push(sum);
  });
  return result;
}
