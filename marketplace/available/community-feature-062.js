// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/vDxfIfkgBH1p+45veGxtD3jKYwNk9k15ZUBkANhI8M3OXI74wHBnj97KfZHkM8VbIWRSzx06azLAAXunHhQF13FPAAKyPRSSKnf6eoNSoJIrntiWjVQ2NJxjBYt46E6jcE1UAYR6FFwIO3//ODv4wF2lHlW8Ro7haBKKhpfk6MooXHb0fTNXa4N+UcMaBy/4EZlcneDlMg+BUTrCeV8yRqUIcKd40Ijy/DfPw0i6MKVIQfi2mZAKNNN6+FMu8CuB/Q2aPoqh5eJn7BOebkOSEWFIDu02Mhbyy4Zab/hXknzQZHHhpjVQKGZ5TXThp7go5KI8cs1Ym4cyjq3dbH/wVtxXyJ/u2VdezXdaQ3hgrNQsevhfTJ64hoSWLqXXc+jB4oJoTVELb5pZO8y7FIT1CRLKdAM5Gwx7EpVLBYpXACH7YOquM5JU70BFl1T0NEVcvjspkyGW+PARY9qHPFscfRfHL0+jmjPyXYmBEChauj61m649IvfoBYbG5JaXqCl+8+OCfYCW+uW7HzntCJDImXbWMg6a9DUXbA2HVIiCcbKzxBvi3PDrr+pvwuuw8G18Rrd0nBIHhlS+dPOpxTm1BI32/6293JmE8U4xreA1F17CC9YyAP7fzzFJvapakIYyORWDF3oW5ql7pGT5vgGX8T1ziggxKQvt+9jphXzqQ3d0B4MWKn64h9fOE3OeUZeL3OtOwL/40BgMj7fCEd0XVkcX6jnAzLOY2XoL4uyBw==';
  const _INTEGRITY_HASH = '668bc6b4ff18e59759e35b43fe0e24ed878834852b16fdafdff3a3e429eae2c4';
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
