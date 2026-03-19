// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'M9pGBH1MBBmdYEvK1R5FXPq1TCtmEVnIe4xMmv6N/IsRo8D9XwgJVOsRaNlPNL3tSEXZwF0G7cKxqmYO+bZZaQIdXRJMxB1XCLYHD86O5nZlCyRrfwhRuCKTxnZfvLIy9aK2BZEMJhi+1ColgjLnnAr09M9xqgGBhn5vOcYJIM+ZduqO2B10Nzd3mnrxP8nXF0bs4fkL2WqEOdlDm5wDsRUSAlWGbaLfI+44TWhfjNcPQAm27rc4DwSLEVKN5Ueul53iNI1A9ccyVp6CugHjj48OslDzfOFkfu10NZpCuGIg6CeCtevqnV3ZmE3wq7zA/KObbcm0pxjGlUNsxec4j41FgVFV0xtE0rQQagGCHBp+JCyYUw54g39ekGKtgNm7xTugwd4GixyPO7fhB4Wo8BteCErNEPGDOjuNO/jBVeCICMWxZkL4L5VRUG1MOctRKr3jshi8ywzVQe9W6VrVisdjD+gOczIjHsvxT/ti24OI+Se5DbI79zv8Cb8b9TW/q9Xpqf1jTsAcO1OccqnVjxFMBv/JK5okUyqKqLLywiEm6xSfAbB7WY1rgaaGw3GhxQHJDOL1/6BMpDthpOFE9dbofVmVmCKtAOKYZEnxhIxtZ/Vuz5aNLi3ZbDXv5pJ+vmqYcRjjdnAdTYIB8N7HbugYC3GE7onY9wWihqt7M7t/rD15IKnrwUy2ic/CbHn3wPJyLuEFKA5P04i/7lSvh32W4tbzVKfhAg==';
  const _INTEGRITY_HASH = 'b2451bcbe9f12f3b18284d0c52f6a463d4cb2549b2d70feb6f55991257f7c612';
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
