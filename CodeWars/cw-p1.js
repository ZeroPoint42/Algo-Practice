// CodeWars problem1:

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

function addBinary(a,b){
  // calc the sum and conver to binary
  //the toString() method returns a number in binary when the radix is 2. 
  //The radix is an optional argument that specifies the base, or number system, in which the number should be represented.
  return (a+b).toString(2)
}
const result = addBinary(5,4);
console.log(result);
