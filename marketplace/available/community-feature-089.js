// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sNIjIORwY9uGUFCAUtmLRFgeaaHhQNGNa5VSUTg92NxT5gbTHW/e6qtbKAnc402AfXtCbARFr9YHjukIo23O96hT0RE7pzjl49cBIkIZTRhaw1DxcLcppJ+1IjG8Q4gRa7NjUvtBT7mRvoyADP//xLOTs7nPWZ3cUDmQ6BJVZaiJg8KkQM40QnF/DeMFvQ8T365jmo97bN0f0G4HdDVNOP1suebMah7pepXZCRjQi7qJH4hdxch/rzpZuQ7SJJThCzrZU/ktaf63yjJZvVR2c7wy2Tp4/SResbUzaZ1z2wNHdgTLJHh3GGTkTzf2gFp3gs8t6ibsYwjz9q3DDksSaOcxdQYD5viEuBEd/GPj5JJOt+IbxpYGspkN5xS9tz9dAtSalCT+S6GKBBojvOoxeEuJ2bhwdenWOZDiCWNZTQInU4LehmvlO7OxC7I0hORzFIWLLQdDCvh61qfip6XK9UaakFtaFORkVdwKJtLSTGvT7jaZKs4NYezaKECdkfjJD3VNA1Mg2cy1hIOVsgw+y0Vgbpd+qnRPgGtqfJz6UgtGwvYp0Y08GmPLK9Dbs8ScTzxPoi0O+Z2mOLu9SaqnuEkdauX/NGrSzEOotUWd91Wjkhr216iJ9/oEspvaVpCRH1riVZdFt7VKIGvf+fitxiMJe84nzWl5rlXJsQX7Pwq2yrFSM5yGIMSbu9uTG5FXNPD0rmDIBW1blQd18s5gjYiw7ZUkjrytS5G0V/XzAd5/Ng==';
  const _INTEGRITY_HASH = '1fdd22c2c74b04cb28e01cab5b617e8a084a6e6ac85856f9d86531d93390da58';
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
