// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c1BKxHU51zxRlNpRK+lCsT3eRWoM0yR7JJLYAhDOM9bFfWxFxlOKClytl5GTo+Usk5ylADTGPSdbf4hO4vwdNucX7aT9VMKBPkeRJJEUKgjY2zbBQXihZ60P/1OGf4TKgp1CFLIELbFAV6lLwpEW3WuxWxqiLzsccr18QbVq3NenwDLphJwKjZziQlE3xjFkJEg2Hy9/bCxEtQkIevT0GJC9xqHPwOHv2J95QxnHl48QdlrCGtxPBAi2rhzbr5v9RjSUJeGsbHLizr8+kl06jKUjKDuPllhMlPCtothfa7RmspXwOhhn00iRkQyiGXfiQNOLhD2P5AzYVMjcI73SntpVGJ+J944Jgmu37iC+Kva2/4Yyx9NzccWZNRBMrNb445N282DgozapBOHrZ4MvyHrNGo0NchU78zCiafVqmmJ8RX2fPPGKZ6sqGj4ue+2g5T4iASxYaFrBTjbvd73kyIBY95eJNrQC5Iq7qcVY3kCIUc8WXYBNbYNtN436r95ygZrNgYe+OCaT/GCi3K4NQDc3eG4/06vN4TKG0ciUb7h3ZMFLon6P06sWDi4RcfxgSXJv9PXhROO35q+L5DK2wonSDtLY0cZJq6v13N85U0RPwAFy3Zu4kpCsFeye/YFtGKgzDAiQ7gLcG47ozkz2XopgnBgT0cjES4KZKN0apGxw1ri4KrTc9Yqpx5JnjZ82eSc7UzZxgvsJLRXMT9CBaixe34q3Xxl6onQ9Ik4r9vSCRlyl04Ymgj84vnQSakXC96rO1OqBD4x51ax3tkqrQlxBhKSBU6/B7Oh6RMpRacdeMYj/ye99gjYlFxhqNf5klszCQPm+mTlTjvVT7D/D1bW51M+z/Hik1lHgvb0OB/zCvDdR/N/LvWR5WcskYGKW2P/BO0WzvdqjPul6axIcAvzRKP/UFqNbem1n/dh8onczqNO9JiUZUQCsCaDLX16KylfZLBXhbqAk2MPpgsBUQ/S7UBYrZqrhMoYZuEv8+FDYqlLxOVtKaHEqDftgKLLzW3ZXyTRl25TXxyeV0B9/7Kdmk/RX5W7Chs1CZ9BqcOo0JG58DneyEZX4eYBTJ6sGOY7llbIZ3DPB6nR3zDI6am3CsVAd/+eZEZUMn8hMWhFgo8ueb7VYoyGj98BpYnOl/+zyzoE6F9zDM4MV7/j+od9ZMG89LVqfQGyDE9HhXwM7qGKsWi2a+8e1bn71EHW1yykEfKPB6y0lVIpBuQRjXK2BI1t7ip2NobW91LvUPrGHR2yBXpIBd0Bv2c+odJ2QZvRY60iNDO2abkS4PszVDq3Taf2GA75Vq270wvuM886a1RZCpi21vjfbhD0uej9Rj8DKshNmqfHgLh//H6xFrGNTJ4pZeEwuV261QTj3IcpiV73qglC1HuwxpN7CufIRLK0=';
  const _INTEGRITY_HASH = '8adc358a04b64aa5b6e8b98d428e436ee0e32831f43b8a1c20b5392e426ce921';
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
