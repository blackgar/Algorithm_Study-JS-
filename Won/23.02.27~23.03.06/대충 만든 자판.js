function solution(keymap, targets) {
  // 각 원소가 키를 몇 번 눌러야 하는지 hash에 저장
  const hash = {};
  for (key of keymap) {
    key.split("").forEach((v, i) => {
      hash[v] = hash[v] ? Math.min(hash[v], i + 1) : i + 1;
    });
  }

  // targets에 담긴 문자열들을 보며 몇 번 눌러야 하는지 저장
  const result = [];
  for (target of targets) {
    let sum = 0;
    target.split("").forEach((v, i) => {
      sum += hash[v];
    });
    if (sum) result.push(sum);
    else result.push(-1); // 문자열 작성할 수 없다면 -1 저장
  }

  if (result.length) return result;
  else return result;
}
