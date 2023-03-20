function solution(maps) {
    const newMaps = maps.map(v => {
        return v.split('')
    })
    
    const xLength = maps.length
    const yLength = maps[0].length
    
    // 시작, 도착, 레버 지점 초기화
    let start
    let end
    let lever
    for (let i=0; i<xLength; i++) {
        for (let j=0; j<yLength; j++) {
            if (maps[i][j] === 'S') start = [i, j]
            else if (maps[i][j] === 'E') end = [i, j]
            else if (maps[i][j] === 'L') lever = [i, j]
        }
    }
    
    const dx = [-1, 0, 1, 0]
    const dy = [0, 1, 0, -1]
    
    // bfs 함수
    const bfs = (s, e) => {
        const visited = Array.from(Array(xLength), () => Array(yLength).fill(-1))
        const que = [s]
        visited[s[0]][s[1]] = 0
        while (que.length) {
            const temp = que.shift()

            if (temp[0] === e[0] && temp[1] === e[1]) {
                return visited[temp[0]][temp[1]]
            }

            for (let d=0; d<4; d++) {
                const nx = temp[0] + dx[d]
                const ny = temp[1] + dy[d]
                if (0 <= nx && nx < xLength && 0 <= ny && ny < yLength && newMaps[nx][ny] !== 'X' && visited[nx][ny] === -1) {
                    que.push([nx, ny])
                    visited[nx][ny] = visited[temp[0]][temp[1]] + 1
                }
            }
        }
        return 0
    }
    
    let resultToLever = bfs(start, lever)   // 시작점부터 레버까지 최단 거리
    if (resultToLever === 0) return -1  // 갈 수 없는 경우
    
    let resultToEnd = bfs(lever, end)   // 레버부터 도착점까지 최단 거리
    if (resultToEnd === 0) return -1    // 갈 수 없는 경우
    else return resultToLever+resultToEnd
}