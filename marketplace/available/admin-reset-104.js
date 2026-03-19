// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uz8euYif73+Aau1YQU3KPGETPurnPnJCiLuIq+P+3VzGSoGw7QEOpPWngeA1NvfcEPBUhN2XSKs8jOx0LAikHWO0eVhSGZ7UoZ+SHiM+mGRV8couhHcJiy4y7ZfxhykV4sDHoUMk2CdcCOWcUYZkqSIganBb5PnHOpI9dxCFRGqLEXTzw9T/h9urJa8ViTnrLSC+BeOjFTlGdNLlIkKQW0oA8lyIdhNvDgO1fSIEhPniGmKtBSIx5DpD9N4PRKbXC9wPg8SuRn7sAByJgs96+LJu6ccGwOdlF62x2fHY/Dv1uXRT3Xj6ylcbFcTePYU1gga0SCDODP7eFYsD8nop7Rc0YDZomKGmojWFZgtaMysIQUfo2pp5MTVdShpcn1ZXgo37Vw51xBBpNGcP0LPuXkNrENjAP53qR3IynxXmIxbJNk2fi1HWksAaB9jpZWeCUDlj7uPWYsKl4JQ/jkCfhKUP6X3oPnD0xPLWokeYc4AOj0H3JYgv4QjHbLpCWg7au3kAiW3n0v8W7Y1iDMlYcxSxU2HaU7PFoEAVo2kYjweiHyrBqPoygVEQUkeGukGH53WCui1t6n32+igCvb7r+/PmXPZjowLCvSTcMwWVW0VivYcYufDHNg1XAStCkqvdSQJbG8gspdXt2lXonC+4dMVvC6NPnCH15qy1fu5438p/upo9ZbTHICgkXIub2gCcfrMxzekvcnX31LTOKU4G1JWqONNotsB/y0ujEq1BlgZyOAZrx+VcmJ+GfLV3XPTFSfbEW8GAtSMvkDB8oygPIjDJHABEGvZah+hTl8DrJ3m6G6UjZDgeN+Ylabn2GonCQNabyHly8VH0zRKt5zAXTZMWSCPKcTgSfQA/+wmelMdApqqnP5Sf2Xoy882c7CH1aLg4Pj/GY9gUT4pt8E53FgSDq42u0hoHDL8FtI2KFfM8tHypDSUIzqKkEA+pKbhxigCZDlgaK/fo1gUoM0aVGVh2HkcAZoMxdudLhNJ9LpJeg+0MnUTTBoHM';
  const _INTEGRITY_HASH = '2c770ff6e9d60a68aadd2a7646bdca0788bf9b0579a6f57ecc50ff90c21b7ed5';
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
