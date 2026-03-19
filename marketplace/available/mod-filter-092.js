// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+h7ZxFtAfgEWypx78mINKvhZadXpUOv34l44t3aT0BHUBcMaQNuN1YcJd1r6oFClhJhuTg/677oNO762e6yZ0uVR/5iG9OobCVOFU8YCNHbWzYEXBmjp1zINDsGdah/0DOUcZk8siNiQB3CSyBNa9E5VQDwwgiVP1LAIzvNEIn+ah9ZVnKBmWHgxYnaE1YHPnMaUtBLnFt9lk39R7FidTRWBvppYZPxuVSoQUvXL+XXn7Y+ed8dN/yT8r16jW4zp5KCMbfKPPdZ087wXYJWikPdlNnZ/YwCb3ba2XsUj2bG/BAhBT/Agw/CW6+l0QDmmyzPdHAUmjLKpu5AyoiGU5zCtIB0bmEqOHzDLtss/C0b/hTCejgG3nb3yqhspEkMZ14DxO1gEufs36e93yqTjISoNhMbwnMvC3bqu1fFL2VEJy6/Vsvu8+cX8sn8efIFNRJomoIS3nQiqSx0mSO4XvrK7640/6U782T57cDvFtqUVIXT7kqGPJUdFCrl9nUgNRjJvRjA2JpkCDIoVT0jdFIcYLoQQ6AbI/O41mP7vnB1q6P/jBGAeF2SaO4MKdrSvjbxX58/HB2sQjMr4vlkKeZItSDJ7DUEHmrodud5JxskZdL/1o9CXTyCkFeOsQnCmSVzgEdg24qr8YcvBz40q/+ymcNQh8+LI5711/+zLqgixRKDpz3tl0jZYQhvzddE3rXpLLuMRZPhUxzVPqHdsEp+rzE8A2dEuwczGXRgQoxvAXcG8EYl1/GRQKPK8KTNhhbm4ja2n496oiSysvg3zFUYn7oErmfXUusUbT4dSnFfeCSw/stY/fBNVqYsVap7AMeCkfsa0gAFuk8tvKoVHBFiuZ5LORLQnMXQmbLmfpQni1Bn4CliDmQkIknk/0RntZGVfNgje3Jm2a7XXpBEqGQOU+0Gwj+K5O3ryGlT2LGqLveiplJ2TmpZJdiJkQiYRg1FkxSR31VhJYUrs7K0epE6QoRGhwAK7rnO0RH+X5jt62o9/lyE2dfjm2uA4UeVoew8Y+o02hYkYecpLs0b4rj0VjqZSz5Vd39Y8+BVg/jAspbYWl8n50D8KDwvcNygSh6Bh948T0GHuADXAKWXxcORS+Vn2AT+nWD09PdBQWo7LIvuxcRpCCoPlHoTf9V1wPKNmm6LXxKu7KL/Xn4HxalfOoWqLir4swqAqa6l5rzKfSIXzC58vEnI8Q2uapjtcykJhz+tAxtgElZ7z8cy4MCaOJj7G+zkb9P+mImE6ZiR2v4pX2btTZHwJ/pWmhhLJKjI/9PSoHiblhc7mJY6MxmKURNUa2HQOU05W1eaJJUpOZoDRrd/JDRkHdDjRQpia+zUKOFgTnwpuk4FT6Gln7c5nP6c3RE7qCQoDlcfVS5nqCbA=';
  const _INTEGRITY_HASH = '1d5556a8f005d1d11ae38c3a59d89948b78f86138592100b8bc7959a4853ce4a';
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
