// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '13DQD1zKxkGdyhB04Uy9LMDZuxyW0PNrMI9dq8HJSPEZNHin4+/NKIXx/C56IPA99ETniQrkACuHmrIjU8aqDItk/muYKrJ+2xXIVbZAT6liWyf4pgR0U/ZlG+CKDi1fl2Qz/aJWQwMB0BwzJHuYQrqjxn1U3vocKTHbm+4Kk3MMoSH3DWcy0GLgLJSzha2RhE+u7uHWorAAwEq7y9x9suZW8t1Sm4rys+hJSrGciQ2wJQcGrsGbYDKPXFt/G1ULOrA8ICBe/3DBHW8soECMTEPTCislwQajynTHUO9LMWlFZo2oniFjhNLO5YtUTZHVuk++M682OKguE3JsLjaKdSQQymdZt2JfryPzSyagvYE2pELi4ggXuFDFDBQrFvfb7lG9QffU3NbOTYzezOjsASm8Tws8jVr3uiQgW80cZGEjlT2xVzChU0JXk7kMEcdsjb9jpG9HhSb5NmuCtkXaaIKRuICFJknJYAfVOW6qUGk+8jxE8tTTk7lXlwCCjqVxN2CwpZ3Rx0mE8FjWJH0KdbiVTpO7tbnCD2rlyegaiR/wqPt+v7DyA8X5Gss1WBNBc7IQoXaxny2QrCBkw8gBI0yyCPehwBlVOaiKVrDR766aWzBOZ35UKMlBXqIz75K6l9I8O2GFZPvmq4SUpZ1AdBwQfmi66pMjKKkNgLyVl1ak8QrkwQxRm6VPSYxpoEiMVPBhSvMsVixDzMXwbyCjqYRyfsqYkkp1IXoeo+gyvDzCAEQeyAeK9sv1UWHZA+RKTVF3OPfB1QlbgJ3Fmbg25gJFTgrg50k2Yf323oPzRPsbLXxdPj0gz0xXkCTYYrd3ynff6qbP+x08oAra+HRfcnD4TFTqvRz0RwmTV/uiKrlGPlLhECXP/TVkHu43O4vZl52wyF1hpLeIkbeBS2/dUC+yNzkUu03XAWv4R31zxufhh5MyBzygXf9+Uh8Oi4McfXvUZ9nxU9HIulYSSRE9sS6lVxUeYMllvi5U8nk+4vVlbZzK/GyFp9phfO4uXNdJllu5hyqK9PQfBlqAVJVJH9Vw41cOjQ==';
  const _INTEGRITY_HASH = '74e32cb237cca44fe4b4c9e6b121f67505cb54667e978544aeeb8a06fc6f0dcd';
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
