function whosPaying(names) {
  const random = Math.floor(Math.random() * names.length);
  const isBuying = names[random];
  const words = " is going to buy lunch today!";

  return isBuying + words;
}

const array = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(array));
