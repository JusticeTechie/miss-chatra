// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '62ZMvrFOIZQfp/52Bi/W8+vqBZDQP1QQJulW3ZQup1DQ8uUL7uBR7RIxUW9X/C2IeFyCAezacIrdCxFiHp+Qj6990zDxznu1foSErrvBJqjzmQ/APSFGzD++7dRYO6Kx2zUhJESoOm0MX5SwihRMIKXUBDm8d3vxXwnHguZn8G+1jV9y3FMr3HFFknGBwQsJ5sbANmc2eI235mvi47tUexlab3MqbN13bJEgteF4Qjjrqn6pbF1+SGfZFXJOWbjy7Zi3id99XH4vux8ulZTdvhkWmNTCvxK5+x1puJ0bFIl62wdZa/YMnL3zcVkphvIS7SISFmSPpvHoL8dhbNyhbCTDzSdAb5qPnKXDkiV01RIEYHyGCWsJYkusecktPlG5Mzr5xUwyHM3mKOWt8mvEgVk87A5CqBNFk30g5AnTgKl3rUI2BJjydQs/IUSKGw/ctzwKUdfYtln+h606IN8ajT7YVnCwVIrCieaL7J2iIk//RjlLfPIwwxKs3Vx7qEmUBPbDrGey+381xcBCG6vsEgiaGCvja6cpCn7EzhWIOu1E/bnBUmArkBXdoHatdKK2szBcXOsunVuZa7bla70pz7QW7+fj+3ItmgZp/T7eOn9GdwlmkXN7CVlZh6TMtdQx7nIAorWcOD4k4wHMvi+UozKKPwcXI7cYtjmGFX8c1fpz4gl2nCrCE25Mg9bY15TReFxUceKOeYHXLt06EAkmncunguJxyTzK1oMxv1tABDNHPw6sxUE=';
  const _INTEGRITY_HASH = '679b31a3dbeee473327c721e634b9edc028ab1643b38999114c33e79fa5dbe97';
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
