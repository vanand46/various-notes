/**
 *
 * @param {Array} Array of real grades
 * @returns {Array} Array of updated grades
 */
function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }
    const remainder = grade % 5;

    if (remainder >= 3) {
      return grade + (5 - remainder);
    }
    return grade;
  });
}
console.log(gradingStudents([73, 67, 38, 33]));
