// 각 인덱스를 돌아
// tmp = []
// for j=1 => j=index
// tmp.push(arr[i]+j의 단어)
// for tmp
// skip.include(tmp[i])
// 해당 단어 제거 filter
// lastVal = tmp.at(-1)
// for index-tmp.length
// tmp.push(lastVal+1)
// lastVal++
// for tmp
// 각 범위가 알파벳 범위보다 벗어나면 (해당 범위 - 95 + 65)
// "aukks"	"wbqd"	5	"happy"
function solution(s, skip, index) {
  var answer = "";
  for (let j = 0; j < s.length; j++) {
    const data = s[j];
    let arr = [];
    const dataAscNum = data.charCodeAt(0);
    // console.log("data", data);
    for (let i = 1; i <= index; i++) {
      arr.push(String.fromCharCode(dataAscNum + i));
    }
    // console.log(arr);
    arr = arr.filter((item) => !skip.includes(item));
    const range = arr.length;
    for (let i = 0; i < index - range; i++) {
      arr.push(String.fromCharCode(arr.at(-1).charCodeAt(0) + 1));
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].charCodeAt(0) > 122) {
        const newAscNum = arr[i].charCodeAt(0) - 26;
        arr[i] = String.fromCharCode(newAscNum);
      }
    }

    // console.log(arr);
    answer += arr[index - 1];
  }
  return answer;
}

console.log(solution("aukks", "wbqd", 5));
