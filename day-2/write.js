const fs = require('fs');

const content = 'this is the line I want to write in the file';

fs.writeFile('message.txt', content, (err) => {
  if (err) throw err;
  console.log('Writing Done');
});
