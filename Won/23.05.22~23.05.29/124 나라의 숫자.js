function solution(n) {
  let result = "";

  while (n) {
    if (n % 3) {
      result += String(n % 3);
      n = parseInt(n / 3);
    } else {
      result += "4";
      n = parseInt(n / 3) - 1;
    }
  }

  return result.split("").reverse().join("");
}
