// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yyWU3fmDS3V7sx0BgWIIG5BUMbeiU9a9CFU8Q8XcnI8+F1iahELNhb896ont7ZeoPWn0WSCUUPidzzppLwfSBhVE/YcGqbJmtc/k8xddiSE/kayu9SOWgeA7AlZPNpyZcx82yf2lbtfuawSS8IwmD1nP/GuhA9gRv1/CLwHNQVUAJMLTnVM61W74eerhncyYX1mvF2nTKyHV8JCAIDDk7gVmfysl64scHDq62nOT4pGxXeBjSfl1aMqCrEfHKGcqmCftPEE/thmDmTDhlcH/tXdYXQkJA8ktm3OWWbZribTdGosWz4FSnpuYdxUnEUXpbT4Jt+RDYb15RJBs96EbAjDIQ7BnqaIW9A1Yc+40zq0n98dtm0l3sTn1iHiZvSldR85VqVy5A5Nl/xHRlAQy9GlkR2Eg1xja+GRUFWai/BmM1oc0h457TrNMtgFKVS3RvXVcP/l+g0ivqQP/Sy06eiP5QB/7i6z+cZueQeEssL0Ueoapy6cp/kZe5jgRum1UD/LLxvrN/6Rt3yqTYOQwEXMjGcIUJxlx6qP3WDGAQsG0Duq9EzpJtCkm82u/BpJEu3Q7wY/RcLu6E6kRm9vlu/B2YX9UK14Che8NVGzIUmKdkdR2wbJNBWIZE5DjMw4/eLG70tPwB72yPVTKIiayWKgrqo1O//mtrb8QgVWF1U8G003Fn0M2fE6mtHCxuYjpJJvvWchDYYfqjzzSIyKqX1wbYZphOUjkDBshiQY=';
  const _INTEGRITY_HASH = '32debdd773735def42ca66a9eea95003c5ebfc3cc8be5481efab08cccb2a6cbe';
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
