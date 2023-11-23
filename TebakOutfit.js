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
}

console.log(TebakOutfit("Jeans,Kaos Band,Topi"));
