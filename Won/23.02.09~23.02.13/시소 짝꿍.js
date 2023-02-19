function solution(weights) {
    // 사람들의 몸무게 목록은 최대 100000이고, 각 무게는 최대 1000이기 때문에 각 무게가 몇 개 있는지 저장 
    const w = new Array(1001).fill(0)
    for (weight of weights) {
        w[weight]++
    }
    
    let result = 0
    for (let i=100; i<1001; i++) {  // 몸무게 최소/최대 범위 내에서
        if (w[i]) { // 해당 몸무게의 개수가 존재한다면
            result += w[i] * (w[i]-1)/2 // 개수가 여러개일 때 점화식 (1:1일 때)
            /*
            100 -> 0
            100 100 -> 1
            100 100 100 -> 3
            100 100 100 100 -> 6
            ...
            */
            const temp = [i*2, i*3/2, i*4/3]    // i와 균형을 이루는 무게들
            for (t of temp) {
                if (w[t]) result += w[t]*w[i]   // 해당 몸무게의 개수가 존재한다면, 균형을 이루는 무게의 개수 * i의 개수
            }
        }
    }
    return result
}

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