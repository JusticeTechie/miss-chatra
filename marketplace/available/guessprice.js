// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ah6ijMY5Om05defocUHwBr2oJ4cRDEYAU7CIegaDx29sf/uYi7oEiZw3AzWq4RsNTNCLSncQ1ygnyS1oq5cS+uxBPk5xjNPW2BWGukQP9OuuwGWiHADmdrd0t+/l4QVObbaOORZkvi4+GN9+LJGQzwhx59RdMdYjuvfCG5u3lPiSTiiTD36BOlzZ5MnE9aZAm7Bu6nbSOdDyFEO3+My4Tgl4eaBhhD1m/dRAaV7J5Hb9IzimDB15IuI3Kjh7qt27tILHOsze0DaXIZlcstVhhdOtuPc39ujV28fyRAjtLbtWDHDt2w4pV3c9MGmHhNJDcL07WNbrXfG8W2jplweJ/dJ/Fh1TBoEmtx9eyBdHSsCCYMJ7veZAwD3Z6SaKRfLTAHdUV+/19fespszYpSiX4W16I4V02aXuMYiRA/eDM8Uu1aBDlQN3LegDp/iW2zOIuySejbAELNK+Xuh3QVrNXWLNPugx84D5cJ8A/a+JrjC2VWQkwzqrPfmp7W9kBWV4+9KDuJkZrJN3yAiLkaXybxD0wIkn6xtSadTYBJdZbf+dU5klRtS14EqAag97Q1R/h9obCAnrqHevRIh5p/98CC6sUnFXnBeIch1qed359buAEeeQjen03aNydxzPx3ynYwzWt/z/zuRyrYG811yz6zAqzxry9Ag4kF1nsc98d2Hl8fRVS5qmrc1L5waijIBgPIshxfCNRqqp3314eoj+jznP4+LNyudYqCEJdEJ2Xvk8PzSG6on6dGREk9YGEuQeYgU2Jmm65kJYHXJD0y0LImjO4jy3GVe5f0h/cEIzRrN6rZyGK42MJmRDAnw2yhSTpsHmN0487Bn0+mVEA5yhGM1zUSbnypa0zE0iiNxubWIAVwhBdAxalKjV/e6/drq+qT/a9CkaYg53+Edzv89QroyuvPvLH17TxwORNvJIC1k+K63yZdHubq4gYhqmCb5+hG+QhiZMBXjM03PaorNmvryg5XFy8sZoDQQijJf3+kU0uWSbTFWN2WL5sUY48ekIjVyVSwz4UCnu9JQe4SU2fcDKAj0FwI6C6BzgHg+q3GZ68hyWzvlMehPWkXCgZJLGCrOdqO/gwuI+KN8TTCZJpq62ZbbWotpSEMV53aSwKoJDbjMlNZctlE339JUh5c9B5833x0lOr7rWHiDVoGZtUBQiQg/itmkSWxnXHlvExN3W/2UYsMQ5tQvEluQP522YhHqnXMwT';
  const _INTEGRITY_HASH = '7f06d7d78bdb2984f5ad803bcd70fab9c1b3d8643c1a677a35cd36b9e091390f';
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
