function solution(n, t, m, p) {
  let tot = ""; // 말해야 하는 숫자 전체
  for (let i = 0; i <= t * m; i++) {
    // 0부터 t*m까지를 변환 (변환된 것이 한 자리라고 가정하면 한명이 t개를 말하기 위해 인원수 만큼 곱해줘야함)
    // ex) n=10, t=4, m=2, p=1 -> '0', 1, '2', 3, '4', 5, '6', 7, 8 (따옴표 4개)
    tot += i.toString(n).toUpperCase(); // 진법 변환 후 대문자 변환
  }

  let result = ""; // 튜브가 말해야 하는 숫자
  let cnt = 0; // 담은 개수
  for (let j = p - 1; j <= tot.length; j += m) {
    // tot 전체를 돌며 튜브가 말해야 하는 순서에 해당하는 숫자를 담음
    if (cnt === t) break; // t개까지만 담음
    result += tot[j];
    cnt += 1;
  }

  return result;
}
