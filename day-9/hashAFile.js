const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'sha256';
const hash = crypto.createHash(algorithm);

const filename = 'data.txt';
const fileData = fs.ReadStream(filename);

fileData.on('data', function (data) {
  hash.update(data);
});

fileData.on('end', function () {
  const genHash = hash.digest('hex');

  console.log(
    'Hash generated using ' +
      algorithm +
      ' \nHashed output is : ' +
      genHash +
      ' \nFile name is : ',
    filename
  );

  fs.writeFileSync(filename, genHash);
});
