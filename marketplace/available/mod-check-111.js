// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HIVDTMOrwgfikZNArnjzVTgw/+Wt5wiKJSgaBk1wGwPZlQ1UPZZGXuhB+9FxsP5kcsQVn//eo+lOr/yYk8vDXoA/Q2WBadl013/cAGIEEUNJi5F4uXNanHCbDKv0FlAUCEmGM1EGcgDcKJGRZVu4ymuzz0QrKC2g1nVW+FdBIMHwunqsl5RP0Qo//uuF4PqSKhoRDyD2fYUGQj6FchOmA1CvRqlhu6QBlT2Kmzk5QfgIj3w6849Qc0zzuwP4/hDm8WqJnLfmwXlYSwqUZRXkQk5HvzJxmGETcde5UxKyBkSfet1fActvSPz9NzMXpT83y19bV5D7uQissEgoO4K7jBU4XW9Etzq9TZYLGRLay6/q5kD8jRjkAp0Y4M4Sl64EM6vgbfNUOg7jYKsqMK4sjOtdHW+Tt0Qvvcu6sOmWOb+jq4XoAvL9vCUNDac6PxQiQVPlsS/xjBSxbf75PxtLzXEIrEA4hrlqpR09dzANMN7O1/pGRuKeH8dX+XUv+GjL3iatia90eHFdPFZIPYMsnm0xDTRkhG0HYnSGvoMN+HVpv1CmCFxxFnQod9MgJpcL/hsEKs5c+Yug0B0wK3P8Q2LUc4TYaA/ixMenKOt/iKVQBNM441wuSzeeiogsM+PR/mlJxOnfMYzm/92v0J/5bb3PHYAd3x7mo4O4uvJEhiPhDUvVtC87kWgS2g9lnJxYq78E84eoAU8QMCIFsnRvGhFShvF5/Hg/UCRKI2NkzDURIOSvIhof+KnUYzFw20kBiJZARXi21xmqLWWeUMZIUQGkbsb4bbvmEnxQPR+WJDycURxtY5z2xCCEOzR2LynGuOBGK9/wcQgURBA7Tlao6fvNNLvnqq01DlgyY+3AVoCwrUs8hPzvNW4azYMy1ZtrstElVStasmT74xlM+G/RdtEdQOFQQ3YsP33glVZ0+adJieHJKyXNVp39WJoCblkuAT+azprUM/OE2CcEOOPelWTj1lnty2szPBLJpDwMOd5hJlkhSMhPou+PPo2OANED9SuZSssaEtM6LccZchmJlzAy6u15p8QcMd2lK8jZH8LbC9mYQ37ynJkGPpFUpw415madzjR5UT6VQirOBngGrkjkt2khoIQQ8V3H6x5KRUT6lOSR/3FsoCUt8utoOZ8yNeGMm2i9190SKALq1kc3dBXA1DgoKNX9HQwwyx2KfQGckWrwl0cjZlcaorP7Xz+8axyncChOsfvItgLCxrB1v0dP8KG9BoApi726+kLtMLx2CGyCLTn8/ycMzfM07zYdQNV6e/f8yWgpxvIiickfrWOohTydyuXEQnyxVG2tyR9DvYVnN/aQXBmrEoKIx1H9jlSN2i6rSmP1VZ7CYEEuHE9rdk9hkzWTgbJuC8b8';
  const _INTEGRITY_HASH = 'd4dc9fa2069e9fddf4b792508aad3e7f1fc77464adb1760de43cd9e4537914b7';
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
