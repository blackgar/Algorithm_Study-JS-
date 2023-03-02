function solution(numbers, target) {
    let result = 0  // 타겟 넘버를 만드는 방법의 수
    const recur = (sum, idx) => {
        if (idx === numbers.length-1) { // 모든 요소를 계산한 후
            if (sum === target) result++    // 계산한 값이 target과 같으면 개수 증가
            return
        }
        
        // numbers의 각 인덱스의 요소를 sum에 + 또는 - 하며 들어감
        idx++
        const p = sum + numbers[idx]
        const m = sum - numbers[idx]
        
        recur(p, idx)
        recur(m, idx)
    }
    
    recur(0, -1)    // dfs (sum, start index)
    return result
}
