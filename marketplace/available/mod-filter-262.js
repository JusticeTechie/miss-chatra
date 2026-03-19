// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'G/enqYehQyLPM5EakWLQvm0tXb0ifBb3fvwgqV8bUQKfRNYP5Ppr/OS5F/4fa0EPWJ4kq+nATgZPoxxw4O77spKvjvQiJCgDJVycHKYQNooKWBMDSDGN51hyJJ7TyN8hVw6cCVxQ5M5VHRjdqxsW9Rsy1DuIyOIDIbb9m/fgMTJOX+kKNJqJVK3wa5hu2cov575cGv8gHc3dWhrFUAzHF9xgZUy4CxCNmejLyvJCOpgLgJPHovNOrb1Wo+QuX/Le2i+KTBvxc1n2dT2WgynVFqsyieMGtoPUcvCAFvD3H7If5CgFApzDQ2daYRDP6pvyP1Z4pcWG2/XVVwjvSLXt29lXv3aNBlhwHli5wyRr9P3mL0llXZopvr1zcL7Bh+zfWuoFiMsM0o2PRRc/iv9GKbqf1niiW/ldAMRdNRjurGOR/FCp1pEPQQ0OxM74JLpkGdW7KlLkMFCrs/Mfi2UHeNS1l2fzJXD+DfmB3o6vFi5qx7XJdystSKI9kj+MReANpzzY7Q+LseSKvxVuI4F3q2l4L5BHRDKTKe7z1pyB6Xm+GIGsOojB21k9k797c8gw2CXrYlx7t7I9Z9f1YfoaIxwZu8Ni2ltga3H1N3LyD0G0EzaLQtyzjuZkdAzF2xo87VzUvoftXFuOPGQcneLnVeJGWyn/gs5cGVtLAWgtRSI41ULKoFkKGS+SH8rUvZXlh2pZVYWMBgkxwXVUcFQ5BmlS17dSk4kuHI734HCSlGfs8z2mLMzs+BpADr6efN/sPsIBMo+d+87cQwKbPC8ITZ9dz8XUDINXe9Iky98DJ8jmeGbdaBjKGwoCTgTV6L8VWHz20X93HopgmdJy+CoMrqd/HsSSHaLgL5LYteCWo/HW1LQ93HnUV/t5R4vNHwp0jOj0Qk5G4UaCrLW2SaNWdC/vXzfZxp7ZfB3jHQI37PrSuVHSJAXFcq0xYeIfBleWI0WcQiZlnFjHYM3PO71pvm9JV2WJTeVuxJGLk/X0ZaeqeQBdQNlmclzr4tv/fQgGQsC7yazpM9+SqFU2Wa2EqpFOiFebMDooKBGpALg0o04orYvOzOdU7Rge4D7ccQd41cSAzHwWCA4aSVTETSMdDEeSZkjeL8MsQ/TTiNFlBmaR86VGf8MBtumD9K30jlqiOf3tUjkiAVypjn6YFHs75KbxE6TjMqNmz6zWM/I/pyaLZ+DrSZxPRbGaz+nWWxCQtNrwzhYjLC83hhHCOYNPdVDI3Puo5SWNHya7edEPbS7RvDCUUR1lZB3bkYXPtB3l5eYtApI9VG5J1VvELKOYLVscTQMHXsJpqzWnSqnYp1psGZ7js/bkEbhRS61OxJkHVcUAlWFkQXnbyh8LxIceJKMQs3jdswA7hnvrLawXjHudSb917doB5g==';
  const _INTEGRITY_HASH = '3506d13fe4db296da0710a5be9fe3bb2908dcc19724ea3747964ca04af6f9372';
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
