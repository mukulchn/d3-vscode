//1. Use template literals in order to dynamically change the sentence

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay;

totalLeftToPay = totalMoney - moneyPaidSoFar;
console.log(`totalMoney is: ${totalMoney}`);

console.log(`${totalLeftToPay}`);

//`The total bill is £4000 the remaining amount of money to be paid is £1652`
console.log(`The total bill is ${totalMoney} the remaining amount of money to be paid is ${totalLeftToPay}`);
