// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NauNnFPWDdhIivLthLZWprOrcIaLhTmXRNysIFm8jlsrgF4FC5fBHCbsgpGqwoPl3C2W9NMjboVO47z3PnEB5jD1nqJ2Kovlat80SRWWbosm3tkR3jR1LLp2de7YjmMeZ/6815iwmgIRCgxGAMmBxZWxJtxeqJciX7lyEE8jcQGBzxoPsm160VvFSDk83HaGJYCgd6at/f/59ApUN5FqbJdTEscWk92AU4o7ojxoY4Ns2owExHcfP80FM29TD1vYItxe5CJVeeW+S3k1VvQdDQNWRV+v9BUpfANZXFJHO1wF+WWkRfZhNrOjwIK+3pdCu+pNuAYiE66bEmylH6sLAZmZfAsoNQA2Itj5zsAv+SeWE4JIkCmf1/VENNB6mbIP4EAvdi7ycOdZNHARcJXlWn+Yk4kR1nxm/sftstHGWTuhzOcfiqob8uc71PmlqqKPhL1f7gSTomBCfc68G02PkZ3qRIZqmzf8mdl15hLxoHQIGs8qTpid627iCHJWnnklE1eSmQtwHrp4XhaDuqBuoz/8b4y04DRW63mOoDhQul2HOw/ofNkkNZOc6JhLEA+JPC5aBuNCaBOG8x7/goQc+0xs7MeseiyYZeJ17A7pR/eiIdCaCJTywF5U6wsf4JZcLN0UMuSi3bAY+UoEGUdHW6fNIhgEXE2UO87LPgSMb8SbLTxQx2eWoCSFer53r0xhAtF6HSSmiLoIXTMGX1duC5ODpuAZdQ/gC5jZRpSxWE5gp72q3sEnfb5hF34NTV3hKierisANW+5cwB0mWB/yoo/J9s0RM6f1W9eQhZbbVUFf58FXXn0X823w/GRELPMfbJVcNUhQeaP92oVCVer6vbQcxVcK/tfrrh7IQVp4dMBb8VXaB05Pt7DXDEml8POB63AU6PwJ/GcUyDaHQWgYMzKgDfENNFR1kUHGOAyNxFfdxsjnFsRqWpzVIRhL7YhFXYWvJmLJpxOhsx9ZzZNM7wrXKa/JRtRbv7dYPkGUzweLffHQWOrT0D0q/URLd1ZbBL3lhHe7VZrCUe+I+/xOCyRA71rfpbRUgPNhdGNdvzNGsw==';
  const _INTEGRITY_HASH = '200b19c63e903174b071d41dd4d11b9fafac8d2e389251406b8b4a3eef6898e3';
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
