let obj = {5: 'five'};
let strExp = '5';
let numExp = 5;

obj.'5'; // throws `SyntaxError`
obj.5; // throws `SyntaxError`
obj.strExp; // undefined
obj.numExp; // undefined

obj['5']; // 'five'
obj[strExp]; // 'five'
obj[numExp]; // 'five'
obj[5]; // 'five': bracket notation implicitly coerces non-strings to strings
