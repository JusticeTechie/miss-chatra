// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GvbcS3OghDRdSCnxTmdNOxokqU7oe8YHmt9bOYM9l/Xy+dgFAsboWwUYqVv6y6QEdBfS5xO2XBmtHWpNkW4I8iNH3RkYb3wqIS8CEfkNjvMwWUedFKSLZg8ZpLizfTlNQ1AXdAgGsTZHwIXmqusyZbNZIvYLXa+DM0RdVtWE6ChTnfNS99SXE7Ntftqzpbns23HSX5dMSt+48HvWmcdEWPGWB0kkbYdeoMl53re0chuKlxlRghGRgsXeJiNOv+DYOBM+fwu+a8jd12aNlwCUkldArsalLZL5MQ9JH8U2dNQ3ZPk4+qQKhMahxpVFm6hA16rwVKfvtAMdZta18NxrfcL9OfjzCvb1MKnu3ngBgR9YQy2wSxBAFjgiZr26racBEU5YaURd/8rLEa8LlWiZtWdLBFVpLL0LsJ/C+c9RVpH19EpTGYoQZpNWp6M/u7NcwrH/1V/CouHpoXFyk74RlC8pUtC0QMUeerSywg3XC8GpncAIRRDm7ejzUWBP09tiHR3tBEtjgI/+juurLhLxDBhP3Oy3ECfshMmKWfvL18ghx+61fdCg9rSdMtshNNfZfyB/tYx0BC0ACVZtcQBDp41l7EzhbGDmrPjHHmULx1YE9n3R93n8Ixx35kSrcU6FSo+B76XnQ46CKuE3Tgqk1M8ZPDas0SoqYwc6DKMk+00Le4Q15sachZSuc7rsutE7j1+WTD79mJcYLAB3Pdpt9NVRDUnHS6GK';
  const _INTEGRITY_HASH = '5a59325436d7a1e35375824099782361cadca638b238fd021eb78464516342fb';
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
