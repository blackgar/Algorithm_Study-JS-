function solution(today, terms, privacies) {
  var answer = [];
  let todayDate = today.split(".").map((v) => Number(v));
  // console.log(todayDate)
  let termObj = {};
  terms.forEach((v) => (termObj[v.split(" ")[0]] = Number(v.split(" ")[1])));
  // console.log(termObj)
  // 수집한 날짜와 등급을 추출해낸다.
  // 추출한 등급에 맞게 개월을 추가한다.
  // 추가한 개월에 맞게 년도를 수정한다.
  // 수정한 파기날짜와 현재 날짜를 비교한다.
  // 비교에 맞게 파기해야 할지 말지 추가한다.
  for (let i = 0; i < privacies.length; i++) {
    // console.log(privacies[i])
    const date = privacies[i]
      .split(" ")[0]
      .split(".")
      .map((v) => Number(v));
    const grade = privacies[i].split(" ")[1];
    // console.log(date, grade)
    date[1] += termObj[grade];
    if (date[1] > 12) {
      date[1] % 12 === 0
        ? (date[0] += Math.floor(date[1] / 12) - 1)
        : (date[0] += Math.floor(date[1] / 12));
      date[1] % 12 === 0 ? (date[1] = 12) : (date[1] %= 12);
    }
    // console.log("파기해야되는 날짜", date)
    // console.log("현재 날짜", todayDate)
    if (
      date[0] > todayDate[0] ||
      (date[0] === todayDate[0] && date[1] > todayDate[1]) ||
      (date[0] === todayDate[0] &&
        date[1] === todayDate[1] &&
        date[2] > todayDate[2])
    )
      continue;
    else answer.push(i + 1);
    // if (date[0] < todayDate[0] || (date[0] === todayDate[0] && date[1] < todayDate[1]) || (date[0] === todayDate[0] && date[1] <= todayDate[1] && date[2] <= todayDate[2])) answer.push(i+1);
  }

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);
console.log(solution("2020.01.01", ["A 12"], ["2019.12.01 A"]));
