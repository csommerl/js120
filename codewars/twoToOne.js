function longest(s1, s2) {
  [s1, s2] = [s1.split(''), s2.split('')];
  return getUniqueElemArr(s1.concat(s2)).sort().join('');
}

function getUniqueElemArr(arr) {
  return arr.reduce((uniqueCharArr, char) => {
    if (!uniqueCharArr.includes(char)) {
      uniqueCharArr.push(char);
    }

    return uniqueCharArr;
  }, []);
}

console.log(longest('aretheyhere', 'yestheyarehere'));