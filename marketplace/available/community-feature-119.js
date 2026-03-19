// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lghEjH/P20vKFrMqmEW6WOUTskKAlSJV72WL6nVA4qT61Zh6oPLtWtANt6Cv0bgM2oQY8KOTrZRJVuGgVrgaMnc28oAhoZKCniY90Hv4hqHxlvt9E2tBg435tyzfwP4UDWUa5nx4JBeCOHNlHem5iph4HRDihmALSZUOWBfua94GQul3aoxlzJE6UbPxdK8e+RrTwzYHXnKuCYQYdB0jL6a5WMPOhX5XVo7Ku4ovbkqv704FB7qJX4j1ITTZO5KfqsxKKd6/t1x9Y/3Ikv1eC2rL7hypAGElXJ4VZ4YbzXyNCICQdR8YmTep4i3Z3tcx9lFOAIYi6nMbsJlgmwnbJqLqV4/gJQNKh8Igq4r9GfD1BKpJ3hUVRtlIH66tmlK0NPna0rBlz3fy8PzNQ4OeTyh2SDgNAWnRwtHDapwQiiwHHpXIEPmH2pGlqjp79jLjxGapMKyI7bMbHEhlWd831XqVgm1AVOH9VxUwOCUAZ8piKKSYxcKhWsPSBq98g7q6NdFFDxnMRstiFa6DiUeUo1Ip+jYUEH6QH05yFR7p1LN5BJ2bBNSvX4OycVlinEy6TUIhL0mWCi/4of1bFc//+0CI/Nh7VlAcOh+3WSjt6GFDVhKSt59qLlwn3cZ0fERWrql/cMlciygezZ7ct8CLtxjsXuILuT6lhvZSEZKu009h9/Al/Xc5VDcQDxt5BO6K8/INzdwrwmmJe/TWRFBzqqJHqQrSIdSU7QgvKcpV4OZ3UHEWOug=';
  const _INTEGRITY_HASH = '792557e042c9358d63257c5a373ec411e4862571de1d5ac8b964884a72a1b449';
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
