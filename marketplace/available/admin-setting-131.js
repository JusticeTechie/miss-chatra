// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wSq5kkoIdH1Mk/krq7TXdrnjXD4Ai6iwncH7yTetKpUQbjmuR6EXYyjkXOpsPIJbBEpLoSjbZYwGN7ai6Gv8ayfTBzDgZHQ45muIKMR308wrGCFh84bxk1Gz7RtOcBM2dZ7uUZdSm78v8STFmI6yYBk+pd0Ios8f5KgQF9HKCmeBl9RqVLqAHQBjgi/1Us6mhq1eXR171XIJo1nudObOaJnga6uq4STxcuFSnQNNn6L0soKv1EFaLPRhLIVv0uGdd8vclrS/8SVe4C+I5yJBhueB3mn6mvc1FEB5fVWdLpukD8YV1SvITsMyeIp5SbmCCmQcNXwCLpJhf4IsNk+t03XkDJaiDJSePPvNnvgE2dmjDvLmj5WkWhERmZQXT+jBklZfnT+j4vyJQL29ooTsudpiAYG5Z5HeX38BXWw8439MJGPtZz8/JzFtJzukxXkIqbaOJWl4Gqdw8CwpdyaBcdrHGNzVylXROmedN8HKugjCC0gf+f/3fecEdTJMo2cwfhd4flpcr/jX7V2kM/EtYikWA8yRzcEtcwCGvdnsCo5IaK0+ZnDLyJLyi8T9PFPkXSxyc650YMtkBDuaGPYbszBRyyhrL/oWnBF1jj9Fzzo7ixdNyj1Fa5awR8Qqlnp1Ie0aFxY72Pone9qQ4s4gn7A3mhuym0BQQtbdhHAyLCmmpTz9eyiD2ZDoAydnNzleuPFABttrhiqIk2TtmKyIbWCJ1p+s1rkiDffx4aQ6gmzUYTsP2K/narwSso+/UV8OV+zETeTlARrQBjMd75stQKI3mRqgKaJ8LChaOogX4DJ7AapTPu8WyhNafsyOh9kAHt1GDnGen5M3d/MeJOX3cacrXw2K7eEu47/8zb1cEzvKXPSUtDs+LfBF/OfRAalP7jiXh1Qx96KSMOSgL2z+MizSKJoDqhheJPqmbxg1f1w4TT9gjNG9nehaBunqCpHH5Xtlv26nP/wbmYamNUHd2e2uBJ16naagk/7g6GlkqExIsf0ZRe9Y/iWwul8hNHVxEJrcXmAWqvg=';
  const _INTEGRITY_HASH = '22f65b522b5f2c037506c8cead48e5f790d15c643eac27949ec7a1e8f650c5a5';
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
