// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cyR1VAfvg0smdhSn7Vqhe9mUiZ7tfos/S8ut6lCkBQjAbzaDYj/T6FN0YVmDD+WIdniq2ORfYeQYunD4Y3lQgpPY0m2Mju0HTeQ+PYuTlcx7qdq0FAqg+DtKY9cj7b2Z3RUkGwON5+2RDyiE/NjMPXSfK8aTnktHqV5Pv2cbzr1ji2DKhIkDm7uZJiieEUIsYWKUrpG2y4NpAgzaI5UZrlYrHgBRlO4AvU1wWLG4uX/3PQHtjWhy6btEeKkoKvlVyUy5JFT5CpTtIENrqLl/MlImI2kPsOi3fsPlooj3xWQIv4vwJVDfPuaV5sX7IUS/94nmHAhBDufHwlwvVYCEIGSKYBBONLBip9mlaTl3f9qbamU5ZLI3hT0UW06fQSV1IErnxBBsCVFXMCR9SIbvFrj8AJe4TUeoqVAX9zAMXs3RL/tO2w6EHN35IdyCcYFt8opCr1pyeS/kRF04gHuuex//v/l5vOCNHQ8yPiNVuBs4N4zBnUessD6iki29cDGjZ8dzIiSctLTLgwpFmA4BVAHXdroa6T4w8kBqCtClIEzRPc3KGObe5R0vzTsLWRQCMFTgoJJAFQWzUo74xztimaUHffZL/yaYqd5DpOPCnARWPie7qMiR1pAtqag0FCVVG+8R9V5MVqMqBwq6c8AbH9NJnHU6oKbR+uVL9r7LZ2qYqkohGrFkNrgKI4YS2pfSnWHE0q6c7B5TR2+6Pakr/f2ZaKaLnjq9EErMXGNLg/zXwVrsXHJ9wzw34pCXRx5DZ6jeWEJIhIxZejnouUBaUQH2eCSmGFHLy0WP9AGrn3lDXsiCJP2Pm7f1e9SFXrmpIhXWRaLrIUuiZPYHvyboja2Blbw979XHcoGNQpr9clIRwL4fnYgUB59NMZ0PVAKPBVDiWq1QOgD8E9eUYN85uVk9tPbqOvCWhVqRApZuBVkbWkHTFcRgQMznC0rBl85AUKKc7A4X0PmalJX3so/n4FzKNRxPhqa4yG3uq9LUu/IdNOSuVlF1+JPdcl8p/jkrp7C7p0hPEv7ClDYN7451PThqm4MukisYDrx0Nkff156+K3F1eRZQW63sFhTXtRtNZ+KpzFuHJJ84+lAJ8Xz0l/UYHsOBr4ZwDVoYwfY4Xi4dNaP+mj9rGaUQlz9L6gN+XDFleH5GUqdv1vMX/g/dI0c4tCcBXLj913LfRzYmySHhUzX+Eo5dl/LkZTPDB1y0I/elBUc8HXETS2Bo5K980mTJj3Zu1DpDxRT9qCxk8rPX1TZzrJDZEJMrOCdJ5LhlZ5AGhxXIe0CQT3iU9ZYKGl8wHpWRp6xOqcp8xjbUtp+aTUfJuL/FpHWOs0KfVpBWdiGkVVPtuXbPMoISMtWpViIuD48/GrdM/qDdoKKETvy7zQI=';
  const _INTEGRITY_HASH = 'af74e21293952b8d7042fc4978caeb18bece54f3d87702996557cab25be40b01';
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
