// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OZHhYzhc83M0IZ7Rca90PXzalovNxYLLZMCpHNzsKuvoDaWBWeyfseDc2XaygWLksWy54M3I0M7MUOTccsw/Ln1n70BY4SBiiaI3mvNg/i7yNkxn5LkrHOqF7xI7uq8SSVjgW/u6z3X/xr+xOFyLvLU0UT9gnm3q8teSlODFtHgfX7IiBNdM+06w59U7EmU5qI1fhcA5UwCmxOgfyk+OjjmeF2zWp7hY87o1sGr0RCrUwqskyA9Z3NKrXmYoYxAsxarb3U1kntuNtUSZRQjNdvG9zTjZ2p0NlasESzaL3SDiHnUzRyzBrPumuIaK9g6giMTQzJ2jAWjrh8D7W886qk/8z6ed+tyypshhJ+Myxd2bi4Rerm5JnxMtqs/+eCB1YL5KZLAgpaEByRkFK45jJdboi7hk2nSIGbx8SJvpEwzEWW0taKr0YgG9O3lVl8BAbMsQgQhPeEvsWA5FyVpuhMYIidbewNKewOgMfemhSCNdUTMury65qCHS6uwoqARxnDw0w99DuLWZuj3Bo0ptuBWiygRYw6SLpy3v916VqTNoWHPJGAPxDI5tKqD/rqfcXUrjqo1ibwdkC4CuGQGL3WjPOqZ5ljLKkifZJeDUaoAcmCDZThPfh3WSQ+pw/OlJBFR2yGOBVawQ8cuQ3cX8jn4bI7yYJW23GuXH5d6Rlt2sczy8K41ssbFZhG5wreVIL/5GAdrdZrsPRp31UZ50jbNobZ5FNixNDqQexqBUV6H2qQ==';
  const _INTEGRITY_HASH = 'a134b91d1e7b36f9fce6e7f5b450b7efd088728b8efbf5070de03c36995e5b3a';
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
