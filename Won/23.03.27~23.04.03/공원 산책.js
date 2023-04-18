function solution(park, routes) {
  // 방향
  const OP = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };
  const X = park.length; // 행 길이
  const Y = park[0].length; // 열 길이

  let start; // 시작 지점
  const newPark = park.map((v, i) => {
    const temp = v.split("");
    const findX = temp.indexOf("S");
    if (findX !== -1) start = [i, findX];
    return temp;
  });

  const newRoutes = routes.map((v, i) => {
    const temp = v.split(" ");
    return [...OP[temp[0]], Number(temp[1])]; // 방향에 맞는 x, y와 이동할 칸 수
  });

  let x = start[0],
    y = start[1]; // 시작 지점에서 이동 시작
  for (let i = 0; i < newRoutes.length; i++) {
    const prevX = x;
    const prevY = y;
    let flag = false; // 공원 내 또는 장애물 유무 확인
    let cnt = 0; // 이동할 칸의 수 만큼
    while (cnt < newRoutes[i][2]) {
      x += newRoutes[i][0];
      y += newRoutes[i][1];
      if (x < 0 || x >= X || y < 0 || y >= Y || newPark[x][y] === "X") {
        // 못가는 경우
        flag = true;
        break;
      }
      cnt++;
    }

    if (flag) {
      // 못가는 경우 이동하기 전 최초의 위치로 초기화
      x = prevX;
      y = prevY;
    }
  }
  return [x, y];
}
