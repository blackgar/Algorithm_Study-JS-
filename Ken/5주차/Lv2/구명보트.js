function solution(people, limit) {
  var answer = 0;
  // 몸무게를 정렬해서 큰 무게랑 같이 탈 수 있는 가장 큰수랑 짝을 지어서 visited에 표시해서
  // 짝을 지을 수 있는 것들은 짝을 짓고 안되는 친구들은 짝을 짓지 않은 상태로 answer을 더하면 된다.
  let peopleObj = {};
  people.forEach((v) => (peopleObj[v] = ++peopleObj[v] || 1));
  const keys = Object.keys(peopleObj).sort((a, b) => b - a);
  let i = 0;
  while (i < keys.length) {
    if (!peopleObj[keys[i]]) {
      i++;
      continue;
    }
    const tmp = Number(keys[i]);
    peopleObj[keys[i]]--;
    for (let j = i; j < keys.length; j++) {
      if (peopleObj[keys[j]] > 0 && tmp + Number(keys[j]) <= limit) {
        peopleObj[keys[j]]--;
        break;
      }
    }
    answer++;
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
console.log(solution([41, 42, 43, 44, 45, 46, 47, 48, 49], 90));
console.log(solution([40, 40, 60, 60, 40], 120));
