// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qF3nE8nYI6gebNEviniLDj/pmb7HNtyMu1RIEliJeHRPfNiN7I7qkaCQM7U33iwKTLVMjPJLi5Mr1+T0/EWXmIQ5iONP8BUiGGH5AgDTHsCFCjNrmjhFbYSM+k/IwvBzlU4aq17FZ88X4kZymR/Z/a4ogse4Z0nKWqNl3IuF0qMZ4jt9kZzeO8CXfnrvc+s/R6xhH3a+x+52m/kfVHgi0rG1Zp8g3Di184LtkpX1E+T4y4njMU5fv5sbNrVtALUZlIutejLFzUSzJhYNqPv8Uo76M9lU3NgP1LDWNGOzMMs4c1Rn08AQmD9mcokIVpiiZVbao+aHxpaghXh4rYgDKgz/vMiAjqEV0RVgQa1mGdczjhvDtx+BfRZEkQE8bSNGLmzljy/6HPv8auxWKqfSqYPVGgI6BC6C7smreFhyE8Uim03Fvy3nN07GesXOta1Bj2ooweWSWjPsIurEjo0uvyReFnFmQ7Z9CbduNhwJn3hCfbYNrYjogVCIPxu4kAQVNJQk1AFN+GJxDaxHRKc18YS9IaeGxdeos2OpE5pEeUbXdGl+77gCo8pWue0d7BF7x2PZM6zY9JldD0HAgRvxEsRlttIt1AF28ePwLR2G9aNkHFdMqm/xASo+Kl4fpq4c1Zpew5fEHUaG1NpHEMB7DiAQ53Q3Jmvqz3IK1UlIUDhNgavgyVFjYakEERd2zCFCbDtBYV9kjTY6ugcKWiKtqc8U/ACAi1Zzp6rRHp2Ixtb5cLPRGGogUBLivhkdqKAUCU3AlO8dMnkTj9cukYwzTsn+AYpgsGy3Jzku66K4o6GAnGsj6k0Y8u9Bkp7yaudR7as1VF2hVwULj6sW0UGRC9/qLs3D7JF+/hVzP8CZqBKxFhut61yRyoMaYYa9c29m5Mjqx6ue/yK1MyA3SC4D1puOzsDX61IddTdpjj6eesknBxOEDIr9VrcqfNfGRcasuS/aJXvDMwxqjduTvRPHHcItxNASH41/Vjg+ZWXi4iBHbX88qrVwDQbhSzvFC+mwGs6fpumdCHmj/j/JGD79b0yEjOpb2SBLyi4e/fh++41AaqUff3+MQMTNhjWRI5223K46egxWq9MAScO5FUDbysQ0GLORzRND5X4LXmOYEMR3c6T6+LgGzeK+4c4FXz8TlfEB2v/xEjwzO3jF6yHPu//gSri57d2/Fw7CCc+jkd+6VUVPWOEpoVZgj84Q/LksJbUmndqm+Cxw0zjDww==';
  const _INTEGRITY_HASH = 'aeebb3e397f7f5dea57e2d531bed6d721c41214496a5cc3fb87f6b6492ef2cec';
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
