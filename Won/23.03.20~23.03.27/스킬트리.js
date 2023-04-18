function solution(skill, skill_trees) {
  let result = 0;

  // 가능한 스킬 순서 리스트
  let temp = "";
  const comb = [temp]; // 순서에 없는 다른 스킬은 순서에 상관없이 배울 수 있으므로 빈 것 추가
  for (s of skill) {
    temp += s;
    comb.push(temp);
  }

  // 스킬 트리 중 skill에 포함된 스킬들만 순서 파악
  for (skill_tree of skill_trees) {
    let temp = "";
    for (st of skill_tree) {
      if (skill.includes(st)) temp += st;
    }
    if (comb.includes(temp)) result++; // 추린 스킬 순서가 comb에 포함되면 증가
  }
  return result;
}
