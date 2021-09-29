// 1. Create a IF statement that satifies the following:
// * Declare a variable age
// * Write a condition that checks if age is between 18 AND 65
// * Return a value in each case where the condition is satisfied and not satisfied.
// * Extra: Consider the case where age is less than 18 - return 'underage'.

// 2. Using ternary-if syntax, write code that checks if age is above 50.


let age = 17;

if(age >= 18 && age <= 65 ){
    console.log(`Age between 18 and 65`);
} else if (age < 18){
    console.log(`Underage`)
} else {
    console.log(`Age not between 18 and 65`)
}

age = 50;
age > 50 ? console.log(`Age above 50`) : console.log(`Age <= 50`); 