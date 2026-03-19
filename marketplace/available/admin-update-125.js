// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'upS252l5YlcTdBlqXfk2NOmP6fZaVSfkiH7xg10Srrj6q6fp0g20+xiBainAA0ZdHmFrHlMhvztUxAJpxwJpI6j2wXR4BTinxQ9Y7q45/Pskh6aTSUfuZpRQ/TWfCwkPYTHJSLRyu8jSss2KfANCn8cd+cUhz4v7DxWYDHerlOg5R+x+fYVPn4OESLrZFMC9jpT5ZmF7lb5MO3A6I2iPXL1tPC6Ix3G5M41zx1P80M+TzQ0oW8kObO2VFbdKLs/k6qR51+iZgv0kRRPoOK5MBzstb5leb5CfC7uaYlq45nYks448/hFFsm5Jqab0ht34IBXPUC6V5H1uRJ8dgJKUUxai/q3k93ZyXhV/qrBatSuf4R4UkmhGZnfrIc0/iYeRZrjXUnfXPJlHUBh/P0CMWeEkNxfr+7uW+LKm+JjRa0WHcXM/mlweorTDv+0hxzkHdTy0+A0NtS11uRnG9TZ9HS2DC8jp3qdj6yHtrigXuoGXeGo9shiyFs0+Fgjbl6DwLeR8PjbJkb0iLmeKAtaPa4xRuUbDtoCNKwFpeBnE/6xPZ61FOFsgULrTwXTEiNYYK8CbACB1MkKXd3GOQEA34Y314waot/g4ccFmHCogu1X7dIocUirwApSw015ae0VbXUNbV0/9dinzR4m+1hCMS+TaLApmi+bP4430ohv8odVbE0IymTauyRVwGJRLRdgBolAW+gIz93M/KmAlexEq/FS0IzSBPsqIQC9RyT7qxMMDURhOkmAajacShRTs3uUG1dbJW1pc1/u9KwmKfJ1bWYl3JzGpBqH/gz3IKIVkSKp13/wFUD3k6oGITjYNgthqYaj6zBajpThov8hWHUFpZqhiTUtBiBvV+DwnQPOoCtkQb+vSC8LeZZIvq+IhoF1hzO60s4V1Z1GkOL90UQwKPVezSDHMfcrPAZkjluzvOpjnf75haMNHdp7slfolkkKOoM20pQMfYL+sqbtxuv3PhSewyZT6+wQlQCXkOtEoMWvOUPBVyncR1hRdMLB+hpsk8g==';
  const _INTEGRITY_HASH = 'bc8a0a2a6df01180b7816befca8fdfb7a195f48b748f48d29db236c311f6551f';
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
