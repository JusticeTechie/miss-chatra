// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EPxXyg8RcUjwPOAiE6Olh/pR7ODcMndJrfCiD3NRsuQCoxDh5AgrYLos35w+4Wj5PsaagdyC60/bPxIHvdHZD3Zmih7jAt49d+WbqYlreUdWZ5LUxn8xxm2f4KlcPUc9lD55WJwH7l4Gt9MMK4YVZkbLDP4nhdk9yYnWnE0BpEfxdKykDew4NPm54WAzzIJ2ggn5S8D6fSdaVaZd19J/b6LVP9DaSveLjqezqY7iVjY8XwgFyezHcY6S9QdW07tAXa4dMeEqP8hCXWBeG8E1KalDyqoNGjiTRFqJWbGfLnMnU5o3sP7srqkPfocDW3qoRtNrEPmzxiB3NMZO1LrPKvDNkVhOw8dxYU7MEVUsd400PneN0iAR733ECXtGWXugcxthzqw0YUjPuzZ9na8+IXhvZkn65toPWAkwolNiafkXhESDVV/qYYkjGYmErYDtYkfa6LD5xkaqC1YXBoccRu7ZB3fD9Z5R2iD8j04cdsKKk6ZDeF1YAS70TMtCRnU6Lb/K/PFD9/1ngxb5Gs7icWxG0dWMAapDj4vLjQQkd/sHWstpOPq+d8rajGIxhPePNUrSmtlw/iO921XzIWb+AcB0cz7y2uJlTR7OFj2ezXKF9XrMGWP3Gw0t/6EhxKCFqMfRho3hsTHVFJvRgZCczG6+XZ4brFVTYgO2A3l09toHXFEThCL4H9ejSXEJ0hWinUfSLRcLzBwOpWHkJ31HLbItxwDsH5ZsCz1wcySIzw83Tw==';
  const _INTEGRITY_HASH = 'ce6d6017dc22ad3aba97f3b488d06eb3d3c62156d7aaf8c4e7904b6d355c32b6';
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
