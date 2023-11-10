function buyMilk(money, costPerBottle) {
  console.log(
    "we only can buy " +
      calcBottles(money, costPerBottle) +
      " bottles with $" +
      money
  );

  return calcChange(money, costPerBottle);
}
function calcBottles(staringMoney, costPerBottle) {
  const numberOfBottles = Math.floor(staringMoney / costPerBottle);

  return numberOfBottles;
}
function calcChange(startingAmount, costPerBottle) {
  const change = startingAmount % costPerBottle;

  return change;
}

console.log("and we got " + buyMilk(5, 2) + " change");
