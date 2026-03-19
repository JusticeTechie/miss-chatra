// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wrHPRFaqCxC4scGruvtmVERdlTY0cfDxvxFkdOP+3AdNrtdp9ysd0vQXj53K7QHZuBGK/IJJrV8F0m8FkIy5T3FGDSKej2cqads1GrGGzMqmyIQYsI5LkqYa8lkoXBxiJ1jAmzlwBhYu9ubfZ299QgUjzZlEayr9LjxrOnTmbRjhFDKuSR6JooGzfvEZ981PL8Ku4mpk0fsOjHxzdLYrUosMV0I3VCbi2dbqxsKjeyFeYLAxs6B4nnKipGLINzwOpSX6XfUXESE9ZXdsetWSDmqchK37LHazcyzI2AC8GsiD1U1kBleIeuZm99Mu3MgActCXpMr35bovOI232RrZPH1BZTuG0rfAWjGUGqkN1Y6ueJgmvS/7vzWfX44UcK45yW40Ox4vJTsOPwqU7Lv/qqqugb6ueesl3bClWes8YgBSi72rEj7Zi7sFZaVvJax23vfu38ccZpmJD0P9NER0ww36e93UZ+9WhxTjMDCf+Kk4xSoHudSeMS5cmSNE6M62EKDcYnJx+LkOFyr7EYWrixNCNd/bu4o3Ub61OQ0EWqFedHUf0pBRxaYT+sUF7iN+ydXhPFHkcKDF84rojgozWI9Gt3vQSSXSlPqD80RPBzlxBjhfRIORRm43mOOAr6zrh8RZx74eT7VPI6PdDQ8hgfg0bcVjpbDRCnDr1jXzCrapVe4+aULlaBcTCJOK4AmtrN4uKo1C9GV2XLamFJgA3XP1sSjVGDaKBUuF0w6AKrVzCX44p8JOCL1W8ifm0VNp0TtI/6D4lc5gixiEShgqQkCKOgwlgNCQC9/RVZYAMs5aLuR5f1zN5Yw3be+PyAqKXPGj63EO/Jt1J6koyBM6lhbCKA//z2aDSDzz0yEvHv0qWlUFgJb7McuhiyCSXVnyYKoFZRwNWczRoKmGjW4FNK/NKAmbZFWk8tYiar7nPHiIOqltX77FML4Xh5yd6L+69QzHEMTh4eb+mlxv4dHSAfk6Y3EAN1JR5ZFndPN1auzxwiwmCjK8Gqj+mqLSYdOjyWBCRw==';
  const _INTEGRITY_HASH = '019f6ce7160853444f6e8507f1a60aef41cad45da3b9e682add99b3f980195d8';
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
