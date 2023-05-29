function solution(N, stages) {
    var answer = [];
    // 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
    
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return하라.
    // 실패율이 같다면 작은 번호의 스테이지가 먼저 오도록 한다.
    // 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0으로 정의한다.
    // 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
    
    // 1. 일단 stages를 돌면서 해당 스테이지에 도달한 전체 플레이어 수와 멈춰있는 플레이어 수를 Count한다.
    // 1-1. obj에 각 stages를 키값으로 숫자를 카운트 해준다.
    // 2. 1부터 N까지 반복문을 돌면서 해당 키값에 얼마나 있는지 체크하고 잇으면 전체 플레이어 - 해당 값 해주면서 사람을 줄여나가고 obj2에 실패율을 key값으로 스테이지들을 넣어놓는다(작은 번호의 스테이지부터)
    // 3. 다 넣고 난 다음 key를 내림차순 정렬한 후 안에 든 값들을 정답 배열에 추가한다.
    let totalUser = stages.length
    const stageObj = {}
    const failureObj = {}
    stages.forEach(v => stageObj[v] ? stageObj[v]++ : stageObj[v] = 1)
    
    for (let i = 1; i <= N; i++) {
        if (stageObj[i]) {
            const failureRate = stageObj[i] / totalUser
            failureObj[failureRate] ? failureObj[failureRate].push(i) : failureObj[failureRate] = [i]
            totalUser -= stageObj[i];
        } else {
            failureObj[0] ? failureObj[0].push(i) : failureObj[0] = [i]
        }
    }

    const failureRateList = Object.keys(failureObj).sort((a, b) => b - a)
    failureRateList.forEach(v => failureObj[v].forEach(v => answer.push(v)))
    
    return answer;
}