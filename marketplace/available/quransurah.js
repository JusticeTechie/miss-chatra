// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hmWe2TFi4nYtdSO83BL7emY5KNa6iWzTEKnfeilaf9qvaGhdhiIazL3rNl5e4nX7/61vESeRD5ekDGqcy/oBjsl8UgN9EQZd/yl0G5EMulbwGPR+E7Cm8UycwdQvxDT6WbgOQ2rWhZbNant4w05ZxltikwI7pVspNe5XsQ7OzUAO8xti+qcbSOQBGE+bAPHRB2mLi3+8qC1K9PFQrJO8OkEbyG/XibfC8F1NXwIB/FsKy0q3JeHHN55GZKBs45vwgxyKKVIKZpermGuG8A5ph+jvMu/1sqtRAIoyQgOqo9XW2R15RbQ2xUK8za+Xr2JdNWZ5hCwOsULO9GBUCDWF0Do4lIxYlnmByX/onJ2APrNkP5AvGMeqtadxCSkK3LpE+SBix+tkbhATBWyofbDeMcWe84RyXjDUjR8kG8NDH3LmdRUfccg491l+INY6rJD1AsBQTbfmP+h6Iuw+TM+QGH/YKU7roth4tlRqz/5I8NH+0A4FLJdQuhIFu3M9EZCu89NyVINIb6k7EqJj7JFpCx2B+MCfLRUyTQVEykJ+GsxkUUn687tYQSX3jO25xonjfA2iZSHDRsYtpfqXcf0iXgN2Oyy29aNqZLwtwn6rKYXg8CVDRmBrCdL3nEzhZVTaUQwUnUYcPwu9uPrhKO6OJCHXHwsrESpSmOXStZoeopTmiR5Htx+R9YBx9i5zNYq03a7dpoW5L9PulxnFcF5uKSLHLYMIlQLs3+/0amdfhaNoC/ORB3z9PHuk8dFxm1m0JusYEeZhnoxBt0a2/RnLkPg+9Dyacpg1UnL66r6BR64/vIytOfmRRRcKmzQv7ylIPPEv/aRggWxX2dXsQHKOdd/qylG81pTpibjHvGaZvGJMQaIF5JF7855vdBjQnKQuqiC66zxYvwcaokZhfYZWpR2Ff9QB/76Xv474VOOHvNqw02ug2g0Axd1v5M7Ofjst/i+r8hWLPVtmtYVQOfbi2UshchSqlKIoE9/wc9+ID9ij10BshVvOKkax4hLsMS1WXlXX50nAZsyPGDhoyWB63x9wPSTYE0m12p9EibcmqUfW6j8Am+mlLabMk9sTxLG6rOSpSmx5thcxwT2uIsVF7V7azP5slrzCg09A8Ww8bPrQB90FfZdCeqAAzZf8Ddb7EJa79SdJrkw1M1XkyDqGP7beo2bBjEOIejldqGLikTTpW4P9F+kcHUpJrjcCXE08tXIby63h';
  const _INTEGRITY_HASH = 'be887efa41c4bb38ae83d4f816d599104a0817be6622019f66dfc659155a604b';
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
