function solution(n) {
  var answer = 0;

  // k만큼 이동하면 k만큼 배터리가 닳고 k만큼 간 이후 순간이동하면 배터리는 닳지 않고 2k만큼 이동한다.
  // 이때 최소한의 배터리를 사용하고 목표한 지점까지 가는 최소한의 배터리양을 구해라.
  // 순간이동 무제한 사용 가능

  while (n !== 0) {
    // 순간이동을 해서 도달할 수 있다는 것은 다시 말해 n이 2의 배수일때만 가능한 것이다.
    // 그러므로 n을 움직여서 얼마나 움직이면 되는지를 체크하면 된다.
    // 가령 예시로 5라면 1만큼 이동하고 순간이동(2), 순간이동(4), 1이 남으니 1만큼 이동이다.
    // 그렇다면 2로 나누어지지 않는 5에서 시작해서 1빼고 4에서 2나누고 2에서 2나누고 1에서 1빼면 총 2칸을 배터리를 사용하는게 된다.
    // 6을 예시로 들면 처음에 1칸 움직이고 순간이동(2), 1칸(3), 순간이동(6) 이렇게 2칸을 배터리로 움직이게 된다.
    // 이를 코드로 구현하면 6은 2로 나누어지니까 순간이동, 3은 1칸, 2는 순간이동, 1은 1칸 이렇게 역순으로 백트래킹으로 찾아가는 방법으로 구현하면 굉장히 간단한 코드가 될 수 있다.
    if (n % 2 === 1) {
      n -= 1;
      answer++;
    } else {
      n /= 2;
    }
  }
  return answer;
}
