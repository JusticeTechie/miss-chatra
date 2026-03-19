// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qdIyoeIRZF4fUcB3eM3ZB0pCchyP0W771CpWOqi4xoIQqTq9G/EYcgclMbtCICwb45MuWVqad/O+WRmjwuiuVmc4G0KESx2sAainzJ3jMqek2QaJwf72E0e8iBofS7TXjRiFU+0dunzpZCtM2PKjMQaG4yMUBw0P7tw4NwTZlK7ku8DwfCMfsGxIFZvVUbqoEhzNN1fl+smRqZCw1PndWWJrnuHsnsELi7tiwIGAlYUzpq103GA8MEzE4OTNjvevXeKu6yaqZiG2bCrDEJj4NCoORacL8QDshsQX/fQt4KOnVszbPHEIcfbUjv2T58VldWYDnefR3xixnPjX2TqnqjeUkyT9JUS2yGEuO8huOhc8E0oLlvoOI4i+PV5jKIciuNPNVLlnxLMSzcat/t+A5ph6vicldVq76wUzjnba7LmdZPPVQIZQRNhH2s5654Dq+dxdHhIYWH/Np6q3el2qVkt0XRIVwtGFbl/xhLDizvUVcyvoDfG9pLYS3stJzB7PtPzZsQnh9Eozv4GtEptWq+IXT9sOdAm8tf4O4b8+4B9C/u5Pg+atVNv1OpvXXR+Z1oIxNUai+BH6zoy07f51LmbKVR/HqE+kJCZHFJRVNEb2UMkZ0bCxv54jAAzuUkv0kQv0BMLp5MYHS80o9ptoU+DIlUCHG1l6AZ0NzkgET4gHx4Oalm3gUP2Ri3MCzd/ysJAwlszBzZVLGURt/LMo+OVkn0MBAYq8L8X+OfmHWkXTqRAe0Kuns7M+22homTd+0Foy0a0P2plztkx3CJtF2+/hPgtrFjhkN4YPZif/1i5o7Ax4l9kwsUWf7ed3ZOdTg789vqBv5qTfWUSWg5t4sktQa2ja87aucrjex++yhpZiH86H6fESQ2M8Vn/aon8oUpp0pVtWBBqzr/zpL+3ijKSc/kdqltK4mIrnf83Q9zyYRQBT3MC9QWwvSDhc9bcRw0HIlR3LU0ksS01GJVQd6roZqHkL5QKqDJkPo8G4Y6zMSC4i+3q9gdf+2YTuAonPc8UOyNd+tTi6nGPLRt1ZccRWsCjIichNIcs6dA8NgXBv3A5S9SUD7UI7z3q38cuFVEApah9Cdc5WthMa/lR18bsGn65d0GfSQokJVV0lP83KZWNkTu9+ai6b+gFL9IjxVhpxyJGAg9im0biS15+OpYQSuRdTYneFyGgBd/tyFRSgFkbNZkJ5Jhrlqj08uF0ULqTiOW9TBMNZ';
  const _INTEGRITY_HASH = '96055621937aa7188890b3d544bb43bbe0f3053f9f676e3d176bbc61b01173e6';
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
