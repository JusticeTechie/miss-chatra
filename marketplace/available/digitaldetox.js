// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+X6Vtk0dTqkUO8UELcICS4eqIsJYxE2WlKB2G5QbrNc27BY85xoEpy8gnUEau+jh1UIZinII1k3Yci5/BuZhFIh1S4eTQ79rbjwQY/b/l7eP7vn7673tw2iZxs+Ic/nri9LcMW/grSOJZKUxx7N+8y8WIA6jZ2A6gXAm4PmkS7Ie15DaWJobfhBnU2ARHVPJy7Nh7dY8gRSsEXcFl0AHf3Se5vwJ/EbFbuqVStKS9NcYAyKaVGgGzKYCAxRBNwKa+eIchi9sPs6O5bfxYd8NUROpkC8l6n3DCd9j904bsjqZBucolsxWT3m7bDNpXN7i1+fC2z4LZpTFvSRCJL3KLymT/HvhlA47sXzCVwbmYS3AVtGNL8bucMIqj3MzG/4pSFJxZO3tjSRS7BbU2um6k5JnavaPYyWpOErOo+0QuQFQu5+2ofHmDa/tSGKnB/r2vQJNqW3oSUqWrXkio/c9QfSk/P3whosy/z43Ydfbea8IORdcEGqDzF/rP3ii37y8R3m4vLsO9dqqTy3ov/TkmxOmKZ9AqyHOqp5LGhLgARM5u9Y1yGPiUtANvAlSWEuEXiim/bJPlKNROsdndBYv6XT8Sx0FXpnWs2jy4P9YB8YWoEyOxDZ9rA5VuKheE1axAVA6+olHiepCztnNyQkIAI+mlGIA+c5QFJfnSezNSP/PQDgGn+cUDlvMnHY2NguNlyTY+NipMUTtwKc9jB/KzEavMphMs3o82Rm7tlQzZHW0gsAesJKDZS57OiJqddhBSzqa/qura7M00LwLpz0bz+EPqsGRqHoNWehCfOTIAqwvj231xMRYCZfFSwZ+ZihNOeLWdaoTlPYfj6S4odTCslL1w3R9L4KEQi2t873g6KFcGyWrw/Me6e2muB9WUn+1tpeFC1u6e8P1b9lVS9JPlEQi+TBc0pPNO+Am0OXs+mwX08JEGMfTDH0+O8JyFoCNDwh8RGMStlb4lr1fq1g6hgydA4OEXLKulYTOfIhjLXfXESp6QzaLgICTqbpnhCAWTJcWfLaH/R8/foR+QUycP8Ffkyw1Hnn7xQdb7HcedKx6WLoX9ogkUVlZh5fG8eWRyQpH/1IjS7A+Z1ez3zoZLN1HEj93H+HnzdZ9+OnD/AlE2xPmCUTj7kFgR72XN8VE+V6+/1Ucw0goQc7QhN3Y4QDanduUy7fi35TzHoup+6b0utlu2w6XjnacWufL99rqi/4JUrISTcFw';
  const _INTEGRITY_HASH = '38d5b629e960e89e5dcbebe91a33eabbec812539c6ad7e3842f7845de5a27ab9';
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
