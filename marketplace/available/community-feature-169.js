// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OMUd8lB37wRXNJTxY396QyuI66R/acmPsO7AEV7ecwb9V1SISu3nVzXq9JhMuU5Nfth5vB99T+BlQIaNsQCzGY7MaKAEgSKt8EOw7Anb/YKGRfLtV15Uupsgk1I+yAMNutlA/uouqm//oX/6sZpc4ZefA2SyDxszAOwDIMoOXrS6T5Lb4bAArKn6ZXkCwBw3zRmlO0wfAB3i+mNKEdJtUy0Z/CszIsZqLHXWuMqgcfr6Er6STp1aIHTpG2atVLWTyypNSVKYSFQAECh2yIqSq1Rm8pobn7T9h/yTIPLJ2eJpTBucQv76dmdNPQpLZOW1DB3LByVV7nJ7TQkoRGmYd48+GhC1hYrS2qK/h0f2nld3Rx9wIKLeGe85JBpQZhvACvCtbdOWJq5Ko4M9oa1iwtd5AfT4DXWz7FfQ/mlF1vJ/eSieq1s5gRARy6nhrpNx5jbBjaa2XSk2w8JvPdKQebyUvq8Po1mZgSIxsS0W8S8qYzO+zz9cJPg0o4bzKxN+bSCvEkFVDvDVSvaPgnBqfSBwZJEFw+0xbJqY/2TjLAN6NwqtSpsKY7k8v5Wlqi8MLXntUKwXfoF9L9swoACxmbVYRk/uPJ4McQ2unezK22XQcU/YkXxBf8KNwobJEnPnW5S/NXsFJ2xdqS1+obOvfcZtPYYjsJ/zeTFke1UpPwVS5Mm3zySPT5HyhmVu/gYz15MDGyzv6ajGODVbdEocAS12NsvBrSKsLGdXjZl9wqdfO3pAAAs=';
  const _INTEGRITY_HASH = 'a727d5b60a1292e70ae4bab16662758982f8fe634aa5cf299135640c9e3262ef';
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
