function solution(s) {
    const sArr = s.split('')    // 문자열 s를 배열로 변경
    
    let result = 0  // 올바른 괄호 문자열 개수
    const x = sArr.length // 총 회전 칸 수
    let cnt = 0 // 현재 회전 칸 수
    while (cnt < x) {
        if (cnt > 0) sArr.push(sArr.shift()) // cnt가 0 보다 클때만 회전 (0칸 회전이면 옮기지 않은 것)
        cnt++
        
        const stack = []
        let flag = true // 올바른 괄호 판별
        for (let i=0; i<x; i++) {
            if (['[', '{', '('].includes(sArr[i])) stack.push(sArr[i])  // 여는 괄호일 때, 무조건 stack에 넣음
            else {  // 닫는 괄호일 때
                if (i === 0) {  // 첫번째 문자가 닫는 괄호이면
                    flag = false
                    break
                } else {    // 첫번째 문자가 닫는 괄호 아니면, 각 케이스별 처리
                    if (sArr[i] === ']') {
                        if (stack.at(-1) === '[') stack.pop()
                        else {
                            flag = false
                            break
                        }
                    }
                    else if (sArr[i] === '}') {
                        if (stack.at(-1) === '{') stack.pop()
                        else {
                            flag = false
                            break
                        }
                    }
                    else {
                        if (stack.at(-1) === '(') stack.pop()
                        else {
                            flag = false
                            break
                        }
                    }
                }
            }
        }
        if (flag && !stack.length) result++ // 판별에 문제없고, stack에 남은 게 없다면
    }
    return result
}