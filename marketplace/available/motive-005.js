// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1zRm3wBA2QwEe4RjypWNUo0lBRA+Nn800nCvw3uHNEr0f2bRV6k4FFYXZuxfXPyw+bGz2slHaXmdPdR6LXXTDzcpmld6O4XBUW8oogRYzvgmdPNfAc3SlaSF3pTY1PatsABdVE7WydY/J0wynRsOg+oSEC5Losus2I86+4Ca0agT9Bsz1b7WBuVVqg7QI2djlsHrUIpbT0cOK5yhxkb7HuPRrLyKf2pS5NUr7GB78w2Ug2LGIpbhOhG9ZTSf/Ixsh3gtHoCmmQTZOGrjsuw3pKWppCfw46goYlENXBXLGiBwt/O+f/TFiNniFPcRIu90BG7w0oY+tjf6vKw1FgTNi5z1fQgmvhY9ldGGSkyATS8MHHHaej1caeD6buO2XlkTOI0tvPzmgdujtiLnDn3S03FUJsLql/WKe0OogpdUyj45BmBAi56TxUTHF+tWhxIpHLpaGZjFM8/HBcwgr2Ii4Ib9Ee55g+TGsXjNTXj7jdbEnpGoBGK/NGSZOCPP4MH6anxuWD+JL0gjTnw2gRfUfejJrVxu5H906eu9RWb60DDcnuQznX2uEUv+dEbHgknS21Yk8oqycu/h5rO3xvhkX6FGpDBXMmpC8esjNYTN2cxUYkRiwtireoXQGl6dYuDJl1hXP/1ImyzN+oIVaWC4s7Cn/yWyQ6afilMaeBrLXK9Hd0/jkT0PgZaf7yRSSvFKqpbb4l+yxrCPIane0CuylMlnMTAXFSI+kOGkl6p/l+bULBAbAOoKzGgP+ovG7kFg3+cXSOc0vdYQoCsVHwXJJOdo/OkXUaGl7i4YJBE13QUw5301hlAM6hrowKLKOLWWy21moWnHlsDEsPjoBxUSW8NQUhXLeigNGB+wVOZSkEO8gwqBYrQc4SYznnzmqUR0Rxw8PIBNM7QHtExnMc+rN40guDt0owUTIt8JgpZxqzEpYQV9aJ4PO1gMfy4ZxrvCglgd57CXaupLQYsvir2OP3baM5q7Tu1IhDzlhXNh5OxKJS2MoFMa4AFLu2OaI3u9bCX3fRwv67OObN4LZxA=';
  const _INTEGRITY_HASH = 'bae1ec8f0e838827a28a2705bbad0d6a696c7021187d8b4baa1e4dc7802aa663';
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
