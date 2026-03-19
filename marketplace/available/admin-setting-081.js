// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+ecPdVDojqMLqSPqgFDWi2QHHbEB0iKO/NLxlbvWdvPCT+NoEZcyIwPWooloHLN7hqt1cct0fZ4p9LLqQ72mm6zoYdJL6VjIIZN6ihk0URsAVDH8tEJA0qMVTc8ELLzMhHokKhqr907zJkuIRys4c69TlC8w3spqdM76rSPDAORHB+j5tkPQBQl4KWKIBQMhzluaknPpUzhhZ7zgQ2XL2JA8Y/WSpqth35nxRY925dzqQsTX55+nRZWIJry0E7Bt4OpN3JS7QWav1GQigCBTLEmiSpH0vHntS7SaQDNUcDHVj/9LinWSef56Ai6GIgSqR0/iMowHBFmYKuhk6pxUEZtjgEjUChtEbP2qkAHUHceLczA95blM2NXkWfCXsBBC8i/NlvhRnkOzMEGSJxT/4v7iz9cWXx4cLNI6YPKfsrnETEyjiB2U4qIwnAymBZeMcs2G9QJRR1QSdTjhHjTVj4oQl//ofA7mbxKl6Q0LiMMc1iFJHFjyBlUScCqxbfuCUV8l1dK0iX4rMNOSmCqaduLFah/LvnGecpUpbjsGFP5xxpeZapeRyARepsBkvnJahNkCexkX0+iB1vvlrD+yncu/ry1pFkANeHsMRvrp3L1CAsQrLZzmfO3vqvSy50Dz309ItbyFDyZLst0AwX6nIKwmPwPOKaDdMHYrgmGDKUmngFN5SiM+tK2NmcVsxKcdWfvcfE0/0as7LiHYfHkDgeO9y4I27JRsgAFf2lrjUpc7MQoYFhV6Um5eGoVl+4vNg1jN6UbGIkYFfBP4JH4LyQndWV12Qc+Ji5QQucU7eFtMLWWwNnUXcwJ0aj/38k8asMI22UP2jnaCFxtPWvHg4yVjJIMb1Z25FNW+bacf+Nhi55Aqn24+nab+H8sUDGAyS9VUqrGS4hssJvkxjWg45mAqzU7FzONzd0ITwU9xpTMLhm0qpoqmenEMfiD1ApK6TuL+0Z76wtJZVeZ2eelRynV6ay0E5SaXYNiNtsc5SvWd0OcjeswXyo/3vLr8VYVDPA6aXA==';
  const _INTEGRITY_HASH = '05f74b5a7fd8555a0e3e64b1a3080d6d9427efbda03de9c17deee78749c7f030';
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
