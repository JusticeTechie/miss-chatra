// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xLsf2pseSC8JgLNLax5rKLVid7PSjZIAssa6Yp71DDXcH3AVT9Yw7sDWwABT6EfJpPDnJlNXG1Iu8p7o4uS+sRNNC88SstJvdoeEWnrWtY3xhh27QE8dyRtim02zlSy9SBY5H0ypwIAY+cYZRkfbfUm9Rn13J+6ZCUWulMsTrBmEEvbqTLs4g3CFLdcSIBL7f98fGxhvzNUwRxafTcxj6bA4vMfAWxBJnuI9Dq+q630Fuf5+zdyDkG4aqz4g9pzlwRpTHYbAx1aIvDCxeUhq58PzdhCHcNr8KVA13/SyvxmdDE6nkLM6dqdRxuVNeQUJZNIyQJhWzCjGi7qjVYgw38zX+ry81nrnhnGYlWLaAMYeo4j0vrDlro9/NSVp28lKTQfGq0n2DnE0OElHPQ8lCP/T2m31DCPanGbLf1coTCE50nQVPXpsCEai+mGPY/dB9P+6c3tLnzKwlr9WU3jJmPthUqr+vtFHXsTO4I0giVdLo0vhQTqf1UPlL9G6rAeWblBUbml1ntVsVyMnvcj74D+cjQB+XRKp6T6OKu2ctdQIPSeraNQOwI7glnQHr5IlOyueMF6+QOkUXGX1q5exUqmSszfD5zwgx3v1WtntCFFhJynsEN0wS5oXWnzBJajuqSPw5kgse31W0Jymm2dE8ok9JoU8oQ9Fo2zVNp9H+q35q03Zt5Zwul3V1kDUgsFGzacNJJieBb7AGnEkSXZkIx3+mJT4xc9C';
  const _INTEGRITY_HASH = 'eef2e324fa81817092dcc885ab2a2de3090315dc85ac78adabbcc22f887e32b0';
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
