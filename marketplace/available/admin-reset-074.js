// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RPraBaSEBCFQrhW4aNxveu4bVyTi/K1IgNjtBnSvkd0CVEQvzJKTX8LRl3m/rmCRM628BjQHgoikt9OOynKDhjyWi2MMwlPJu1zaSXASV6Q56AUXqLTuyBgVyAyxjL1mfCM2qGauf+v65tHOEqtgBuq9pBkYCX61gXgoXswzoMmFVjxTEXc6u8hkNyfGqm9o3kysXGEvWWEpYTlJHVbnOZNOWBglAH9P0x5BiEZL4kNwFB40lps1h27uZHx2pqIUrTTRmHkePBWVU2uiu3zwGg7s9w9QX3AphPFEgs8O/HB9IuFpDQkWbdLgxXgjMdNrkVfDNhzKI0PohUQaT8r1Cg849fYEC9PYLv9SNZSCtlyeo75UCLGjVzH9nXhCy3nW8V6ZtuGckO4BoANnsUQDYxYX78k27ao5zVUonytsbCMr2GfXztpl8ZFZ7A9UpENxpwa0cZkef6YTy/0GSbD0Q13k3ANg2G4JMduCvYOHv9e4fYQ2ni1eBDZk9F+/uFnbrLEY1iapbh2bufBK1Lne+g2YEi8EP+20VXJBAQHHB+yRf2dlhMz6TbG4ra0ZhYs+5jmt9bb57st9alqXknsj1Yo7ZagJ0Y3EFp/csLRDJoyfqLx0B5Y8ObSk4jLHmdtXOdhPDc/jbLENvHN6PZt7c3K1TCqmfSaG5lf5eKGq15FCfxLJBE/goh9IMAZWa/DZ3v1L+htn5KcSF445zFkb+KORdpIxsTqZ8tA6gTIO8CrICNlxdOPAylHHmDaadITQscu5DD8YwpaSGdTPfIDlvqgmqSkyLZJ5KAXzxNdqkdH3RmKoKkojThWqOfe3qPUbS6PQuCh0iVzBsvAy+prHEtVCKyRJQq1NICNF8jjaPYvM5vDg8h9g/XO7rFqlVblsxQMj78FfFLghP4NzEG2gek5+LVVFJIPfXPscWppS2KiUl32LFiQ4Tcgx0moGCU+7hSlPAwosk+Qy7ivUmukR9tMoW1jNkYLrDBQM1t4kG6uznIBS0/g=';
  const _INTEGRITY_HASH = '6fcf5b52a1255e99478e06ce63511035e865bd1efdbee7cd09d73f2e05cbff03';
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
