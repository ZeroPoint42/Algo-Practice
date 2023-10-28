// CodeWars problem 2

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  // convert to lower case
  const lowerCaseStr = str.toLowerCase();
  // check to see if x is in the string and how many
  const countX = (lowerCaseStr.match(/x/g) || []).length;
  // check to see if o is in the string and how many
  const countO = (lowerCaseStr.match(/o/g) || []).length;
  // return true if x.length == o.length
  return countX === countO;
}
const result = XO("booxo");
console.log(result);
