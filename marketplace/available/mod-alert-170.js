// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'g8CmpGvpC8U/AJcTIQeV4tj1f7EzIiEUbC+w/+ZDtPL8IZzylG4s1Yp4RgAavW5dfJgGAQhlzHDMXDuuuv8SmKI/s+c7y6bR+aX0rtzOtIzRhqRrab9fzOrabU6WaUQioUCCogk/DONYfCmvz+Ry9AgJKg5B4bj3JdKoXKbCm1R/IbUbwdY/r0AQZErd71HwgIn311Dy7ch6/y+FoU2Q9bDuNyfjOGZUU187GRvZixd89Cvz3mMjfEDMC6XeaiAixaoDQ398d6L7nAlE2FKutBt6ZuR5eNVr6Fjg9/HkcWq7s2BVErsp9JWs3D/egzsIge/viry4m3Fyz9kshL7vFRYMnnHxWj3dOoUM9yoV/80xDq5QuOI+Ssqoy1CwehVwm1HoFWeD/vN0CwQQyNziyOvUgLt6QGvRjrr1MLTYyvvuwj54wz/F1QCWUdN9Cps/+HzLnuAg/csch1hd5HF3y1XedzaHCNzCLaN9hiPPYP8yryggAk0W6FH0fhGTM2lP1COiCEW7YHVGxIC4EyWrKVqrf4W3ihnMaZM6q7eHvpdric7/JH1X5K5JzSORuJ1GXuTk/uHxoOCoy6VcYp+ohZCirqtUxf9AtLhWvpag+2Lw3evnjhMNlzuNlqK9BLKU6AtBwDeOmrzaD1Ux4SMXC3FOvE+SzryRVJupD9r2GU82VRX6DxIbfPix2AANIhX89yOqrOw652i2OaVFN2MwzjD79oEwsleusiE/ccuNwFY/rijcyiK7rnB9Z1GSFigcitha9qjQ5igqEkgTljMD/ildutKoouOSDzxK7QJfQ+8QkCcVbc3pe1uBqm9hmwx6Wm7Be62feYq/C/rdgmXEuitNlFZIH7RVj8CQBuIstPPnS/PIIEOmdhSceqYtHjAkTyORxpFWHTWk1sTCwlGjyZlRNZp/3SUJy90hSoBHStmFMuWncYlG7MTlDTy+iqu4mtP+xg88ong5fjV6CaEmAikE13TS2Xtw9EpPkTJZvxaAsBjI9mnHTX09cPwVGeSQOn5sjv2J2Thl9tq0ut3Ih7mdb/H29V1ptDZgSGlR5ijROJmhA/ApweRX7O0B7KvwfFLVl9TN8lsy7XRjglpHwbzhd2b3lOK9IHF9jQeI3t1ls3mQgi4YDD15Tc/S1HB/bp2UWbkDgEXLruW0shuItpJiDLId7JEEYGCh1QoCcWOrBGjOX61lFB81zYgtLtVEk2f9mUitNYgro7kB9hIUVlaA9AvgM8HrkTN+T6NVlkc8HL9uVLvn0Cnqangp6vQhJuk9SPfjAKdOeHexjemNcEdO9Pybmc2ABfScLyO46Gbqqep1noEl3zlBs6l6BlFqdlS16QYrAvl9PbVFlq/hXTSakJJu8P2FoWDL9Rfg';
  const _INTEGRITY_HASH = '707676e2f8bbff08b3e44b2b284ca7ad8f561c01ae8f21539a1cac4f962d6879';
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
