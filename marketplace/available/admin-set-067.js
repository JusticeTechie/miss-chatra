// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5Jv5IFAZCsKJIl2Oga/Lebe4erP7wLUig14mdXYKEVCzZ9Ni62H2Jpv8KR/SnHxsatzmtZj6jlolT1pQmv5DGGwogZjBBa+BfIN/6XJnASW8O7aXzODxfJ4+B95Mlqiz7OISzO2DoAUehW3/hKQwfnKRYAxtvKcivTEVJ4ub6WsRRlqZGQ3s12Rp8NhcxdoFrEyreZiN4eiffevx8Qp5jN254rkPq0+Z24E2xqnnJWmJAJ6Jyz7vB5fhHyLJIrQf3eSJa8qZS/uvj8EhHQ2d1LYD0aPYHgb8/XWTH08FaPUglR5VOWiUqIBizBrEyh0uZXvVlal88VjlfImag2Dt1ZJdiY7RAmVaVktglHAK8chkDgVBXdz4MB3W1ATLYx+vsl/s707AKldt+IRC0Pb/fylTOiQTJ9+HUwFxkT2NMt2T40N6bWJWaPG3G4DsuPY58+dSzBA8OXAu9JHUOlYyJ+PzrYL5h6379gX8KZZltjmVZbUvlEvNSxKgvSMccBBolh46EHgBorKdvsuVD/dEdIEt4dKM6latD4MAQfonULTP8yrggZG0rHK9ectLWs6vnX0+v8VUFDi0DxSxJNCIhVw+yhLXKhdJOcZ10TcIs78dkTMQWKcqssQh1qCE3hLR0G4DuL1jA13Uujalj1gqtvF8ARoM/VM3yAbpuSlAwPl/9h3tYRPZIJPZXuuwSwlpPlyWGeW6JK+2iglKlet9W4dj5rX7SsoX99b04w4EawyRf5z7etj/Djo+uacaf2OEoXRacNi+kBPQViOGIOGrBVNG+K84EpZN4yRfcaSFiVYy8nWQnULi/NI+A9KwqnCFJ+pxd2Bo+G5WKc/Ib9pjRTVS4BpDlxQzjXNDdXuIQDVy0Hf8a4rJZUPI+KCO2dGjm9/3kA48Z89ANK6nJ68KI1Jb6DeNjNTH5MlxqBrcA+4TP7+dyX1tV99AtWtpH0ZeLegqQv4ax1OKVo+A1eJPNYng1c6hzpH5';
  const _INTEGRITY_HASH = 'db5152fb0866d014bfba9286ce535d9d34f6d21333a1a7e9e24804dd6ae35caf';
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
