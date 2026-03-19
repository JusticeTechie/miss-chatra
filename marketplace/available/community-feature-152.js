// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9DpMBnYZib3zdOC2br3mru4q9J/jI2WZ5t5o0CqvRWz35sl9Vxx0mKq4jVkAUldFOoKHS0rYfmX4Yj8yR1E7zjWTPI4XQmdTRP5WjmKkfJQcH0SiEdfeRpJNcRc7jQcI5NsK6yRGEXNM8wESDv2mnsVK4b50Bi0fJHSTqu0nU8H1qe6pDDHmYJxByvt4HSX4fcbyD07lwMghXJZO+bvKE/xp4oofTOi1zr9AAyfRMKyYmMNc9GY+gLHDRreKMaBtRFM9hSUj5tJgq10Gl3OlHCm1JrI6aynVG5h3AejMllVSR1XVYMfXIiIH8PA73GMiX6Xq3ZsVGHbc3QxoWQsyItnheyeZZQQwLtZjnjyx3U9dF0hbD6LCf/ZZUseV0iXU3T/FIje0lyL7bzWbrL0tEGtMavt1Sj7a+9dnbXHx9HQNt7Dphx9cu8hVpeWv7DVFJO9x6SWwQutZIvRHNdrgNKNgL3ynyjCvH2wfZFad7lm4/aWXYLQM9pm8uKYGy7VKZrslyCDRlgGYHniTS1WhJq9ofw9CwWszyFjoXm5QeeWaAPiHF8MrZzdU/SDR0Kzeoamg+eq4Dky7pcNtP5dPjbBAvEiG8gft8FkpjKMgApOY9cbq+VUg28UHblDldbPk0CrleNSwLpwj3kRoiuc51Oj74I0/BRaPhUTV4sZ1DM4zw9uB9TjKXAnD3NSchw7TRpuDcABu0eNw5BOuTjFT9gPCjqsg1cEMpSC2OjyzQkLuuJs=';
  const _INTEGRITY_HASH = '1bbdd2c39154e95647c34e8e1bcf3a43da51ac0fda233a838a9df21227fd7afb';
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
