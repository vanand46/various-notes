/**
 * Finds the indices of two numbers in the given array that add up to the target sum using a brute force approach.
 *
 * @param {number[]} numbers - The array of numbers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array containing the indices of the two numbers, or null if no such pair exists.
 */
function twoSumBruteForce(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
}

/**
 * Finds the indices of two numbers in the given array that add up to the target sum using a hash table approach.
 *
 * @param {number[]} numbers - The array of numbers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array containing the indices of the two numbers, or null if no such pair exists.
 */
function twoSumHashTable(numbers, target) {
  const numIndex = {};

  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];
    if (numIndex[diff]) {
      return [numIndex[diff], i];
    }
    numIndex[numbers[i]] = i;
  }
}

// Example usage:
const resultA = twoSumBruteForce([4, 5, 2, 3], 8);
const resultB = twoSumHashTable([4, 5, 2, 3], 8);
console.log("brute force", resultA);
console.log("hash table", resultB);
