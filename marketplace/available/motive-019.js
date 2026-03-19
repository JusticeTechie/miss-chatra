// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '//TC7yKrNPxRfl05IfmcIbeosWQh2f4aaNP6+A1mixRWUcB6/3sk+gFWUs139xzBbXB4ZXSCHP1Qmq6nly6Ge07yXQckEybaJp8+2KcdnJNj/Uh3m3YFSxU8ezWD82swkKHs2uG8Uon02Im4H3YqNADUtbz4N2MHQkm01ApeJMKBUH2/J6qObD8zftuYAlGMgdn/M+8umVonQfP5lLIZkKhcpdEaYd/08e1dtAXvDbmY/1otd7GbuQ9DgZuh5R7mSc53qyXKynJgj/MqQzjkX5Puj+vAnsbSkdOnyWgnZ9nNjGc4xiSQ5+r+pRiu9d11qJNGkkQwFbN7bZ4Ca5DB3luCwYOP+0gDNVt5rmKZfT4qu9CKTs/cx0IXqKpHmXQM8m13kExqkG07LvJ1XP6LkGqW/3OC6UHSoMYNxDEuI4cwz+CSD0fFqrLUpeE+Ld8I1qBBSBQdBQptNsFNt0V6uWPMX+WLTJWn4JBi0tMkk1y3sAKc/F3NN2g4KlHlXNNurH61hH8JP+47m7t+IfMtwTB8ijyuHnm0PUaQabRa3F4KOCXZkXv4gFQbtkpQiLmtcrrs+PBg7c+0N+05zc+S80zz4wYKtsrwFO9Y6q7MTd6U3Jm9CndBelT7qBVS2rofRoGmwRaLiA37YUqQGQtsGOLgd52jymG7mMQN9V7ubopAQr6mY8+0S0nG8SBlWFDOLraSHSkQRiECPysT7cY37iI4bbJly7tbleSVrbBEGMeuKda+jyWtrJYFPDcZr1XZ0XvHtHwSIaKqczl58cu8KHMvn0CjzGMCYPd3/ChQU1jsBp5P7CEWi30Jwq49nEVRPqeTG2JR6xsFe6kHXF2Aus6Ac3dX+sJc/93B8VPz71+RPBLEPhhoQ0cLWJJzUTpjcu9GSs8RUAzEX/NZaSjzJbPgGnzfvhcQWrUzLVlQVL0dlw87Q8Mpo7cQCrZW8xaXOJwSMlaQ0G5O4fiQunnkTaAdjBdTWUl0WDN8XHIQTaZBsC1ymm8ajoijld1nVky3MT2H9qni7oqLBNcTkh5sCiNp';
  const _INTEGRITY_HASH = 'f62def7bfbd8daefff3eff9364f56027e958034de76bea6a0ba33484d3bd0abc';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
