/**
 * Reverses a given string and returns the result.
 *
 * @param {string} string - The input string to be reversed.
 * @returns {string} - The reversed string.
 *
 * This function iterates over the input string from the last character to the first,
 * building a new string in reverse order, which is then returned.
 *
 * Example:
 * console.log(reverseString("ycnegreme")); // Outputs: "emergency"
 * console.log(reverseString("ecilop"));    // Outputs: "police"
 */
function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = `${reversedString}${string[i]}`;
  }
  return reversedString;
}

// Sample function calls
console.log(reverseString("ycnegreme"));
console.log(reverseString("ecilop"));
