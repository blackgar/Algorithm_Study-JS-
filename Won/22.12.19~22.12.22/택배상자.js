function solution(order) {
  const stack = []; // 보조 컨테이너 벨트
  let box = 1; // 컨테이너 벨트 (1~n번 상자)
  let ans = 0; // 트럭에 싣는 상자 개수
  for (o of order) {
    // 택배 기사님이 알려준 순서
    if (stack.length && o === stack.at(-1)) {
      // 해당 순서의 박스가 보조 컨테이너 벨트 끝에 있다면
      stack.pop(); // 보조 컨테이너 벨트에서 꺼냄
      ans++; // 상자를 트럭에 실음
    } else if (o >= box) {
      // 보조 컨테이너 벨트 끝에 없고, 기존 컨테이너의 순서가 아직 안왔다면
      while (true) {
        // 순서가 맞는 상자가 올 때까지 계속
        if (box === o) {
          // 순서가 맞으면
          ans++; // 상자를 트럭에 실음
          box++; // n번 상자를 실었기 때문에 다음 상자가 옴
          break;
        } else {
          // 순서가 아니면
          stack.push(box++); // 보조 컨테이너 벨트에 보관
        }
      }
    } else {
      // 기존 컨테이너의 순서가 지났고, 보조 컨테이너의 벨트 없다면
      break; // 더이상 상자를 실을 수 없음
    }
  }
  return ans;
}

// 시간 초과
function solution(order) {
  const boxes = new Array(order.length).fill().map((v, i) => i + 1);
  const stack = [];

  let ans = 0;
  for (o of order) {
    if (stack.length && o === stack[stack.length - 1]) {
      stack.pop();
      ans += 1;
    } else if (boxes.includes(o)) {
      while (true) {
        box = boxes.shift();
        if (box === o) {
          ans += 1;
          break;
        } else {
          stack.push(box);
        }
      }
    } else {
      break;
    }
  }
  return ans;
}
