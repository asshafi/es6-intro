const max = Math.max(12, 45, 65, 234);
console.log(max);
const numbers = [12, 45, 65, 234];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push (22);
numbers2.push(35);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];
const numbers4 = [44, ...numbers, 111];