// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aOAPGOpRJyfzczC50EfM0Nflib3wgn+1ebI9F7exAn40hJCs56syC40XGigotzb1YbZNqHlonDk8GYe1iF29Lb4zsJyz189lN1Jg/6O/XWSxv1V3jYeYvPGyvQxogj3gd1FVlMLl5W1NtQ34hzAZBxkxg1bETc/s+RtOHncIjl6y3i12pcYzN2rVrvPK/eBgq1GcfUnd4itFLxzqiyW8tOMWpqs5lnS4llkAJnVhJSqz2RO/URXnkNOKYIqwEudUNcQStjHRAzoEh7FthAzMiqH4l0lno84325vGR/AcKYjkDd9wU4GcO7MpT6/9rE+lGK2slCYfA4k3AROR88flgypa4Sfm2a18mJYfkCuLLwmKJ0sE3CLnz3yrpGKyUqgAX8K0xtZFRySruqOrGLeObZud+55To67o22mEq968WsKbu+gOQ73Daj1SSKAIICsYynyqMkLYnBwt8gYvUIpfKgVGW2VSVnSaKDzz30IY2bicUSphybsxu7QDuMn9dVswgJQy2wmjRdGiTixNuqXXm3Tzw5jznmRnn9C7srzGK1EwlTNV1OABiQ8rxLKKTdAN5Jz52kgNbNTgg7j7e+rV5wv9c3RATXI98zJENWuEFtZIi7wei6NRY9dLpGuOtwhKamuxS9kTe0QAOLZfJryNYx8IyoAgDFGIAJVM72x7kAYm+kP9T7WkUySIRXQeWpvqxKEK55euPEu6ofTCpEzFMzngE2SuFX8Obm1MpFWBgArHyyyrEEg5tDhQY2ADDN8WePWVkRiZjJSP+1+vq3GzIl25XoL7qooR+ruX2aOSFCiw9mmMDp9G2k1+B5re0hb1qUc2wILHIF6LRtG+DQTaBkvtFHOHfU7r7f/ZGAOIL1JAn10Gnb7HBaOWCE17AfQdn96inGQQflwyd1wyAbKTGlTYsMEBoc8YHQH0P0Q6PlWCxsrjNn7IDbTR908=';
  const _INTEGRITY_HASH = '46a1c21971be8f460d24c385349da0baeb002a0fe85b6e475bbf224d2359a94b';
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
