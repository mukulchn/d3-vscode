// 1. Create a function that takes in 2 parameters num1 and num2 and subtracts the two numbers.
// 2. Create a function expression called welcome that take in name and age as a parameters. The outcome should be like so:
// e.g. "My name is Cameron, i am 28 years old"
// 3. Create an arrow function called powerUp that takes in two values n1 and n2. The arrow function will return the power of the two numbers.
// e.g:
// * n1=2, n2=3 will return 8 (2 x 2 x 2);
// * n1=3, n2=3 will return 27 (3 x 3 x 3);
// -> hint use Math.pow()

let subtract = (num1, num2) => num1 - num2;

console.log(subtract(10, 7));

//

let welcome = (nam, age) => `My name is ${nam}, i am ${age} years old` 

console.log(welcome(`John`, 30));

let powerUp = (n1, n2) => Math.pow(n1, n2);

console.log(powerUp(2, 3)); //8
console.log(powerUp(3, 3)); //27