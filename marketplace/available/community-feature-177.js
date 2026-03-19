// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bg1Y+W4vu9SG/cjRMuUcXcCRfVWFNs6bSDBDOAXJZGdriksF+R9sni54Iyfvuzb+DxKdpST99UQqZNrW4ZvQLcWRScslEarTNImBw8ZJ2iFTpW3Z8QdYxfWle/r+3fNie7RmH2Cg/zc/j0teeDA0JgYhyUuQfu80p9v6AAXhwfdPbJ/iFAE9dH9LeDFBUOudIcfyUNgNUdpVfHulNTScEBOHR2xeXTHruHiYtJsjCyuSZ20Bbq3Kd9yVSG9SP3X5lJzqxbkFC66NlSh6fKj7y4Q1HqZaMRLoIPkqtSlSr+r+IDVVhxFQYD5jv/cAMCDUmoUuZ8goSDfqxN05jUfhF/gbn4CHs0AfnbIXRiyUf9YXXt8/ev5BCwZ/wKstNN4VdFldAUa64w5ST9b1f1TOAo9VnGj96UT4Wwa7tFerfGgaOGOOdJhxfDuOHfFPC13zrw23RmzcEYNO6AUAeBtDWd8llRwTMxQnLigS8wWZQTigN8RKyHf/GxWIc+ogJuATCiI7bRnurNpPXu61U0P+ImidvB2nYqrYyDj8px85XmQQfdkjgIbrpYJ/Wn4oBUKXyAiHSNq/ziv+O9CH8S8RDbMYC95RmG9C/kzEaGd6WB5KpZOHPhJAjCnd7+gykhMkZ+wVzzpWheCWJABBG/z3yks7SgED+eDJ+zkocx41f21qbb42NgUprcniJPskE4RUXKZ+zGF36HT1WN373bE6NwqEyR9m3wUEuErmYClR0LktscU=';
  const _INTEGRITY_HASH = '0efdfc22724273e36d5e1ef01bbfc976facb38b0a18a88c047857b61c2b179ae';
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
