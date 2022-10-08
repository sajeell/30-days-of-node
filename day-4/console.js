const ws = require('fs');
const { Console } = require('console');

const output = ws.createWriteStream('./stdout.log');
const errOutput = ws.createWriteStream('./stderr.log');

const print = new Console(output, errOutput);

const roll = 839147;
print.log('Roll:', roll);
print.log('This will be stored in the log file');
print.error('This is an error');