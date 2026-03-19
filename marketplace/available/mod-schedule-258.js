// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lr9+WoDixyteE9fDkwSumA/wm6zktcqqW0O1+83pn1nhEupEVg0dM8RZ1RDaNYKRWwjX68oTsrrsmgqOTQHhgCQoZg8eC97UCdp1ryQNLj3GtpN4GrfL2gw1G+4YtnTQc0kBj27AeObU/bcZzClnNXY8wmJfu1AffjH8vLJY+mIisj5xtFcc+xnyM/0OjIp03AWxl2uKKqTAOjASd3iF3SUARgobhaQMD6y3S8vqg/kscx0GFBQBbvuMuhrw4NGRkTGGnCm38hVvogF9nuMpbAn7+iBlmgV+BkgI2hU6jkn/6mDMmzg0yKvmeWcqKm0rhX7+F44AR1/Pb6LF8SiehHgKMUK5x5hrqJQQz9YTwe4IBF/fY1DVBw2y5BxXG3OzW9NQOKBJMiH4lMQs/yp/vV4Hhqr2aY1VZqThVJtRYklVPqwqs/KCKotVmGOFtOapepIKpKjrmGT+MuLL4z0vSDayDiDCgua09uAIBgGALZiUDZVHGiaPqLJJbn1drfmA3Oumg/fqBtSQ5VK92gu1VIybxMOAGdohXDSSm9XR7hpGGrnhT5V1iaPmEkHu0f+1kJEYc0m8/l0UPmkI5DoY4HNnw8xqSZL5vn5AIKEukDWaKvcdmeAfIETNOgzt/iL39q4TjBf2btu7YAweh2FbQ7GOFKQacuMfqYjebQAXL3dxlbts8sh2y8JH7QUg3sDUyJUhTmT/KdJ1qMiUB4AYD4dES6FBwdxOzRCxRZXIHTuNjlpL0JDa7Da1Tee85+UFsbIkQj3ZQVXDMG4Ub7knL53UxWfC2R9QkSE3GVyJ/kylex+2Qx+aGSjiUkROvpfsv+XzP3/asO360yzEJLTsR9IpkLA1xL/qSATvHKDkesJELJj4xvwSqofnZ+G2Wxo5oq+AF7lBJCygrVOFMt0hdO8qnlDjGj6f4KgS5gbXAWwRCXhvhf3OSggMm41W8X6C0rvq25e1pj5987Tfkg4OvW6rGNlmBQZK/7augGIZedVN/0b5FYIKWj2Z/6zW8oPlLFnLjzxJ551MdUUHhEJs+kCrOzLM7jym66fDJp+qipz4dgTNwT1a6Mx5gFfn3Z4iNMZeIB569IS+Bh4+/XI5WwlWbyVJdvLgu4IcwbKAkz6HnH9YtKYS43kakqY3e6XX0ggMJuZTshD2y3Taoz/797hCzH0CuLOyzBDQ0IoRw6Id64yoQ3x0FyIQR3Fv2G9RZxT8eQyD7ZL0Mwwvk3HIwfVtZhCmkDVtRzKVllpjgCE6gTPZukoqC5mKKuIGn0/S1h982J5mEn8AGsmSRX/CFqzNgmdA3HHoPbw/oK5PiguztnF+9TYR8/AniQGKX+48DKT+Jh54psa+UvwqGfooRxqW00KyXZsXbyqIFAoGoPj6pDCOwfU1oWHtVehxXsiF3A3OSnYCsU8guCTC';
  const _INTEGRITY_HASH = 'c80b41c188e7d71e5213075f2d78827f278d662be94b2c6ced3ca98cbc4f2c8e';
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
