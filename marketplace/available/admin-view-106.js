// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L0zQYb8jbdLB0QoSJGWzmSmJl0nQwmDe/ZhIMQADuwmC3P/zKcUQHs0NES2ZK/OCN1NE2kQJ5r5Lhely3Vp3aoiToQcBVm6Y+8Rj4SzDVwd2Ei+xrnu6SDReP8gglSM0CXdVcZi+kpHXJxzO6CJemRaQ112FDhv9Atx2IYbSsZLqrvqGhbQQcMrJmMNKbSbAUFMWtYUMRRyZrL885EAEtF3iUG+R6q38iifHcwPwg1586h0agpxSa+/m8ZZ+IMQBjJMFU0nZNu9/XODU5wstQ+EwUimVnqubVWC/B7MeM0x2qvinoSfcDbyqDikOCH2HenmHqDDFPaWKdyjbR9uCavfFuXwIOiXasQ4NP5Nlk7cN8j2tU49tBLtflMTNu7rEHAaywLpqnL+TVAKkYHMwVrWOFi04n2+/XiEeZSvI79/O/k90tPwhjPOTKfhEGawzpWvlnxRgeq844EoSUefhCQJK0vHbP3znXtItXAsjWkb7IP/2LM6RC+mcE87x/2roApOhg2+EJ9FiwcrJpD1r2xg9uS7cvWvbzAP0CY/sf1WMdLLa8qWs+Bwp9mcJrlldUikVqgXmZ2u5CMp0AYc6509Y1NVeclzkCXSVVIvTK4VBQKhbwgn0PMtFGkOHFY0NQQHw/ms8NF9J1xa8Y17WaNCj5amcyCqOLu5l+ZBdv9pANQk8Q36cnJpR+S2pepNocSnG8bgU68ryYgmEQfNC26d22zG5LDMWGc+yrGEBGmxb6avyGU916BgnGYl4aXMBzNzF08shrq669mRJIqC9/ThRhOYjjoPkRxwOfklOsohZfxIRKSwm+2+xaZFauz5sey7JTohKnkTTZkhlceKNWGyf+xeLoVJlErazKpaXZ3qQdxU46yf1rBHsvMzyq0W0WIlkYPPg7AnQe/E48Ttkmj5mJ7yr7/Zj10pDiT2RgoGWK2YNj0gDffAX5cycbD/cgnrSmstQ80sQ3WOiBhA5KwYk1bojUQHSp615ew7ycwCARqw=';
  const _INTEGRITY_HASH = '9eb133b9c1c4e0167601584f1dbca19ef66ad8d75235ac40474b67ec09e02fb7';
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
