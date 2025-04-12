const head = <T>(array: T[]) => {
  const [fisrt, ...rest] = array;
  return fisrt;
};

const tail = <T>(array: T[]) => {
  const [fisrt, ...rest] = array;
  return rest;
};

const init = <T>(array: T[]) => {
  return array.slice(0, -1);
};

const last = <T>(array: T[]) => {
  return array.slice(-1)[0];
};

console.log(head([1, 2, 3, 4, "5", 6]));
console.log(tail([1, 2, 3, 4, "5", 6]));
console.log(init([1, 2, 3, 4, "5", 6]));
console.log(last([1, 2, 3, 4, "5", 6]));
