const arr1: string[] = ['1', '2', '3'];
const arr2: Array<number> = [1, 2, 3];
console.log(arr1);
console.log(arr2);

const arr3 = [1, 2, 3];
console.log(arr3);

const tuple: [number, boolean, string] = [1, true, 'three'];
console.log(tuple);
tuple[0] = 2;
tuple[2] = 'four';
console.log(tuple);

tuple.push('yse');
console.log(tuple);

const array: [number, number, number] = [1, 2, 3];
console.log(array);
// array[3].toFixed(2);
