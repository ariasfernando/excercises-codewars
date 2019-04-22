function sumOfSquares(n) {
  let count = 0;
  let numbers = n;
  while( numbers > 0 ) {
    let square = numbers * numbers;
    while( square < n ) {
      n = n - square;
      count++;
    }
    numbers--;
  }
  return count;
}

sumOfSquares(20);