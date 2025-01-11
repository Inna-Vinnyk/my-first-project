function calculateEvenTotal(number) {
  debugger;
  let sum = 0;

  for (let i = 2; i <= number; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(27));

for (let i = 0; i < 10; i += 1) {
  console.log(i);

  if (i === 5) {
    console.log("Met the number 5, interrupt the execution of the cycle");
    break;
  }
}

console.log("Log after cycle");

const start = 6;
const end = 17;
let number;

for (number = start; number < end; number++) {
  if (number % 5 === 0) {
    console.log(number);
    break;
  }
}
