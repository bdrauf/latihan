function TebakOutfit(input) {
  const a = ["Jeans", "Kaos Band", "Topi"];
  const b = ["Chinos", "Kemeja", "Bandana"];

  const answer = a.toString();

  if (input === answer) {
    return "correct";
  } else {
    return "wrong";
  }
}

console.log(TebakOutfit("Jeans,Kaos Band,Topi"));
