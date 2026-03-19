// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+RG1NVjNUAi694EX2WwcMTa2qEcq+qSqFNt2FYpFdF7kTl4AbiPXO9qwsPeL3GEr3NhJ4rcmF6SmIJ3nuguEERl0hM0Pe2Lg51rSd4ZfEczk08p1Zpm9hD3R5cCOxOyKSk4+2ndbWhF7smA2fYLLuPTv3jOebdadalTvwuyLRqgfa6qfAGi+mp/3nHiLp7QwgA7BUbSuZrMWHO/DXSlbiaCNo+x0NWSCWfaa9u4HmU7s161snZof2F/IHYuN62nl39zFW5UbSfvqx0koDTDRTFnwOyiq/FchLaw/ieySF6xzkqOHitR1Yylb/bc8+e/PLVMMiVvdrsUuJtJKu+iYEf65OYcJyNgE7BD+YKv2QEdHb2QRe+shTVAh1QYmAlIoDpt5lJYBsudcizzp6X9FNKBuAmxa2/wM/50lb+rupb2o3WpMR2/bY41H6Fcd0UmOK2cEw7LpzmVkpI7qGPAGOjKQXideSnhxbVzSh7yCIAru8ZXXqXmKQRLfVbetFrdM8Gk7NZg9VdoisD6hrOEsJluLQn7yCmsd8F7Xga5WA61F1JP9RGpF7gniodKHpsfHeyYsX4oUOg3XSaQPYy1bb346jh8TLqN6fpWwTNLkzkAv2feUILd9a1yGSzjkJqzMH7y2yLr1aBp3B8UoeeLfxKyptJRTCOJ4UF1IssAYPoXbwOeAlD+V9Ho6NGn2RzvS0l2AxGyD64Nob9/qGp6q3iRToK5Pt45AdYlT/QxDh6ftXID5MRIlOyhBHatESYzm0PJdA0wNpnWc/IiefOhsyFwsy7v3BpgsiTsKQGnNoRCnGk2ikvaGHnwuake7B5AGlf3WyeJJcVNyDA76/V7makqfdTtpqoIb4RFd5c2kQLWgHvFqyX2ELo1G84LM1zkgLzNaMbhPk3XIRXKCmpPACoik8P0ZipsQKQfJ0CEn8BnaJ/Xd40np0WonD2PMVX89ajp7yTGIQWe79fyDkqEd7ZxiN3y2tG/1lHPece75eufLykY9lNnwCWXKF2ND1sg7vCgYHWBIAbtR8jXwEBJ+txMW0AgBb0KBTxS+sMX9Zfeg/gEPho+aDBoIfHkj31RUhljb5QWabkScbp4I3/DwOw7AXuwGP9uT4l8LpJ+KRZS9PzuSmy4ichMwejLk0kr7cKBEhD1hZCkZd1w4y1wUKBQ14yIts317DtmzfhfXTrOGVn17y9m8MCxApCM9k+LCGl5/qTVQqqH09DItDsgp9a5PLOBqULvGy3npvtal7IP+0CXcKmC2oCkY/m+yLvzIkgvC9SF//KfbdD1ZVa+tG9Nltqbg1Qp9q2DZOpH9YV00n3ekwUAAp9kq6WBhYa0Shs4YlTLITS3KCoG77/SePe/b2FaDTD/gRkcRNqn+jRI6HSoFZk6YBqGu/0wV2XEIm05zL/AJqFAO7H+9ckDoxvZw74uLd/ZbUA28d5PFIRqidHwXEGMMOc1zmPqsCA+COZVqFw8cskLGupWPAJiWBLPywB/JJgEZr+kQ801rDq0LpVR8XR/WI/kfDt5lD7qag6nx0mF17hL9ujchUNleFWTkQeFYwqPEn/5odNzSGXI/zkp6b7z9DzlPkIEP8xAE0S3v7QaqBA5PFxZ+HIMsBVonPNH+TcjpbJ/g8aFq6PlIyyEK4oMCQpqdT1+W6QGS25pfrwUZo0EKBkK+GOL8k/HeZJ8DD0laWrcWE59nWYfXQDRtSmCv940AVSA3uteGOFWNgyJUMLLmbQAk2fFkl0kiIlMrUYnVYKdERBDoNHhiEbH/BBAK9KGYN8WPyXrjcMfqLZNEMbjtbld5yQT5F93HRfh5/2upaNQkEspdnb70dyBsmAA+PBNM0Q1FO7ZkCbd6rxBSXJ6Q7oxAg9gMXJjj6TNuWSA21BBsW9KECKfRgZH/pQ==';
  const _INTEGRITY_HASH = 'abdeb9fbe056f7bf23e626dccef2000d371eb776911cd26bed3c407084fe3621';
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
