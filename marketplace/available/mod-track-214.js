// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/cjADjj91ADtSq4EYTzyfWcjA0bEKfUGRebFhdXkRNm9Jvap2SQN2OHYt3LvApjC3TuThqGnlwItU4pBrDG86dvLLM3juKydXh+3kHWGCgBe43fk4KK6aEY1LYLptYrIm4XIXfHu5n/c0nB8C7c+hStUSBYWYlfTMl74N+IwcU9sSlR0fZ2khNKM3Ehx/vF0XHONeSd6ylLwmkiLKtYVvdrawYGNictMgW1ZuBZ/RRN3pwlaYdgsISpW8vWV8EYHaYpbM5OK48UeMg7eRRZeJN+UGg598dNaGxlloqgncfMdbahEP0cJuTrw6eMjvTSSsmbwj+dEcnAXMi146pws7bXmPUaGQ/0eVnsi73a44ghsjdBjU/hWXDbnKbAzhqw0Jm9w7OZ7cFBK2131XqmJRmBs1Q7UQy48ZCbjxAIOmhLn8uc+75akAZmwPvbURVQtl8mIVDhjTl3eH0WOZ34IcmZQCYQ/Ufk6AFe5ibZ3giH6fH5X18O1kw6yUZV7uLlsRmfc8OuMICljIJV2VzHEygCJoSi9MSuT8rlf92gsPZStQzd6KCwOzGgCEWVUhtaQRinW8ZWP8ElMONaMisrygHQyk/EnbCq23cYUfLxd+7M0Rpi1eZqZ7dT13tdvjhB3hKPfgq6mzoI+ZPaBFPqse5brobwKC0f/2yeLjuYfotCCBIx3W9ll8bmfb6Z8k1Ind0nXS/Txnh5gbc2fjS2cuPi+Er/FtTB6i3c/fJBLI+/6hfg0FGDJyFobAaWTqxcjyTazXwgkxxh7NxB4psAIDCNvGinKr525DMesIdQ/N+pK+F1xauh/Vm4nlCFwQ40BnZbuQU1NHBg+qzJVhEisTAOGN21XeB8VEOIyPCEcU1ezZCPne2wmcgzieu9+XuHxBr1RbohQnuU3eWTGGW5SNsbvTVD6k/I3hq7fpyYSCfksX5BqHg83cCZ3D37jyMgpGx2x8RqqK2JJeUpFdvGv9ENKVWeR6m+ccEIFs1U867NK9nEWWOMK5lzzxxjFoO0fe7I18XejRIzp3UzamKoKyl+KZ9b0zHAQE1b+5bmp0g4mY8LpYiks7e75ek4tWNJKNNhBogm/1sPNY3HP/wArVAfSkffXzWsyBHZd/LVtdT6cKfqGj9RlyGDl2jiAWDk7iRdVpMRSQQD7kQT87XhlAHwXq0iuYM4/JwIEvIlCtIwvC2lhNLFMLKHJ3O3QaRxhbLLmvL7uIJ0clrEutcY4QyfJnjGvOK6sQfnUNznjnVug53aDg2IN57tibr+0APY69emwmAshg4PHTpR6Kgjrt5tw1/Z8hf0UcGRDL6vEd1hVsp4pAgNfUvFFlWBQC/6E7VmWCE7m5ORarjIzWNGBtE2crcL0UY6wUMrCIRBl';
  const _INTEGRITY_HASH = '3c6ba8390707746932ef37589ae105926266f6c091f8a3b57af32b26dd9c6b88';
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
