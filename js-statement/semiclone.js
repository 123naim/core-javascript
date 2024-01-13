// semiclones separate javaScript statement;
// add a semiclone at the end of each executable statements

// for example:
let a, b, c; // declare 3 variables
a = 3; // assign the value 3 to a
b = 4; // assign the vlaue 4 to b
c = a + b; // assign the sum of a and b to c

// when separate by semiclones, multiple statement on one line are allowed

let x, y, z; x = 3; y = 4; z = x + y;


// javaScript white space
// javaScript ignores multiple spaces. you can add white space to your script to make it more redable. the follwing line are equivalent
let person = "Hage";
// A good practice is to put space around oparators ( + - = * % / )
let i = x + y;


// JavaScript line length and line breaks
// for best readibility, programers often like to aviod code longer than 80 characters
// if a javaScript statement does not fit on one line, the best place to break it is often an operator:

document.getElementById('demo').innerHTML = 
"Hello Dolly!";


// JavaScript code blocks
// javaScript statement can be grouped together in code blocks, inside curly brackets {...}
// the purpose of code blocks is to define statement to be executed together;
// one place you will find statements grouped together in blocks, is in javaScript functions.

function myFunction() {
    document.getElementById('demo1').innerHTML = "Hello Dolly";
    document.getElementById('demo2').innerHTML = "How are you";
}