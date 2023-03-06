function solution(board) {
    let oCnt = 0    // O 개수
    let xCnt = 0    // X 개수
    let oBingoCnt = 0   // O 빙고 개수
    let xBingoCnt = 0   // X 빙고 개수
    for (let i=0; i<3; i++) {
        // 가로 빙고
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '.') {
            if (board[i][0] === 'O') oBingoCnt++
            else xBingoCnt++
        }

        // 세로 빙고
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '.') {
            if (board[0][i] === 'O') oBingoCnt++
            else xBingoCnt++
        }

        // O, X 개수
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'O') oCnt++
            else if (board[i][j] === 'X') xCnt++
        }
    }
    
    // 대각 빙고
    if (board[1][1] === 'O') {
        if (board[0][0] === board[1][1] && board[2][2] === board[1][1]) oBingoCnt++
        if (board[0][2] === board[1][1] && board[2][0] === board[1][1]) oBingoCnt++
    } else if (board[1][1] === 'X') {
        if (board[0][0] === board[1][1] && board[2][2] === board[1][1]) xBingoCnt++
        if (board[0][2] === board[1][1] && board[2][0] === board[1][1]) xBingoCnt++
    }
    
    if (oCnt < xCnt || oCnt >= xCnt + 2) return 0

    // O, X 둘 다 빙고에 성공한 경우
    if (oBingoCnt !== 0 && xBingoCnt !== 0) return 0

    // 빙고에 성공한 줄이 2개보다 많은 경우
    if (oBingoCnt + xBingoCnt > 2) return 0

    // O의 승리 상황에서 O의 개수와 X의 개수가 같은 경우
    if (oBingoCnt !== 0 && oCnt === xCnt) return 0

    // X의 승리 상황에서 O의 개수가 X의 개수보다 많은 경우
    if (xBingoCnt !== 0 && oCnt > xCnt) return 0

    // 그 외의 모든 경우
    return 1
}