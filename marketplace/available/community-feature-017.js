// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YaY/R9D36ePPxeyTKU+Hd2fKLQZnjh0g7pLRtaI7zFtW6qwCnsAf2h13v66HtmU1P+xuVNKSFq+GYbOsQDz4b4IXAmbdCqDU9ez5Ev5mnQaLyGubk0x1+8dxJXglYu2lfCmY6/FrAmNY8bTuOaAU5rrLAZnU4UTJDAOhvF3fyD3YVHkY9cwraSP8MB3ZoZJOAcI2xhCTmIeIUyYaS/Lenf4Lod7lG6Sc/yl/oszqlCchzetQFpoFXK9QKfOB11rxSdyZ7MUSreuOEEUj04vMPrjLDR5nZzS0sgHbfjJp60ml+j3BV32V4ROaxKZTH9X0POtkxdVkDvlziFOYmKrLcv4cM5v43x7is/t83UoTiYLZSCbY+ihU/4oi+zBgA7WjeRz3WIIMyhntOVRgs86vuU1OSEZZ6yf3jhd6hpwsBJ4YFD3NQQ0WDPKRA8ZmnnoQMqwyUfAuGZexjdKMzq+h83RS4qdhv3ovMGnB69orxf6ai9xwGB8/ZowihQXhmJp4ohxBR9Ac1DiUSiEtK5ONijdDWuO+3a+KM+gv1sNHu3C1Us9Dkm57ewcm3mg6yt9vx3D3qsbtSbX3SORNSaM86C5Eca8+LAbniz00pJaaNyHW7nDT0g5ESzaH1VTpWBs2XgbdKFzxi0ohOiDSS9BOLXyj9NKuYcLdrUjjjM9UbkG/Q/ucJpYSZgGfTAIQK5IG8WG2hxyyk32yvueyfQnJqbGZ4ZcEozuGxCuZaNlp5w==';
  const _INTEGRITY_HASH = '3c98005b9b8f37d5903f4f3c932fc108810d887bc01699079f57f6129798be1b';
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
