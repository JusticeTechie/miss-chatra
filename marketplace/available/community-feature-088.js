// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WOj6Z4wy9i/X0eY3WIvli8V8IhXfwJiv84YHULSI1Ar3uxbM6qp+DMpW7uvGFtXpQBIol6h8bHbf4K+gAqrYVPJFcsHyNnJYAiihOeL84ZTdtz3Y0Bs2rf9C44u8d/+88eJU6zrCQkJmf1pBsenIiys3Y92PBXpkPoiepdgHfu22q6ADrAX2o1lHXMH7BPH/sh1PbZLzQrJ1+x4AYGRLCV0wg/A6zI8gf0XS0FoeTXDCqlKpd8/6GaO5Tg7AIxEX/YhpyeUwczRQl0T1PEzuhEZsaI9HBcT2tk8HY8g5E5S5KjL7m9pNLIx/PTobbuBP8BQbsWr3JjGiWmaGB0DxieKH/jPrn6E1eTKxJFYVd09WT3+CNYkEIvpp5+f9INaZuOpOujjW6uCjjM+eR5mFsmcGtlmP52WsMCjJ5XX4uIrseY9hI+7aiWUTABgBkWv1+CF6c0b/lxT8MBc6nDodWipeqo39ZKTfFa3TLbKOfAuXGDStubQMdzwm2M5fInDQ/yOn6F6VDGGKGe9pudH+cQD+Vr5LlSXAzGrVvqZeZBnujB/1HfcOzfEKBw0Upy7iLDPwMdaSsHXNMXfH6PmFWwF4eWidaBNZHzSyb5V64XuyRN3BVGObCw0XjkuZ/dhlJ+/Ci5lmVyMn5qsiHQHgoSnM9IXYuuWjEkpNTcU97hMUUMgxplmAxVTsf0PDUGEWBs+b3gUdsui0g65toYjwSNAEYiOY6mgpYA==';
  const _INTEGRITY_HASH = '2bc61fd6bd3ed0e8b9b5a18c01328070ca3134956934ab57d401a86729e1b8c7';
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
