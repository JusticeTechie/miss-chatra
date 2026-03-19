// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xujEBQWI24VR6tREUbTH/vNCcVQbyRhzITKF9h9iSSBeZfthGFt4hjjTBVL6wc7Gx8JtGa70sMDOJK+GwN4Z6dsfz5O+jQeHg/g9l3DXOY52RRe1Iw4MpvEosKno0lUKcj8Ua5moTTuCrhddqYD4bIOfHT+E2JWxz0DJgfR50+pB4GboM0Cp1n813j48hjXz6UX47rfiT4peGIzRSb+8UZyNKGIEtICi+sZkFMLjjzFFhrpOVVPKvER34nO/kKIcURhjll9kCGu/Nefp8483YlnsWvCEJZ5mIhXcUc5GAgvfkjmKCYAZ/jx4a2wAAtl8y7txTAcpqSlGknj7QVuFZtl3p473aKCFJQ/nyQ/GUEnGbp7EtljZmC8OSyFko9/s7cdXzkvrVtyF9s8AGCx79JUEVtKPLxwsfs1bR0378fzsWkj3gWBJs4klUGgRoDGFIAaoJaqgTbIlnZFQx+d1Ltb1g7dIuNwAM/0mC3Td4Gxl3FuN0tubZUoRBQsje1JBSzsLByVCWKcVUxBQjeYnYVDznM/AwQJRGy1x2VB/cZ7OjUPCY6M+JMcLinGokMuy36eXCfV2H83HoBbycfQVM9k48pT8MDv0gYr8AxDnSifp0vmb8r1dh3T79jMWrkreyHpQTjKSUmuKDVXX8EqcGx4vufw0C7e5Dr4c9iD9zibqsECLbvQrDdwG3ba5Z1S5NxhWIIUhreUlCxqGFLfZTJ+Vp7St9kSIxP35Aabx0X94AXVIWLG1aZXpDkbzzNqyH/rGXSHCffc/uxT8YzCawYg8dz2BoVl61o84bYIcU5BQYKf1Gh5J80i9mIoXtTqlGaUz/wrWCObemFldC8r4UB6aI6VDzZBFV+Yca7LZfNRTSKSFyQt8FztDcJEyyyEaFYHI1yJcpYtpLcTy43E+l/kKK/Q9EOQ/WEmlBTfdbbGd9t207MUS0GDcjoSNGRu0ENGIlWvI9j7W5c3kuvCwccRrXaJ1bgVHi3wlmJHlBVcIKpKnJxS4C5L/0BpWJdNpE7na72kcFHTOE1fwBH8RnVHVQhNRwOXSdkpNq13V7PZmCBO+HjYid41Y8/0cZkSzBqdd3D7UprBoSgRbkoS4e+LjNG6XYw97CsBOrKj4zxbyxh6TS/RsSyd8kb+Ew4F344TzJGxpqhapIJpXP1uoRUF1uLdzziInwZU1+7JaSYBJo6hiH/vOZvHkOyRvZYUC5fmtcEYykeiXIGKWbXWtqiPpvmmRTAIAkbNCROJx3zZ6rvA+LpUMhmoNEgA9l7MfzKfna+tsKWBvTWMN7rb41X/XJuAdGvZ84eVnp0SeXZ53b82udOaB+BLyodv/nAivhwgrtXe7XX/6dnT8VJr7dw8oiLNxW92QHJcWtWCMZG3byN0=';
  const _INTEGRITY_HASH = '20a5c2710b26e16fa32f4abd32f17038b156f283e375fa15b07efa85a4782506';
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
