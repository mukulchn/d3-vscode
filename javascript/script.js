// 1. Create an array with the name myArray with 2 elements hello,everyone..
// 2. Next print the length of the array
// 3. Next use the push() method to add 3 elements to the array
// 4. Next print the length of the array
// 5. Next use shift() to remove an element
// 6. Finally print the contents of the array using a for of loop.

let hello = "hello";
let everyone =`everyone`;

let myArray = [hello, everyone];

console.log(myArray.length);
myArray.push("Hi", "There", "World");

console.log(myArray);
console.log(myArray.length);

let rmv = myArray.shift();
console.log(`removed...${rmv}`);

for(let e of myArray){
    console.log(e);
}