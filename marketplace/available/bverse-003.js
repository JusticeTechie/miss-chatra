// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '571g1LdghIYLuhu7Ci0Znu7CnwkLLfT7eB3nIFeOxSwMSdWtA5kwDBH2sCouJfYf8ZMsTkypJ+YqhMI5YymqVgbiofeZMXXjtc07DW7Tojun4xNEyrpopdqN3/m9cSZhvk9NBS9AXvTyDLxV6OhnTHIkDqFv9EXu6umUiV+av/0XjlnBLFYm+rdHzFum5HFOHJOcnRSPTzxkLIgzxchu6KgzJ/XnyWN/KKPfHVab0QA8/Yt6F2EIFQ9A8wozhuHRk2OsHcsAMtpHmxwHxHag33ZVLTiqUgPaXT/Qw82qrf+A9NxkdNMIva1fbUjpslkWpBLWEU+OO97zRagoldSjaq4uBUx+c2C9Hpkf1LTrWj6dkaemhRD+mu+YgqrXxsIuFruOplJ6kPpkPmxntrtAKnKRq2JHhMEX+rSz4c+0nx4R2876FXTz0PvwEEynD57rJoj4hU/W3nXUQVqoVhbmH0jeiC50yhOCYTROPs80IZUekr09CXjWKcGD1jiLVq9Flm6AfH8OjOC33MSc25g4k2PUwXKCA5OfQ3iQY78Yl1BJfuEQO+LrTch2Sh+/2IMYYOCGGHa/b3rz2IlQhy1ilHbOvrBH6FC1CnLSD7ynjWJNampIQjPfT6n3Hl41I799SCRifGq0JWyEXXRAlghBFNsXJhaJaYoKPX5tTf6EzaTuY5NS9T4reMQuIfO0D1qohA==';
  const _INTEGRITY_HASH = 'bda5ce5d1fe0ed82a607b08a2f36020d512a2afb3128e7cc7a045c15876ed322';
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
