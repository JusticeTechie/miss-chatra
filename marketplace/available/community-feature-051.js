// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TQJIc8cN9Im2A8muCsKyEesl2bziFzJEb3QVw+aG2tyWJY3KYmsAYk/0gOROEvu/Se7zTlfgvdiNvXFJAsG/NdsR3VVY73G7wCBVHaOx+DOtRb8oCEgzuVM9sbXSibPv4MLO5bEOsGJc12UQmKe7BzaGVvaa999dgCUEYF+PwnIrUBMHnSidf7nZ/h7xINv3SkJPpSOug8y73afwDmC/E0fbAqAjb1+uoO0dva/+0HW/AbTaDkXr3wZgH75U4z7KQJBXk/yIjjaVGKbP1SpquO+8lnz2UD80MjhktnSNhqfNsOMvUlKvvt2hG5T1hvY1uOQrWpNVOsyGnR3ioRQLYTK7isHGCYbNdhQjp3wYlxU6aqGEg6uzTK1Je6a9jez845xxTnVZcvhOZfWR8L8q0KzyvCPPTFt/G+1ZuI/gzXIgBl4PI84Dd0PyiRGSzw0cEsx64lsHPoc5C1Ea+wNZgGolWiud3XNEYem5T4fdWYGwngs3ISQOQPEY/iWFI7TDAL1K1z9fbYkx8qVjeE4p9/xBaNejUUdrA4dtBSXVAgptYFtSyhYD0gGVZuF1srbcHNJJSnthlplLaCRU3Cwc/COyLu4ic6yIq07T8PCF2c9c4m7ob9KElKLfledtc6CrAik3qK+aX1JNB03h8pbE1ahgB3fxsj5hTuFgYS0GHuYea636p3IUJ4AUz4sr4vvy8qUjMM0DB/sSguZFlenwpertVDE=';
  const _INTEGRITY_HASH = 'f9233b244cd94773358877d3af90a501f34cc7767a22fcdee2a53524743f1815';
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
