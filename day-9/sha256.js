const crypto = require('crypto');

const hash = crypto.createHash('sha256');

const data = hash.update('nodejsera', 'utf-8');

const genHash = data.digest('hex');

console.log('hash: ', genHash);
