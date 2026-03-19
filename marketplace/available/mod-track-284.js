// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dFVN/1HtdV57gMx0w5G2lN2xRIU3vFxqwrrVIqoHf7lQSpmxjiY8JlyRQjK4kuZIAjNaXbsQNKay31x5xkj7Eo8fL8sg1YjkGEDOoc5DzkLEGMrhC3CTQiQ7QjaVpX5geKA2GCXKZMesXpyXluYu0q9kYt/uF7PjYxBI0YdyZzTXrdwnEnaJSdNdypeAKlnvi7919WA73fH+idv7hf9c3QaDc9Rl9E+AvUHA+QqxKu1hspldxAtCjX0gim0GqJupuW4jVgSpBQGcayUbYNT93R57iWgP8PD2AWWxpeM6eDqMlaZrFLEaTRWCYM+usBp+M2H0JtUVgv7jAcvhKfqh2WuvG7ZklFJh3BClmXJCHKpWpeHWMGuwOW1XgSqHvlx9vRKgqFvWHuuDEXKS71gF6uNhcBEyr8t48PLghpwXcGirLzdAXA79vDqGyxP8AqLY2OypKC9jkvqBL2WcCjDLECvz0t/Ji8QQDz3EBo2qkUxIUwmE8Tqxj5kgXAu2kofZow3VoDMyun+KjLppsdm4yIaQNRNKWHzov9qkwXJd8TUK50Kc5gsnP0ADM9BW3vKnu1rJjp355v03zxJBbYMXCPRkidXMtXwkdyJesQJR0RYXBBZk5vobF6cZgaPs9rgXA+XkNOZH3wUlLh0xkZyjBPikE7mtrmMjs8B0bi2QbD/Y4gvidF1QAUl/289rDuDI4OOY8SnEt2XhcpMKO15vmglIKsrVX57Z7RCSIaoW4sSXYfSbl8DQg3z4q8OCI4c2CY+vXr3WZu0p0NBxp+22gPqBarUuldouATDJLqh/Aiih4LnFrylXnH9NRhVbZh9TLMbs+pcUukw3UxtJwyaG34HbPh+XW8k8CbyImHIhEXSj+b0tZWeuexoNi1ioIGIt1nQJCygcfGn6CGdNfKhhoAOpHE2YkvjXgPbZ9CNkBS6KRqEkm0/7hh9xFAE/m2IPtF7Nh54LIhQjSqxmWUlzRGxuMWDtVII9i3+DI2JInoZLyw/WS69exhYAgZnrdK9dTbb6XBR4VmIzAjZA/u3wN6K4a/vI7dZSByOJ6gkHPB+h4wkxvF0KrVVYqCLRFqW3JWGEB4JeY9S3LjCzkMq6FSdlalmFkV4W/mEiTNzKcCrIsUoBFsxyGJSObkmsiIGVAb8vLPsvVcZPCPEhKbIJOSUY87qkRYQ0Cacy1UiSE0Yhfzl3hFyff3K1bESPkAz5pbCRdcvWLoUgURK26qzRwQV4Ij817XJzDzXmtwhc1jAeXMZ+4irwoYk/qPx1ZrOlCO642h7PDRYRq1zVtq02Nb0b1ElGEQ6sIhmcQ0RCxNa593JQLoTpgnp4EFZAZ+ynVBtFgTf2ishWbyE0nkq+mQ5Fp1vDCSDc8LZG8nah';
  const _INTEGRITY_HASH = '1f9cce1f06fa572be1c19b1458d0933d59fd8217b1f4514809846d0ede9d52ff';
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
