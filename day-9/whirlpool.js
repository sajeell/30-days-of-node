const crypto = require('crypto');

const hash = crypto.createHash('whirlpool');

const data = hash.update('nodejsera', 'utf-8');

const genHash = hash.digest('hex');

console.log('hash: ', genHash);
