const birthdayCakeCandles = (candles) => {
  let maxValue = 0;
  let maxCount = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > maxValue) {
      maxValue = candles[i];
      maxCount = 1;
    } else if (candles[i] === maxValue) {
      maxCount++;
    }
  }
};

console.log(birthdayCakeCandles([3, 2, 1, 3])); // 2
