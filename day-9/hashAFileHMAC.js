const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'md5';
const secret = 'Rj2895647';

const hmac = crypto.createHmac(algorithm, secret);

const filename = 'data.txt';
const fileData = fs.ReadStream(filename);

fileData.on('data', function (data) {
  hmac.update(data);
});

fileData.on('end', function () {
  const genHMAC = hmac.digest('hex');
  fs.writeFileSync(filename, genHMAC);
});
