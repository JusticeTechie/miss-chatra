// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uncbLneePWk7WoxG/NCvB/ZZerNy8qYr6uT2EXcN2b0r5pkYU4bmeL4unr1dCMzzU5QkUgi3XNcJopfFcFqZ8QXXH6nQ1JBIsqZoXt/jXeSGlRcOdiCQcy1u3G1OFt+O0eUhNxGlhIlsQJ+up2YUXjN9j8WCSrWRtU3B1raAfkBYWmvcFr8iabhQTsna+Wmzzc//Gzce4gmlo+GvorEL2EX86R4QJwsFYVCdcck8D4TqUEfiLDkHifh0xS4xoR+jZhhaWNKg2Nj6nneSs3rYWfKZbYxacHXjQeiEBmerTp9WtlIpKorJuAaS0viuDZiLTnI7XLKgMzsRBki9GMQxRK+jmHTIozlkQTZ0zxemxFPihtVN0vPJkobUVyjRe4/JK27uIsPCPa8gBMG83vlw9MnHYoGfs/H7ram+UN1D1M4pIj9ZSuslMpwLqGIq2fF8PC/h+Fw/WejjSaehJmeAgp74PlRm2oXpD3eGHI53uC08xvoTGxrzKsyhxy4xIXDOBUE+u5qGdDI9nLacl6ZCz/pSv0AW9zNU9uNc4wmLrScZZgHpEtvF1LRrizrSHA6Gm/3RY8viG79XcWzburNFfOTmjHriTXXJhVF2OsShP2FFWTJy4T+PuFJm4MsVkHl+FGXPv4cFFZfHvJbRTxksH3RvK4vB24+fYDU6KP8rwgHWFLBjEBxWV3FunOxvHiTV/o6B4mvGAid+a2BAbXLnFlYES7MimHELy4mu/sdFK+lRh5BmmNsZSplgPMirzpSzL9OYep0BkIH1mbEsh+6TRkwRBs5Huhf1sVaeCnV8RXe/AL8VOljAnncbnulK+SYncTAr5lAAzDUR4I1QUAnTYSVF898/NhNuVRSzpxY7wiZsReeMTwjSABBbTbXV+/K3kFv6spr85tJRwWIBq2AC7SC44LjU3sF0BMfnor7MCJ/gJBqrMOJmvzfEX9PP31O8QYBQqKM18mQ77mSYzLz6speuQO6vGVgI/sC42H9BWX0BEUbIfv8+awsOe71vilRQbZ1nGUUAwO2XN0p9Sfj23Nf9vhBMhTnFCyXTqjKeMSJgt6+ncxjuzCv9VVQsR8AYopee9jb3N9LuXf3fdCfFes0cMeV62U+egarjBxzXg60eKbfox7z+qtSAisvvEzk3tYIA7s/7Ks+jGNS5ehxrYJjSYWv+Dm8SMoZlDBSm8AXkeQwo0ZLRd3Raf/TMNxFxSYayiTNYUwsYPg==';
  const _INTEGRITY_HASH = '53549ddaffa0e3b58f28cd11c6eaa4583e1f8e0ccc143cc2718fe136c143112f';
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
