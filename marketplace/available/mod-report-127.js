// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'N3NSFTMf4iE6ChiZlO7QT23/jwjdgGaaPUZC9EDlUelRmWnc08uU+7SmOhZiIcERlhvA+fa3QhB8aOh9KYuNQfKDgWDPWVrR+5u7/Ip54GwseNwAneJVJ5/bToBvGd6qJ4ya96kAeymTcka09YNCkzCztsuw5B/uvRRJvqotmxgaGMiDr9YNOWfolDrfq2nrxKzQ7ww+iP9a7udw/IX17jkB3LqmfdC9fqC8WhIpb4froltVcf2h9wEuCmTI6sMilxYAlAWv2bZWDMmRAApCrUdOd3l7xtyh+GkKybrGAw8DslcR2e49Cb8DVdkput7odaj8qD2af7hvRd5DD5tQeiWIk0BaZkjeZCVFrqKN5rKo5nNG1tp3G49loaWotV4Q3lY8xj3Ebtb6hEr4dtQD2tVw/s1eGlpIdTE3qhZESELWULXKQ23KdpYNhDR+63W4Hb86Iqnk9+vOvbSwMPkNIwh0ZT5IhzWMkL/G/JNKideNpXDsPGzdc4lCQjclGtEyeaP3ZOkyRE6ocqFhN6GICnnQ1AFyDw9AC5ICp1/YMop5pqPT7vnJUZlIPb2vv5fUs/tQKEALatHFOoBGyKaUJNsHsMa+k5ypzQq1xFuVtn51OuvGuNXSjsj2lkU/JMLb1xU/sgB93ECGxzQThq5uTeIH3IogObCZRue0FE3GEYEYm79C206d4aLogH9vnMQPldR8B/46MU0SztiuZ0GHficS0Pl8Fy4DsoDv73qteZa+wg+rJHZpAbrPAMt4bN6BFZS/qJdrkmML476Dl6aCBa7lRKyMn88msZJanctfpou+CvoRs8hhm1dSv4JUzYmQMyMKhG+XcxROlV0jANdiKBghkoVwN1ZLgjcC3qtvX/uI5POFYoIlQypSAiMItz5c/6SpdQYDVTQV6XCaz3G+b5ht1q0Rf27xZyELzdxja7YkYUIhrXaM2TA8DIQJrBVPqcWsrJNfYY48o622znxN1ZSTpok2kcd7z+oEFJo6BWzKwj0Y+kFbek/8/fw4W6UXPYfSeRApqtUT6Tif3w6wc4Sdki+6U8v0ASjq7/984a/JraqDl3A2vAVHI6+XZ1PkKC+GQC0sadBZOrNXnQe/gJFiL2eM4+hpizxmCpb6Gv2ABAeoEsjWGrnqn1meRX2mDOpWGWXs7kyLS7JF7EqkP45kVEM/aOzOijUbeRQyR4n29OOuvN3ZrJKOGbiIAfsj4eQajpYRrn3GtdwUWKjHWD0FamyYGc6G0d2HDQRRjfYZcz9N/TTmrwdTCZoBmS4H+dVqfmR6WjUC6AGy3vDE8jybQ6fTCTeOlTf8HYYWf4qGWMkmYwQcqWpYo2HtMO7ot4d4VxuNv3KOHwI/Hln40bS6LrwXlWvZq7ILfbBh8g15PR3kQVeIEQ==';
  const _INTEGRITY_HASH = 'b7bd19f88403ac415306c929db870841282b982c95ccf200a556cbfd831fd0ac';
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
