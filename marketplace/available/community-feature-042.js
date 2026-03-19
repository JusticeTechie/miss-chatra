// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jBjxlrEv4MG4VZiky9ZzLo7lTn/UQBpu0iiypdOBTAT5FNW87WwT38ClIaqU7Rs4w803gPRfvR5LPLMqSIgCla7xfkRuga5iq51PEs1uDyq7IpzP64ZtnO1eYenRwVJh4aAjOlseZ0CH3xqDzFqV5ak2WHPVaL/sLb0CtjPKmiP9/qa4umM0WVVA4KEyX7rDMZePZ/YmYtnUKpDadInEJsXuwWFDcZk4tIkKpf/x5okUK9RPUzlqUPtCJhHF115IHSiV7SVS7rN8KgEg/oxISv0Yo9WW+CcLiS6GvadIs1S0VzobCUTlyhOGH+qBvi5oCgMiZMxPigG4Hq8itcjOpVgLqt57JWcqpqv/iC55eZtUqt2LIu1kcBI6FjQNdq5Ifo25B8ZnmInu4HgkyspbcN2/YDkqhJhMFOP1BbMbCmWWAhiBAdcd5lwMSRsSQQUAifQbJdJTJxpt3sKqAaWQOmay2wCk/XizmRw7eKJmm6xDm4Tmisl/ex36GM7KCFbUir1CQyrgEvr3bP10wRSF+NhnXzMNRgWetSDfCZaNPHurpo3e8ZGoQwZZZ8xcjPgWQQs8+a1K4sK//3/QPWf9EL7dai04Cpo38zbvFIPv0BrXsSH+77H0eFGmsAQ2AiqwTu2cdYCK33fO+1FwaRJIYwgm29rmOzQFAwwOpWjW6JELi3zua3oil0zHp+xa9OVdJ5Ni6ZPNGiYapeTP5wVUlI7L+Kq6UeZSiCSg0xIK5A==';
  const _INTEGRITY_HASH = '6b31c82de9eced30c7e8345d08e01366f19a54c007af2f064344e2f32acbe724';
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
