function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// index starts at 0 and goes up by 1 each loop,
// until we find the char or reach the end

// b) What is the if statement used to check
// Checks if current character == searched character

// c) Why is index++ being used?
// Moves to the next character,
// otherwise infinite loop

// d) What is the condition index < str.length used for?
// Stops when we've reached all characters,
// prevents checking beyond the string end