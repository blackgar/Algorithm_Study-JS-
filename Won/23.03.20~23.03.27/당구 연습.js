function solution(m, n, startX, startY, balls) {
  const result = [];
  balls.forEach((ball) => {
    const top = (startX - ball[0]) ** 2 + (2 * n - startY - ball[1]) ** 2;
    const bottom = (startX - ball[0]) ** 2 + (startY + ball[1]) ** 2;
    const left = (startY - ball[1]) ** 2 + (startX + ball[0]) ** 2;
    const right = (startY - ball[1]) ** 2 + (2 * m - startX - ball[0]) ** 2;

    if (ball[0] === startX) {
      if (ball[1] < startY) {
        result.push(Math.min(top, left, right));
      } else {
        result.push(Math.min(bottom, left, right));
      }
    } else if (ball[1] === startY) {
      if (ball[0] < startX) {
        result.push(Math.min(top, bottom, right));
      } else {
        result.push(Math.min(top, bottom, left));
      }
    } else {
      result.push(Math.min(top, bottom, left, right));
    }
  });
  return result;
}
