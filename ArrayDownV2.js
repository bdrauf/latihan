let output = [];

function lyric() {
  const wordA = " bottles of beer on the wall, ";
  const wordB = " bottles of beer. ";
  const wordC = "Take 1 down and pass it around, ";
  const wordD = " bottle of beer on the wall.";

  for (count = 100; count > 0; count--) {
    const down = count - 1;
    output.push(count + wordA + count + wordB + wordC + down + wordD);
  }

  console.log(output);
}

lyric();
