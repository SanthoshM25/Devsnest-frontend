function first(arr, n) {
  let arrTwo = [];
  for (let i = 0; i < n; i++) {
    arrTwo.push(arr[i]);
  }
  return arrTwo;
}

console.log(first([1, 2, 3, 4, 5], 3));
