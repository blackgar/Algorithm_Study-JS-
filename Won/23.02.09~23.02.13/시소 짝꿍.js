

// 테스트 8~15 시간 초과
function solution(weights) {
    let result = 0  // 시소 짝꿍 총 개수
    
    for (let i=0; i<weights.length-1; i++) {
        const temp = [weights[i], weights[i]*2, weights[i]/2, weights[i]*3/2, weights[i]*2/3, weights[i]*4/3, weights[i]*3/4]
        for (let j=i+1; j<weights.length; j++) {
            if (temp.includes(weights[j])) result++
        }
    }
    return result
}