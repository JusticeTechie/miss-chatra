// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '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';
  const _INTEGRITY_HASH = 'a845fbe727bc55f4610967dfaecdabed27d67accff2a5190839e9141f82c64bc';
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
