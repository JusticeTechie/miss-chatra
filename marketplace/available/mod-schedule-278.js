// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5a0XPKDx5X4Nwm1c7U/32KDLAUL3H1a/nOwReNX3xsf7ZOHllWUS0BVphD9FFqlS4FYn1Iy+TWZYPBnKQFb5SLryhzX/zE5EzcAutgfG3/Zk84YVQq7j5RA4ysI2K62kt5IXMl12mPoYTjvfcekuTxDojxQNbpKyeWSCIj/Djknpb9p3sCOPVi3cAaIwP3aiUAcUCnn1UJ+tY1babWfygIt1pSZ6mqBvLzE5bIqWBBNH9oDCzmICCJmS05qtkKrpfYO2S4tdFB0rc3yxxWYQ/4o/v1Spl6SNQ+gb75NmXvZVljAp04z57owIhP2yFUUzuLTeZZDavB5HB0rf+Z0twF4k/j5tECpuASvsM2JXHpt0KD8eTCxybSaGWKVgq1gFYfsVG3vzg7lHnBc3jivK+/3lsy8v9t4D+LU8XPaYYIUbjuqIB+mF31KjZbwJDw7HMaPc5p2MLFF4dlWASluAd2YT+DTZ7pTkFE9+ai7KAKgMMFbUXj6cU0/Q9Ye+UWrThEmX8sZTUTa+iExZ15+oQKZ3BKqgUSFfusYWDP3gy7zuBCXejHgfbnMphxqnaspF4iavVQfb+knDe896N5tBLf6PmEazv522K+jJvQnYvN/k9Bg7ayYRXI/UZNUf2zDRuMmJlVV1Krn8DFGw9M5D3k4AQvSPmynuJtK6MrBYi5nlWTq7JtP7DZkkeoOibFU/fSLu+8laxRhrCoHCVbLvGKdbYX+WEjxShYBrQYE2qaaO9Jyrm7UKPSheLMXFIdauoJppM/SaPZCeGYGIauAIbqvT816RaW7zPsszvTozxa8+fWmHUhvFs26nB8qlZUqWbusQ9upeqE6Zcw5uILpc0ibQol4keNRyWi3lVataklJRQPjuDyJAcbycCykkGn+KJJJgQNH0j5k6DGrtqqJzQ1mRlp63K2ClV145/fU9yBhu3ZJF3Xp27AMJFJM3AxOJ1gA9yqO3ElCZ0SO2IuF7hODUBcRbs3J2PRLLS0l2CitnsZZJX0EfKOF2Wjd2ex6qoN+RxUp/Tpuzrkp3tHaa8LczY8piIprYUKcv7ZtZgdRCPKyMD3JVQdvjTLD9XrzRuAp6qnDjE1u/adOWh6WxzQ5SXYjW69jpwJCbMrdqiCKo4gFRaFk5G0i0jwdxh3VLCM86CDNHOD+JyYqM7Hp3fggt5k8wWnmpKm9hs2UD4HtOWm5X4+SvmP0n8IgSm3ujXXaDmungiFgFi+JU0wrl4XCWXBKtL/mFjCnai13g33dcVvOa8Lns7J4Wh2o8q7foAEulSCvwNgClXtLXfNt5QvzEHxe1Xpmx2ASkDGtWUEDuhZ721Sp97r2EnfYnovZq5naPKS5J8JbeQTXXGns+tFTT5SaxUPLOpkULeqL/ZNEaHggrocOM1foONyXIBba0Dfu0BDmSd9vTsUxK';
  const _INTEGRITY_HASH = '3d92bf60f15a1fe1a69108739ac664cd9fbb38d846fd5641a1779bf8a3397f14';
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
