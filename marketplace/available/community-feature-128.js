// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Stp0/A1c55Jf740A5NY0hAnihsISP6kdxoxBBbYXMyEdexCkG3a9EhMh1X0PSBoGCho6np55Ex/FOurPigrF3XWIpSGfemnHvKItvo59lUIFnFWenBpaE/bVn20w75t+BWIe+MrNDig4zBzwsiWT1/RoF0QzsIknFKzrvLQc6pbMVDY99c2gJ9J5iF0io6y0mAaZHnjvNwie5cIzQeaYSSDGr1kIn37giPv2xrfqLT8Q5DTG8LOZg7NMGhZS3FHv1eQFpKG88LORBqeS8Js82UeCLwYyjAm0h+E20gXmSLt0CPne5UdkEabOJjnZ36luw7JVnRI4v9IGwsyyF7wB8daEilWwu/9JxLOiwX+6VTHtW6C0KNCzlFnPolZ+eayXcrNuEhZi1bmV7Fmkc0vlwSV/eu2qWDEDd1LwrBtGGwlME/NpQhA1aDMFYUM0x5YqJi3HSheaSolzd8jhESZCrnq8nNZYcWGkIEgtLEHnNBZ7HFO3ZqZcd4r97PNWKmVtzap5TnS53GMeUH3YX4+jqxabdLJPROE7c19dopk/BlyvPdd9eQ0Wk5sOaZnCP4Hx0uK9+seettxw7TweamvHJ+OVZxeMiAnFu3pyJ7zfw0upuf5kfp2Yc11+Vxgr5iclJAHy4JyH9CNz9T4oluVK0tXTMsllvlccrGKV/gKrd7NtWD3IWIovyaxCmOBqC25U1yu9MXROUqI5bvm0v+kCVw3sxUAywGB0256huD0=';
  const _INTEGRITY_HASH = 'b39246d1930f1609a13a0492648e7d290fb133a6d402c8dc8aabd58e14b1e27a';
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
