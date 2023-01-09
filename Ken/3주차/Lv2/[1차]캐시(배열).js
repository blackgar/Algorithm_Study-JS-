function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  let answer = 0;
  const cacheArr = [];
  for (let city of cities) {
    city = city.toLowerCase();
    if (cacheArr.includes(city)) {
      cacheArr.splice(cacheArr.indexOf(city), 1);
      answer += 1;
    } else {
      answer += 5;
    }
    cacheArr.push(city);
    if (cacheArr.length > cacheSize) cacheArr.shift();
    console.log(cacheArr);
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
