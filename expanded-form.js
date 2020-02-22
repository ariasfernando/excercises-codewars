function expandedForm(num) {
  let arrayOfNum = num.toString().split("").reverse().map( figure => parseInt ( figure ) );
  let expanded = "";
  for( let i = arrayOfNum.length -1 ; i >= 0; i--) {
    if(arrayOfNum[i] > 0 ){
      expanded = expanded + ( arrayOfNum[i] * Math.pow(10, i) );
    }
    if( arrayOfNum[i - 1] > 0 ) {
      expanded = expanded + " + ";
    }
  }
  return expanded;
}

console.log( expandedForm( 40 ) );