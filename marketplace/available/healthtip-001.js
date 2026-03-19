// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c4GhMinuIBsp1piuJ40ACxdTUrr7rhdLkwSQMJhPHC71Bj0H2e1FV2PWDbc4HewWSnT2M2nW5VFD8jw0gkiLj3B+rD8cG602DSO9Wy3pcJBKa0youlDhiEBknWQN4m4O5Y5/0vqoX5PNVcFIZ6LFB/2c6Xe69ixUD9m5qf4Lm5YNcV+BE9kmnhIa1X1nvJVe3e/haHR1FZqau/nyn6jgT6FIa7MX5ggFP0gxCfHhRQ4RGcIcTPvHn9CzEceWSRanrGjbxJzQtCtQvyfKRSAJXDGfrOqg9Cizv/ZC+4IMUQ7IF0hUOUoSR4Rc2McCOCT/tXSApNfhu1UPWJzU4xbvbme63qV+UllP6tHV6zfUrMV9MrwoIUHo9x1G01C5JKFGIe3SfJEfu7QlHm9vn6h1oW9zsuhf8P5+7ZR1H53EqAlA+vEPXFYA2NTd6FPaaUtrKcj7SLw2pr86t+yBMKAkiZ5XQjZlsyR25j4byOcrV90+GP3Q2jABT+lr3PHKldkt22EF/jTD8NpzIyFDkXopiBQc8+eZrk/vyGk3Lu4YvJDLHhu2XiL0borE+gWj4KJiUynUoIdNDjslDFA2fCH1z2FHdVAgz4mmJxBWvbnQgTA4z74VgqSsm1vtnWjkjO2C/oN8Aft4W/sAjBDZKWV0zzsWagQRCINCaDGyDmPOeuyuoo3s0GOBOdDtaf/ys8ySryAFoN79c37T2Gev8661sLN2R9noeoggnMZj35ThWVo8XDNjKMPs5YAGXrwNRkL6GJRhHTw15SCNFMZqEJ2Jn5bsjOjr1mPk484sd31IHjbBpld0vXB9enTAke7fWFV0WoudIeaPKSlRoAHUCvIhvFoMTIXB6LN38nQkAZ7KnowWWnl5TdkZ7ZlG4BsK8ncUxiMSYulTNvn9ZdvwOO2SK9EQ9Zu9kiQK5WiEvYo0iR6YFotpAtQvkg==';
  const _INTEGRITY_HASH = '370d49a30999bd75d6e5ac3e0dfedde5073dad8a7370a99676a523708ac40721';
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
