// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aDrtLnS0T+7SfmsOWL0R+xJ6/jGa3i9O6S6CNk7jLVUKJ9dBHwtHi17B+mWgXyYOL0F+pb+bxztxJIoRi3zfnLknyb4No5WlJdMeStzpNb4GkjmGZobYUkxPA0vy8VUJL+xjvCR73H3PmqIJnhKZT26hIfJ12qG9le+CSREGd5WHCOjrzByDavL1daqR0df7v3EX0k2k9IHOTuS3KWRcLzVM5MrjNujZLytg6m3tz4BsOe/5rfH0kwfx/KNfbaNx+2Vf7y5KBC5bvZZRUtBkNN1KzTChhDuc9klJ3WlibfIf9Cr/ANCSo1hmHLGORsCquWl9anK/8Mj74OIlgopz1Cj0DH3rBhZoS93qA07AbiZEn7m9Yfz0o4+aa+Hfndi699IcAPaOfSb7iilcHO07RkiyfG5U5Ys+wDhyreTe2hDcK87ROQwgAQNFQoR/tGvOxLjobrwSvkoQxF9CfNNEIclkCuEJQiwLOS/QNZHU/OYYbTCcQwgwy3+r7gVdsQ1hHrQEC6Z8jEGStpwBNOexf+roxlmDzOXN0r0sP37mrQNlFwIMsFg3xVwv4oA1wTm5u+0+aAAznqpU7uLF/mmL5WFO8HKhjL67Di+1ZDXnlfc8jKfbHrCjayiSvWtUN9uGsK1XXOoZxnLD2UqMozg3ZPOztkuYk/n+u25TQhH0VIokgILklEyVWEO6FdgaV0nssY2Afg7KNeaP1EVxIxRhQTIiA6iNi7gpmekuy98cK4E+OS3fmnY=';
  const _INTEGRITY_HASH = '154383691f20d7be36e85d8493ac2ffa614d12ce28d009087e29fbed1b77c6a2';
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
