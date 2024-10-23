const minMax = (inputList) => {
  let minValue = Infinity;
  let maxValue = -Infinity;
  const totalSum = arr.reduce((acc, element) => acc + element, 0);

  for (let i = 0; i < arr.length; i++) {
    const skippedSum = totalSum - arr[i];
    if (skippedSum < minValue) {
      minValue = skippedSum;
    }
    if (skippedSum > maxValue) {
      maxValue = skippedSum;
    }
  }

  console.log(minValue, maxValue);
};

minMax([1, 2, 3, 4, 5]);
