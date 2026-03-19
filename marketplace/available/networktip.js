// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hvLM74T5fCt0C9ko4cuzbwBOYxuoo6SW3SbqIdsaI3ljC9h/855crz/Br6ab0k8ldMZaA3RWL11CKjIDvsxBZlpEKDEfA7nskcGjbfSpu4DVz9J1eeECXbJHwreDznbJQm7g1FbQC0aLrng/Ytc2u0wsf+ki9SUuQulVI5JQc5UltbT6W7eh5kIZpRtjGZCOdGGSqw7XMUjpiNSyfqHajqXqQXXqWOlmcIaVSHb1ZuBMxxeQd9KnuwT3GuYbHOLpXRstEIpyrfYPbI5aBrf6sr3T37SqtKOoIn7R4Gg32TAtTpvYVunJPpUAKfA+gxNOL/+jW2aCekAnTNK7HQVZ87wKuVyGk05GFiFVcydmIhg5cZRy8E7RDjYgXCjIqcyTRRyjeHJsVvBU0or2z6o+XkM7KhsA1wMbtqnWB+Xj1F99xG0CslWfliO1hnzD85ilVRR1m0eOt9H3xNt9S4sjnLi++bbuvKmKR9r2XHNMFWeksAZjzgU9M/XCgrzG+vyesyq4zQ0KM1ii6ZKLylFspP9M64VE2mByKc938iK8PO4xlR+sjBdBjcnyp+ROLTV1La81YvEXt3kEXJojXg/ZVPf7F6k1/X8+4Vb95Ux26Y46PFRGycFCo3YKlWrnEEwJCSslKdeLEyBiSsjvuTYfsvk3xP7a9mGiY1q81bhpNrxeZS4O38tvBmqNiP2DFlbqNBdJYKskievBR08uzaFIHtJomBW/g70DLMqpw6h7R/TcbgIZwgTvefkv5orSS9mPOpbygBQ/VWwfDO9mTEpQ7Y5s9/mBuqrdYSjIPPIlZdDVIzAgNne+KU/urp5zr8zNptlyvpn2o7D4xOlWGTyXdLn7FLHpOSfIRqzXC1VCNE251IEt8Ir0Dwc8MjWSk33qUM/ViMsEz/WUzJVrDcIjr7HlrtTyF8oFI46z4wVCScXVASiICFf+BEM01dXgqvTwqShAWk21dQGH9eWjT8UC73jyrC9dEK0gYzqysZ98RTaa4KN+qfYVEKj044JAQfhg3pftn8e0KAwEYxLjJabWY8Ya5mR2+XlIY4dPaOFJEke8Lc9/ce6INHacC/LgfQLJ1I2RVJW89/mMmCs89y/ZjYodMFhdMYBaMBmAz20s08km6B9sCP0UBlK8DCbshUYHgtzr9lW+M/dFePaXxmqZudfdEme7aNEGVcMFJDOqp8yMZdjuwpi1cBiYidUJynz2pR/FLr2kmQ==';
  const _INTEGRITY_HASH = 'a6ae50b5c2d01bf19ab0a84b24a08900b9623c347c9fad8b05e1eccea5fdafd6';
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
