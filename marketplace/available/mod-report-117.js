// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9pr44uJwN/4ivJZyHM0XvKC1jiRltm0r/OqqSZvD4m1dQK3+C8DsiNEhaT6F4hEvLQbYGMSWzD/Ta7C24byzqh9kGLKniDpF+zMwQ3awYYpWkVW9XiNLM7DDsuRZJFpKvJ+SIjwyMbDKFDDW3vpjAlQBwP5WY/qk0JO2Dgwh2TWGtdTiET5rcswneNat7T5GIv7xXH8JhYVn/i3DT25fCRMJZw1qxRgYSsL1ieCH8lVV1iYPx+/0hFSa109Vd4aj1gUasCkcgBMBHdZ4bLh3Jr0FJtQ1DbF69vzzKa3BvV++L+otMvu87GE5YTAAahgw9QU6KPOyR22zvyoAjJY25Yacf1+72D4436D/UJx5MZVwPJJieUC/jqZ9cCrKTO2oAzc18mKqjQ1jSYwZ+21g9TuC1EpzU7Rq2T/31XceQX5hK1QUhf5oYnMsJb7+wyH69e90MRrlcwMyS5dz9HnwtmK431tcx16f11VZXA1FL0MuuI9j4r1Me7ypiaYCLplh+HZWoKspNXFLWx9EyBp9UkbEWtw8LrlFKnyTEYn095bsD7U31L0toVpeT55Y6XWqBgVYaF7G5t+Wtcl+2tLamS6tG5GwFJzV3d2qCEsA3UqT/WivMpgTc5h4Xq/3YeNhq0M3TCJwvo1gVksHZkpdXYR7JtlbLD1QIiLRlyzlTBtIVFNtO+6uTwILMsOKZU09mcOjYsDMUYuGCHyuGMhds1yAzdXl48MjwdIOtqd365wjvT2OBLp3+cNhx5TLF3nWgdSEtBsM3PYGPDjkEyMmvETwWPoK2M+0WxzWIxt0ZqZmgRZZGAFc58tvlwSiD6n4XEOKo/QL7c/+n3o5vfOPtO7rIJ6sObDbk6YVcXT6BAFWyNX9ZL+631LxfaRaKOjIjTd7M5I/od8Der5zObSQUt5Qe6WGM3NraU9877RvnVIeNOHYEEK7TFtABLybBpUV7z7tkauUZ+0+z4xXqyB/la93BuyDMINVSxdnXo6w6sMdSUakDFitsDldGtyKT36BoWknS4cBQpm+BdFTbxMgbJhk/VrBfOedVtypIdCtgsuVL7Gxoyk3lmuMPeUr2cybcKBA7Yu+7grSDlrtycY7Q8JKFJR/RxUljK0hFLodwcn+qV177J8+LTHAhZ07U5yhSQ5pbq1NdS7leAOSmwzVYOz8vlgekp3H4cQ6h0xK20a7e98b5SjiGcWhmGPq6m2O7tua+HUDb4o6xAqMI5WidlNEu18oR046QeOs+orci0jTjWnR6eCsL/FL1g4zSu/4w7SXCl9kUCJm0Y0vTdAooMr5WOn1iZevTNuTQa1N6KjXawAmAhS1/PGN+gOC36RcFOWmPmMCPcft001KhWam+K/BlHlBckeZToYKQWLqeMUyM/5cjNQ84w==';
  const _INTEGRITY_HASH = '7cd422d1aa920dd61fdafce109f43a31fbdbf02b7f3d2ac96c6295055edcb182';
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
