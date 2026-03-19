// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'M9UuzrF5zK2M0fpALeA7t+jEGDaP5z+BbcsSszLdblANeTghGp+J47LETrhqDrMffk/6y/zxqiTPODcJmCn+C1nNmcm0mIKA2qMMybjIz0JmSbeaEq4WVpoiZ+byKKPoRv4addxaczhSJqDGynurgpTBVxjWwcyq+NMAKx3QIqlRZ0gJcypVsBe3omqdJU6pVdrZ/qfiNiZOzRFW7enuC7lP21n0LOFluypKhcULjHgtIi+9mvMemw6qIGuhBu4IAl87UOE1qSalrC880XlyvS2PqDw2splZ0X/PMItaNNIzzd9W6bZbpy3JPLWFO7MPtRlcA9ktCjGfQu6Cm3EfjMFfkUjUN+9B5s9EiRBJKQUly16YJ9jQ2WbUSUjuIv0zolnb+htymILj8kKZW+MnIWzvGBBGrIihox+iJKJWWJ6zgAIrbiiGGJNVDbi6n2RStJfRCkasEPcWRXJ//ghI4uxSOOj7/S5RVU2WAQS5JX9aPUomvOwDf5EJVpVDjwan6G3JPIPM3A0TXEc7Ex/wqufVEV52p1oRWklo9jXoR6ePlMRexI5F9cITqSz649cESQhllOSVMi+uFjg4xIo3FXZ43I7nXXsd1B/QWjLm3slUBEMdI6wj42iuMredJ0jwRXEl4MbFE6Pv+evzyTYn6ClBj1DbhLPenSVoA0gnATN4Aj9w1B3Fv0Bhut/255f+RjmgrehPo3ja/z7LF1K9H/FqG17kReWxTgSO8DJAMWzn3E+WILAanQfQoZwg3htPS+NiZ5JYW+gK52eSTrbVuyLFG1xOyQDdPuwsVGxjgBBqcs9a3D8NWGpVMffOtZNDH8hPjeL69LN0WV2wzINKD8lCAkeSflCyPpJIKlBqNOWUjeJO5CL0vDXW+8h1DIUoesvOHaV5ZpE5Nn94FqUxG8E8L07dIyKm2i5YtM/9KM0ZQwIc1aTGuyU3UK4I/pzqOwaNk5qqWQZZS9TJ++Mz1QOG+OWbPagBkUvzczcjoGwIhTPZpk1EyzVy0KP7A6neEsqN4eGE4+51hoo1Uf8Yf4+et90NEqbjoKxe9mDENVmrMVfDTEjlF1RbTmRujO3btwzA/APXiEdfAt7BOGryNtQuMOkqExUtn5koIAeRTkYm5rMlG3j7/5dKapDFPYfbaPdTNV9ZjEdPkH5jSEA2b6Ms9n1ieAoCYoe9l/0/P1i0kUz5glNprokzjox2uXlqi5LPkXdru1MtP6KfyIsM6+boo6brKi6w4cxrtji7I19Z1DeA19XGQqul8CWwmX+bA0S40hVH0FYG1rkSVOdtJ1tiiwMh+aoz4VnTx67vnMpKAFZ718sRNejePBtfReV/xsZ4mbdCMjCm4RIRODSQjyrFU++txuGk7Xb90zpN8Jx7oD/Tlbc1stwgtvdsqKS5tUI=';
  const _INTEGRITY_HASH = '2f95152818e038237ba542d3586352abc9336ad4cd245d17adffe25357705907';
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
