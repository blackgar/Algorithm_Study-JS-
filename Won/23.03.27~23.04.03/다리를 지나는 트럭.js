function solution(bridge_length, weight, truck_weights) {
  const bridge = []; // 다리
  let time = 0; // 경과 시간
  let sum = 0; // 다리 위 트럭들의 무게
  while (true) {
    if (!truck_weights.length && !bridge.length) break; // 모든 트럭이 다리를 지나가면
    time++;

    // 다리에 트럭이 존재할 때, 가장 앞의 트럭이 다리 길이 만큼 이동했다면
    if (bridge.length && bridge[0][1] + bridge_length === time) {
      // 다리에서 제거
      sum -= bridge[0][0];
      bridge.shift();
    }

    // 대기 트럭이 존재할 때, 가장 앞에 있는 대기 트럭이 다리 위에 올라올 무게가 되는지
    if (truck_weights.length && sum + truck_weights[0] <= weight) {
      const truckWeight = truck_weights.shift();
      // 다리에 추가
      bridge.push([truckWeight, time]);
      sum += truckWeight;
    }
  }
  return time;
}
