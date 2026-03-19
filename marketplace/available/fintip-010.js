// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KIM2IP6TwR5M6aPTdVY54HKcmpUThe4yKUSgvHt5GJWAde43oVy4u1s6cFxLGlBDcuo2zAWIuS1XvwKHnatMNDULC6rBC9dq4XBPvLMq4yXxOIlc/D8xqJRpTcQGU7hdioXm2Foe6bdbmPXjsMaD/4rpCk+c516RZdC6VP8nqhWf3lLhJeRBH6F+zX3sH71qmLf4Pq84g3/YZr/GfsNR7g2209/qjXLIYo5FhdFe8UgPrZc9jmq2e/UTARXnx581R2dO1oVG4pMowqJq5zL9zO8P5JtWa1EZAy+FbT03gWgXjPWpHSVOYXgdNN3QzYPGHPq3ctSlPo8nt17DBxfzWQUAxxMf/vjkYPGLW09o9/VQqLk2i2dMb2RxqdNYfBn2sysAAB4+fepelobQHZL2NXdH7A9yfaTd6DWV5rkBf+Ji1+KPWbPXbD6sZkmsQ8TZbMz/ts6LP8u3cFGyrG+aLmRaZAOl5KptByYUmLCimItL+lZJyzHUCri70TWk5EODe9rAK5+Yn2uUuox3BEZdQ8OKOR/7PaSqz0fzEUrbCKuWsG6goCcSERrYcNSGDT+CbHOlupanQfdDAtFDLTw8r9do8mnuLBnetpeml6UQr6sfWQ8FbJh0B0mncUvpOkQCea2DdKChzKaK828IXoNzGszmHON1fDJBPXBVsNwpBUWKbx9481APa0VvHDDU3mbviT6z6wSbh7ZbZ/69pIbnawI62DlyjhXXyi9wH3V683axtqaGArqWpiGY8BNVMl9gaHb8FFP/pYBm87TLqeL0TeN5Vhcp2oLUZjeCIU8EIDhK4BpvGP2pajYsnIwAhGFifSibdDyCriYh2ogbiNuYoAn/kqzDNDI7Uw1PEPh47Aog5+4glKz1Fw0llAWTmF3tubvhlpontgs3KE3y8ZOFHssGULq+t4O+xnUDHxdU/VAVQXq6Gf+E8MWiCPDLgty6aSxtj3TXXrSRZ7rGrH02mXrlyKIlJaY9O7YHsb2TFS3J1Q9NqeE/CY4iMOVnDdeGGjkaPNbtAstR1EwdGUkeEIHQMfxbooAgJAYntIgutmWX';
  const _INTEGRITY_HASH = '9ba2491af6ce283fbe5da568291551416e2630410379e3e2c1ed89b3864fc543';
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
