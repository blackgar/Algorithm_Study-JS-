function solution(maps) {
  // 2차원 배열로 변환
  const newMaps = maps.map((v) => {
    return v.split("");
  });

  // 방향
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 길이 초기화
  const xLen = newMaps.length;
  const yLen = newMaps[0].length;

  // bfs
  const bfs = (x, y) => {
    const que = [];
    let sum = Number(newMaps[x][y]); // 연결된 식량 수
    que.push([x, y]);
    newMaps[x][y] = "X"; // 방문 표시

    while (que.length) {
      const temp = que.shift();

      for (let d = 0; d < 4; d++) {
        const nx = temp[0] + dx[d];
        const ny = temp[1] + dy[d];

        if (
          0 <= nx &&
          nx < xLen &&
          0 <= ny &&
          ny < yLen &&
          newMaps[nx][ny] !== "X"
        ) {
          sum += Number(newMaps[nx][ny]);
          que.push([nx, ny]);
          newMaps[nx][ny] = "X";
        }
      }
    }
    return sum; // 식량수 반환
  };

  const result = [];
  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      if (newMaps[i][j] !== "X") {
        // 바다가 아니면 bfs로 들어감
        result.push(bfs(i, j)); // 각 무인도의 반환된 식량 수들을 배열에 담음
      }
    }
  }

  if (result.length)
    result.sort((a, b) => {
      return a - b;
    }); // 무인도 있었다면 오름차순 정렬
  else result.push(-1); // 무인도 없었다면 -1 배열에 담음

  return result;
}
