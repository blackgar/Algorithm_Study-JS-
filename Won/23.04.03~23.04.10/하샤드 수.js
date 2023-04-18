function solution(x) {
  let sum = 0;
  for (i of String(x)) {
    sum += Number(i);
  }

  if (x % sum) return false;
  else return true;
}
