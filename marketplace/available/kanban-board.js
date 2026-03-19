// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mUo+VKLQnKlQjqS1pCuuhs4/GVWrCBir5grqdo78/LjPfrlcb3vGGj5ASS8PWKoJ8nakxuHleycckTTdF2cKW2CpszvYrcqb3HQpU1CHqLLm3E3wn6jKhjYiwZwwmgExdvy9B1KTsgk86tWjZ0Z/wHz4MXW+p+Kgj33fff+hYdO8veyOy/k+nSBi4a9debjMCqmIzFwOezQIhfs0Upld5yZovnRTCwOUbK1siT8tTmSOZ/ebaR/BEyHv94ixTr8PdYaL8ePWd410PZJ0WEwdFcOtMVvPCkT1ORKfYy8lg2ybogg1aZDbOztkucH1NUV0SBcgXplbUGnEyi5WW5l+iw0dkwSGeqHy3CPa9k/TZz9Eh/dKnzWkHz1VtIAroMHLobhh9D9T71ol/OOSa2LF3v3J4CP7Rzwa/Xev0I5oTtSmxSV2JcIqXk2hRou0f2hZCr8XIWg+W4rSvT62xnC1wFamM9iY40hi0i17/J1ShmWlYhGoYH9IY4rDuM3rj6EDYgwEUWvpsEXfkaUyVaz7iDjtFpCrbxfV7WgSFyc+wRVNlokk1wNAeskbhF8w9r8pxdM1TAuJln3hJvEZ';
  const _INTEGRITY_HASH = '509a972850d07dfbcf87da4f5e4605d214184e9f7023b86d038a1757a992926b';
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
