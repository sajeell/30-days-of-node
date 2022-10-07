const fs = require('fs');
const fileContent = fs.readFileSync('message.txt').toString();

const pattern = /ab*/gim;

const myArray = fileContent.match(pattern);
const length = myArray.length;

console.log('Occurrences are: ', length);
