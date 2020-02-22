function sortArray(array) {
  let oddsPos = [];
  let odds = array.filter( (number, index) => {
    let odd = number % 2 != 0;
    if ( odd ) oddsPos.push( index ); 
    return odd;
  });
  oddsPos.forEach( (value, index) => array[value] = odds.sort( (a,b) => a - b)[index] );
  return array;
}

console.log( sortArray( [5, 3, 11, 2, 8, 1, 4] ) );