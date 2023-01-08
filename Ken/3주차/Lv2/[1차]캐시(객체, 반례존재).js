function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  var answer = 0;
  // 도시 이름들이 쭉 나열된다. chacheSize까지는 그냥 queue에 담는다.
  // 그리고 객체 하나를 활용한다.
  // 현재 cacheSize에 들어오면서 얼마의 시간이 지났는지를 체크해주는 객체로 cacheSize가 넘어가는 값이 들어있다면 캐시하지 않는 식으로 진행
  // 값이 있으면 캐시되고 있다는 뜻이고 Hit 처리, 값이 없으면 캐시되고 있지 않으므로 값을 넣어주고 Miss 처리
  let cacheObj = {};
  // cacheSize안에 들어있는 도시는 hit, 아니면 miss
  // jeju pangyo seoul jeju pangyo seoul 이 input을 예시로 하면
  // jeju : 1 => jeju : 2, pangyo : 1 => jeju : 3, pangyo : 2, seoul : 1 => jeju : 1, pangyo : 3, seoul : 2 이런식으로 진행
  // jeju pangyo seoul newyork la jeju pangyo seoul newyork input을 예시로 하면
  // jeju : 1 => jeju : 2, pangyo : 1 => jeju : 3, pangyo : 2, seoul : 1 => jeju : 4이므로 delete, pangyo : 3, seoul : 2, newyork : 1 => 다음은 pangyo : 4이므로 delete seoul : 3, newyork : 2, la : 1 이런식으로 진행
  // console.log(cacheSize, cities);
  for (let city of cities) {
    city = city.toLowerCase();
    // console.log(cacheObj[city]);
    // if (cacheObj[city] > cacheSize) delete cacheObj[city];
    cacheObj[city] ? (answer += 1) : (answer += 5);
    cacheObj[city] = 0;
    Object.keys(cacheObj).forEach((v) =>
      cacheObj[v] + 1 > cacheSize ? delete cacheObj[v] : cacheObj[v]++
    );
    // console.log(cacheObj);
  }

  return answer;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
);
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
);
console.log(
  solution(2, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
console.log(solution(3, ["A", "B", "A"])); // 11
console.log(solution(10, ["1", "2", "3", "2"])); // 16
console.log(solution(0, ["A", "B", "A", "A", "A"])); // 25
console.log(solution(1, ["A", "B", "A", "A", "A"])); // 17
console.log(solution(2, ["A", "B", "A", "A", "A"])); // 13
