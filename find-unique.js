function findUniq(arr) {
  for(let i = 0; i < arr.length; i++) {
    let repetitions = 0;
    for(let j = i; j < arr.length; j++ ) {
      if(arr[i] === arr[j]) {
        repetitions++;
      }
    }
    if( repetitions === 1) {
      return arr[i];
    }
  }
}