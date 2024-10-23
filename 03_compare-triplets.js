const a = [5, 7, 9];
const b = [3, 8, 5];

let aScore = 0;
let bScore = 0;

for (let i = 0; i < 3; i++) {
  if (a[i] > b[i]) {
    aScore += 1;
  }
  if (b[i] > a[i]) {
    bScore += 1;
  }
}

console.log([aScore, bScore]);
