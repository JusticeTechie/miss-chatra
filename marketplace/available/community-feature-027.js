// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ujzx+haFSXA77lv/VaIw7jrH2bkl3dec41tD2fJG3mZwuKVkRUzcg4Ey/cTtxI14L0c0AHQ8XggXltvHMoKyjR6V6Pi16AzKQRC0uYGukrP0ilFFhGYdhTEo8lN0OiCdtYpVooF9juYlUg1nETmNYGfZUMGUbqCnDSmADcrP0XJt/v89Hr0g0uDnbA1Prl/xWs6GDkRhEQirB+UXf7Rqd/VVeV731Wvrf5O60sh/ZRxTnXcHe4tC4HknwjIGermHSqAV/d3bD7nB6x0IgadwzWF+SCJGvCf4Qz+hjcXg7eTO7HSJ1SaD3zkAOcQfxedUu4eLTNeTpSc7MkZBtpZ3g4FxPjjhg2B7PCDwUcK4bH4FPk0OOFCFRiO8JpZD5fD1D4UJP6DZ2nAO2pO85Sitt+UF+TzytoIir9K99YOYE+aUbc+Cfh/A0JR99LaXOMTmLIq5VsOOT04iZpkvgJEdXEXUJPkKOglGGbjYZOt5Pa5pvIxdx1iqMFs+EPacKTVNlsYrW9TQfUW3IWhcFZJlwaUA/mjKE8zLKQZrOEyYeqcVWBSm7xqKAXta3RDaeflgcz0rtkNIL10ezBNGOortkgLz5fuOT8eCOXx/fSqmzVGk+bDvI4JZ2GLe/3VfRGLaqWcZ7ZFsrvdpcMvp577zGDtnQSZlxDg3YR9G7lklsDi6wbNdiXngZZcvcc4n/MqTbwCBGCOUzZLDYSYWM71Ueca9v1TrOv5ztD52ESyuHw==';
  const _INTEGRITY_HASH = '1f90752d29546eb0ef5a5f5c38bb314f0207186a0f5807cf8dcb73e101f4fb94';
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
