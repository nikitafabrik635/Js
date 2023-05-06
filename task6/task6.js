let sum = 0;
while (true) {
  let input = prompt("Введите число", "");
  if (input === null) {
    break;
  }
  let num = Number(input);
  if (isNaN(num)) {
    continue;
  }
  sum += num;
}
alert("Сумма введенних чисел: " + sum);