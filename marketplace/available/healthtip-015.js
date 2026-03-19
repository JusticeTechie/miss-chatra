// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0O5RNZEpI09JJtxyXZ8RXzoAhpB829uEzLz2ouyCv5ARZYMh7U5tiH5aS08WrCD1ZoTYaxfuGi9e0pAqqLv2fRXpAGU4UvDX20npFP6sEDPmjoOi2zxxOB0jfQVcF+53A8190Yu/18CIkkS9ZHwESxQET4DhB2pJWCqsPb7CduPnAyUpELZMQNKUIoULw/CRg+bxttAlAn6ZT02FV7T+GLSU+tCQCYpHuMqHWk44Z3tEJygJjJ+kZgVjjJNbafXaG2tsAmA1f7GJow+gluxWKJH2/kbBkb6TNo7R8er2RhVOSkhdrai473cI3+1A7iFjewF8sDvsKeMHkqiyZ/uqfVq7xqRY+PTCJa1RHtLo5a/XOBqO2V7tec2ZjbNGVJNTK1O2VLpUXpuD1/sJcy3fzaCibanyMX9Rau0UcL14Ei3CsC3Ehk7hrx4Bz+5kh4Aaa/S1+YwucfgbiOXRnNWuVClmaADkqu+xD32GQBwa1NEHAGQYjJ5fwA0J9k5LGeuQ6qR5AGsfdWnxtswpJWO+DeSHTZmKKiERnLNdzo7zttnwEwPuDIsk3QNVF4WBg3hl+8AtF4bxxWWvOWZEJ8Gn7Y5SJt9EsJJjQVAxHKtj8mRr0ybowKnN11p6NWO2oaXpHH1njZshSi9gRei0PNaSqt0UvtJDE3o+KI/daSkIUf4odsKQg7/HHNwFLzH6W/ar2tFOjf+MyvfGw/+ouKCb6BbJUo3/1kFwxBD/Gmqf+bqGTB3lDfOdz9g5XR/txMx0oKA2uit+autjTKrLTxRD12dwt2U3uKgEqiVCorreOqHrCFWr5cxiSmo9F/qqfidDYVSG8eD9CbQqS09E14borBm0bUl/boS/xJi+xxAymkLSrneuYMs2IsoIrytz1eH8yBWimQa09OIwNFLysuZpKsVNcEeexBd/OBO1XxifHkK7pC6NGCbJhB6bg10=';
  const _INTEGRITY_HASH = 'c9f41e4192be3d6b08626b602b69201037cc1302ce27d80aa3a9b7a9aa0ff17b';
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
