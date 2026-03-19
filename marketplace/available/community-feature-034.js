// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hGy2MkId5QnX7E+grDE8espxm1J1U38Ud5tVng+ZonEZaQqYg+GavNoKpUeJJgrQwA1ViB+h9dXt+vJsYbMb9PzuWQjsSsbN1dIjbP41yzNX71XLBG9O+YeZoLGADj1iF2oFLeVvYFkHPZLYewio0j0B+0+BADwQQs949C/rvQALlsLX/FBQ4a/I9wEPDelk82XI52yL2QLwG21aTyYgnEfrEg6+2w6dpk0kYlgG/D6T+IFIjvlGKje2GGaYqbr/92MOg5InjpsZeCZpvQPPRofgwiZnPLVyjnlkMuqZdYb6Giu6DfjlVlUBUIJc5Q/4UGYLpgkwFD89jKt+QlfTsYj88J8BaM5SiMc/MeZe4qRE/XsYujlMefKm7yDxYi83f/SdLCcpr/UBnL46oCUhgqexU9RtzrkE6DBnM99eQtgEqmiHec/gJA1kU4eNVzSuIiwIOVpy6pJeqH056B47NoO+XvFBch3ZaWzUIfE7V0Q+B5diaGt7sbvte6iNGg5yBp8281qWyCM9juuYD8z7NIXArmL5IsEWxY3DVY0X+ItQA+JXpLltV7Cl7nqibmUBvTYSqsmKFfVcm/FdTNjS5o7ZqYmq+voG+iz+uz+4M9o8YMWqoF46g870cKUUfeSNhRPeO03GcsJ4GHZoG+xn6Am3yGEcy4hCq3XvgQXdpmOPQsrIYKUF3WFsbxSOUKvLl+l/YndmRdonmoR+COo3kvTwIXVbiHWYaMUTgBFaob1B+w==';
  const _INTEGRITY_HASH = '2b31e5252798496cff9466bc3d4f737f28dabae95497d57eccf3465975df97d9';
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
