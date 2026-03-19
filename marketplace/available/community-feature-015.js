// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ADZiBvCnBE/LWlbt8cBFd+jUeGoUHecow5RvmNgvzRulm+PCwkoag0NBdFgGLEDqahN0aIq9/pXyJEa+ThaTxaPKPLib3bdACo5U5kUxM/59varqc3k80+HoS0WmeXesLk9TtbhI3KpVr4ybM7//nj3klCv7mchKw94j5FTZSsBzErbAnw3kerH3gEob1cPUKJUzgKXhVqqagYIMXM7Nmfjh+b+qONmVWlq+bq4c8wmYGV0+pb6+SYIEo69Us3bccAp640xxXQWSK7BeiHSejrIaO60TRBEhuxGCckpsggOSqpUVKDQtTgF9EID+aZ1+pj4pyHK/RWpIlPk9nVg9xapW9YrTKCEkzDZvDFpbVluKBA1S89pauOvFpUM8SdnvCXpzD9dppNpa9DA8QlLEvGRlBJ1w4TA+BjbQyMBgCAhCxX2DaP6u/pAZuYiKRTcRDZyosQArkZWXNXPu2IZus1eRPQLY7cri2P7kGgPznTRAQ8rnKRhxXwLdvPFMrDRPw/EkrqoddszcbIC3PUVvCFO3rLJSRCIOvME+7VJtdDDEH5STfKXcE80xzh/nU4HoUDfXBkrxqJk6uoXbF8nR4KVOOd+95drsHEW+wj3+braFpyKwx3ekzNGROHz1V0ZiiniEs9mxrc5U1ohsYi8CX+brJTBT5+XkqxrZuU9g8BTtM8w8NkTsYzGqJE1rjHPffK/s4eMyb/PvwvBvpUmvOhDqKX3ONKjkqYZyIq8Ye0vN1cwwC0o=';
  const _INTEGRITY_HASH = 'dcdbeab16be095e5151098e805aa9c40a6a08ad303b3de4ae00ad605a02240cb';
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
