function solution(s) {
  // 2글자 이하는 최대로 분리해도 1단어가 최대이므로 1 리턴
  if (s.length < 3) return 1;
  var answer = 0;
  let yes = 1,
    no = 0;
  // 기준점
  let tmp = s[0];
  // 반복문 돌면서 기준점과 지금 문자가 같은지 비교해서 같으면 같은 글자 카운트인 yes에 +1, 다르면 no에 +1 그렇게 yes와 no가 같으면 분리해서 answer +1하고 yes는 1로 초기화 no는 0으로 초기화 하고 현재 글자를 기준점으로 변경. 마지막 인덱스에서 아직 분리할 수 없다면 그냥 분리하고 answer +1
  for (let i = 1; i < s.length; i++) {
    if (yes === no) {
      answer++, (yes = 1), (no = 0), (tmp = s[i]);
    } else if (s[i] === tmp) yes++;
    else if (s[i] !== tmp) no++;
    if (i === s.length - 1) answer++;
  }

  return answer;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
