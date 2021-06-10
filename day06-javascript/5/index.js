function freqItems(arr) {
  let hashMap = {},
    max = 0,
    item = null;
  arr.forEach((e) => {
    hashMap[e] = 0;
  });
  arr.forEach((e) => {
    hashMap[e]++;
    if (hashMap[e] > max) {
      max = hashMap[e];
      item = e;
    }
  });
  return (item + " has the max frequency of " + max);
}
console.log(freqItems([1, 2, 5, "a", "a"]));
