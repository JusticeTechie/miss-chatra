// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JdxdetKW2zruVIJ8SOtXUemybDnEhARtCT+JFNNzJsNlyBjeuBhYeEn+UwIdbXtM2Afyq5CnVugGmzc/2/rUpbBAJkSWQngL5q+gKAW9G5X9TKCoAuaf8rq25h28Gn0btoIGKXWOUa6NU56ouMQF2Un4fg10Vk02hFAQ6uP8/4jxMJwjEl4oVc2TRHRwj7Tl0qBCEpPbxGpZbOtaC8EqaLRfRJqC39JVR03mQOIKv1Anrabk5/fX9Dfa3fI8YaPdRHwbBrVmXZs9kO72V0P4dqq/kU/sll2SMNXLRiSd0qhutRcXB8FYPQnTAWFClgT/c0QLNCVZ7WUI8VebeBX77Q30/cIDPjYtHY6XRijIjd1pAQtg5lVnpgTz9lJnHPPMOz0R4ey6wKNgPjC2aHN6VTS3WvGc0Qalr5frcAJNIsgavFmg9Ruaw/gbGs1sN/Di3oYKw7+lnMwRY37YwgE261Il+8DWY0LNpmb+L2BzRBT2Nse66OLqU6Wyi+5/Ka1badPw61jawjgp73Cv5hy5ewITQh3n83mm+slGPg5HtDHuUCIaDFfPpL9KoWjqSYpgMOHPhyq9x1WdIAbv6lu89zlNKXq3F2mCMro+DmaZ9VYIMEy6I1/5cm2s3V7Flu5DJLZSJxkJjoOu5iDkvON/6PWeL2hp+H8RqoL+I6RoHIszaXNhd1AK15UxwlsyYgxBdHzuM0fRsXno2M69iJF3M6lw40kI0Uv/ivEp7ls=';
  const _INTEGRITY_HASH = '1361032091d73ecfc06ff60fab4c0fce5b23bcc8e4b0b106e0d28a8459836f08';
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
