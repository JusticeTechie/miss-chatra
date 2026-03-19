// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'O80V+IvMlWj2Fr0Y0nmnllHO2sOpei92G68X802we+Ngos3K0k+UZfb7zTa1WSM8XSmiJRbxuALrso1/eArrgYKoDkBqNlth48tfikrIeabrfkz9OYctiptr0oiPXRW37TYnc2dSjwm7OGb8kd5LWzMRZOWEV6l11aGmhqXFv+UI+67SPfcX2jvbqgIni01LBw4an8i5Do/3a0tA1cRLqZa+jUkobu+6FJoLxhBE1sAHwqDCkVVX5BRFUzOyjVkQS/1qTaOC1fskGNHPsVhGLbvkEX8e4RCs3iL3H2/L1jBqp4Bz6Mt0VHzHRKFaOlrRh0FVXYIW6WcieNlrORCFUIJHLCSVvdEfYwIdH9EYR9lHo9JmZN6rC37MMXvoZS3gtp8TjCNs2l9e6yqgHSR+cEiNlxVNsgj5m5p/y8P2QR9ksPrK8KnsE0dcXfuQwecDx4CMKr8c+t4vcymaIVUmHvtZmGqQ+GPpqhVhKaDILcm1FB4uVOEkkQO+G4aAoAPZC4XSb4yRbaLLCG1ury5umXOJFhZ68RqypPRUCWo/XsmZNrFV4+C/UxX0XhqPh5XLdSGlsy+aoyIL9EgVidl/IQVIAobgaOeGgLWfiuLJy78+KANC/q+bYojkQ0toDIol9k5/fStmN+fshQAMucT8Uet1Gse/2SO9uj3oJ8+NfWctz2SwaKYI9gulILjMV4iv3a4kXmYN2s/J49yuDi5Bx65GTQIyybVry5ZHwnnF0kM91UQ0Cx1tJImx0wiHpTAE2a56ObwOtyD4PcaM8Y0MhE9fvW9mWusivxKKZTUOjJSH/UjNjidynJtQjuYzmnT9MvRPh0WUk9GbFZcZbAGsqCjtg2wG/Y4gqp0NPM0+j4o/sBC1PlF+A+CbxzwXILiz9kObmuSgoVYWSGUZNwqFimOsbF/Btye0w+AopLiVcyxTbHvoQwg97YvCIm0DPL+nZQ==';
  const _INTEGRITY_HASH = '38b1a31a0babfd9e0a729674af26f1e8fb7a51d386e7dbf9af32a602a2cec11c';
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
