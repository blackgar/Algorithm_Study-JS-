function solution(k, d) {
  var answer = 0;
  let tmp = 0,
    limit = d * d;

  for (let y = 0; y < d + 1; y++) {
    if (y * k * y * k > limit) break;
    // console.log(answer, Math.floor(Math.sqrt(limit-y*k*y*k)/k) + 1)
    // 결국 피타고라스의 법칙으로 거리는 x^2 + y^2 = d^2를 이용해서 d^2에서 (y*k)^2를 빼고 남은 값으로 (x*k)^2의 값이 그 값을 넘기지 못하는 지점까지 점을 찍을 수 있으므로 해당 계산법을 코드로 아래처럼 구현할 수 있다. 참고로 x좌표를 3까지 찍을 수 있다는 뜻은 0~3이므로 +1 해준다.
    answer += Math.floor(Math.sqrt(limit - y * k * y * k) / k) + 1;
    // 이중 반복문을 돌면서 y축을 기준으로 x축의 점부터 찍을 수 있는 곳에 모두 찍는다.
    // 이 때 값 계산은 y좌표가 0일때는 x좌표는 (x*k)^2 <= limit인 범위까지 찍을 수 있으니 모두 찍는다.
    // 그리고 x좌표값을 다 찍었으면 y좌표를 y*k만큼 옮겨서 찍는다.
    // for (let x = 0; x < d+1; x++){
    //     if(y*k*y*k <= limit) tmp = y*k;
    //     if (y*k*y*k + x*k*x*k <= limit) answer++;
    //     else break;
    // }
  }

  return answer;
}

console.log(solution(2, 4)); // 6
console.log(solution(1, 5)); // 26
