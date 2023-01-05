function solution(topping) {
  var answer = 0;

  // 반복문을 돌면서 Obj에 각 토핑의 개수만큼 카운트 해서 넣어놓는다. 그리고 key 길이를 정한다.
  // 다시 반복문을 돌면서 다른 Obj에 하나씩 넣는다. 그리고 배열에 key를 넣는다.(이 때 객체에 없던 키만 넣어야 한다.)
  // 돌면서 원래 Obj에서는 값을 빼는데 이때 값이 0이 되면 그 key에서 하나 뺀다. 그렇게 다른 Obj 배열의 길이와 key값을 비교해서 같으면 answer++
  let olderObj = {},
    youngerObj = {},
    olderToppings = 0,
    youngerToppings = 0;
  topping.forEach((v) =>
    youngerObj[v] ? youngerObj[v]++ : (youngerToppings++, (youngerObj[v] = 1))
  );
  // console.log(youngerObj, youngerToppings);
  for (let i = 0; i < topping.length - 1; i++) {
    if (!olderObj[topping[i]]) {
      olderObj[topping[i]] = 1;
      olderToppings++;
    }
    youngerObj[topping[i]]--;
    youngerObj[topping[i]] === 0 ? youngerToppings-- : null;
    // console.log(olderObj, youngerObj, olderTopping, youngerToppings);
    if (olderToppings === youngerToppings) answer++;
    if (olderToppings > youngerToppings) break;
    // olderObj[topping[i]] ? olderObj[topping[i]]++ : olderTopping.push(topping[i])
  }
  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0
