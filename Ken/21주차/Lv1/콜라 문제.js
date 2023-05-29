function solution(a, b, n) {
    var answer = 0;
    // 빈병 a병 => 콜라 b병
    // 보유중인 빈병 a병 미만 콜라x
    
    // 1. 처음에 가지고 있는 빈병을 모두 가게에 준다. (나눈 나머지는 들고 있기)
    // 2. 나머지 + 받은 병으로 또 가게에 가져간다. (받은 병은 answer에 더한다.)
    // 3. 이렇게 반복해서 a병 밑으로 남을때까지 반복한다.
    
    while (n >= a) {
        const leftEmptyBottle = n % a
        const cokeFromMarket = Math.floor(n / a) * b
        n = leftEmptyBottle + cokeFromMarket
        answer += cokeFromMarket
    }

    return answer;
}