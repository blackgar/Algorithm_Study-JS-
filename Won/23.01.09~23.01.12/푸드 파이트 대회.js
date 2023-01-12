function solution(food) {
  let result = "";

  for (i = 1; i < food.length; i++) {
    // food 첫번째는 물이라 제외
    const cnt = parseInt(food[i] / 2); // 준비한 번호의 음식은 2명이서 먹음
    result += String(i).repeat(cnt); // 인당 개수 만큼 저장
  }
  const resultReverse = result.split("").reverse().join(""); // 서로 대칭이기 때문에 뒤집어 줌

  return result + "0" + resultReverse;
}
