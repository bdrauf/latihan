const output = [];
let count = 1;

function fizzBuzz() {
  while (count <= 15) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("Fizz Buzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}

console.log(fizzBuzz());
