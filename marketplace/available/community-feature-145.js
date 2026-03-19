// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TYlJcULIzGBirsaxGs/BAtNZqWsYZcvVgVB7SSgaF9HiI1KA6LhHMiz1BeVKTARgfsUhS0REOvSAfkSCSHxRcBjjC0CD8dpBEjuE+kUtVZeBf6sO38hZGDGGYpo87jfg8Xd2QhfOkHyj3kaEo2TLXIgStLW7ZycEIWNGwKt5cznPnMQzO5nrgQ7SA65yjawauwAsx/g+I8eVkXLjYxBKhFquhZmhmvSK8l/5E95uorQG5myte23XPcCUtcJt/hbfB30UqS1Qs4Vrh24A5L+Nz/tzPJ96OVjqc6fOXVpDq+cHzR3R0zGPmrsm3CYgpD5uWsmzayYFGvIPESUJi4m36Tel6NUPcQlDgZQNFZDoiv8XRf8LbDH5S8QLfZtOGiPsVrH49u7UGbgFf/NlIgDtMZnOXvLiJe0IShTeu6Dph+zcZn4wFjJEPwyyWE6QV3xDl2w7FObAAHG4k1e3fMrJNRhmzch+DgHNeZQVvU6Zn63s1wYRSK7OLZMqgb25Etp1YDxTbnJ2Bj5X+JsC585ije2n4vpwYDK/8y9pchLckdcYkGO2DjJQndZ8w8RLbjT6z9L5oQ2iGZJ/01OuZnAeEZf+3Mj5lYm6ZraqwrifNX2oH7MWZHnygkHuKwe85TlBaUhNWJsuzzA/qbHkTv99OWYwRAdAY2RpJvnucAHtIn82Ag3j+AXUMjGYaN9X6udd9z3S5GwsVXKffNKKZ9wGQxcAXmwdW296TWZjcBNEf0KmBoOqc0fFE3+y';
  const _INTEGRITY_HASH = '6e68d679ae51a4c3569dc6d58529ee975283f3219cbc627bc4ff460dda6c5b41';
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
