/*
input: string
output: boolean

rules
- isogram = string with no repeating letters

Algorithm
1. convert to lowercase
2. get counts of each letter
3. return true if any count is greater than 1
*/

function isIsogram(str) {
  str = str.toLowerCase();

  for (let firstIdx = 0; firstIdx < str.length; ++firstIdx) {
    let char = str[firstIdx];
    let lastIdx = str.lastIndexOf(char);

    if (firstIdx === lastIdx) continue;

    return false;
  }

  return true;
}

console.log(isIsogram('Dermatoglpyhics')); // true
console.log(isIsogram('aba')); // false
console.log(isIsogram('moOse')); // false