const { randomBytes, scryptSync, timingSafeEqual } = require('node:crypto');
function hash(password) { const salt=randomBytes(16).toString('hex'); return salt+':'+scryptSync(password,salt,64).toString('hex'); }
function verify(password, stored) { const [salt,key]=stored.split(':'); return timingSafeEqual(Buffer.from(key,'hex'),scryptSync(password,salt,64)); }
module.exports={hash,verify};
