// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'G0T9ZvbmL6GVLTkj2wO6x0L7VYCb3iOIJJSAevyQWSLWYRR0l/tMO1TC7i1bkSmDZZj+J17/5AVXqgmWhs0DDqwfZsiFLSoYmALgYFgfs677PgJg9Ym36Ycm0bBat9Q6APBKQlpgqnjiqFJqQtTDXvyEIcp/U7nmr1AgqkHdXEprGmmx46AQQCqkqq6kothC9c0fFKOBDuwUeCViQyEhIXQzLc++c0IG8r7AG7MEj/KHL6QStYkyXm53c3w2CnrSFTb7h04c2jq3qt03zFFZ8jnNVpRMot4EdhyE6ucREcUZRpwEdKTLqXBidzssQ6HTXLXd4k5/l1zlewb1f2KooRQl7FMBDvZJIoG8M1J7e0AI9A5NQAUh8febuqdMwPvh6vfXv6Utely5UQNNBhrXfPkY3SKW7nE5aCUnopBu5OLNPNHmwXNwuF63qfjUI4ftFIY8t19z126mIGUlgBfQg0XEa481f8kSYhgr7oMNtO9+Sm3xiHpcU75WTB7C5fvJDX6+Bty1WxC2nhofxlhTNfRQ+KTmP3dZTsthl4aRrt5IwWeDAkufumKLg9/4w/Jt4jEEHDt7thokBsx5ZaPQ8dHhFKLjZGAYGbuUTkoycMeMWo42DbziwqfJnqL3yxMcbnrKw4q/rhq6LBTCyccVv4TOO7FacqzVe3amwzW/gFUQHW0JMKTllGInvaepPkt80WSE0Dpnpaa9NBjZBuNxMLIamaf85+e9IsGR2oOf8tIs+lN9Nq7GdB/wvjBNzMzEqvMZUm8okAVtRD91qQjkKsRCPsBgCs9LOMsXhbAJImjMFwIdJsc2JDrz+/0WIKDM39EMwxUXQjNQJLb4qSId7Uqed87QLfd1Xwiu+vBXhj6yGE+mtQArmU6Vqn+8NUypRdzpJPcfkbMTmDDpw6hRbFekDZNLm4eZs1sbBCRi5StMzRRCZlryCLS1XPTcbqNGw+OSxKofXs/Se425akYcN5Cdbdsv/DYEPN39XfB5yL66U6ugKMVfxgETl9295apG/rrpu33q65o=';
  const _INTEGRITY_HASH = '8b1b5fd05576e5a67f856ab8740f2d7c1df128ce5f15becf5d1465414942943c';
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
