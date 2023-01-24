function solution(today, terms, privacies) {
  const setToday = today.split(".").map((v) => Number(v)); // 오늘 날짜

  const todayDate = new Date(setToday[0], setToday[1], setToday[2]).getTime(); // 오늘 날짜 timestamp 변환

  const types = {}; // 약관 종류
  for (term of terms) {
    const setTerm = term.split(" ");
    types[setTerm[0]] = Number(setTerm[1]);
  }

  let result = [];
  privacies.forEach((privacy, i) => {
    const setPrivacy = privacy.split(" ");
    const collect = setPrivacy[0].split(".").map((v) => Number(v)); // 개인정보 수집 일자

    let collectDate = new Date(collect[0], collect[1], collect[2]);
    collectDate.setMonth(collectDate.getMonth() + types[setPrivacy[1]]); // 개인정보 수집 일자에 유효기간을 더함
    collectDate = collectDate.getTime(); // 개인정보 수집 일자 timestamp 변환

    if (collectDate <= todayDate) {
      // 오늘 날짜와 최종 유효기간을 timestamp로 비교
      result.push(i + 1);
    }
  });
  return result;
}
