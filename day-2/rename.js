const fs = require('fs');

fs.rename('message.txt', 'new_message.txt', (err) => {
  if (err) throw err;

  console.log('Done renaming');
});
