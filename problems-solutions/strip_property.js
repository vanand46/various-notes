const stripProperty = (obj, prop) => {
  for (let key in obj) {
    if (key === prop) {
      delete obj[key];
    }
  }
  return obj;
};

console.log(stripProperty({ a: 1, b: 2, c: 3 }, "b")); // { a: 1, c: 3 }
