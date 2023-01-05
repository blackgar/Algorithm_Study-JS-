function solution(s) {
  var answer = "";
  let string = s;
  let index = 0;
  let arr = string.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    if (index === 0) {
      arr[i].toUpperCase();
    }
    index++;
  }
  console.log(arr);
  return answer;
}
console.log(solution("3people Unfollowed Me"));
