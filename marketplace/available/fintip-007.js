// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:33:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OkLiXm8s3wBfXDp50XOCK8Mg422bTAF5G9JI8m90w/QjGSgBdNTtIXb099tJB0OJ7HBkQj3vjUuCXF5DKcppUPq8s/L61z55vAt6tR+69IC+8FowpTME8r09CD0aUZs7rUflPqpb4HTcbuLrE5YSfntLGD4mekjxwyznUmK4M4+aY3cRzS80Fvu6Prja5ZXukIsBI06Z6PGKo/W6LI8tBtIZ21ovmVI+4chZVhIjtfODmscVDWjzY3G901CX0dJ3DEz8vOPccPIBoN8S8ZGDHOGkAS2ipF9xLkhK5MkLtwJkeIS0FfV9hxm3jERSC3c9gfi2mUaaxXCjFsmpRNefUc2f+O0N0ZD5retNJ8SKfnJ7E1aUOWiluNLIyWCuyoTVMdfu6DmY2FgHe/nGi5gBbBEReU39rU2SM5jWbu1jT7sMSVE8fL52oGpDEp7wHiorhPL/o6GtnkMOrD5Mp5iPQ03oyBOcn4VCjgvNHrKA6fMbuTHOIARXMGejhhX/iXYJurRbjtntbdaLhehWhwwPLyHphj7oAJit5ZM3Jx7WjEYGTmkC9WzAtB3gzq/XjYF5WlKCOovjQwAnZoL0dwdCI5WhAluFczulCwT2RlXSgKbSuOUWUmju0DJnshtJ+WrIB0DnD53nG8jJg81QbBna1YyH30Bl2asWzQYdfjtGfMP/qyc4pQCl8yhPnKbO0KF+kacVNqT7RxMLuv5uN4vKcPKo9HLATf9jRncMSSRL6Sunf156SaJJpLws2Vk3xJ8eISmqasKH93UG6xs/rrwQ0Vb9+SxhOEwJ5DfWBkZdsHqIKXBUNLTcRuZJg+R8Dcx6u+3O/Tet9TlWpH114BSnvT53rV4hgA+uoz50SsrZC9CYLWyf/2YPWUU8/3J7SkxG71be09iv/R3d65Ds9dT3i2SAuyZKMMqhYU44l/IiwiK/U89XlWEyOfkVNGhvK3yZC3BpBexUGYqHovlSHe54WxnmJiolXvDQkJQ2l16qNPczeXDckk9IyGiYOOla0I5lC8XukW4SPQp1jyU22uwqSCYHg4F0vm8HYkKAmd7S';
  const _INTEGRITY_HASH = 'd5534843e382bfa3d343547c04885bb1dc1031cb605b7dc3601363110807f6ba';
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
