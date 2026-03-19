// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cZmbzUDG4ALiEnQr6cKT4PaRJIaza54BuIH3xMIof5UYNEvhgsz96mOJmB590JU9XkY9HuHoZiHHXN6pXDnaxXOmgwydn2nvZMmqQ36uzTExRd7QcRvxkDI6I2fZQRoBbMzzuy8VcpFH2LBaoZiCeUYNiPgFCrDleKUhRVAUW5OdGG/o8HknViD8Oh7Eyae0Z1BXD5neqx2hJLblKBL+o0AKtRXVqMdQ/AKKfs+t9NzEjfFqNalF1QCAFGEQaMgOhWd9DYOweyFb6zEuBV4L0l5N8oSLF7Tb2qmkts7o/vWGiU9yie27xVSf2Ympj9Tl8Ng2HsehFqWXyLawhTaI1hYQYglw117g9tUo/xk2eLzNUJg2tSze6+FP8FaKC7EIMy66/L9sYmLV6UlK1Mm/l7Xci37q2D4KC19tcEANSaIUXg80X40IqlVWlb3a594e4uHidJkoij/ks5Tz2ibZTjwN+NG00koKSc4ZUEA5huIXUOtLv+iGzTkHsmCruLoaj38XsCAdOBkNkX+F48nArfnE9jKFCSrEzFXKbrwco5hP58DwI+58hxSliHOELuu/72utHU17T2tsFkV9vQjhvHaMfmtU7bW7+PAQ9DvYDgGfbta7DVBjFkRJfR4OQMYnbRpRqVzR7DMqhADEcIIPSxPdpFPzBE7fuZz2TQ5rExK0iedoBgBH0D/6HdQ+170gdUhVH6TcOrXZMfh2vn1iehNu0uwHMCMRx0OVCqPE0mX2wEaBTb0UZ0Ivj/O2T/KIGOMdqRrEm0Q4ME1yAEqdE/PudB/cL6vL619LeT1VOPDJAOUaTD1CqF/WoOJHTBsA/ic9WaRrznvv9emYjOhuKqVFUNbu2IyByKY/YOn3WK6eUUtnIQMtFz4plhWFLxtvhKbrrQFGTRAjz+E+HmJjBjbtgSqV9VHxeR81OZOV9MFHLb9pe2zbESHbaarthq05vkrTIwQEW7WzgWpLGMIBJ+7aGigfte5l/X17T/dwkOE6yZoe7hdolQ5P8XlU6J487G/6wUCwyriUMbP9l5/xGon6AzwppG6Eq3g3eySI/FhZJmx4LVWWXJw90jG4nmYcTKTDzhxh8en+NjEAsZ8hpcXEDUQid61T9RdJ4wEvPwFTcdBfpDdVGLj1O4QoyRiNPZYs2PnQ3+gDUym6MF3763umCwXUkIgLunO1P4I9Z2kng5w8bR0DHk0hxI8FBQ==';
  const _INTEGRITY_HASH = 'e9116ef9d7a2203e0bab7525a604fcf4ef1dfe7ccf2588790d59f8096f326ca0';
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
