const fs = require('fs');

fs.unlink('new_message.txt', (err) => {
  if (err) throw err;

  console.log('Done deleting');
});
