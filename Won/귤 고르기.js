function solution(k, tangerine) {
  hashMap = {}    // 해시로 각 원소 개수 파악
  for (t of tangerine) {
      hashMap[t] = hashMap[t] ? hashMap[t]+1 : 1
  }
  
  // 해시 객체를 내림차순인 이차원 배열로 변경
  const temp = Object.entries(hashMap).sort(([, a], [, b]) => b - a);
  
  let ans = 0
  for (t of temp) {   // 이차원 배열을 돌며 k개를 판매하려면 몇 가지 크기가 필요한지 계선
      if (k <= 0) {
          break
      }
      k -= t[1]
      ans += 1
  }
  return ans
}