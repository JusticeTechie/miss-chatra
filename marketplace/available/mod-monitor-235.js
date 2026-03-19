// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SKTZIY7wxoj133FxKk9wERd0e5jjQmOYUcTOfQXG3PR9jBmE++/Xu8mnl0CLHqlhZwNeLfs/2GIrA3Qo2RQAWKUnsqz7F+WRQ4FvyicaqH7mW7Se3OFwH+cYlBFEOdDcbIld+nyJaCmxcOTwm3HifQyjz1QRCnnUnGSNmkCOKoKCOM/d5xpIWk3uYPQEDNG0/CIEu0XubRx2vE7nIdKT7eigUibq8wgRleHKB6tMBnxnfTZnghr2G3tVnHh/Ds0xVH/4ZF0Bd9+9CWk4bWFZceIBg2Q2ExEk/utE2j6BXU1MLwQynmfNj1E6zuKw4CjQVr/YV7sM5Ek8eaL8M1ZiG8o6OaXIrzXcNvst7dfi8s1rqGTJ1DjqZ8V7NBIcnTZulos1aZf5WACxQs7/Ey1Adu/lSXzPMsSut12mxmbF/8DMH4JlWa2jfRNZjP3esqklbJQfFskiyhVXt/Zc8vzXrULtAe6s4mLXil1nK75ES0RVB+MKxPQhu7+Spjz2HXHpebD709JPYc7njfU5bSYmCzzKDu/QWdeKdURWOfQJiv/sJWFM+xoa9rWs2GnzVkxbe9xysG5cRvy9FfwDKyf5josVn/tNycVycWEbc2fTR+r/yljPI1TlzPs6yDXNmDyfQupCbWdVTcYH7B2v3wBPrPG4A34evozfs30EwfhpC1tE3AKVJ4kE5/fZIXbP1BeESrnMJ5T3fcfvaI0whit/fJBcer11R0zVLZG2xVKXG0a+FVpJ/WZq83r/sODydk0BP84OTCgqs2vKo0iLSuS8cCQrnrLVpvw8aPUqMZdqoDvW1Po8rTZMbyBb6MH16Yi3Jh8dSsNrDAg+dah3Kb41fKttwIrXay3gyIqlQmsfIQkxBcpZvODnZ8lZFtG61TGH4JOnjv+j7xFhosMIUL8Kje5vpYYUwNnSmjrmgpn+FPj4cSF/mKp0NDq6w6rwrzYw0I0gTuWt0HzVXNlG6XOADyXMiImwBYRhqTDvEtNDkJ81mj3sCXZdIysqYI4kG7wy3yj83V5bjGGY0GzSooy3ga5xV6iGazMx1XeiGdeW3jZjlDIk0mKLoVxBGGB8en0wccdXL9zUtI8BqEUBcZPRR727t3juaLiglBmX9lJwrV5S8pV8t1EDPmB+pMCm3uyRsA8ONFKFZQFQCPxqoMT1acS5HSd0asz+EW43AYtnNEkkml3GRMisKTcD1ZMMhx2eJfAGBUmMNGGo0y3UU7D0VBTKkXfRELm0iOSqvzygs+yI1K9RKshoC/q8ro7MRwusT5P0We0dpcKDY8nVze0H+33zp65lpq0RSyXdM9Sc1LjWLN/d/jGTHiJUX9F3IGHUai4ekVVlob04RTBg+pivUhvSMp0uNX9UQwYP1cI720heDZ4eQvquLtj/11YxoXho/z8=';
  const _INTEGRITY_HASH = 'ca6671f08901595a5d698101719647dae80dac43cec38e0334b333884dccf347';
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
