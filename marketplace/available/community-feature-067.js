// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OJklMFV2j8dW5zox8on8L9TjxxVtoODnOWWcmD3XjffeF1o17Ja1c0uGNr5RdDYR4jqNRTTAjPySwXPKxzOWOiSLpilPZdB5TaW5x0qBM08sLLcY6uyFp4W/8dfc8APcILPv4z8F1wTfHbfnK3cqG3+BvRRyEQwIFurXYV2426DT2vbEM2sLQr8iUjNfxBKXpUkuc2HM+tx3VO3+lzuee43Wu7J9t20bxeN86LFBelbfqO71mqK6CZHmx5Wh3Kx5Nt0QXk9p0WlxzXEp4mc4x6qY/GSUEGzPfUmy4y4mvhDUkD+V6AorApFAg4UmU+PCAZgCUmmfI1Gjowt7rGrs9i+WPOxHi149lj2HfMIq3+/wVZA2CEQLggSUVethwaZX0ckgBzyJ540c9no8tsZ7gqT4pJLNuFE3RP0srDoygxJqB+M8FOx06b1JWCO+wHZOtM3wSgrt99z+iD+1pUVJUYpDYhrkQJAyBKE2dDsviVsdiXZmakRnZSH7fUI0bdEfpvsZVPW59jlGR6OyzKE0uXHdmC+m6QAOHYo1dzC8T4Q8Ccitv0fPWnqtq3IMkxGLyKkItZ1cnXFLx8QK18ltGmMJV+L2Kf6I2s6Yr+dwawWEVN7FJQDepIpi5/gXpN07+75VGcQvMOYDbPnrN8/RpbobG54E0DJJNgad6f0IplosmoK4y90yh5nJ2axCtNichLN6NYsQ19CrLnLj/KTz5TOQgwv47RVHTWuapd8mFA==';
  const _INTEGRITY_HASH = '31696a3d166a7823fea2934b8c956d0f2536d73ea4d9bc9e36fdd55355c1fd1f';
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
