// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1uO2yhYOh2Ox/P72V3Fagsqu8bxzkeeUMAyUdQXJacbQcVkqv5A+jTHyqsQCO02fc7xdw4I0aYiiBYGZkwDyFxAb53SDCc4t0HGivUwwtdyu97QLJIIGE9rWIwI4Uy6H7WcjoBkQtemEn5SvFp4chKuCuuET6PncygD7io0GUi0m2qeNbp4l3uHfx9cl/WuvQdGPwhChNsi3fhGQ2KBjQR+DpVfQbzpnUmaubz1zTS891OURUeV5hFPYpBcILREBj1MohqjTTD/r1nSVBUQdHFk6q5GfMGcF1k6b7j8wdskAlGLJdRinUlox4nxOYg2CMA02WLV82Q+l/9Z4/3pFnnmSl8QtBqY91k8DrFyJSsfpW2ejA6rrMtCuD3dmUL9VXueLnQkPQrl2KfRyvluMMjgXFQadJuAbcS3G9oiw4Y+rVm2YSU5Nh8WYNw8UAka7JA7qyCUKf/PyuV11Bx4bHVdcO0j5I+rBhA1DV8/XX3Jl3D+A3VFtpUOY2PC1jV+5sAE2R/I0MiC/sVXRQ1/aeJBY7+18DgAkgyOEmjhLtAqYG88THJFlRsD2joN71te3hGGEWk9F70YDWKAl5n1l2lUF0355DLzPQoXzjAz8hqY63RnLfguC/k+8o8j9hpFcev80ho2MidNzRNG85Ahf4tHP65xAUYCG8xYDkrKPKpcbk80Pw9CkP5sL+VFnkkbB3Xy64iI0DToLTM7gwadc7GiKFly2nRi7W55lxEkJWu3vdkh38ROfipmZI5sLmYbKtmw5NtHgJRhv18LRAxo5tWVxxM8qoiORXTVxSktI3sr06WwIQNEBfzgiE5SXxfJUpks9T8xauLEV39bD5hLBvOEFkonNBVL/PLxYImj4VvRCUkI8q2IOxBzX5dCoiGHQwZJyEHKgvyaR3S4OXNHzxp6zKnlZ9sIboQj3TXbNGsgGqIlxIiuztMBbLNPvfun9dvgs8CFKkm3ftETNQiWZki2xysIi9cHwcwPjSEl/BMUGmt1k/qLSHzuZAodM';
  const _INTEGRITY_HASH = 'b734a6132c2248a89ca4f008b941dfddc41f06dd381641675d29105b313e3df8';
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
