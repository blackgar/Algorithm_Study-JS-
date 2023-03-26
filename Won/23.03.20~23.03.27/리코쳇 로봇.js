function solution(board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const X = board.length;
  const Y = board[0].length;

  const bfs = (arr, sx, sy) => {
    const visited = Array.from(Array(X), () => Array(Y).fill(0));
    const que = [[sx, sy, 0]];
    console.log(que);
    while (que.length) {
      const loca = que.shift();
      let nx, ny;
      for (let d = 0; d < 4; d++) {
        nx = loca[0] + dx[d];
        ny = loca[1] + dy[d];
        if (nx >= 0 && nx < X && ny >= 0 && ny < Y && board[nx][ny] !== "D") {
          if (visited[nx][ny]) continue;
          else {
            visited[nx][ny] = 1;
            while (true) {
              nx = nx + dx[d];
              ny = ny + dy[d];

              if (
                nx < 0 ||
                nx >= X ||
                ny < 0 ||
                ny >= Y ||
                board[nx][ny] === "D"
              ) {
                nx -= dx[d];
                ny -= dy[d];
                break;
              }
            }
            if (board[nx][ny] === "G") return loca[2];
            console.log(nx, ny, loca[2]);
            // console.log(visited)
            que.push([nx, ny, loca[2] + 1]);
          }
        }
      }
    }
  };

  let R;
  board = board.map((v, i) => {
    const temp = v.split("");
    if (temp.includes("R")) R = [i, temp.indexOf("R")];
    return temp;
  });

  bfs(board, R[0], R[1]);
}
