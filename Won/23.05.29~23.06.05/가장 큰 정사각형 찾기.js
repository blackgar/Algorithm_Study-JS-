function solution(board) {
  const row = board.length; // 행의 크기
  const col = board[0].length; // 열의 크기

  if (row < 2 || col < 2) return 1; // 행과 열이 1 이하인 경우

  let maxLength = 0;
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] === 1) {
        const temp =
          Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
        board[i][j] = temp;
        maxLength = Math.max(maxLength, temp);
      }
    }
  }
  return maxLength ** 2;
}
