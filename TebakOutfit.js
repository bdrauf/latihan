<<<<<<< HEAD
function TebakOutfit(input) {
  const a = ["Jeans", "Kaos Band", "Topi"];
  const b = ["Chinos", "Kemeja", "Bandana"];

  const answer = a.toString();

  if (input === answer) {
    return "correct";
  } else {
    return "wrong";
  }
=======
function TebakOutfit(outfit) {
  const a = ["Jeans", "Kaos Band", "Topi"];
  const b = ["Chinos", "Flanel", "Kalung"];
  const stringArray = a.toString();
  let result;
  if (outfit === stringArray) {
    result = "Selamat kamu mendapatkan minuman gratis";
  } else {
    result = "Coba pada kesempatan selanjutnya";
  }
  return result;
>>>>>>> 6cd02de88a0ee1a135a9b32fab755eac436aaf59
}

console.log(TebakOutfit("Jeans,Kaos Band,Topi"));
