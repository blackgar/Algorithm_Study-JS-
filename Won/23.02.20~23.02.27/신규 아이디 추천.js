function solution(new_id) {
  // 1
  const temp1 = new_id.toLowerCase();

  // 2
  const temp2 = temp1
    .split("")
    .map((v) => {
      const regex = /^[a-z0-9-_.]/;
      if (regex.test(v)) return v;
    })
    .join("");

  // 3
  let temp3 = temp2;
  while (temp3.includes("..")) {
    temp3 = temp3.replaceAll("..", ".");
  }

  // 4
  const temp4 = temp3.split("");
  if (temp4[0] === ".") temp4.shift();
  if (temp4.at(-1) === ".") temp4.pop();

  // 5
  const temp5 = temp4;
  if (!temp5.length) temp5.push("a");

  // 6
  const temp6 = temp5.slice(0, 15);
  if (temp6.at(-1) === ".") temp6.pop();

  // 7
  const temp7 = temp6;
  if (temp7.length <= 2) {
    const lastChar = temp7.at(-1);
    while (temp7.length < 3) {
      temp7.push(lastChar);
    }
  }
  return temp7.join("");
}
