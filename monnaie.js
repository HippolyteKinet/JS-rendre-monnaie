function rendu_glouton(somme) {
  const pieces = [100, 50, 20, 10, 5, 2, 1];
  const rendu = [];
  let index_piece = 0;
  while (somme > 0) {
    const piece = pieces[index_piece];
    if (piece <= somme) {
      rendu.push(piece);
      somme -= piece;
    } else {
      index_piece++;
    }
  }
  return rendu;
}

console.log(rendu_glouton(68)); // [50, 10, 5, 2, 1]
console.log(rendu_glouton(291)); // [100, 100, 50, 20, 20, 1]
