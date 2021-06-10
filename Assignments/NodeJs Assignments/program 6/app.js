//phase1
// const { sum, multiply } = require('./calculator')

// num1 = process.argv[2]
// num2 = process.argv[3]

// sum(num1,num2)
// multiply(num1,num2)

//phase2 and 3
var sum = require('./operations/sum')
var subs = require('./operations/subtraction')
var mult = require('./operations/multiplication')
var div = require('./operations/division')
var moment = require('moment');

var num1 = process.argv[2]
var num2 = process.argv[3]

console.log("Today is: " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
sum (num1, num2);
mult (num1, num2);
subs (num1, num2);
div (num1, num2);


//  Output
//  node app.js 20 13

// Today is: Thursday, June 3rd 2021, 6:58:54 pm
// The sum of 20 and 13 is: 33
// The multiplication of 20 and 13 is: 260
// The subtraction of 20 and 13 is: 7
// The division of 20 and 13 is : 1.5384615384615385