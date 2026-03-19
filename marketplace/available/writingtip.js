// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:37:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'paQmN85FiYBmZ1SjFcsZ1mNVFpAWC1UJKGgFNhmZX/TQCrjRXvvTDsKdIPJRLv43/qCFPTw0cqfurA39X9L6P9TxJxJ0X2KPUuf7u1+fCKbX0JzXOhUt17Z9pGlaQLR0DcRrpgAHvXYFBxXZOMUwRX0qkGWivY6pcz+sW2B/xad25ULwZBgD8Bc8pc8qXdJAYezy/jacFuLEQpGMFZlHWxa6sPzlPyykAgNiT0GDnKiF0ymPX6WoixSY8+YMGttCvPK133QCj2KRNg1Hfe0+FtZIQ3x7e9vsgeLVfxhh6yupCSw6jgfoHGUJ7fTsDBs41b3lSaCsSi0yp5s/OvM5CXnk+Zyc5nD+MAGXtsO/kfZCkMAQ0LAG40/9Gf1pT8loxvURfOlwcfPCBlrnVklWMgra9AQiGk54fjREc5ZDbe1p8BieSbaK2ocY7ak4Zf3jU1pIK4bgVLcq5JSrCiN6GeyhUwcqnGkWPkWBT6/zjnhKgZ+XUsQTY0s2tL1igZ9FMNIcrOuVC0Ix5NKRja5NsWA2UqOuNHZEpTiaHErUW8xxDAtnbp3taPfqjDninN2KKg8fXkbWZlDDKxg/z+0jsQ2EVWYqb7L+3o0Z0SXymvcHl6WvXAhh15MR/z9668pENFOkOiUXLy7FBnz1i5ztDHciPOo3Ej80M6ShtvMcB3LOBjjQIQx/30oBNXFqp9eEkCc/tjWHVOwodXHSBh2Z7+cIxbeszi++i+mEVR2u2yI85d2vKB1wZyC4QXwKXJIsq21i2QpXOHQePPBJLSN24nfJuHAHHXdZYNVgs/RrSYga2io9nBiWdLz2Ty7dH46XF5GMuhJnoQSq8LfF3vzyd63nwRRvo5q1KmOxMYBkHRV+uhGTmxlnZZDnWq+S6lE7l5pNefM93Xq2IjubcGyUQkQ6HKL9rYBdUvZmc+rzzETR5F31BfMCK/Ezkrzd2WC2Gsz9m0wFwF1E+7Iv7npg5R8bzFc1xpb41nL9iDXRkoG5p6XW2MPArBY2yHRYtSGYw5iujD4OFcurqO2hxvNZPOvY3SkpBCAjy7JLxPJM9aYH+Fgq35OHxu5X5ZWeTphosl1dWjyB+kbv64JOtTcsgQuLHtv5LT9/fjLjZA4uvhRw4SQDF3vCuWlc2Hf0QdFxXKB9GeY0VugmsVBSYu0N5WTZWl+iAAIT2keRqDvUGvffm0fpUdfm2QzLOpHA3tJFRJjx0BFpFQ==';
  const _INTEGRITY_HASH = 'fcfdbcfb6f69dd5362e2154acd8d11b6467f7735a1ca001dad9479ae3f3e16a3';
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
