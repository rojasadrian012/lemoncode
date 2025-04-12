const concat = <T, O>(a: T[], b: O[]) => [...a, ...b];

const concatMany = (...array: any[][]) => {
  const newArray = [];
  array.forEach((item) => newArray.push(...item));
  return newArray;
};

console.log(concat([1, 2, 3], [4, "6", true]));
console.log(concatMany([1, 2, 3], ["a", "b", "c"], [4, "6", true]));
