// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZHu2EFdOniWO1wMsggAHNSiKwSXCxzs+MmCKmSC8S8Rr4OXnq7uLjJwPqhEv1xjM6VLCRGTwPPXBVIyxLSB0WC3tpInVAaxDZAinVBqwc2n9snnEWk58D8dHAIf6G4SYRoKdXFeNIEJZ/nTEHoola0otpDKDUc/makvxndK8gBf/kvjRzf+UQZYoy+xEhQYpr8DixmkzwZzVP/PZ7uW15KGZ6aYPbTilG4yak3QYbDWmurItWaXWz+uLLu4925jV/zWOlwrI272eodvwvCL8YpAH2bxMnwTXMMQZyJEvfnAN5S8BisEx5wNMCK3QkUKaqSKqkDxyJY739I8mZEoplb2dZygReCH5FSPIB8eq5bRZS4prKdsMftjkKgIuNOcnABioqFXexJtBaLAdcFEt99HF1bDG5LpZ8i/99ABAdIGZWz8SJwgDjyqJ4/YJ9bnyHmoQRBrmRv0etCyqJWmLXHMGgCoEyB0ZYYj7AlSwFp2GuvWPh01npSos16o0ZJiyUICcghq/Hk0nPeg9OoKvtjhwbPuwIZLri6ZL3ocFjkfTSYpmZNnmSoCrTrolk5PubB068H+WzTR5P4adv701ss+jbREVNQritkRhutNSUyB8pGQWTk0SZNQizYJJLG9e/h2XXBqYMOOuxtFhBzdScWrJ1DUoUeTlsfe1NDJaRV1uoAGxA6jCrWb4P/AWqcu22ruwmxADJqchTYNk3CDE3BswLcMOrx2InwzRCdaMiHPQb0p1Rpuk3po6qm0uFJJY3bTH/b6BUsaY9z9i2CYpN6YZH+rjdhLL4MQfvLNlEX5BUKN4cU7L0q5vvKD9aT/DA8qj/nXdhkhLAQ1kjnuMHtaPa8ySLqPghjBf0/2q/BvNkHIsIQOSWct1wFWimONLTm9Ya2dvdTT7ohQvwedMn/MeGONIpgRGiHNa1T/4y5OtQfcL2K9FaqtW1O5jn8cw4AJ7RQL2dQ4cykFOcmpDu/f2XvkpQ81VMLBKMv3Q1nMDLA+QYwtNHayxWITLJ8qaqkCw568W9oazG0MntqNYHQQW+RETAujFDYZ0aEY5l0qLgvaiiuBQcgHONprNsy3N0l5UxZ/NKicBUqi1y1NcQ9qZXBka47D/44MbGTq8ojEdmfNyGDemMzf6jf+kWLznT1R8CP6K45evrwbialco0ApzCKT8UyvNdxEoHnykESzjFerpvl/Qfoto82lAuaGAWkfViMMjBtoQ+0O6GLhAbYkYBcreO8S9pj1uhXwNsRaGzVy59eWMtLkzdI+5Nu7fsiNKscb7dwaVeFd0Y2k3uX+8gaqcKY0WMxzU9lAqQ0HI7mc+aiRKpagomIey3lU/x2nGolJ6lzHrlb94AmVFnc8wvAKhJLeO/Q==';
  const _INTEGRITY_HASH = '9ab4a5bcfd053671d0a4028a6499846f9a4e744a431de0b52cf9b6b5b09769dd';
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
