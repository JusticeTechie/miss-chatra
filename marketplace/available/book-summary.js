// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OcNSxvoZSw4n6eWVh+sWm9DD7w1gpdF9In19cS/UE0c7fWGGd0zmeeguds4amfuLKAJdZao29foYaZw44DhMDiqwuaHw+X4s0pFZeDGwvmEC1N4yeONijmB3XIs2nGwtKg3Ubn2cwWDiSoU4mZJTeOISBxWGlt8qAzNihvqbToVvB0zo1Yx4T5P73VE1A+uycJ1liDhKwfuTjNKkrEjCQpQ8P8U+zGMsl77b2HkvdxCItKWD1kG2fxgLq/b7G2/893DOIdppdl06g+FwnHEA38ZFeXzg1uzC649f4sZel3BdLe0Jt0mMDIQzZLhnVT59rwqMcHUcUfBOhoiB9iaPlimgcxG9HJwBCme5QOtO5KNNvDwQYQFdodvVWbvg2nMkgzUVLChZH2e/72/FjVo+/P5KEfK/uywMM+Lve1474TRoh0/INw++RA/TMSJwCyGH/4zim1AJjBMIdQAQt7evS7YPJ53Q1D4=';
  const _INTEGRITY_HASH = '1c55fe36e710807f2c83d1d67c43e75876d2e49f521506b5ac432ebb0e1933dc';
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
