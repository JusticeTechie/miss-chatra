// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sihy0OTCOONfTJZtY7p3nl5OexVEyABr/g6KVPq7cC0Vokavfd7okvnkXxGbXEsN5XUJ7LBlYUV1EBRGnL6289IbC4ilP5Q3lkZHbEGwcZTf1d+B5z+NTkSgA2Ma73Aba9WQW1S3rL3MfKNwzLE5vyfz7EQ/9zwX6v2Pq1TBQhiItrLM7KAncLlHto8IhizkefdiN2RT4gvDFN2CU+EGgmDQE+NSJYmvhBrUB9XUdqvqUm0hyS4hEnSx6Y3YWzqoSM7HxDKgl2guasFiYTNnd8DOJoDHICE4mZJn5+60UmPWcv75Do195CvVDz9BIWdLGkF9BgcSoztrCuZtbPe+nbXwv6+gOKiWM6ka/8jD2F8IeyKjGs2ZH0G6QKJQqe+q3ZNqVRq/QLyZUi79VKTsAXnfqvTqN1JhKHvbN0OnI1J6aaJPWa5q0tIj1sx3Cs9hzXzfMKqQNE6R+7Zzx2sH9Z51CcGKi87la7cIxicS3yzJwhcrKyGTqXvcI5fnczvQ1f5ahSxmnhhXvUK1f+T9Eu2vPQuaEDjNgzQLzG1wxmu0zFnW0B/3kNb5r9dUpzTn8QKoiCZUmhuFHtBcIC8xJqSggZLZJPUUhtgd7dNzKZAUxuZPTr1+6XUMTHzAAZXI8RvqfSUQSw5qVqWHuVSrWvRdODGJW4mGwyo5FPOogyl+Nhk7Xh4JqzgUYsNNxvrFBPTQlkiOgvLRwSe9sOOxAxseKVgNOeq/sQ==';
  const _INTEGRITY_HASH = '490b7e42f773690e5a0037a01c23caa5a7cefebdd1a95a1e0843720bff50db3e';
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
