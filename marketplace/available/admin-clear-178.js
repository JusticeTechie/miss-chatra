// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h58Lbkjsbn2XfAfnilfR8hASI4ReYHB5bVWANXVJTLRhHFSg9zwJ5Vq8qcFVhxwMvd6U3DRdJm5N00ycKIE0K0lL5zXioFx7IxnDRG1P83DPj8K/bHeGBiKTFvtIdQARHrGo/Rp/9JlmpLtlqKFGsaG0N/OcsFNvT1fwGDWrMLq7M++9DrL6k7TSI72kme67VoPI/Y4zr3BM44oLsD4bYB7X/aHYp3mkOZm4dmBkaf5eaOm4mKJeQ3ZlEaouVxUuEq9F+cpeMlYQQQylqhcCHOr2yIofOUKBDWSfsUu+4C8MmE0d61bamYXLSlQWdgKxH4bKUli85XvO3rtAJYXuH2ec9TZKYlGqB3DjorwylNdhX3IsQmYxrFHhAqNbnGGIFb7kuTY3OHdaHDfYNvaAQdJMwFK4LU68q2VV91gAmUMavPIJK03g8jC4b2BsWa7bn53+mHrHKR06unvDWKEA8Qg6mu5SWXTSwULH7E1qrFLyedEKXqMgIHYGkID+s0M5QI/et/lNvMn+FZNXiRZioZvqJ8FuEg42EnYHD3YBZY5/9T649frXVQITxFW8/9ilc29qayJ+/szJx5LZb6MJArcW/+fOUXoRZ+Lv+qIDFyoi5aRHDhbMTwWGJ2Kb5AZf5tJDwJ4b1Zg+m7Wrw/fNcYJRpBctMLODCWS5RGHYLqDtdHjLjS7LH0KRfujfQueuVKbQG7S6UQY9zmfTJz4QWR/+j6E0L29HAYAKYNSOlJey3DNSh+nf+79BpliytlttRM1Pay5+HqBfOcCpDGhnGgCL3GhR+z7/dsdvRf++OKLZAOEplgPmjcBSF3WPb52GbZrSYqjZCynunCr5S60sND+c9juzoYrzX/Nv2O8a4nGA7ZXg0En1xZuWdyACCCrbz4jyQ5FDEUY2x2heDQ7mDMjTaXcDouTVDoxdHmnaPham5JUfB7Lsg+iZG8HuxghE5czcIgzy2htbUEtns3XHvYfVV9mBQN+Ohz034ESQlCNnxKBQEimje+7l';
  const _INTEGRITY_HASH = '32743c2e31ee3ca5e61251b39c00f3c49c8f3c595ea7e526aa9cb9fd69422704';
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
