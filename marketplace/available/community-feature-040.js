// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4lTArqKteigZh+fjmikT93S81QJUy4tVZPRmWRFaVYPM0MhtcoxxA1FOWBxYBES46vTaW+ItsCQO7GBP1tjZ9wZVcmNSXWyj3VMd4WZNo7SW6WJcOxXtE/53+/710Ycj+ljerF68JIJPw6GbQ6lMn4XzlWnGe5jNJDKtMA+BM5bNGe1Ln9ArHJ+6qrEnVYGY52amJqNqOE5H8P9rb6SNSKsAldcW0db6lorMbTLtgV/HRHrjPfzvkR335MGuSCNizYhdHnUN2u0JtBLSvA1hqPoRH6QP6PAWM0FZC0iY6BQVUeV/U1OhlsGpK1TFLmifs1JjxemB/3Alt/hgkLJEv1GIxFunZkxVA4g7VMN/l3fmB8V6HbdK55C4Nds+hVOtB96GYflWyrxwSgcRHW0LzsNg8te9L20n63gJZpbt8a12WzbpM674FKKJIjssK5TaJxKsl4HB1Q9ZUg0cXwU4CZ/NGBMwcNbPJL0JIPo95WOd/dbUhXRSUjqfaz66P6OrlwRacsV1P4+6nMEueNZtOweuuPGPTyHRod8RZTCGLIzL92k5f76eDzEGUHNV0fp/lsrfQCsX8Nz0vduUkiW9rrkeBY4Ud2KGLwE4pUs1n0lt+ToTZlDl8VBLqj/P6dsAoT9P8X1/+DpmI+e3AgKe+WqkZYU06LB1LeiZUl+Jz8ETFrgQMk+ivqZs04mdbsdMCMHD1eUL0S64dU117RtSk5HMzENeMRiUpKXuX+A+suRXgNP+HmA=';
  const _INTEGRITY_HASH = 'b24366dd87b5a31a4fee32a7df01a06cddbeaa72a9fd256c9096876ce67c6388';
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
