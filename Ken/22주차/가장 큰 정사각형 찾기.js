function solution(board) {
  var answer = 0;

  const row = board.length;
  const column = board[0].length;

  if (row === 1 || column === 1) return 1
    
  for (let y = 1; y < row; y++) {
    for (let x = 1; x < column; x++) {
      if (board[y][x] > 0) {
        board[y][x] = Math.min(board[y - 1][x], board[y][x - 1], board[y - 1][x - 1]) + 1;
        answer = Math.max(answer, board[y][x])
      }
    }
  }

  return answer * answer;
}

console.log(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]));
console.log(solution([[0,0,1,1],[1,1,1,1]]));