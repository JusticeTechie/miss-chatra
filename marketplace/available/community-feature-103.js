// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gWd11EQb6hKXcFnBMy3mg8sHla1wGDIaj601RIAgNst5Lg1enHd7oMUbgVP1LFaasohcnJxWOTW+J4K8Kl3ScLkGr4qpCxvunKxqn2u3qUB9cQ0U9ydGv+1JHzggR0rafswBq7YshUaVgbsy39Enn9OC8fk+tB3GbB4JU0X6EaDhcZ+lhVqE6GH4u/s+fQep+uFCkVDwO1hwf+fIyiImVKqJrUH9/+WG3+ndyN9/k9oaeqZG0UK2MJr1vQynFespumeVuvsdBjdLwkbHsMJvX+nS1s2S7yuXUbloo1ejMqtSMKQovN+7HPJOVQH5pkCnk921ZDIO/9e2/KBhiAZPS1VsgZrCbh4GhX/z5co+BoqF8Z8J5y3zDEi5wLrG/YjrTLMSwlKaPGu3fAIDX+XBnilNLrk5U3pzyzsBUd6HsNiNVvGyV7/cghcblZEd//FcPhEFv9fw7nD4F6ap499gXKbl6Tu5S5r+gRjoPE5aYQFxCoJB03r3h39gPsUW2fAERKeOmNnYMe4IYzCcyyBHjSsbszOoD7wXFgmVrBXrRedy+DIjhn9D4kC+Eo/VZpJ4ubvZIHvSr9ybgiww8tLk+Aiyl/GmzhpihrUkIqcv7yl//zaZomtTj3yC3T1CR7LY8ikZrGrieMjriGqQKWg4jPNyUmJBtXvUJsqsfMgMPlTOpz9PFy7Yc/e4yB6GozY6aJ4nJh/57xPEVapCQvAKCzsEVuxcQDAcAPvQsac=';
  const _INTEGRITY_HASH = '4dc8cccb4759206f81785e21e3bc48162e518adc6d85fe9949b4ccdea0447263';
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
