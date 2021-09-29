 // this is a simple console logging statement
 console.log("Hello world!");

 // different types of console logging
 const msg = 'this is a message';

 console.log(msg);

 console.info(msg);

 console.warn(msg);

 console.error(msg);

 // to make html style

 console.log('%c' + msg, 'color: black; background-color: white; font-size:20px; padding: 5px;');

 console.log('%c' + msg + '%c' + msg, 'color: red;', 'color: green;');

// [09:53] Guthrie, Cameron
//1. Create 4 different console logging statements using the following informationFirst name Second name Where you are from And your star sign

console.log("First name: Mukul");
console.log("Second name: Chauhan");
console.log("Where you are from: London");
console.log("star sign: Virgo");

//[09:54] Guthrie, Cameron
//2. Create a console.log() with a message which uses the following CSS properties:Text colour to be orangeText to be set to the fantasy font family.Text to be boldBackground color to be blackPadding around the text to be 10px

console.log('%c' + msg, 'color: orange; background-color: black; font-family: fantasy; font-weight: bold; font-size:20px; padding: 10px;');