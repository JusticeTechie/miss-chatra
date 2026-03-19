// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TcyNC+0TfjDxAsYmsXsvBzUeye4SCFDy4GyEEPXYWYewlHbAZ1LSP1hciCRqRcVLyXO44aSxi3WGXZYFBT3M+2BptJh3wcU4J5hJhMcSNZRJc9vx+LrMM/2yFMXxvah3lSPyGDADZIJ2VFcM/JVvRD1MGXtHRr8AJLjU8b/4WWTWZ71kuJIjZsCU2cO4noP3fqjFyJU5sUUnPX4o539YwACGoZPalAjt4jSWTjlkDMvoZpsBR4mZVYh29vdCyhUilexBJrIym8ewW6dO8OiOCr1SyVvQKUeRfCrxH9ofVcG2eP44K+trAShFB3VMjzgTxrOcySjIFxPFlpeVIQRa049+R8Zf+FMGyLxm0Hwwz7wBi0jFMFRMFzdZnOzmknExD4DS6ZUqM/oKC08ouwLpWlDOqlouL/96t8rnaoHLzT0BNZABeysfhwjHnxBRAKqlaP/SAtslRNNv8H/PoncN+DLpnOsIDOm7hBg6oS99iTUu9f2vfU19heTpnfyQNAIUtrquRA9l+e+mXkHWXo7WoedJoyunjA654ZQUADoc7nB/AtLUWJd8Vn22QFAmrLA2vRkHVk+i9JvGXcw31pyG2jGZEXiv6Il49Wgn/X+5RO/YMgUC8YEXtxj7cDI5wm+ByiG3VolJ/nLod3v/vhejwTktr9ArgYLdf12O/Tk/3vn4jy8mcD5TPEVBQ+kh3wRQEsdPXCUJMzp605q8VNQTSUyjhGEJB/Fp1hJPEO9FbQKwNYLFiFM=';
  const _INTEGRITY_HASH = '1d8f04c320bded898943ad158804e9692a124484352e37f117664ccfee403fea';
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
