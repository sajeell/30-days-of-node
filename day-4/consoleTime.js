const fs = require('fs');
console.time('division');

const x = 10;
const y = 20;

let count = 1;

while (count < 100000) {
  const data = fs.readFileSync('message.txt', 'utf-8');
  console.log(data);
  count++;
}

const result = x / y;

if (result === 2) console.log('Result: ', result);
else console.log('Result: ', result);

console.timeEnd('division');
