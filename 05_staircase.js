const staircase = (count) => {
  for (let i = 1; i <= count; i++) {
    let row = "";
    for (let j = 1; j <= count - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + "#";
    }
    console.log(row);
  }
};

staircase(10);
