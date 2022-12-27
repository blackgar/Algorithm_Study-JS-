function solution(cacheSize, cities) {
  const cache = [];

  let ans = 0; // 실행시간
  for (city of cities) {
    city = city.toLowerCase(); // 대소문자 구분 없이 같아야 하므로 소문자로 변환
    if (cache.includes(city)) {
      // 캐시에 이미 있다면
      cache.splice(cache.indexOf(city), 1); // 기존에 있는 것을 일단 제거 (원래 있던 것을 최근으로 땡기기 위함)
      ans += 1; // cache hit
    } else {
      // 캐시에 없다면
      ans += 5; // cache miss
    }
    cache.push(city); // 캐시에 저장
    if (cache.length > cacheSize) cache.shift(); // 캐시 크기 보다 크다면 가장 오래된 것 제거
  }
  return ans;
}
