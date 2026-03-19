// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fovkHMLmeZc7dSU+btLLSF8PGwIe7H7At1YnhgDIUqEi6XIXfCBOLUs0ScWQd0+S1SNIz3WqHloz/CKnNzn/4+svzzM/XnVPBY7rWllTJGGo5Wt0Tg5HDty6f26a2SRetKyQbVk04V3p9W3V6tn/AdCjvAHMFocHH/yhcaFVtsQy8ZymWX80d+2wClQq2S02XKoLfEXurB3Zv10u9ehwWgHjzpToSPNq6b8gM0qsB3wPM896JT7A05EsGR2Kmx8gGRX6lVBavDmmlNXW87YF/GZFF3j30T3XdTWVXbpgnxxgPRvv2OcQsZy8lDpHfodEyZ60j3Ioa7Ezs0jnGrggXO42eqWw4L/B/Xc1pBztDVnHdueF5X8Nqs8UaS1oWXoJEFd7f7e53OnMTLGObCQeqYTTp+0IFAH5TQExN14m6N3Ctv/JTewHYfnjAZQlS7NJ0BBt0P7pKQT9okzYs6y+klEjlCTsEqD7KD773AktuRTYDd+W1izbwXQuyUTNrBFSpCrBPklB5/eg9SOMofc5EJqRYNEAtDBQGjyyNubq7sUhGJvC7z36Jcf5NikP+GJ8HpHjBA50b0zSwqH/abHFuov60H7aTrLIkTDS4ZJybqi9wII7CRS+a7V2+BtPSH9QC/9aYSh/0mFMdxCFt8EnzSQNaL80h5+Gd4xjJO9AxywTaFJCiQ8zg6IGgScLZf+PKhIzqVHooQGU48d0orQgnxO/q0ptBbWupklxq1e9QILrKw==';
  const _INTEGRITY_HASH = 'b960b4e22884b6f49bae01cc41e19e7e35f2a6ec78150766dfefc543e8ab1072';
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
