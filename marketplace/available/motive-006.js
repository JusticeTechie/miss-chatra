// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fhQrbxIkAI3gAO5e79gPAWL3M8pj0/dW04o808fnTJNBbzGr8Db01BiD9uQpiwQvm33OfICsOmD+1tfM1mAq52LK2daioZ50Jx2H9Glz0W3s/MLw+5uzu6PsesfAP4gGgFcmY/3IlFjbPYnu6Bd8s8XQpOCrQGiXYOyVkpmTJBGKKxqNNJw/a6URhJjP06UdVOiYvrtWvje/sKL5qc09WlbEdHhG0NpDm3Jv2Z74ayFJUof6pcCSxlNQo5YUvKcmZlW5dm98HpSEWbe3AhNfvBId9o/aT3Ny5GU5947ghfHjn8SUxmIeXwqzCe1x29PZ4dUFQKwhaDXu5BuKEUV9JkcryGZ0zBxguUB9N9+ZaIFDd9ci7D51vWEcVKSclPr8A4gLLdGguNiEOHXHgL8FfFreA+rAJMOIHVXmF1iVdOtEi70B18vBHZB8+nr1F10HVTpbtzZ+7o8jQBXiwILpl8pGcaEWIBpK4+cRfi3z8KphSKF476TcN44tNnRzstfCpXVCZ0TK4YEqmofplm7lFBEmcrSmpKqmR2nzxb+59piEslQrvq4rJ/MEwF53Pv8N8hlcKU7pSl+xLRB4UzTjy6zKC7mCvJa6iUlEwBb8qvhqEDS6CWb7ig6aLs/sRaQcSYbf3dReBFzBWE9y0E0ILHZwJIF5mrHnlQ4vC/yrwUnbkAsBQeH+7fSrr/Du7XWC4lUJLdFR2JIiOA+XsAhbk6fEl4rDu0ox0BEVOXpiSc1bOzjtZINvru7M9ZcVGcGgA7XikrX0E0EJ6g2FCqQgICY/wv9bwuN8mN3WyWAEawyzYvk6C7NnpmDvNt/XI1cr5hl+BOW1fz4EyBX0gtYtsEkVoekR9u32cqpUqRBhfiVenV6La4Kuc2Vtof9qMaFF85iRpEtbiXLVE8TaURjjmw9Rgf6NC2Sw4CZ8eq3QIlDhP9/egIhwgOHLXKZxDFWh4ziGXNIwO3U8OWQu2owexn+vVntpVYvaL6qUzQcXPbQrEvA+0TDOmMZT9MFvXw/qoT3Vfe708MS2PO5t7AU=';
  const _INTEGRITY_HASH = '17f7457449da31fbb2d8fd853a2054d3c762c289e3cf9d21570c37af7e35ce26';
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
