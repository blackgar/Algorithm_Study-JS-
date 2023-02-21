function solution(users, emoticons) {
    const result = []   // 모든 할인 경우의 수를 계산하여 저장
    const disc = [40, 30, 20, 10]   // 할인율
    const curDisc = new Array(emoticons.length).fill(0) // 각 이모티콘의 할인율 모든 경우의 수
    
    // 현재 curDisc의 이모티콘 별 할인율을 각 유저마다 계산하여 이모티콘을 사거나 이모티콘 플러스 서비스에 가입하는 지 판단하여 result에 저장
    const cal = () => {
        let tot = 0
        let emoticonPlus = 0
        users.forEach((user, index) => {
            let temp = 0
            for (let i=0; i<emoticons.length; i++) {
                if (user[0] <= curDisc[i]) {
                    temp += emoticons[i] * (100-curDisc[i])/100
                }
            }
            if (temp >= user[1]) emoticonPlus++
            else tot += temp
        })
        result.push([emoticonPlus, tot])
    }
    
    // curDisc에 할인율 하나씩 채워가면서 다 채운 경우 cal 실행
     const recur = (i) => {
        if (i === emoticons.length) {
           cal()
        } else {
            for (d of disc) {
                curDisc[i] = d
                recur(i+1)
            }
        }
    }
     
    recur(0)
    // 정렬 : 1.이모티콘 플러스, 2.구매 비용의 합
    result.sort((a, b) => {
        if (a[0] > b[0]) return -1
        else if (a[0] < b[0]) return 1
        return b[1] - a[1]
    })
    return result[0]
}