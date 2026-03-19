// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5fY0CwBbIriMPngDdDUXPfoiR5ru+J9Q/h8rd8cUp3LP3HHatofqR28zmAMOMW19H+f5PpvJaJ5DrW+dnMHA3un9lZGii9yKV6B+bssqYQKZl9D90elaSYLe8AAfkdyMeQQpRil0V00dbQ+tFGE94gJOpOH+VOuA8NYrhX0RN8H4th8LyuS29qxMudLllwqySExwwh6uVS5Fo69jt344DTOxaNr67MoqSlpknjpu9QrRkuTINGsP3st7yxBk3qIERMDTSCObIebLnFFDDFI1aHAAiSeODShvoZC758L2gqzRJg0F0GiMJOjfwnlSHdCpSXIIcEsOKrV0pCiNOV9nfEFhJdzPr9+HQ7OSeILi48BlVgkrc6bi7LzpMWHJEzctVrzWnKlEEV0DVUS/uy0vNomFNhYhTCOJA3AT81/2QGcetTVyCsloqLiVrcLcqpqLSqLmhgv8AKRHy9oyxfNOwoAujA/BBl4m7TZw9j1vxBO55jVCdvZ/bSqklzXjtgPn54MAkb1XyQ/rrrqZisNVcZU1s51yBbLrC0CWnktZnk3UgXj3FM5lJ/D0/yujBQgeiWa7JHbocHx8lPN6qFXX1IOmL8KCiDEg4NxJr5yK+V4aQf2lOzbj+reEbj+LdbJOhHTeoMbVe/JUKBxkg4CeK6YWXUHkLvV+FcPMA6hYWaB7SuBKDxdAjfMv+eC2WwzFks+qrKAdK4JT23MHOabrSAbF3WJgNjK+DVJtG4/XVRtVszg7Q364kmcfRtpLX+07jTJtXMIDrMMFs+RCH8SXuWwIqnP2q4RWK1q3euD73PgXRJd4/DtYiT63FjKU+TwKAUpOMaQPd0BT+lhb7NNmGuIVfrzcVy3WLNf/0nXh31iwfztqAPzjhq9KfE8Wwy3mwGfRYj6NcSThwcOenlzLYUhMdb7KtBg2TxA7cQOqqTR13IKh6PYJoQ==';
  const _INTEGRITY_HASH = '008fad75fb0e416e1ea64abf0aec84fc34357a20433fb9e30725ec101f98b2a5';
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
