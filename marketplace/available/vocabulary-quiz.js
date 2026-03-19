// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IbFExYO8qf0Nqx8VKc4zZvM0cQlrcVr5WCNnxNsetLv9hOg9/8C1N36zXgdTr5b2E9z2yUa4VKpl7E+rC3tt1EU2An4ormUuewp0oagM653ALrWl13TMq2NXXj6i8apf7Yf+ojlHiB5SzI+hVCOObMAotuYBvV7s5NlodUwf93LzILHIQa+oR1qXZGI4jFHwk3j884DB2Ks10oMDuKUiKtPLBT2+IFvRChKphfvEg1za/JXFBiGFpyGcHfpENTRrZR10BR2HvIIoewq2CqH3f7aHEX4f2JtfG11+c3B2bLI5lTBKnVDaxHo4FaTDwN396Tlu8/Y6JHJCuOjLJXuA6enSjnfpGlBhiG1qIQ/ZwB9bKL+g9HgRB1mKnPn1jEMwY81EwkoytVjSMwPI7/wik34PATUESiy5qriQud4SaflyGgKSWQyUrVIWPN3xmxteUy4/QpIgWDEb7B8X2Zsr8Rmkzsm1lFi+58j6GfIDt+LOF8Q=';
  const _INTEGRITY_HASH = 'e7d794def410b77fcc77994a730f13d232399a14a4eca7b6cf0da369dedfe8ab';
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
