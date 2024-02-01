/*
const hello: string = 'world';

function add(x: number, y: number): number {
  return x + y;
}
*/

interface Person {
  name: string,
  age: number,
}

const person: Person = {
  name: 'John',
  age: 30,
};

console.log(person);

const human = {
  mouth: null,
};

human.mouth.sayHello();