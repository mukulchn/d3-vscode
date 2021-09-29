

//Flowchart 1
for(let A=100; A<=200; A++){
    console.log(`${A}`)
}

//Flowchart 2
for(let A=100; A<=200; A++){

    //console.log(`${A}`)
    let remainder = A%2;
    switch(remainder){
        case 0:
            console.log('-');
            break;
        default:
            console.log('*');

    }
}

//Create a method that can print out the numbers 1-10 10 times each.
for(let i=0; i < 10; i++){
    myfunc(i);
}

function myfunc(p1){
    for(let i=0; i < 10; i++){
        console.log(p1);
    }
}

// . Write a switch case statement which uses the current day as its expression and matches with the relevant case.
// Criteria:
// * Omit a break statement if it is a weekday, until the last day
// * Use a default case to handle an invalid range.

const dayin = window.prompt("Enter the day of week")
// const today = new Date();

// console.log(`day: ${today.getDay()}`)
switch(dayin){
    case 'SUNDAY':
        console.log("SUNDAY");
        break;
    case 'MONDAY':
        console.log("MONDAY");
    case 'TUESDAY':
        console.log("TUESDAY");
    case 'WEDNESDAY':
        console.log("WEDNESDAY");
    case 'THURSDAY':
        console.log("THURSDAY");
    case 'FRIDAY':
        console.log("FRIDAY");
    case 'SATURDAY':
        console.log("SATURDAY");
        break;
    default:
        console.log("Invalid day range");                  
}
