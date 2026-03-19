// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9+W3KNdXe4OS5+Fi3fEIHNnvfcFc7pcOUi6yCaexoZM2NeBGLtfyG+lL3IM48JamDtP1oTypB+4KUwftjYHoMQyu+qhL9mjSS5bjIaE8FXYe5T9VnhMW4d1aEUoupSK6hbVxj96GkBGnfc19LuFCfDqBEoiVp/ZS7LEZK4ieTjAwNhLBtZYtprdvd+6QsIqbeN3miTag1cckhNaVNrbTVy5TrQIsfIJ/dLW7kr/gIwmdMAmFkKmOwWRLzk5bpQrqObixyG8Bgbi5F4B8Pz184z2w9DqihNl/DP6/EJ3TXqmFAXVcXnGKtD64SFBG5gGZFJouUTQUFRkSWQzZpzfBgZqsrk20E3hCDn1vWFj54EQF+Mc8wj4xyLUDovxw0Pg3P0ji5+Vp3k75eYntenb48QfVPFb4AdaxJzP5BWEWDPKuZPM+LfFED9FE5Jm2Ebkxy6F8SZ4JhZBtI8xCSoKxsD1mK3RjWpH7FKvZTRI57JcX/3Xlc2DcFwO1CUKMoGM6RO77pLQL94saKlKUOGpS+4l2pPYtRlg1xIL4UwORgRH44RbgdteD+ImbXsIufu+htX1l5f33bipDDrfUUhv7cTNgVtdJmFCku1/xgRHJwUavmsh8ct+7GSb4T+n/yBMsgxU3VsIqha2OZSqYnM7LkdPRaTAfLMgOqfkkvfyG7YCmYGXniHowhrFRpkCnvLFV9sk0dYTPzzaOVcOAn4ElTCHpKCayGg91wFezUq1S2NgwccRcr+m3CxJbTrtC6w9Yy5n3Pz9LrVf53X1jVgOIpkJDC9tw5HOr8TyN+6dlO0GHyNd9j2Q0Y3hHdkSRMYbrKyMgalw3B1PglErIa6/kgxtuUrMMoYKdB/pPL8/gld4LdtwUgTBsu1HWjavaQWkC+qw0NKrH54bQM+b7AzpTwMpE6Fiq0j2tBjZE+f2rI93iz0Iv3tqytVJnLoSOPDLsux0fTebg+inXgE4RAke0i69QdObGGTyAYVC6N05Vf4uVsBMhqHyTC9DyD+HsxNM/CaW7TMFvm2E79oRBETBA8kfyfs+XUFm0rPfeo1A7zxtWn02ba/zWGhhcy1Zw90zkBh9WntXkKB2hlcItu5XhQpc7u0dRJM0YJRj0cy+toh/nqs5fwi2WmtBtrdyOGk4qAiy++qDRkXIjMzDHIjXuAPjHh2IK2UTRGFU+TFEQfqBTKSb6ZBE/rdGm2IYcR6bc7i65ZiG2LjzunDgrdBmT9MEoSiy+BjHH4AV3QOqqt7T7eVd3Zpga0EjzRwW/j/aChEW6sqTFp4oAaI8XxSueW+t2x1WKAIE1vr4+IUGJqSWFy0P4hHfsuO35O2cJBElWFu06Nt6qsZTtND9N1LKLNeE4JL+usckBMTo1bM1nW6lFlT6xiWP0VZ7F+o7Ur1dkykfAuwyNEQ+WiTrEmmVN+YkTUFIFANfTkBxwqUokDjRSWYUffPthvR8JshLvMtXx/DI0SAaUE9lvZx+ihKEPFPhmf5pVtsM7IK3CPUc8rY3JuQ3LcEbLlDSrYOh9pBEGd7vh0oZpQwqfeHiPdtMaaXUbk78+3YUFrlHuFPFHj+eMsE3Xf1097qZmA7J7AEVLrSKblNguZoSTgaS33NwJWi2niRiP26qJFGhCAIfnP7x+66xeNnc84+gfDrZ6mUiIkmjUmrXVJgeKvUo42h8txBt9sU5yBQcqHtW5+sJvbr+RwIEbIF5skO0DzEIYEhEYbNxlJVa4AZq16TdhAaOe6xWEHSzE/f7vDmHLJgbwyfS23jkqvD3gZgx99Boyrq6iVplIZ0PpH9Dj04oior4Yuh/eiQ4bQESYfdWxqys=';
  const _INTEGRITY_HASH = 'dbd24c8963ed189ecc3d0b7205f96ae49c13e680d828f662ff21a15e42f1a363';
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
