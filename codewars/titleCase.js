/*
A string is considered to be in title case if each word in the string is either
(a) capitalised (that is, only the first letter of the word is in upper case) or
(b) considered to be an exception and put entirely into lower case unless it is
  the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional
  list of exceptions (minor words).
The list of minor words will be given as a string with each word separated by a
  space.
Your function-should ignore the case of the minor words string -- it should
  behave in the same way even if the case of the minor word string is
  changed.

First argument (required): the original string to be converted.
Second argument (optional):
  space-delimited list of minor words that must always be lowercase except for
  the first word in the string. The JavaScript/CoffeeScript tests will pass
  undefined when this argument is unused.
*/

/*
inputs: two strings
  1. title
  2. space spearated list of words that are not to be capitalized
outputs: string in title case

rules:
- The first word should have its first letter capitalized and the rest of
  its letters in lowercase.
- For the remaining words:
  - if the word is in the list of minorWords, then it should be in lowercase
  - otherwise, it should have its first character capitalized

Mental model
- transformation
- filter
- verification

Algorithm
1. Convert title and minorWords to lowercase.
2. Transform title
    a. If index = 0, capitalize.
    b. If in minorWords, return in lowercase
    c. Othewrise, capitalize.
3. Return title

*/

function titleCase(title, minorWords) {
}

function capitalize(word) {
  word = word.toLowerCase();
  return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalize('a'));
console.log(capitalize('of'));
console.log(capitalize('bella'));
console.log(capitalize('SYLVIE'));

console.log(titleCase('a clash of KINGS', 'a an the of')); // 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')); // 'The Quick Brown Fox'