function solution(word) {
  const alpha = ["A", "E", "I", "O", "U"]; // 모음
  const dic = {}; // 사전

  const subset = new Array(5).fill(-1);
  let cnt = 0; // 사전 단어 순서
  const recur = (x) => {
    let temp = "";
    for (s of subset) {
      if (s !== -1) temp += alpha[s];
    }
    dic[temp] = cnt; // 사전에 추가

    if (x < 5) {
      for (let i = 0; i < 5; i++) {
        cnt++;
        subset[x] = i;
        recur(x + 1);
        subset[x] = -1;
      }
    }
  };
  recur(0);

  return dic[word];
}
