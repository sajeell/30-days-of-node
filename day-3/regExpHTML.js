const fs = require('fs');

const htmlContent = fs.readFileSync('index.html').toString();

const pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

const myArray = htmlContent.match(pattern);

const length = myArray.length;