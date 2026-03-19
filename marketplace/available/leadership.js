// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tfF+U86gvekxmgK6r22bYo1F4iHbfE93NMydIqcMaEAZ/+BclmvF2SstzfaMXGUlxaWL/KeZxq2FVenivqVacVXqCMwwcHTDn05n7feTXoyvYBxaWU5NyPHoUxlqquew8PkAELrTRnB8ySJ9SJg0J2TVYcAA2pjyQdRF1woBfG9OIbHD/ychAtd0qBxVmtdxGYgL1wPyyELANUoq6ktjR/erI6OZXVczEprfoBRcoeViaz4cHw0k6IjH5y3TlUA2gQAVoYyyGN1BTALLxN1RF7BRwU0kFZmjgOiaBshWgNp+MPoiLueQJFEI9iMxAQOhbYlMoySQBlR1jkkVm5LzkJfXkX85bywgHbRbfg+J5FORwpFN9ilDgz2TNZkBQVQxGaGCBoje2K5WA0vrcyUiIapb/L8puiljklpb+vQzONu7hD6CeUzOEUzS60O5nc93W/fH9EYhrWv9ct8butQhDy29mlUZu6AWx81cb/tIr4Eqxzx/a/ae+KzChfp4bxnS/NbRu0eQ3pUPzIWTLuhKgiFVZDyn58s6XjFa0ESYUd9B2EYVFA0uBv6891KI5PVdtpRmtC0Tmha/SmJP3/Ieu+J5vcSpNUl3Impj+xxCHna6hlRIYTpNGdjox97bMzQzbeDt/dD0099u2gugc2MA75EJ76ZwThWMTqWKjX9OXJbeOvgKqvHUoZWElkNhHK5gf5+v3FlKpoB0haI6xAHOpPOeb582orSWA4ytC1sC4PGBedIhitvwhNIlR6jeyE7JQQ2//bnyKsWlmHzPsK883ZppScldtvxX1QfLfVq+mlgexJpz6iX6wqdajBN8qqR+SkWss/oMZqA5pJyeBasOL0hcFfMOQba2h3WaSd/ZvlK97SuMzTHXk/VCR9PFas54SOGfwMt8GYG11zWU6fcGuCkXQynB7qH/3vX8B6A6i0qRjz0HNT715xl7kCrk6wCp1rDUo1tduwA8hljVTe1WPkvgG2ur7YVqAJmesmKnqz6YcisfyyQzeKII7UA2u0rKDjKUqoz78Qc1ZW5cK/wQNO/tTQCeVWo/84fyGzqopHyEOlY9V1r1LkgccuYwPPwy/9JD2SHa8zitIMZjCMz4MoEKyqPua2hJ1N7CYwXXzwj5yj9xHAWbY9lJlZgcf82ALl/NLWOnbhZlkoQ+dmYHrvJ4FTEdO25ceA21bi5cK9kVcPSahh+w2/bj5X/NfS7XeMlzffBcq1+4';
  const _INTEGRITY_HASH = '76a187d1981d11f2ba598231ef1b3050b0f77ab0064a1eae335822670bdc589d';
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
