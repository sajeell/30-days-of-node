const crypto = require('crypto');

const hash = crypto.createHash('sha224');

const data = hash.update('nodejsera', 'utf-8');

const genHash = data.digest('hex');

console.log('hash: ', genHash);
