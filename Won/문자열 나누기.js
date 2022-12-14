function solution(s) {
  let x = s[0]    // 첫 글자
  
  let ans = 0     // 분해한 문자열 개수
  let x_cnt = 1   // 같은 글자 개수
  let o_cnt = 0   // 다른 글자 개수
  
  for (let i=1; i<s.length; i++) {
      if (x_cnt !== o_cnt) {  // 글자 개수 다를 때
          if (x === s[i]) {       // 같은 글자일 때
              x_cnt += 1
          } else {                // 다른 글자일 때
              o_cnt += 1
          }
      } else {                // 글자 개수 다를 때 초기화
          x = s[i]
          x_cnt = 1
          o_cnt = 0
          ans += 1
      }
  }
  return ans+1
}