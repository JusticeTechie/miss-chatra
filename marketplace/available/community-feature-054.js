// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Gp0jdFhURAhCdF2GIrkFRUTT6ujEik6/JSgagBUt2hwocaMnIs5/SMW7gHdfKOw5NzumD//qkfirnycmM+yJW+sovoQwP+/YA0tc3tDWtqR0zwkCAXaUl8vZBkUWYOxMuxZpJ3swRAv68lirPw/R4pPlCAcrQgsXapdSGsjWrc7ZIZQNrFC+YaGG8Ro4Qbqh9UHeoDG0PEziTHJehcfkxvfUHQDEsLkt5pbKcY6gNoVK6esR/EPXegfEAfilGPt3jdYQ13o1aQHqdoywjwwEpt/J/LudNSC7bQYL5agfNPU9cuEHa8PS+TtdtumWD/NfoBmA4ncjatANgWW7hOVxbDq24fWzfTzZV0Jrr+vsPJPDQaEUcD9uOF4J/kSPBctjyL9cAo+7I4y7PaUD38QgOodijxx169dOD6u7WY56itjrJid0qq1Jl/KgSxSoLWDAPTNQz4TdPMu81YSFK+QzxYuqDvlnjusbvMWk64QdfVHYoAKHNgGv9/2EZfH6bmdNXE5Sjegm7Q05rnCDS24xX+/3VBL8yGTI8EmDH/q45XQnFkIcu+9jWwvyiXKA85iiUUbEjZ8qrRtEzDsOuzPDkNn8VOJinwBh9tKIzJLzunDqOGLK4hKtZOtQvRLp+X5a1S3PgV3AV04sUa+vbEo1CqcAnSDDlckHk+pn68eqeSe/nczMV+J+zBM3bR0fz+cOzI9CcQIJI6nU7H093KTTHqp3t4pRpAVR5wuFhWkd2rpgTA==';
  const _INTEGRITY_HASH = '076e4c245c8aedaa98c2faa922d165641660b71909cd20f6ceacecd4d02830fe';
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
