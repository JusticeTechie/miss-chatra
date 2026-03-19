// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'v5sC1Vg/iC61PKIdV/UA8y3dGsWQYwR6ItyXcZ/IzK6eGiKHUyTZrDi2d17fJSTYslZlTmUGhhGSRjIeHGxYmBnbUmTwH6zEq0jQe0J6tbjd0tVRUG5h9svHOO4S1Az0wcilbUKFLUUFw3z3G7ZiZ5su3yVuX8fGYnPBQv/DErPBJr8VkpPsXtvIGgOVUdT8xpLHKceXy9POP/s4wXsnLJOkz4Z/pp3oP0AIaRQQdBxyr3hJPdd08GoFojz9KNWs6Z967nk91psRA8DROHIwFMzXVxLpNzhVTy4NTyYRwLYh5ggCWgTBLFJRsw+nFBdKIJlRL2aPSxjMd4/++Fe1hdTxuEkKzkhbFNaZ+kODly0qKJZ75IwqqN597OkJGqqd4l5EMIo/p7PJ10CZcu0vooGnkGkwweqzzs3gE2Cku/9D+P+P/gDCV3RNRaTINn8oSKjqV7V3gDTgkA39EIqiYbSJCgyalGlQv7xT2ui4Iq+lQl3poPORw3FxRuqPYiUiwQaGUcUH4Z9r2edE/avf3qu8Z4Y7qeuLYm4kz2rsnDFy/Qv+GSROA38LBzY74IibHUQEsf+gVAalS9+il9xRa7+l8CiaEyRXcfHJMVEYO65FXIyYlli5jhAi+DDI+UUv+DuZSkkvVi7kc6OgElKWphgqO5c0h6ORxdjy2wzxfRFUP1XH3qAA/vlJuvQpaAMC4k+8';
  const _INTEGRITY_HASH = '8109d3b92e93733abe3769bcf802c61380bac3bc11cbd97e1b650de1b653b7c3';
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
