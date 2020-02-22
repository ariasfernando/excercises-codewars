function removeSmallest(numbers) {
  let min = numbers.reduce( (min, number) => ( number < min ) ? number : min, Infinity );
  return numbers.filter( number => number > min );
}

console.log( removeSmallest([2,3,4,2,9,7,8]) );