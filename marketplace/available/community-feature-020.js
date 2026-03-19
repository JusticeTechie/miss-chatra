// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yWCiTcpNYuuCqR2dow5Q8w2QMrO89zkKyyy9Bj2y5aalK3XIhwoJW0VVEuOLq40qghSpdCzcqRRaf6XzEncnfM10YIa0wJvY2LpnobbeerM5trAMqfFdEU9W0p2POwkCaMc7sn8WMHsyvzLc0rUo2BMsE3rp+PfSaIjUR4p1yzIE7JlCgzcGve+411BwQgZ7HlThzGR/kTzFblplpKhNxiaz4EO9SI38YlqnD8FRqJKs2WAdwARTlfKBSTYp/lYN1SwW77km1BIsLC+BtNTrE5i0xfxaHQUR7IQhISFe6npxp4djYJqnls0/bCF+ALIA5gYyk8gFIzkk/hlzaYT18xeCQxgUqghjZpqelLcCvUgpjIUQ3vjmvO91p7Jd6M3kI8tUCix+rA4cwhGeuDS8R8oBsBjN4VIMMzr88eXPAvUs/es0DEQj8qbUIWaUhELg5KPKJD06jY5i7btc98oiLKoXBLvlZNyDoZKOeSUpCf19bjlnfLEyalH+iAzKlzm+USrD71kYOBvUuutQNB3/6JlnnCO4CCRg87Q3RTzpFPJHNPWXZtNBKuyfC7CuF4aZe7qHVK8RDpwRTsKl483EzkW8fNhEttDRCKvMWCiUe/MfqeEkz9iKtEKzyxmbucyLM46Kxzr/4S4oXBnmZtfJas5/9N5UoUxpkacSelCH1DtQHfrMsjYqIc/pKmqQmX28y3r/ZLY35LZe5/ePCZqnwf8ZgtEPVZZhCwJE2keXAY0M+eq5mAQ=';
  const _INTEGRITY_HASH = '6cf1d1ac92ba634c2e3888acbcffb66212d3d1f6bfaefd5584c4f63d2ade2679';
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
