// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Hf4XW5ONsTMYuPBdzZjGvDN/aDpBw65mG1CLesJV9rCOP1GDg7XI9ulNbyJTgeZzsB8DV5YZwCGaJWe7xdW2UqdDFp8vpQ4r3r8lI+r11NbvzgJ1VKoLQObAD+223hIaKoeiQwfGUhnMQNlXiHdih0YS+IxXIIn3MJjIEW2tClfcwqqVYLcYF+jEQwdVRkuLbRbe+43h0gwxTfMCBMLEaZ4q1jaabD00iy8JAe+bZNQiy5qWtoy/GCYjkyg/pPceBsDFAnkyjCI2yWnxsBcNXCDvVBasrF+va6XHwlNJq45zyGUxizEZJEaRc1PSmTCFaErKoLjKwZly4Aw/fSOFOYIyRtcJkLEdjrId07E2Ez6u3tosamf3CdZ1Ud4z/4lAn/VlxrNWBNN9TzXMMhPQSPKxgEKJ2j8i3+SEVdXWnqZeFSQQPL36zPyTfjPYCDAdy0d9vxQpJKTL1z64BHBoPLBqH10pzR8V0FxYqeyYPogub+FNPJxC5y3GuaNXR12mCc4yD8C58WrtQ31beWAiR/lHNsRWxkfM8jEGPwAkz+ekI06BFra8s94BEFcWGvKmz80c4Tzi0AM4jCaQA2mN+UBiYXqDbb0ftYujyLDhjCv48VGg3++Q7jPDXPc3wgKJ3V5/6gnsfO7YIVH5PLK/RrTqcxRVJkCNF58v5gM+2ZYgKlcNKdp9NgaVQyN2HzQNyo02UyvZcBm9PvONJmr9NV8HyRQ=';
  const _INTEGRITY_HASH = '1848336ecd49f48bc34922fef81f2b5e9d7085e3f16fb566b750359ef92d2f4b';
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
