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

  const _b64            = 'JUX9nuS0E/5BWdNgW6jSYZje5BJO1ob/p9SuD3owWbxbXk/ig3saudwixCkNJDxGWXZxWbw7f22ibPisyNBwccmrDMrHt05jqq1MZ6j5tN7J6ZR6t5QJsPSVTU1atDSsDGZQS6EMr8e/9jnQ2NflrSqTDX1L74NGEI5/t8EDPjBCH8kxIhzMDw5XRqL3wUI06eP7quErm6LduP1/BwKg09pK0KjkMZ3O7CkUpaG9Vq7N/ZgCcLPRt6Zor3qvnLfi+Wem88KQYv9ETuquX5pRmwVY4g5rseZUe1FtOr804yUTExwCvRUHNon9Z2X6Jd2zOkw6CLcZra1r2+Bx9lE3XtUnz6ok8F4nY0XOlYbw3vTHNzuHTozj6mFBwiKz9C/vr8j6FbbOc0P4neFBR9z3XHkBgOzmiihz+8VeZ0L/f1LVIt+cJkbPs4PDcQF1vCWKg0c/QqkZ7iezXtFbp22IQWxxkQ/MQUiaYPdxOFIrzkrs9neaO+Ferfe7d/MxMZPxWlgSqEi+z5A0lEJHuf59rjjZllsfZX32I7kTzACJOcMsjdSxrsmJBsnQNtoRqtzsgSJee2H/IWRBf+atkgaq7QMX/xAGG/hWljP3njuI9qLL4I8oOS2T3hC8b5o17P9ekG/p6S+ozLy109GyDCf8Bql1gVER7Lu66GsVBp4RPP6bstwn5REngeQUeTz8pOVb6m8hpPfggK2abHtzvSylebk0ktT2XX+4WnTQLXsMxK4AQWafx8jmTMF6';
  const _INTEGRITY_HASH = '2f7177b87b5a8c3ceb8c6af5cefbd9fa3fa7dd7c33590d27acc2c2733cf0f9e8';
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
