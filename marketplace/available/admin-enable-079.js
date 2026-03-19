// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GupEVIsKvYPsiQIj8HKhq9fgwfFAgPZIYjFy12fJxx7pqqEoFjoyG9xEaIPTwUwE51B/qPOGPlfS2OUUV2GNge/9pDKGYtpBkhcbVxLCTJG+rYv7tWdAqPN+WttxuFuk37qDR1uOfhqXJvUJ3xPOA4o4wsQ3XWKaPRW6Xmse6iwCK3hxtXGw8ZHZll0esw2fjkqhyWca9QVg7xFxI/+0Ar8JQdeuhYaZgXz4ByzY4s/ZcuOgXDlAr17/wyiB7aX3ZDO/Y1jJTXjHULw4GWdn307NKWO2tFRNoKh4KFehfPyc3XFz1bovJVDtGY9bCSXkFkqSa5EhsymJ2SEf/V6F4D2V/O4Q1qm+iXpOL9PMOwcYbJYxgsZEaFymo2L1dc7C6rbNvyEUVCRt9uRMVZMdyNZf4VZLzc2lKtFBlYsFQNj7ami/jBlkKj2tMo8N/i47P4nmOfWr5pTGHbRWelM7fYHFpb7E+d0X3ddFCJ7bJ0stimQxxiXv9ShJbYSYr+l3DTYpySSVYT/CYhIphU5FBkINVGxjnTRCaddGcq4UtYlSmvGqM+ITJDqTobVjmyqE8mD7411y/LEzR+5h2+AYvXd8437RgPGICSNQKxquiIN7vp42Q72GxxfOv/FIdHMIb2WhZYELczmWAmEEn7DDKY47BxPnhUZIBtTjDO875wLy/avvI8KHu8pW8f4JVZH/inB3I43sg6XX249HaIND7y/8ocUlwmUmu9cCeirk/asmBt1gyXbvH7yp6Ek65E8JnP5qjJ6GToYjknBYqtaAYpdu3MNoR2j1L4Q6FgCNKLeOKdQjltb1F0nBLIjnCtYGdv+fQv8JsyIpsKMqke6z2d04FOYYBfCixQBKdBmMkFtMyuFmrB82jJRz1EpDLz71M53cFgwvUolT+FtWPImBAJ4SX67jbxhleXSlnUG7xIsvVdr+FPehZcinObFRI/koqwhXbBbyUi45IrEY6x8tM6BQcN3w1f0z0UyZtIcVbhaJYGq0twuc8oWRt/6J';
  const _INTEGRITY_HASH = '36dbda598b1ca7aeaf5fff432076499f86152fd2560ef50d6e323d3efe7bb67f';
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
