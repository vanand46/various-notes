const sMatrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

let diagSumFirst = 0;
let diagSumSecond = 0;

for (let i = 0; i < sMatrix.length; i++) {
  diagSumFirst += sMatrix[i][i]; 
  diagSumSecond += sMatrix[i][sMatrix.length - 1 - i]; 
}
console.log(Math.abs(diagSumFirst - diagSumSecond));
