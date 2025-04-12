function clone(source: object) {
  return { ...source };
}

const source = {
  id: "1",
  name: "Juan",
  age: 30,
};

const clonedSource = clone(source);
source.age = 31;

console.log(clonedSource);
console.log(source);

function merge(source: object, target: object) {
  return { ...target, ...source };
}

const lara = { id: "6", name: "Lara", age: "25" };
const ana = { id: "7", name: "Ana", age: "17" };

console.log(merge(lara, ana));

