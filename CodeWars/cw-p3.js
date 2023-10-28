// CodeWars problem 3
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(str){
  // split words by space
  const words = str.split(' ');
  // set index 0 as shortest
  let shortest = words[0].length;
  // iterate thru words array
  for (let i =1; i < words.length; i++){
    // get length of current index
    const currentLength = words[i].length;
    // compare current length to index 0
    if (currentLength < shortest){
      // if shorter, set shortest to current
      shortest = currentLength;
    }
  }
  // return shortest length
  return shortest;
}
const test = "Loving this course";
const result = findShort(test);
console.log(result);
