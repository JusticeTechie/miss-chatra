// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4blS3/Gz2RUZ4Uzox4wXMJOR4gD0FreHuwLY9ntoolXsNkVcbXOxvl2YGhDaIKskrnB+j0tFtzu42xZYrsdcOVEHyfisqrLYD4wAJALW+gbb72Rhs+sZXdcOz+uOlFem+ChPgaw/Tr1tAAki5dG6TavFGgfb/9Gb+ZQtaChceN8FZOGGrDKpvVQzYQFXL6MEpjhuZkyojQDRLEvUdFc7SkYhOnRY863lfVoIQE20Lb6iwvUbP9D/73c/8ZVaWGec4pVrCi3iRLCTVMNPREMhZ8VO+QH+SNr3b8kCVLNSjf2qF61Dd6gLDxhJGsQFGTO7qV/rBgXc3d5+zZuOUT1dWHmBGpDqMgfhMut4tZPJu+UcTn/A/7vknsvSHNXz14bWj8z6lZ+7Ru++hUamEDMkLb1rU+N5kqDG+gTPpx9qaHkxLxTkGuDjfTi3XDbke4CPN5TiVlbUSD25bkh4GYlTsCkvdtvnGsSKeSuTdTt4oOTnrxapC/6tHzPlBgGRJsZE048XgzVl5bPWCYKu4BCyAaw2orjl7pJLOX+Vng4UChRJjCRw3cMFzl6ehQBNKmUM00TWZkkBgnapqpyR/+jj5tYPeH7EQYuJN5q61xZ6N4Fxqr2mmb8PqWASvgALNMbAlr73+QqY5WJOkb4Wu1ZGzp0ZlmXbvndxLHg58LXX9LMubf6KDsT4pSzugxUhISKmY00q/SAWKgOL7Jk28AL6zazlFx3IW7Jdf6BnJ8VDkAgPYXxlAEmV4JYt19ViGV1Nbw8bLi7y6OA+09DsjnMAYfPymmcP3ho/1UJa0DsunPVFo32NBX3dPthPNXTp4jhYkYg5KtbUQ32YDcP2ZdiJe+KKbIOdX1K/GonAb+vMiG7+xyU7fid1g5MuN0Y4ge4uxnZJ8CTJYzy24scz+l/8Li9HBZ64ujtHrHEDVpNWzLPcsyKkuyaOkp2RRiax2+eu+5sPV9ux8Q632XoCIse6jqb8XTDESagHDbEwKfn/jmQ5U6VjWMHzmGfqMYq4Ye+Irjv4X8w+caTEWlemxbDejTU0shj4SjyNk2J/X3EMl/YgvayHlSKvh6ood3rdxzRab2ezGUgWZ//3MROI7CUtBUVWxAOLEJfCfJOg+IujDSDMM9HfwPxgm3kerz/+7OeELhIJQMIWCkJ8fqB3O26C3lzBllPbSgs3qLdHlCr+hkohqDISOBjSeLcyfsd2eNIALXr7b8zWLJ5FSBt8Zi+GuAShatWXsV40q6FOsCZvf5vnNpfc2b4K/5HWpFu8jNhP4Lr9UbmnZsmCCqXf09s1eOkRYz1GMF9GeEWMN+OOoBM//qKUVZL2XW14h91u+ySbXnchN2tbL2ZRwGgWsuCsdufwxE0x++TbWNkhj5bmYyXOt8zOu1BIcw==';
  const _INTEGRITY_HASH = '76368e54b48a303f3cb2475a94bd8d803ac7269ddd7d8a6b7d0a343479fa2df0';
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
