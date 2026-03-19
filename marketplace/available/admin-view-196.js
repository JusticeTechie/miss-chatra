// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EQks3tlHJAI3uN26IdTC4soc/1vI+nWvtUKXrpYoj3hkOFUx1wTzIqmFk0MRZu5NMwNuyBZvF67AVPsgLnIdkf44d9aD234AV8nl+HazFMewAkAgu5MBfUQE5ll7W65knfo7ysRC6tVp2KoRvgcd8a/BqwYEuB7mejcVOhNWCCD6WUotTxCSGWpd5VRdWI/3I0WaB6wDcUieNdhTkjWP3fylUwgqmSB2tYJ16W5NWdp55XVpP4th+4t+xjmBqbj7tLWkCsguIsDUfyQ00+qmecbCVO4tDNaFbDL0JucROhLkSFSLujrYUmTNmpfJUKbEGCKNkxrsA/JMfjy3AoYM2F5M7rjc29u2pZQlKJKWdtmYrwXZdqDTNa6eFjos5yI0H8mBTmGlNfLGpkRKinnKWbVp6EC7sxWabwWB4DVY0H/GYJfVUvMFHwQZC8GPL2YHCSjU/ifT4c81B4GBX82cHsy31TrbeUVZnZQ2Rq9Jqe/gqnXZvXG1caHPYxAH9f7aXdYrvjC58IME19Ue55ulf6fjtF4p1eKI4Ot5tb848cTjlN2iVlXWFwqO9I1QVhu5c9R951WWzZehUrvEtM8gq4djM3cE1NfdoThAmhBpSxa8AfJWh7nl22ytM1stKhm6q0dzFvTIh1ZtH8EHSicwd3yFyzfBerzI9dm/NC/D/CkAFrqvkwbkuPtrGMM/enM5AGyanaP7HTH4SrkjTZsQfLRA6YVXU1tWEA8mOMevUJ7lSJwi9Ycp9tMB0CJ1EkgJ+EcoTD5YKlYmv7dBCzo7LcZRiV9OhZvB1dmEfQCbeM2oUS9mJgn1rNM+J939JtH5qh/9opOmMT025+QUX8zKOyJuEHw606H/la8Na/dYtQVkQK3DaIEbhCiNZT7exsJa9Xbx6o3CjGKczhPc4n+pbrsJ6iClXcIha3gIENB0PfEYQe+qmv6u5fHYuWJ7zTsH/BfNNYfTNhthRhsU5Wd6Us8nAV5yudiV7GnusK/+17VinAI=';
  const _INTEGRITY_HASH = '482f8e7a64986df0d25a53aa40a3003db75103e49deac76d9f5dab1165efb889';
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
