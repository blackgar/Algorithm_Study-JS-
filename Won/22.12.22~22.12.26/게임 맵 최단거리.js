function solution(maps) {
  const n = maps.length       // 행
  const m = maps[0].length    // 열

  const dx = [-1, 0, 1, 0]    // 상우하좌
  const dy = [0, 1, 0, -1]
  
  const que = []  // 큐 초기화
  que.push([0, 0, 1]) // 캐릭터 처음 위치(x, y)와 이동 칸 수
  maps[0][0] = 0  // 지나간 칸은 벽으로 바꿈
  while (que.length) {
     const xy = que.shift()
     
     if (xy[0] === n-1 && xy[1] === m-1) {    // 상대 팀 진영에 도착하면
         return xy[2]
     }
     
     for (let d=0; d<4; d++) {
         const nx = xy[0] + dx[d]
         const ny = xy[1] + dy[d]
         if (0<=nx && nx<n && 0<=ny && ny<m && maps[nx][ny] === 1) {
             que.push([nx, ny, xy[2]+1])
             maps[nx][ny] = 0
         }
     }
  }
  // 더이상 갈 곳이 없을 때 while문에서 나오게 됨
  return -1
}