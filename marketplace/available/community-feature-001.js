// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aD32jMcoHptATXdwV6yPl4IeOkJY8DDCYp1UIR84Qf0nGOLGAEngopCGEj1p8jP1f/qu2X4RA4WWkNVU2+XG3+BOcFafLigyC6mR1Y50A29s/rI4DVE2fG9w6YzHT9gV+252Vh0lgkQ6VPXktKXODpSyWCio8FLI+WPGNLW5YDp2z/WADQTXQ1SDbARIxtHkKnEdWUg549xzhiNfInLW6ozdp88mVGkb6Oc/fjxUJJ0WEckQogOHUrNpfvaeLKy9muAmL6LwZ+cwN6VfR7R6n+/dZsaVihi68np2KkSTfcvLkDCyQG5/at6xxc98rbxJyVKsH5YIS+JmluwOfzalNBg4+hQlXk8wnFDzN8HI4Lb4TQH+nnyJd/kwij23pYtdTtLfzcamOk7DCkhGMPf8I83UzFT9ZX/PX5D7eBSOw5FyomhBTRKy+TQ7JtOR5GVYuS6W3ui+SWlH/5RqDQ+ud/PC0OdnghirQn3BfFTsUFB8ujVoLe8PS9o0nDJooYrGK1j+XE5YsKqIP3LTXnvNzZohVIIvkc6xvRXk3Up3rBLPAeFTD3c6tGRJOP9RiTXsUBrT8vz8CgeQw5D53WPz60d8vDBMW2uLH1iDJbi+GUeY/oy2FrZrcbwYrjrj3XjAaZZMTFqLotnl0+MmwOLKky+NELLBkV4AX4giMUjIJcgDL9IAZ99a0UWaoanmOWwoBC9+KWe2AdkamLNKKODR6w==';
  const _INTEGRITY_HASH = '54fb65aa2640616629342b47d98e481265ebf4dfca592bfb9076f391ab3c5154';
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
