function solution(book_time) {
    // 시작 시간과 종료 시간을 모두 분으로 바꾸고 시작 시간 기준 오름차순으로 정렬
    const bookTime = book_time.map(v => {
        const start = v[0].split(':')
        const end = v[1].split(':')
        return [Number(start[0])*60 + Number(start[1]), Number(end[0])*60 + Number(end[1])]
    }).sort((a, b) => {
        return a[0] - b[0]
    })
    
    const visited = new Array(book_time.length).fill(0) // 사용 여부
    let cnt = 1 // 몇 번째 방
    // 반복하면서 몇 번째 방에 넣을지 판단 (방에 넣으면 visited에 cnt 입력)
    while (true) {
        let temp = -11  // 00:00 부터 이므로 첫번째는 음수로 시작해야 방 배정 가능
        bookTime.forEach((v, i) => {
            if (temp + 10 <= v[0] && visited[i] === 0) {
                visited[i] = cnt
                temp = v[1]
            }
        })
        
        if (temp < 0) break // temp에 들어간게 없다면 반복 멈춤
        cnt++ // 방 번호 +1
    }
    
    return Math.max(...visited) // visited에 몇 번째 방까지 배정되었는지 확인하면 그것이 방 개수
}