// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ToTmGqLr3omUP0gO5OgypwhjO/VNvdVZnvd+G6vLnGlkrHdjAgsan+nrC0GENrcAxNDqffPDATFnLwE1EJ8CMI4938bEmQ451fcV3K362sC5y7BWbdOP8cvQAqR0OKrkfD//VNAAu6OhxSfcsZ7/LTCEfWWFsRWA6+2oG6AQSONXSfTarilSIFKXl6SviW8TvYTLHyLN/IVfjLUyYMzwtC5caW2Z+sxlgV7weRqzKMgZw6yj//LPXeHJQ/yibcjbUMBuG4f2jNs3nR8kdSx5h8W0+YsNaA5e+1DwrwjPclyoebbGlESGCdlRvrxoc0pSiLhx+gVPdq4pavkZou0FuBGD72bjtPF+KAeETaQeXgl/ko7tTCjrE3LnlGj9G/HvWqsQpGz9g5DUUH5KC7AGVXGkNmgtBzeU1NNn6oFxgcSFexuFv0KQKaTUoEM27rjDEKswz2l2W11I/b7PGqhvs4jV/nhv+MoKsCWR+ASr8MZKROM9iJu4xv5mNmqnTL1oWX8z7dzVARzz11tddhQ6O6fiWZTeDl3cssmleMSLfIJSFSuUdBBfE0MXgeulhP+VXPHVjtwfxx6/bsHVOibZNWARDVfpaQfbEibbb1jJurFKOkRT+C3PO/Oh6zmZRNsHmU4e8Dq6liCBnftw+rUoIQdWoByWC93ZSuEmTfIs6zte3UuleW1wkN+ec6jdyoUzQbIEHHcQXngP5mBE9wr894lm5sr1Cr7Tn8aKs4jvpMndhpukRpGCscuBnPAH2RRm7UuZvmz4znPW8vX6dGiEW4dAEV98ju9zErragodhH+eZfdPD4Oe8kUUXpMRB7A/Wybn5P0RrW38Ka4Bo7ArgqGepn3KOzvEqkxUZaTeM7pEgmKS4IbFTcmdcdGdH0GHyUlXAfZYArTRGvsUkHeux2tgxsi0GVr3f507atIqC9l0RGagktMzVBu5EGjDCFxmlWTPtw0xUbzUKBaXDNtN6afHKDw+OISz8Dz+FbGOfsJZNnaimj4m8KAP03oAZcQWnLDyuvVfod7Iv9+CV43KSt3JKFc7pCeaCtxofYCwLelzpqx9Xm6j3gvnijkjtV5ZAPqU9egiKO+lgZ5hVrV9E0X4MCJ2oF2Emx513xeS0ywhKEXWyYsCCb9EGdnNY1uOQQmvay4pz59aULHgC8pX+zlbKWHxwRRN9VhFYCvA/SPcQqx0IhIdPzyRyz/2XDdjH9SgSvXI=';
  const _INTEGRITY_HASH = '51fd806334c5b65687a9868684336d7b497e0f20f51532da1a1cf31df0121e56';
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
