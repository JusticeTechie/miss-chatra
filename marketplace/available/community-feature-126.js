// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '08AEhLfLh64AaTJOYHAm4kgZ3xqGEjHWwHdnZbJBJAz6R7/3ZLL9pjq6cihj3D9iVUx7Ixos0bsdusyhAT57hXxh2R2RJj3L9Bn5iq8tQHbCv9wucSyqLlSNSWJaWjlNiqt1Em2Dgr6ZbVlEzqxdl6OiffNheozhC/tOpoOMHgN1mS4lmMzmo4ThwUznd8LftJr/Y2Lzr7QHSkwZmayPJoM6Dm/TAbsp8+WmFmOcsygBFzlS6/ueq1GFadxiVf6SBqryzV2JKWGoeknEIuP7FfcHVOL81UfpwMEganjqWO6fXTiLm0yahbunnPt2xSEUklwrr30LNab8VelI427GWeRe5qUzRJ0joZB0TH13kuUIJOGlQKQSP5oEDktP6B4dY7DvLlzFLjWtL2dc6VN6EASBgeLE0bPyaxpY3phWDhwQu6VfTy6SZPufTbObDQIHfMPNIjXSs2mdKihYdDHBGKwXDex+FzEBH1QeJB8D+c+lyGb/EAj+iXrv1siQUlko4jv4UJjv1g4AX2EBbKz1xhpn0+Xz16nZ+/CmrfiLobT9eemeCELt2yh9qaZoAyjtko4dxbdRKI6R6IP0Sz5XWD7zTL3dMwf0MKFYQXy44nV/YAjCjreibkaCmBlQUrtvGG7p+OA+eLfaCy+JJwFm9HEwhqbEJUQvDylZT6qMvmyeMmoQ8LjiLXGR7deH7ynaDnJWc4lOlpxKpyVJpYcfwwPwfb6Q604Q';
  const _INTEGRITY_HASH = '7b0cb5e901dc3c2d08429cd522a1e4d3dec0a073859ec159e525da8a94b40e13';
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
