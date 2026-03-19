// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7KVRCkvNzUEFo6ah9uFsC/LIa2n2Z9KPvMGmeTpibQCnm6aQvhOF0LQrm5Cs+HRKQWh7J5YaHGPScRzNZt5G+yEI0X25DhHsBAffWgCgrx8O4pQoHXHzIiGORcuyxk1Z62WVjbv1ArFR+Q8UiAMtV0L2eway4x7kgMY1dIkEYDRahno7EZilRhjTaNkef6nbc4vPvwshKYcNdbi2dUyVcsWlOGNpAwIqhgP9MNCgPy/RWhYMVASvCZ7pcGC45Rah4DgAAYBrO889dp9G5bdBZLEoM6BQvrXNtVRRxJyVCzrml1oNGl1JmZ/w3UlG4VFy3KyrWftvUAP1WSdakWReFxf6QDSB4+OkETmMjjUnjMIKzmXBr8UOw53+TLv6bBzxTO/UbLElNZNtUvdGfzwlpHhjx2035vl1fIOuH3d2vzcC1/FC6w5mvzo0BIoqjW8Dp66A8P8gn8xvUvyu1DH/UG4FQoTUVBLQvEwF9ll6+W3myhTsxbNwD8wwjODtx70h+sIwrC+L9so2Na+sFf8Dno3LP7UP4+wG61T5lVsV9c66+hdQcRKBBdSmC1P2BlRsBN0XHIWqppEQ3zJeN9Vkn51NP5eUKUvoLkXZUHXIl7XEs5y5Wgku+w/TgOSRBwQM5p6/HjkElMS9VaMYrw1p6jNCXEkVBDXvtNIgF3epxhIJZnKf+jfcGd1pZo0JBwsEgXpWse7q38XoKREJnjc+LZQrB82inQcu3sK8JPoFFQ==';
  const _INTEGRITY_HASH = '8a8d8d79d4d9f559337849b0944ac7ecb7db76037f13db9ea38cb53f340ba152';
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
