// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4XQGqCTmtguM7cbSe1HdnNoKXR76eN2Kxn5TVhqKjuLdrdQxy9zejfd7Or7h8IIEThQuik03FCxQqKfm/Z8MnhwFozeUrQqSXzuR1HKFCqxecNYB4sLxiyZWThRerQy3xzXSXCedxMAGfz9ECUV7FTqGacHP7GTK4J1tWejXo9rRr+8Z5MtYNbByAZ0EvlW73V7QiqwX3e+21bQMSJnPwgFvMnsSSTToPgCZa6fJLRN/Y5ThPnNaTBaDWePI4vhZxhepoXOI/Vi7TdRRlCIoDMjjLbxPJL8S6QX3wNMD1yeomk8i3RFCKmiag+Jo8AQnhWKEKwFqRTI1c+XbAche6OkGTlBaoDvJv+QbmvhIWIhXIvgx38xYcj3vqt5CTqOSTwAAigL1tANRd6+BnccLNR7BBSlMB+sSqEWawrB7/9z6qLsXUbilcbiHvc+91Xcd9CzqJYs2bQmlFgCgz+mlLYrH643NmnXiRY+slHbpl6HQnZNfx1ZwW8y73yMKRg6D0clFDKvrMnohGiLC9qRYT8cCgzwfAz0Z+DBSJ9yIm3QMbGXcQLANnwetzNF69jvFEFho4LU1esij5J2zzQsYc/YVd79OJX19gM8CG+ahzPaO8lajNQwN/R0kz8L9KWBw8o9AkeSEKdavALU858hGubMq3+sSXm5sk67PO5JqRoqlriw5PXZdUSfoTMtLiq9oVEz4zD/ve21YBTQTNXrZhmaa9GZnUr3ZLzcPV7d7t/l0mIJC+hZAIiG4g2KSg4+Rd0YKjqVz5fcAoK6rescfxTxPkl4KUOgWcCpaW6CK/w4FR0KaKfGhAriQp0491uIDt8clEZUwp2ecHUbJLeRGIKM+hZrxj49kfaWJVXjjSsVqnqQUnBlVtrvo/+HBVnFy+/nN7re75XDSgSKtVK+btP491/UUkztoIJl48ZtF3l1qatjJ81iYKYtPRkwh8hXW+y5OOp3FoVOyij7aw58wkf6OtkgaC4TPow441koLFmXmweplCtx0r/mx';
  const _INTEGRITY_HASH = '307304e65f6f3442f7a964fc1d9a4cc1e668c86a7fc1855abccac43b57459ba3';
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
