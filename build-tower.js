function towerBuilder(nFloors) {
  let tower = [];
  let count = 0;
  for( let i = nFloors; i >= 0; i-- ) {
    console.log( i * 2 + 1 );
    tower.push( ' '.repeat( count ) + '*'.repeat( i * 2 + 1 ) + ' '.repeat( count ) );
    count++;
  }
  return tower.reverse();
}


console.log ( towerBuilder( 5 ) );