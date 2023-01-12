function solution(s) {
    if (s.length % 2 !== 0) return 0    // 홀수 거름
    
    const stack = []
    for (i of s) {        
        if (stack.at(-1) === i) {
            stack.pop()
        } else stack.push(i)
    }
    
    if (!stack.length) return 1
    else return 0
}

// 효율성 테스트 시간 초과
// function solution(s) {
//     const stack = []
//     for (i of s) {
//         stack.push(i)
        
//         if (stack.at(-2) === stack.at(-1)) {
//             stack.pop()
//             stack.pop()
//         }
//     }
    
//     if (!stack.length) return 1
//     else return 0
// }