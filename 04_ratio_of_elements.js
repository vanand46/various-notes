const plusMinus = (inputList) => {
  let zeroCount = 0;
  let positiveCount = 0;
  let negativeCount = 0;
  const listLength = inputList.length;

  inputList.forEach((element) => {
    if (element > 0) {
      positiveCount += 1;
    } else if (element < 0) {
      negativeCount += 1;
    } else {
      zeroCount += 1;
    }
  });

  console.log((positiveCount / listLength).toFixed(6));
  console.log((negativeCount / listLength).toFixed(6));
  console.log((zeroCount / listLength).toFixed(6));
};

plusMinus([-4, 3, -9, 0, 4, 1]);
