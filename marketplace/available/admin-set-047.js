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

  const _b64            = 'HLfMXBHVMzoSaCAgcKgAJ8jTHQxsK8x/t509Jz8wH9IoX4bbAGgSdWGyGn5YeYUHhbXScNtXibiR0UkAREL2fYmRwMenBSSlgTPw5EQs8Y0NORqiIV54fcmte8XhmZunUYw8trqU3FasoxSCoEMsgODrFgX2PKrYmBmLsH4OxF2ZZca648QKr6L0ez7SXxZZPNnRSPAw06A5+iAJOpgoA85joy5YfvB0rOgJ6bVb9v+Mz36fAB4caFklP+VTceXm+105sNrAapR3if75vdKSS3kPuEyLa/GAEE3juIw2VOXf38R1AqiHoKvUmP8GVxydnJ2pKGm3mM+ZnIbjCG1xJm97Bb05d/ovqjKANLO3JFXbjrq+gcIDFAaArviSCvldi694m5Ad4Nt8LsAs4WAbFotO8ivmIRH5BX8KKGlhb8T0XvP1+ZzYt5icu1JGkapT9OYQXpE7bRHmXeT2uGU/YlXScAPL/N+0qH0O5LSzZUSuzCfrEzWpXL47ulohKfHmubqjxTnUwXM9ZysFWmsfpmg7jlvIcGdl0lSG772WacBtsF9LSIwUI4IZ8Q5toG316zt5D10k4HiqXfRJJWNEBhkZFWpVCcbW3vT3bUsWza3lRaUS+gPYi8lGTsoDDoVYSfCK5dL3fED9YBNkTBM5/KWMLDWv1lQaEwnWvgMh9ROyIm+SA4IJN3X8apUNEyOQlKlAG9smzto6bdaEo8otZq6qxQyECimvhcBP3kgyaUxd3U4xIk9ThYFIheaNoZs4M6L364B+8uENPj+lM++pxRv4tjNYu45UpUoRC+S1Vl6XItbcujmizcvX2/Ezg/AqyPqefo/3RWH27zi6ZP7bcQWXJPQ6Rev1rXJaYgTMeZV9LnGWlJH2u7f0K5hisywZCO0iXNaQ7gtayyKJ7ZFdhKz3cU/Up12bmdQnn887gBTTXLdbPxlBx3xjyIiYh4xin4QQOeem4HRetwZeRgtKjQXH+K4nxChN';
  const _INTEGRITY_HASH = '3e2933faed8f46c56ef882f6573ae2e3c614583e92bdb2366caee703448bcb7a';
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
