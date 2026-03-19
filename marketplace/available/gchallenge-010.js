// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OSocqbRHkFY8I7jZOyD4szoQxf0thMF0WdkT2Nxsoew7LWWhXmPoPiXzQQd2kW1npe6P4/+XKmPta0Ak/TaVHp+WiaLwnR8oD21w+GPurDPGxPsd50EFnpblMY2kXpG8IPz8vEhyFsdvFMnmGZHM5KN/6C0jaeYd/F/s8XK5hH+Tk05GxvFoovmXNod/y+SXO+QuEkC1+ZL5dnLhx21r4+J3QVkDCdDnXKpogc8H+yahvuj2AvZIlUZUjg3624wEJyISB20Qu53akUoVr8J/LYie2wMUzZNR9cFBb00ctbxK7Ek008n9LaggUkw+AoNA+dcyxBH/8wuJT3nQC4vr7IsKQ0n3kIYBv1AJQrrS6uGyUzyCrBYiHdlQ4Ue4yD4IPaikZ+KfOPZcwm8l+UqLni2yjZw7v3wX2bAbG3WUR1uqJYybU/lK/MsofjgUmK2AmpP7r0si7ZA+d1rn6uSeWKSwpHkoXSY4ajXQWYRtOskBDzYZd2hh2WUYCpEEdes1Uhago6km9/M4q2pGwQ58OVi9agEy9PHu+Z4zg/42jG3HQQqbtQA1IAAdxDBxL0jXPlTQAf4dkvkIez6SGCRJniQkrO6lMi704Md7tnOnACZ955yInUIIaDkcICbiwIufPRA=';
  const _INTEGRITY_HASH = '5e289674f0bc23ca7ffdafa1a3ac602dbb3f08a403fdb4847a209dbc3255b461';
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
