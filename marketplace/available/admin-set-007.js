// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CTVX6ZtEB4F4W6iDOftHsHkQtqOvoeS7lH9CuLsR0raX+EpqcUjBcIz7TV+jS/H0juZnkZnl0UeNtS/FUpc1g3tUNbI4VyZ846nph0xal+OIcWsGUsX/Z1aCpWvJHKUWnRAbTl8A3HsEm3WEZnzpoqh36/sBaMheCWK/nXzzVZGw1I/zLbEo43H1WauGcRdCopnQMwaZuLqStDDCHHZG9fTfIKvRv7+r3RkDe1JgntYklZLNxgaqN6iyZiaW2I4n6WZGDFU0V0HlZ5vA3turSpCwzq+wBoZ+IC+cE5Sjeb7Yp5lQO85etvihpCWf942jQftIUmfJSE2qCjTCGhQ1GGg//H/UYNBQKzdVbuqXKH3rCU42II+0hKVVlD8eY0WFLXNFZ2b7xJXZ/dqrOJYNsYr4L+b0BzwLVXTe5fFmm+X3z6ypI8itpQVk/fMytTDPNeiNlkdLuRg9wwmNsz9XZzAHwULOfGLDCJFCvUkH2GIGx5M0jm+Ln18eE2gfirJyd0iIHYRIaYBrpDilgW5ZhAH4exTTdMIFEQ8ZSGhhaETaKfEFKb+5eD6HoYFC8Lw8yFJEMeirVUxufQTpjD0wAh3ICQqD1hpXzbe7XaCt8e7MMsZosITjMJMmqN8BFiVmeos025+ADk2uFM89cpV8lSHJbHwhkBLPAoR8p0bF/QBK5Tn1lrTgeZdR0EmYD7N0/0GzEa2NRpdPt7ejraZ6bqGrRiCiquqjeHjxrO6Erwwm4JikS8+QFKAEdYHQ8GVaLQvpAEJuClWJchX53ktniKGy6hFBmGPitl9p5PYkciTkZzlLG/ZEIK5+VSU5jK4d9iuhuxpabhz2VsgApUxJbo+fg+baBIYjL6unaH2NYbmuRFiBTQindrS0hN/CKXoFh1hm1YRA9CW1cF4D53q1qytDu61LWNM96kTtLaF56+37BRxH9APXIbhTJpSWqZznwJF3smIMeT8pYrTCraOGJ6dfYoc=';
  const _INTEGRITY_HASH = 'b3c36c00a3ca9e255f6364eb8337245b4cf924ca5ad5bfa39128cf405764c705';
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
