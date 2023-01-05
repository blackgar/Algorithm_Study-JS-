function solution(survey, choices) {
  var answer = "";
  let surveyObj = {};
  const indicator = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  indicator.forEach((v) => {
    surveyObj[v[0]] = 0;
    surveyObj[v[1]] = 0;
  });
  for (let i = 0; i < survey.length; i++) {
    let tmp = survey[i].split("");
    choices[i] > 4
      ? (surveyObj[tmp[1]] += choices[i] - 4)
      : choices[i] === 4
      ? null
      : (surveyObj[tmp[0]] += 4 - choices[i]);
  }
  for (const key of indicator) {
    if (surveyObj[key[0]] === surveyObj[key[1]]) {
      answer += key[0];
    } else if (surveyObj[key[0]] > surveyObj[key[1]]) {
      answer += key[0];
    } else if (surveyObj[key[0]] < surveyObj[key[1]]) {
      answer += key[1];
    }
  }

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
