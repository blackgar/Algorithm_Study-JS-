function solution(board) {
  let maxLength = 0;
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        const temp =
          Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
        board[i][j] = temp;
        maxLength = Math.max(maxLength, temp);
      }
      // console.log(board[i][j], board[i-1][j])
    }
  }
  return maxLength ** 2;
}
