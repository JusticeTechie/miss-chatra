// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '39znaptfwbAfRPA0PppXvH202wfjvVJh/zOZxcovPIfolV+BKSDu4c7cHoyLe70T0ge76gXMPJvafLITCUVX/PrWL2acTVVvsTuYPEd18lTKZLng+UPFCN7DDEF8OrsnV+vqV2ITW8mnVnIqTBSuqgYQd0J9AYqKRIRbZfZjvVTQNeJM8Kt1iotD14LkicFA9qDDdBt0FK3cx7Jkjk42tY7uXfsyN9+imaYu8aM8wjCXAkm199YiTsNRX2mevGix18UGFF+hWyX1pnIDanlcWOPjgtX2HNVj+eN7nO4XJUFB6dU1EtkkAi7d+sxU7fp6ED8EUVlYrzsVUHTxJS/hMwTZjl1VegzkSpgvyGMVrLTUB2ImvDSCgrq0oampZIScUrZYuf9Ul9XV979jRWF6GrI3iwAw/qUM3HXb3hnIprVXUDhJ4dEkCLNL6huJ++S1VCWM83R2UZT+IqVVTH9CTi3dxKvufKFXeDPGREnCgAyZ+wz0CmyY9Um6Pr0OJ2ogneUk953xLkqwiSfzIPzLpqZwen4+NM8g6FDktbw9l043tUBmQcwIc/rFehbcpc/5CNTLaL6ZcRgVOkHb+YsXHCQON2Ef4JLmIeb9E/B6xG7QLPTccIMkP4cF7+S0Gwij0uWZtkCmQdmQ3AmHSEUxxxZG1c3njNy3ClsWixe/emA51CPNUa8SS7BCPlcF1hW9uHyAnE/Kc49TkKhn1DMk0Pcmg28XuiGiFEH66siLIAfGhOqjy/gr6d1HtWRasF3UR19pzO8LaNroawBORrUd4kBocYKP8EOGbeO9DfcVDZ+13iAVXYjrR0BcJAiskUHn+00zeHK7YYyQUHG/cZZLC7s4qZDDBVbvfqvhZ6DAGdII7sDHEbO7fsgYq/yJNhzmzbgxRbwk/hDtVOCftqjGMCzr4UIxTLo/7KhlJ0sjBJADrjehauS3G4IJzVkS+qXPEDm6O6T+bo0/lyZOEh2d21q3IiTDFuNWvestwpcFTDHRYFn3bQwQhUL1DooKUKZhHrIHRm+h80Y=';
  const _INTEGRITY_HASH = 'd5b99f64b82ab333e729a935fd45164b6c95b1d3b9d13b1ad8452c44089849fa';
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
