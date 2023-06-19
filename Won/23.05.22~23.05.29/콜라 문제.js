function solution(a, b, n) {
  let result = 0;
  while (n >= a) {
    const get = parseInt(n / a) * b; // 빈 병 반납 시 받는 콜라 개수
    const rem = n % a; // 반납하지 않고 남아있는 빈 병 개수

    result += get;
    n = get + rem;
  }
  return result;
}
