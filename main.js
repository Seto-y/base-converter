const reader = require("readline-sync");
const tool = require("./converter");

let a = reader.questionInt("Input the number to be converted = ");
let result = []

console.log("Your number converted to Binary = " + tool.convertToBinary(a));
console.log("Your number converted to Hexadecimal= " + tool.convertToHexa(a));

