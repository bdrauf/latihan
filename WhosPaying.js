function whosPaying(names) {
  const group = names.length;
  const buy = Math.random() * group;
  const isBuying = Math.floor(buy);

  const word = " is going to buy lunch today!";
  if (isBuying === 0) {
    return "Angela" + word;
  } else if (isBuying === 1) {
    return "Ben" + word;
  } else if (isBuying === 2) {
    return "Jenny" + word;
  } else if (isBuying === 3) {
    return "Michael" + word;
  } else {
    return "Chloe" + word;
  }
}

console.log(whosPaying("Angela", "Ben", "Jenny", "Michael", "Chloe"));
