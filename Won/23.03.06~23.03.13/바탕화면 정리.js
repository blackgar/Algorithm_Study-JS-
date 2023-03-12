function solution(wallpaper) {
  const files = []; // 파일 위치 모두 담음
  wallpaper.forEach((xv, xi) => {
    const temp = xv.split("");
    temp.forEach((yv, yi) => {
      if (yv === "#") files.push([xi, yi]);
    });
  });

  const result = [0, 0, 0, 0];
  result[0] = files[0][0]; // 시작 행
  result[2] = files.at(-1)[0] + 1; // 종료 행
  const ySort = files.sort((a, b) => {
    return a[1] - b[1];
  });
  result[1] = ySort[0][1]; // 시작 열
  result[3] = ySort.at(-1)[1] + 1; // 종료 열

  return result;
}
