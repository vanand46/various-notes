function countAppleAndOranges(
  start,
  end,
  appleTree,
  orangeTree,
  apples,
  oranges
) {
  let appleCount = 0;
  let orangeCount = 0;
  apples.forEach((apple) => {
    if (appleTree + apple >= start && appleTree + apple <= end) {
      appleCount++;
    }
  });
  oranges.forEach((orange) => {
    if (orangeTree + orange >= start && orangeTree + orange <= end) {
      orangeCount++;
    }
  });
  console.log(appleCount);
  console.log(orangeCount);
}

countAppleAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
