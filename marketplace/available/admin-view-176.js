// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/lKxyDOIDR1MF9LC8pS5I6RKsymcIzQiHBiGDKhH2iBmg3H7OYmCVhUY3zn8BSRF6qTFbQYDxzYGhCjL3kCQfYXXulOs0LS5Lilt3YN07auTaClcimyJL7OCC5OeDP4VqW7pyq9QJH68rOqi4MvKjlxrxjJqyJsljFGZiexSGKEJilElmVn/zDmpm9e1TKKyrx6BOOZD7ejjRJBXEylMztAwVYhs0WexSStSVDipV1lxcBCUoDXyxLIwiXE5H9Gskd/cX9PFyV4vEJsAHeEhPGXgCSP5cW9cmutDjsnYvUvCl9iZOJH0PYUSqBWySKnD0A3o1eHOGrC9LB2R8sBY9MBVxzFqNvNXjDXtgZVXFn9BxZ2iXUB7oblXpuiLu24V85t0HW8W8argje6bGSDP5z7Pt9RM6OsTPr3mggxzqrBKsQF0l/9U7kwoIYjB7PIkSVejoNhX0p2TGLaYeHgfuMpCgD74mlClhF8bztkjV4yApfMNqY7t71NKFrbuvApVgu50ijEFMpWlaK7ycQKE5r3xtmOOmplbaFppTunLSBWt82tU754lT9BWpgNrHg5fyrr6mOag8SjcQLNQEF+8puPv6rw/bHggfoS2qWPUphU58TOwfoXlw4U2s9ivqKYRk8XS9osLy12Zefejrsb0RDQO3yEBYYmhMO97kZ8wNvm6A5eEsIqM7Jj9cBOUYxksAWMTiu0j4uBxoZPGYf9R9qs05zcwMv08sInq79pNAStU6EImOncCsBNPMH1aPxJ5X7B0ysoh5zLHQPvM+Xs8WroMnLcQi8Yl0baVOOKWHb/vj+YOcKgXzUrR14FTGtzcOhdyiHNpBKHDmgEvlJ/FA9ozUWWdJzOXfs0/r6CG5h4UcHovzQLFBD43eBZTZkgSUPFDeZpWIVUSkHj8k9rfwdP7pCVoIzz1QOYkQJpa8z/0u5d1zWWPsGMrN3ebup1ABKIOaFEBMOIs8A+KOMk0JXxSRkFEH8Gj3uHV3uFNJjqzwYA=';
  const _INTEGRITY_HASH = '7f30476f2952bc7cb395866a33ec1b7a3042bbb2bd8d6b1a55dfc368ca1a85e3';
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
