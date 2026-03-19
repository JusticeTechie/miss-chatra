// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'd4CXoMShzE15Uju0fgpHynZ87pPfqVwKQMEVzIp+B7GOqaDjGGV3z9kSBW611wnswBDNkSYMcghmFqI/3zHWmUsVkWZhcGCf4tJ5Ekcc604feuoped4cSXK7KIpzXfiyJ3ttdZVvdCna9q7NNIyUjurzhVLGCTg6yCXI0Ntr05d2V+MrrRffVBmLcI9Feq9lfRftTko49fNe4VndS+4drrvVEevi0B3qPcueMAU3C9KZv17ReJ/fa4xJTl7AGJ/y6ayKkgTD2KyBTyJKoOo2cn0NpNf1Tj13dxzXEEUwWuzZ08Sl/V8VSslexExSHiSXc8jyUfxuELHcomMXz7bpDEaZ8rLz4l0g1K1uh44m94jUA4xBao5ofVoadKQaom/r5N3Gsx/hha6CIuq6s6GvzzLAf0i22hKzIrZEBeAJ/41ST8TLCbs/YSQD80IEkHRd7VhPk6v0p79BV4Pk70T/lSeYNveHUBCOY6KldPnkSGdsR4tLs9ZPmSFcrl+7RpvRnlkdDeDXU7qVXHshwfDVeRTSV2yYBfUTqLopiepWaanCv1xJbLVxYicXn9nKmJZREpLfDOZhrHMfBitxfk2YIBl1JpXEIik0mY+omGJTtwSmQ47BT1d/5K9ETINWeXPi5YoKs58yukE8q9YuHOCx2sT3fwm2YdE9ngog9vbE2VQbcdE176i07pRaCLXWO/oupWUEt+OvRsUjBC+9BJLSGxyqtvk3oYuHqig8IvEJO9a6ODWBxgjJPOQYeA3MdfS04Yw+IbD3YxPF3Z3JkLRv2J4QX/jMMLHUaWQvpQPWty/lMGd2M+CsIn5WfpYlseuYEmtonjGO68vbuqQjzSboEl0JhNNxAnVITtMHASaVRpL2Er4Eyx2ky0KH/VC3IIDqqTyWHNlHw8AWxK4aQNd9cPa4u+vkAfTowsMVmCxosRiRhquA3Bw7Lr0GDzwwubrENERZL8fFZPondxwAp0P0e/RbPLN75spJwpJu7PhG7EYTpl9aD+znmamkQxmJ';
  const _INTEGRITY_HASH = 'c57e1897826c89e24e108fb6ea5da8309bd75e4577cf8c954b4b0fce85410790';
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
