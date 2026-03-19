// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Z1IXZ5yptkyZV+cgl47RMWgFQDlZ6GWaEiVqzr1VZcarMtt3OUMQSxInjxVVQbWOedljItZZ1qd/jlhY6xJlzgQX6j13peWBoOhiwOGx0faMlrvQQSl8Z3nXXaTVuhGNjerDgC2HWQMz0O6ACZlhcMQebF+f7mCC7I8bQJm8FsVOCKB6ooR8RCF7wSpCROWh8ny+eft7821BGC/QGXJo53ajPri0Tusg6LiNHKYGvoeo4ZgMjtsCVIB7QQMDXepjSxlvZ9habwZi/9CBE9EYxOlBgk/9vh/42ED90RWFoLgRmm9bWnqqMHOoycmEDcFBihNaQ51XGzIqqAU0gKgwlqpG4bNuy7fx/3gP8EdIzvKJy+jXak6Ghc3MFQEMU2dqWhkknoDE0n+xaDp/055HOO7b3i1ulh8e/Dq4nIXFiPr/KTtboffa3WaPpG7oGPD184DlyKJ1Y8eQ48wFH7rCjfJaPawLwB0Y7Sx1GB7NMogz+CObO5HJludFJzGI0RXhY/4yOsevUIjhKxNiCctXN8jP3i8aHqilCtBlG2gABKJCd2hmfnxUGnQ/Dej+h48haxs60lfcp1wjcG7imsLzZxAQu13iZBnA70opyzoZiMIEPm1PetAUr0Zr4bggQ4WlMI9ujZiO509iqS7s2H9Nz5gc8CGlBrvaoSdxXBXnuoulrqpnMw/DGkcsLBpmM07w2njN2jwZlSQXPTif+6cu5xZT0O154rwzZaL0EC1qdpyGwlR4WKk=';
  const _INTEGRITY_HASH = '46a34472ef8c86a13286b5f32a13ea348f1d83f2c554b6b23b5041d4404a0431';
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
