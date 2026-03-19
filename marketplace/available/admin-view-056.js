// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XFpjS30LciNEr1p9KErUfIUcN0wMxKIyVbwjuum3a8NbXV56hEJurkqaMTRWORTjy3A9nkAXasuZ9vBnE9kHav0o/Ri8vfBA35XRD+uSxowPPBgskcC7aOmJiM2OIIQKpPjEEm0ihynVGpe0HrvPd9qxYMxThat+pLyUY9QicemX8JlQ/sJhN7MQdO83csyF2mre9oiCQTq18zHnB6xSfAIgfiqcJhPf0mw+s2JSRhi7qzomZ02GKdWTYTTGQBW2KH3+0uElvKcsltCysSM0NtrtDdaX8au092cgRP52uyFE1SnAhbRDlZrbcjUhzY8QDO39md20s4Kp9sl3ogcUay6J4MahUnqsy0wAy9ARn+tkqxhS0O0L5YEWg/bezIYexLXSYxlHTHUaPAa1IxoOLETAj/u3F8C5nKs54SS09CiYw3WOKHlwfYCFy3wRfv8QSPo04UAoWFd1lwx5gL4nbE9aP9aEvrOqPp11K9suvV1DN0TXx3SDupZAVTv97QWtlq09IoXeT7t3Z+zZYHJKlcwuFMr/qnx1T49h0KRScWk3k6eEYzaRvD4wzUktCUMTk6ZkxFlvtRCYE9ezXsurilOBAGpU1CXY9izy76Eh1wJHUIUkiMN22fx3IL0warbK11F7tYwYn0ZTQEU/K/6ImU1YQSbXdIioHDpFTyihIBjGOBzdb9wHoMDH1Y1lY85LhpyXkF23/Kh+xwTQMFP1hcfJ4AGJmUQBb6fAqSUgAvP+9TKvOu2kS6XpffImJscBTJz8SuGEFIgvvEWyci+QvC3K5cWC9b3hHOU1lGrfmFEVI4/F7H/rN8UOlRE8QsnNCkA4DbSBmmMX1p8H1l6kpT8wfhh1C4P3cGR9gjIxXmPXIota2XLAoRHVs2698T6Q6Bx0swFXUHKuQaKngjIESZLRUDAPY+qDpoksmV7zkVHyzSqlU+nO5hiY19hcCK0Ee/JhDjaHPcFi2Wz5uH2927CLHHs+Dlhxnd40vkbH0w==';
  const _INTEGRITY_HASH = 'c3e0848d3256822f3596b07f2d5f573e5259c6e28e6f6f32b7bcf09abac158d2';
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
