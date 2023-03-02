function solution(priorities, location) {
    // [중요도, 인덱스] 로 이차원 배열로 만듬
    const newPriorities = priorities.map((v, i) => {
        return [v, i]
    })
    
    let result = 0  // 요청한 문서가 몇 번째로 인쇄 되는지
   let maxValue = Math.max(...priorities)   // 대기목록 중 최대값 
   while (newPriorities.length) {
       if (newPriorities[0][0] < maxValue) {    // 첫 번째 요소 중요도가 최대값 보다 작으면
           newPriorities.push(newPriorities.shift())    // 첫번째에서 마지막으로 보냄
       } else { // 첫 번째 요소 중요도가 최대값이면
           result++ // 최대값이 가장 앞일 때 계속 제거해나갈 것이므로 +1 해줘야 몇 번째로 제거됬는지 알 수 있음
           if (newPriorities.shift()[1] === location) return result // 제거 후 찾고 있는 location이라면 종료
           maxValue = Math.max(...newPriorities.map((v) => v[0])) // 아니라면 남은 것 중 최대값을 초기화
       }
   }
}