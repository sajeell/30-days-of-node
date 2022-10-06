const fs = require('fs');

const contentToBeAppended =
  'this is the line, I want to be written in the end of the file\n';

fs.appendFile('message.txt', contentToBeAppended, (err) => {
  if (err) throw err;

  console.log('Done appending');
});
