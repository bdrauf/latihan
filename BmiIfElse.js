function bmiCalculator(weight, height) {
  const bmi = weight / Math.pow(height, 2);
  const bmx = Math.round(bmi);
  let result;
  if (bmx < 18.5) {
    result = "Your BMI is " + bmx + ", so you are underweight.";
  } else if (bmx >= 18.5 && bmx <= 24.9) {
    result = "Your BMI is " + bmx + ", so you have a normal weight.";
  } else {
    result = "Your BMI is " + bmx + ", so you are overweight.";
  }
  return result;
}
console.log(
  bmiCalculator(49, 1.8),
  bmiCalculator(65, 1.8),
  bmiCalculator(80, 1.8)
);
