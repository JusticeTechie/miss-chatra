// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DFjE3dO2nkwabicrZjjrwALz4e0bnE9vqKywqswRLX9a5dGh0U94tKuw90JpmUcBfYpUxB7IGXq3RX10Xf5VOjt2dQ6oG5fiQEU2iTrOVGFP/Pnk4ZQodY63RvHGGmqBdz99EvpP3zkGCB90Pg28C6RyvCcebZ8g6kCxQwkKSOK21/UgdYCbny0FOpChK/zuvok5gxih5cdcJRw9Xa/gdlpKCOavNRzLjGHomsgIqrLNqdwZyEm+CVTfgRr3bFWu5gGNNnb5M3PaboN2uO2JNLQtlf8URnC5zkzjNev8wMR0QqpZCP1UFFlDERIzs/qOyhdTEHXVHAbcxojYPWaLNPpexxXzfsYwHLDWE3+gH6Jhff326zp0OQmedd3hbuh3WlTbOrqEtzXoR1ZABxn0CB3hUMZSdnyxH5N8F6xuATXtz26ez1562S5nTatpHEtNe7mHeRz9lVXX/KrL2dvhUzba/Qig4P6VX4G5UTgpy7Bywya42mNNIu7wFL5uv69FOjsmr2yeLvf73OcI4Y21H4E54OgYr36cZVrTmws6rvxKgeih2Angu6FxNUijvo67rprP2N4ClLirFVmLFNUG4FzC+ufiR2Z/ef6W/TlGndTQHiO3y7dY5EUkcmPhj/Lbs0i+hk7DBjBoSL8l/jXEe3PMF+VUqyPvUYcFwtS2d9ikSYY17RdhfjxFRdetdv5eDTpilVrr/dR+s16iMmKeJhWzFUf76pjYEgIfNRU=';
  const _INTEGRITY_HASH = '0b2a750e0d03fbe86242f4d98e0386c730256da4db45d361f87afb0a1de9c861';
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
