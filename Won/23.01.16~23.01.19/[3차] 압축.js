function solution(msg) {
  const idxNum = {
    // 색인 번호
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  let idx = 27; // 사전에 추가된다면 넣을 번호
  const result = [];
  const rem = msg.split("").reduce((w, c) => {
    // w: 현재 입력, c: 다음 글자
    if (idxNum[w]) {
      // 사전에 w 있다면
      if (idxNum[w + c]) {
        // 사전에 다음 글자까지 있다면
        return w + c; // w에 w+c 할당
      } else {
        // 사전에 다음 글자까지 없다면
        result.push(idxNum[w]); // w 색인 번호 출력
        idxNum[w + c] = idx++; // 없는 것 사전에 추가
      }
    }
    return c; // 입력은 계속 다음 글자로 바뀌어야 함
  });
  result.push(idxNum[rem]); // 마지막에 현재 입력을 리턴하기 때문에 남은 글자를 출력

  return result;
}
