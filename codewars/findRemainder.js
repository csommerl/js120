function remainder(...ints) {
  ints.sort((a, b) => a - b);
  return ints[1] % ints[0];
}

console.log(remainder(17, 5)); // 2