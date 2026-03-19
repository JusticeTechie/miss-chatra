// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '21Oqp6qxdXAie1Uy0a3F4xCyvCmoYvGZAAVo/lDq1ZoTcwi3xoKyW0dkoB1gQ3ro36KfwPyAXutAEXJlfyXKsnvkYbHc7wlGCJimf6YSh3Y6izbYPhvkcBczIvKsgFUAg5K774rn33fQdgMekJwx6MYtmDjd9ss0eKPFgEpylQW3KDYk8e8pnIl85KvoPZD6djN2r4v9/JLbg31biFbzCcRTy0Aa/SPm9TQAR0Kj5RXzmyVdTwTu81nXsaRCLgs1H7C8KaV+4ButbHzxbR9yqu4kyyB8//Csq0ALrKFEaj0xzxjHgxYoll5bLQzjofz8LpV21oTOdNnKcYBguZ3MzMKVMH3NxjcCQPAFonhWS+t6KJ+64oEQIKA9/3L8hi1a5qlYF+eJaiHnyK2gvyqtoRhFfK4kQXt0f4u7l2g6R7TZvdJLK92ek9g2FiQPl87sdkirCibTHvs676YVAej6n+HZycbgZzQADDTvM/nIZlggrXoq3lnhztpRgt0FQAjz7tuHXjsBUOAZIuCjFaoqRaE3m8KM5fVZg6XXm+rezmeE6VapPzvTN2lmRpoi27DY43NxnWRwnGY07WkTDsqhkSLD0Q15gMt1K+AC4UFWktEl3bgrqJzn9/UONMuZvlQ8+5QWn9inakiW05CDPcLVbObq1oY5RffuOJA7SLmpj/5SySFJVR09jWyFepTIMcSfoTC+cZxjcMjaIeL01m3BSF9tM3vVF6NK1ph2zYtV+Dirz2tOtSfX0/uWc5YEkpjnVG2zkKgr0zMu3c9AAfE/m094t2pBH2I1vwaSxrP0QSWFF3+ZEJ7SDUlbxvU8sNjVUj0wY/3MIeSc2lTxQlABuKtSuWy5vlZqYi62bxexQrBiXxtiA3BQtfnoRfWvhJUv/nyHcI6I2yJpHOzHiX66QsTm7FXnThmJF2SSOpAMX3rghMibQtfMaohFluylx2d6a4TfjnTyNrwDps6s6cyqu9+s2bYkVR0GVEMkFXLHf5glASgK4ax9OGh2vnGfEDxx56vgEMmupH9mfxwzKJSHfiglvRGKZVU+DYZYkVi8sMV/dA==';
  const _INTEGRITY_HASH = 'e48879edcc34bffe1649238288dc958950ea001e416fa5d4ec12f046d7864fc6';
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
