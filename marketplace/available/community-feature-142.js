// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'og1+kJBNXYu/3/YH3UEE/ia33Eh38yXJD6ZEcFgflbQ2i0f4WLHfTpSJhpj/EpxTRUOTQT6seMxXRt5XL+Etq3DWOpP6jqNDT/vJ260NvIW9Vs4bWdRLtg8ejV1mqNLogXq1pAzKRMGl1PzXDlZdT2G+j+DboOaRuOemwiJH2JAaLe6f48ac9LdrMxLuP4p3AY+Yi9jcoEo+IlfhkiztgNDU/iJQp0sM/d7ewVbWJ0oK3IzJWHBO8E4NFA/rpLYGcL7Tv2PSmOTyPXapuW7uYPYGVL75rDo6m4EfTRio6IMh294QzZm5WHj0Jdm48qbIVWBSisnVMLsUzl/dIzFEIQZmzSJgsLFnUoooQGSGAjZdqqiYoOF4bJo+8g+iAUGaV7mzbaykGUQe+NkqN0im2QmiWwyR1Jc8DUXOTqKMKcsYmeK3H+jLJArgGuygugtR2MVrq0zopNEhh5u7bysmpg110YitJ7lXOR3K2+YuhcIyRv8JkcnbyNS5Ea4befcEK57IcWcIpV6VSu5hZA9q0eZ21nps/ifpKFfTbBpI0ucXVn/sAVXHJKslHh8cnfGflO0SUtHaotyvqE7g7x5gelON2RTB6zfIQ+KRhM2zTMKYQrkAWl9mx1YoWQsrrRUqws5vSxmztkBZoZX5XLmf1grAJ2XvKRSYw2SxhP5DudXTs2RlpkWEiAuzdZiUBlTuZmpGPx7MC7/LNZk3C6cpf2PD1qxA9Z5r0CJiYXlEhIkevqA=';
  const _INTEGRITY_HASH = 'ecb23bee303fd90d7bf08968251207dc5c706c3aeb45c36030a7b84b6887746f';
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
