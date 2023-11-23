let output = [];
let count = 100;

function lyric() {
  const wordA = " bottles of beer on the wall, ";
  const wordB = " bottles of beer. ";
  const wordC = "Take one down and pass it around, ";
  const wordD = " bottle of beer on the wall.";

  while (count > 0) {
    const down = count - 1;
    output.push(count + wordA + count + wordB + wordC + down + wordD);
    count--;
  }

  console.log(output);
}

lyric();

