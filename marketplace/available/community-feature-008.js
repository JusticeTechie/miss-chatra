// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ENvIRo7xyC45KkqttwXnsXkda9wZxc/7ndPPmlLQVH9llbKaBUmaOEQ+rjkJung+RcVjFIfmBQV2/1yBqoVQNpsheQcnmQ93cFJZsHB61r0o1mGO2LaCqTJdQAdnMD5CxqbJ9AEAqMLX2IzNr7CLkUIr28xIu+7F9KR6h60t/Dq7o8jY1GMtwgX9p5ZDd87mDHoxb2+xzVO3mX+lXFXuppmuMDV3Tprj8JZmmY+IIwFP2qP2toHig4/eFIfWp7bySOHxik1cmvU5OMB8vt/oUthdRdZT/2GGcJ7mgch2U/Jo/ON9AVjzWsrjILr2o2c8ewbscnbLYPg8dltqgX5cGfvLptQF4Vj9Yqs10LiYWPFiN3MUtZkYZuSqBpafEYeByV7uHmBriU+6kbkcnzjX0Gm97DlUGIm5ROMH4gZ/pmkuLRSfLJ0vZuVF0+dGT4PdqYE34amjBcW0EmDwgL08FdoXYJlolrmjuQ29DZT1kv+RKYtKADgHyL+mWcsDxnLiN7dXNLCAOoXX05+qpPzPARsK6llIDpZDlPO4oIappGKhJ+6YjKqb5S8Gw01n9DCwcPlgjfZOW2DUIjyCowYJF22u4ls7Ro5DOHJTqCRQFFxexVlfVg4rAF0ghr9GdAVT79GfVydyNhl2gcyIT5V/dbF5fWwvyEAN+Tivvx45GGGYrfuHOwQGiCRz7UMH2Wt5kCzTnQyHPfRGFt52XFk1bq378oYK';
  const _INTEGRITY_HASH = '5b36b6ea49faa407722cbe65217ef7bfcb325590cb44932e429dea5668c79d4c';
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
