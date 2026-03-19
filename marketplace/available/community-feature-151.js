// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'd2hYlLbmeq5u2kVrYX2nMn4t63DYzLL67UrKgjOd+OGti9aeXVYOceuZLgb0w5Np/rWWbVgKjHddOBgtSoiLsf74QMjxJcLsmEV/quBZwIosORVyosL9+5X27Vy8AghbcR8Cknn3PggWJbQkUR4gLoJnqv3gzXLBhBKxqfulNLbAI8UPOKtMu7wvvbuDndn/84dMb3mfdjZ2WDxjXoVWFeKPaBoTfvV7PMDu505XPhraDo5felYbS4K6Gvsz+Etd6YchzUgco+yB9YWGcdPo2o74gaJpQns0Bb1tTkZu9EtiKBND4zDy+3ttYJYuHywMkwG/rfu1X0c/q3SBrUAG+rIDrSUiNp/FZnKbw8FYin0SplFD7wYDqz8+WA0NVZAh1LNW4yDG5J1JpFBI7v6PueqvDOdTwrlzw65dnU7SvSlZroF1CdO1mLItRRIuKcAxNcIodA5YSyl5UsOt42bwvLatK0T3TxtDVDhUJfo6D1Ey7BxWDbPjtvm5qua3h1tF8Hd871pPFRoNKuIYwtnUI1Yg8CXkv1KotCiKiQdVEm8yhn3zC3xSaXQryfqx56/zU4cTAAzQnH3I3zOenLGRiV6oXtMTDc5rKleeokzrA5f6mtJ0vP+vTjHCPScNeIm8acG1r3xjlSTDZ4DhzWFavpZ4kF2ZCf93Lq48MWr2uoHCgqHzWkdxX84i/2lbcVHRXNiEZ7gepGBq3QURIF6ikvzlxlbvkAGa';
  const _INTEGRITY_HASH = '4f91b649a296165b193ada50d73486021f78d3ba482cba1aaa0e8fc40929b2c5';
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
