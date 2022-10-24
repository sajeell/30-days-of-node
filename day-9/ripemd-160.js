// RIPEMD (Race Integrity Primitives Evaluation Message Digest)
const crypto = require('crypto');

const hash = crypto.createHash('ripemd160');

const data = hash.update('nodejsera', 'utf-8');

const genHash = data.digest('hex');

console.log('hash: ', genHash);
