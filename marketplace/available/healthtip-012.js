// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/hrRhO4FavTBhlHff501uQs1AbJYPgY280AnH7t0/zYsZCJX9yYEkZHmOzTLL+tK2VW5FdXdoKc5tyVl/iqCCFqADmWyPv80GhphrkJx68kC2k4677Zu3aa+JScMCG79oNwlN6yY1mlzXXJixBecy1+vTFESl8OGJcb7MZ7fYINCyhy0VhI0ICz0iQpvAVuLdiQScmM3bXxtR6geyyl6ghk482YCBtWOgtfFx86m63MAoZQeegt9kjn2gIa4IWmO8wXZd8evpKniRNNA2cTJ0vVFjffT5tGl317icYOJnYsc8MqsNun9GCdeJILSPhBkKexoGC8MO2G4W57V9G2D1tTDxwBuF2QC7eaKIkhndIwoaVjIwM7csKCBC2yavb/ItbZHYpVlaLWHR2Q9dqAFZnmJF0uz0RVRo40ppfMXUEk8D51qX5MpQ/xPeIfIAODsvHdP2mbGr7AX4BBxgi1m/eOcoJ1HdcWu0PcG2KdD8hvtuLRzmz/5Ezgd0CbKVtuvhiz5x8w7SSMuK9sK66eimPa3ldp4DuQqHQfPUWvXYs2wEwjc+m371Yfgmx1i8yvriohV6Uwc1u67UUmtP8wbLCJVepX3Iv3C8ifgucAzdR4x2lKVNSqOygoGuPWCE7n6YuQW/+mapQGBq2BEw0NMo9RGhDzXUFLAnJdkvmnKS+6F26wfc8haUurKJ7fVQ68nZUZOcAaZSJXAJvGJu3Sut3XtqrGl07aTu5vEZmb5wLRSvqFnff47lw+hvdp3PdOmCakM3OFF7Oz4Vp9KVgJQDhHXnKnfQG0RDg3GLmmloUTTSFNn0bN3BGvmRwwfykWcVX//2lFcHkjPgIIR6ZE+/umOxeLorSy5GEBrVEWffGzs1Z5QhmE12p2VRt4Ht5SqNcSGC8gPwwu5Z8oboSTtSOoQrEYUqExW2h/KPRq08J5lUiO+KJbd2WAKtas=';
  const _INTEGRITY_HASH = '3553bbd74482c95e803029b658e6719144a0c9c112d01c13975333accc6c19c4';
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
