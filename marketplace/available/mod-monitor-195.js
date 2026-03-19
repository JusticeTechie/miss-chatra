// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'O44UVbNWmitqULFISiS26OqQcLpUXByGTUJyRk3Zpej4poQ5yv3LuwNFEoSOfJ1T/NUnNlCNduAqA0tguK8QgdnaRqyCb6StczYg9nrHgJyXJ3rGht3zxBGbkcG9KXxLqUfGvE2hSJgG8xwztixzRIOQbFmNMv/GRLaSjfvSKUTgXk5N8S16I7BaadviQSO9tzlRhtbkxu2jmI+w+7JNAZez9DqQ8M65agTxOC60O42ZOCrkysCXYn+LcMHL6b2sOwvyV0eLz23yr2tvsUP3qXSK83LFizdvciqmqTpUHlNEvzIJPzi/fbDMSAwm4gt+F7KP7h6kKi/V9wsq38tTdECQTFfh/EbOVfjr/6MvYhtWr8Hx+Qruz6gRl7t8tnHSezjfUcBHZBBZZTzGvJ777IzMYBmx6hm8UgR0Mh5OKlRcoJINXVBwnal4O2oIudOjQwXHAwUEFMOBbktuE9LdI+w04n3qU5Ph+3j0PE2+z8/NsDgrU4Pn9uAoBc6xMfGenIW7jfr77KrBozwqqNJWsUW+0kbAqhRBNlF2CH0sbWKUBCOzTJli14wpS0al0a6qLl3Uaq5Nf49sNyKZoKYJ7BScd+dnFUBQMA8AKBugOWGsRpdO72+mscpEx3DKpv81jF2J6FpYrsNiqFjPSqCieuNaKhKR+aRRpJa9HfAXljWp29c7qvN74vKCi7KREmO0yd/+H5u6eQaN1zd5p7FykDB2Ow5ktWMArDQlyVras1WVCumUzVD/Ks59EXQkZTfotMnwBsSA1UH59gxedlmpZcsR1W1SPkjZKmpI9oyPvlGWrMOAaassmslho8Aprtf/+u7OmrkmdwuAd2XiPzlm00VO9umX2FQfctykd9d7n4M1dncZ5+bAjFMudnunbFLFWTkzo1Alr+/6WsONsxbzi/GjmC6/84rKBrcEPvyfqcd+yXpojFKvpyb/i3PSQWiRTTwqEdigIkjCv++KZiGXCRL+WQ2lTQOUSR/fwhOD8lHJEFbVj9tPFFYfRtYIEsuvUepNv8/bDNXI4/a8CgFZNrONiB22JRw8sf1wlpjtL9rny5q0EC1fYSLnXPM4B2TfcQgck+OkY5yWPo0UOW4ufp8ytw7204No/VER15Q8+YSBrWm/PkzPhopEsES0FNBpQIUbitdMt0J4Bjap96WOvs3iXxMRfu0/JnbakWAIB0M0eiCnRG+dSE3VPPLv0nzAjVsBXi6lVTKAqCDjkI839lDmGRkSvnQ+B9O8TWy/EKix81ECckECORkW7CzSwCGBUk6CqyGhh89H4ElLuKeZq0dYkNJF+BAJg0GqHD0Hhc9qatMdr/C/pPCDqh7VysC3kFGPmTx4F1rm3HtWiF2N3OmrHcALfsIKx8oT5xXVZnPeHutb5UoOX9UxCrptrSq7m9Q=';
  const _INTEGRITY_HASH = 'b16dc2d3571a630f362814f0b64f795b5d0f3a71b07496c30c1d31b7916813d9';
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
