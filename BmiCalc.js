function bmiCalculator() {
  /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
  let height = 180;

  /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
  let weight = 65;

  // Checking the user providing a proper
  // value or not
  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
  // If both input is valid, calculate the bmi
  else {
    // Fixing upto 2 decimal places
    let bmi = Math.round(weight / ((height * height) / 10000));

    return bmi;
  }
}

console.log(bmiCalculator());
