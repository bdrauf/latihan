function bmiCalculator(weight, height) {
  const bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}

const input = bmiCalculator(65, 1.8);
console.log(input);
