function persistence(num) {
  let number = num,
      count = 0;
  do{
    let strNumber = number.toString().split("").map( number => parseInt ( number ));
    if (strNumber.length > 1) {
      number =  strNumber.reduce( (partial_sum, a) => partial_sum * a ); 
      count++;
    }
  } while( number > 9);
  return count;
}

console.log( persistence( 899 ) );