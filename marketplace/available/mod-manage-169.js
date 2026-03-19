// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3JJXgG/nRRZC/LmN2DbR+leLAVH5UWyQW2cbFDomiiRojgpORQ5U4UvRGzSnP4l6SFHifWFmoZgFmBn7/OzjKSY7mbP2zODFIG3F0ciwYEGaBTGeWsd6Mplus99lAJUicZkEKFo3qhorWKonzi8sGonOfLQHy2RXh2p8qHLCEx1bKRrxQB2K17Aqmw0kvR7M9YZvzcM2xDe3Uq8Rdicrsm/J16HREvSNlnJjmI15sfdlENrur+6BASrP9UV627vjxCMvrL5H3EASh5fCNhqldS72QwddZwbUOb3PGpBNAG1kG7A4vR0PvGRSYMtTWPWEyGZn4UCgN/5KhTSgquaI83d5s1TvWkwTO06W1rbhon5k1olDxqnmArWWzdDcrVAjBfR5cDHLcDjnjAeoVvHgn82//fISOGBmhKypBJA1GQG2upnPHT05HggqXU++Q6IyGH9CZ9BiAUNZoOVvScmR831ytdyDlu4bb0m+TbPNoCx5ZeBmESoksT3CR2HCdBMkGcx2OSwRlk3xpwL2cl4Q1Rq/I99M9SgJ6xK78tRqd0oNP7/EOOAOb0q49VLZLUd0Fc6ZeUe5sG2gIWu2dBHDyd5sGxRrDUhKG1t9WPNW/6gOxnqJ/i9dBgnr3ol0+zYXzQ+y7ycMEWmdpqB4Hx8bHpv2gX+LE2LBN8UAxDN8opP3HeDi1bJyLvUTwXWmSG5+OlHvaN8s1ojlh6lyHHVCKqSxp0kKHOXGukfKWAA7HucQ+W6jjPVS6C3gSBmQZbsEc38LOOuYOM9QmI/8jcbz475sfgXgu6pW2OM90IGgDEYKMJ5qhBQqe65eywdM1f78VzXTSfnJmHJZTpS6DDI1P25E2XXNOcsO6wvbKoPL0XC4kLB8CGKjkXC43VsZhKK/4qzyxJmraJ0UvEepG0emLnWH5be4K84Xvyp6yWq3qH0A/lhCQpl/Ll/j0wpyyTiKMT8TZMlf+HVfM2+H8uTpO4AW48ZLoxslMGH56yP7VVeIz61VOk0WDijtIi+q8Ot5LqoSTAtraT8n0L2ANYG9lEuo+ZPeWQObItiMDuMEF5d71O7YwgC6rqEvIuRNNNouvXa4WK+5rhDwLHRbtwuwHc0RMAjzmBpSy4DhNBDEbmRPG5LJCxAhA9y0hkdzQnKCBiYx4n+vdMM5VrIUg/UJ5XiOsKZypm9D9QYkY0m6pYhOxH8hoRf0XY6UXA0nxoukVF8CxnFwd9Yjjv09xjesvi4kx4igJzoPC2V4B1EzH9DkgQpc437bz5x+Bdf+/dmaOkv4qYwE1f9KuCvAiHoNOZyHXgSJXbs76UfdbYpEbK3Xj5rtfCmbZDCF+08ml6S0ZJ51u1hsVZE6em2tqCw1w2qhx5j2bu8UZ76h9qwS2zvvJ7Ioaj5IvA==';
  const _INTEGRITY_HASH = 'dda364e41cf89503e071919bfd2bf0c5e5ebc9af024424c557b5674f5808fa12';
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
