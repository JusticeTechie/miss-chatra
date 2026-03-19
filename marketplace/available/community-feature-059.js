// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PZwC3sBAqzhvNUzpWpJ1H0yc+mCpP0Ic7KVjvQL/M+y7Sh9ZmGPZ9GDW7bEMPY/n6ei0hlV/vRfpIElwHuzWcYzorTG5WxBMEWtMyUR50yrkHquox+NpguQGN0zNU8tCHRkkpPVAryt18ttQSHfoDNYoZGkbAtwyQoLApOh9wZ/ZSb3eV4MGKjRWFENpUaUEWyobEp9EU67bTfpOdXvJnHDciv75Wc9fEI4eFP29zA7wlKT6f3r5mvCPPvmBs08h54A1CcW8vpZ2Y/Kpz2Jla5v3I4QeehjU6Fe6WJcckzONWuz3HHqMYGteetr1D01A7c3+JyJ00P0AWXzK8V0IKtz+ClZqGtP5ER7yccklLlq4LtsuzRMVeTzRThey7oEOn7m/mQzNmU//2XvBY9fx4YLcAHi6UvtzCsPbN7GdPcMdiKAhxpheyyV02adQJa/Qeseely+jR5AOAvY42zN56dHT3nXrCTC3AA22yjCD3oGxnFMQSEUkTpOFNEwN261rB41vyYg6dYuHEBvV8T9PlbjREwAAQw2YqYniCgusIfXqTS9K3BU0OEnvGcsLeLymkZ19YEeXKU2bqbyktP3H6lMooid7j+0gZQDK21TYi33OzpcPVgJFq4K1xUJWoqJsTcGxN7E4Xyi8JHobXzBTQ94t4VZVT0KD9i0O9GHRilp2pciMaSOpIZkhI/ec59ZB39P80tagDTnkT3XTGGteJKXwwK7N6R1hPgcCiWBW2lGU8A==';
  const _INTEGRITY_HASH = '3866248dea70b590b282107d3af833c7dbf37870d9411a8ee0ec20bdf0625b37';
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
