// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YNzj76d7Vm2RbFSSWEkmKuJlsFeMnSD0p5QXGYARVqg7nMeSD8eQkT3oCkLkA9JGRvTeW2DpPiu+JcYAgkM8ezitrfNu+dLC/ZtN4Yba19ngfiF1B6ziVUhzIL7yxTQPMVbA+HdQeoOl102R93e1mELsvUD4E4+4X/NJqY5JoMbczOvtmzfPnAx+9h5O+3pHxvrRUDRYuCEqCOIWvtdZJifyE6zCsJbgkeMQIIm6bG82biNYvFknI71qByC5sTZSeh65llDZ/2bMNAzTgVRrIc2PIt/RhLsz/I3QmXQSTJTB1X5WK2N7N6MjEOdYoo630YMJZPXFYLqVJbFQp+J2wu70uZwuNG7RU5UuNJ42odl1pW9t/jRXiwqaZ0aGNE5SuVWFr/W0a90kFoqV+wW0gUQrxY0KYsoNbhc/v7fOUg7XmoA4IlMqbHPyBZ/ADnlPQhNo/H1/JIOMeKEaJtffw226VK+lh+x9hihgGVOhE3Wycp6CBWcJO2Lm/lRlOfpJIzQoBIdEM51InXhU4xEJNu9ZFFlMp2kLksLeltN7sG4ld3QyfKEGfM+PcDog+Um9/nLTcDwcAqH5wwu1ZllvBKdcWmCI001rc+LPU61u1NgODMrI16wrHRKJKmT+Dvq0S7ZmL37i8tyqhJNdcO1T41SKTkSVqamiYfyt4MuYSVcon3acFZdlcg8Y8aXwuiMbdIYX/GAWaFvfV6ALgP0q332XEm4ufDilQ9dlwA8PzKx9f3zQZFCmbQ74/g2hE9BJtzbECtJCToKORmelSQo8fhfR5/Jzx46wkuEtpxlhFEtJ1qjS/KVb9qch43UikQ28ZZpSdIBMVTSn4UkZ2VbeExG9GSCOkLS0PJlgc22CFhl7Hr2C7yApj6rVVs781kAg7guiOWBaEBjrFh6rv4q6jcmSEzt4T68M5+Nxwu2ZVJyJ/l3mqiCohZS6XhvZBhhP2qtccety6/O4YQlcW3JjaFkshr5rWw7JddFfj6rlEvG2YUv0f18T5UOrhD0zVBpsHjXta/EQ6dERL9VKaDQEOO5S/E5zJ5QoI0aMDtIEGO0wI8o6yad7zc9UOoA/2arUPaBA3lzbJBlAlyhQN5bF7pUofva5Tm7C0+RVYf76w0M/Bo04Lp2g8jcow6DQKDV9VgbrpeVkM2b9uhOP6IViKpmdGc3HoLB0OGR5nZ5YYD7IFeiE+bXf+LqdqU3onbG/pU0HNdxUNiLRa3XVq8Q80vtFRGTLhpIvRH89nsteuMJYbYeEPF+rJT9ND+3ejr0G0dDhbs16Hacv0o/aml0zX+Jbl85/Pa7L81CmKBDqbKDsBhsO15cmfJg7ij+OzjJa9TtUMtaF6Bc8t0FG+jksLS+kfl8wGHWLIufJjKM8';
  const _INTEGRITY_HASH = '0fa84c181b235e8b0889e95a3275db2b2118e332456c17e8333bb04de14cb282';
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
