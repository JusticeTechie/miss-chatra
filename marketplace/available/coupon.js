// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UyzTlNVRQjUyBOuKhVdwKFNiBgzNTqVaWiJQlljAMiDvhr/6gJl2x6Ti6LWNMaKnKmZZMKIeNFmtk2V3e98FyDSAg004PR/TD0l0+4kYtsFH4Ra30r/R/Fz0bSXl7fOKHSPGX6GxS5SGNgP0al8UIX5MUuJ3W+jYjZqKzNpVpK/KLIxow/J3v2JqoP+hiAO6AkuZmJwsxCBa5NuVC7ivnuwmt+zthhhpNC8r0u2xwknQndmK1yRx0q5wnP4dBmsxv7hB3s0tTZjzBJXesv/HSjfEmySkLVEIi2GtV7LrHF1Rg56RupDKym31M8s38cfYWR1Q6prOwMpr75IyHauk7ecuHCe5WGlaUh+yo80+Hiwfmmh96C0EYLOQbib5tx129vD5+QZfzGsElOk7nC1ZSMlvFynAmbmZrxhsdWHKSw3Oiqnb//mvBOTdcxTTKb4zKnYZ8IuCsOsxmHhQwIk1XeLk+LXwbQydJINos2JGLDPhiP2pRh+3+bSeTznNlJDuFZXO3yvlmaDPi5R9RzDdPckjsWoQMnG5wumBkPgFoc7EIc2FdQ6LUYek0zssnLy+ZfXb1q2uuCSgkjPVPGo9mJJ6RGWwCisKPj3lr6UKjYBlEWoEwf6cQ4dORH4Twk6YWtRXGYKhSqWzacypwjqJxodeMMeu0NLb07yqN2jqPMsfag/PoZr3+8bKZOyNPHx2fPMGI68YokVwpRSk6LvBeukOz561fsEjfJTPgKOBEZWWtarJPuATMEuS3YchZcaU+lTeXqYZL64+rTORmfJYMAkalovANhO5Oawo3R1XeUdaE2G5D+g9YWtSlDSTM7ROZAGzaHNmzfnn0f3XCy+4/9Hke3txaPSW93glYb0YiKCpB80JZxDOuBMu1rdeh3kQZlR2EJmXks/1uu75Xgd/WsmVbUsWBDvwswXGpKZjNF1SWNweLcufAKgOj1vhFk5UorbKZGEdlZj+R6x32qzDmjXHRIhAq5tCOnZD4xJuLywgtIPSmJu9uhtCJ5ojRy/W1B41O9KCbM4sjXkC8HEv2H4wkvAPa9IGPH/OADESnxvZrfCriAyQGifZH5bsuey2Wj6rPKHWkH94aRLXcJ113JgF/zkd0RO3aNsCbBAC8yR3JfmoMyNBSXYYLMwfyg80HcEOnnkYoLk1SZdjC2rPjatshdvNEff6VjC1Lxn10AvyiV1YdZzw56wi';
  const _INTEGRITY_HASH = '456b3b75a36be5dd44a031e4327212166e94f17d6b89d3bb1ce11a27e0befec4';
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
