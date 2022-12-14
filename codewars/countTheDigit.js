// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(num, digit) {
  let count = 0;

  for (let idx = 0; idx <= num; ++idx) {
    let square = Math.pow(idx, 2);
    let str = String(square);
    count += [...str].reduce((count, dig) => {
      return String(digit) === dig ? count + 1 : count;
    }, 0);
  }

  return count;
}


console.log(nbDig(5750, 0)); // 4700
console.log(nbDig(11011, 2)); // 9481
console.log(nbDig(12224, 8)); // 7733
console.log(nbDig(11549, 1)); // 11905
