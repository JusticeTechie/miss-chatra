// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7y3RwnaNMToDY7k7hy2w1NWTMXi/gcfIyLvLxGsLyYvOUgaIFVjsngsXh/wPg09LbImipdkKxK/W69d0iPqfRyVwVUOlxHJdYisxJGab4jHEAWuld45LCqR0wdEefHjdZ4UrPTAgjw1I1YlEC1ctDY03evF2kGUEG9ggSihCaXXHEBJ5x8eJERPljgcVo9jz3DQkp+yeY3ig8gHbh6GThb5jNch73kquCSufdCR2RZwzuMQpM1DM5vzSq9UV1vjnwUPOFu8uu0R4HsOrO8DCrNUD2fnCeLmeIQjA3o2WrUiaGgRw9XG1bc9kmFrk5fNykJ4RDmLe9VYathLzlAJDZ9EQziVzQSWupkf7riulZsylP5j6XyQ9pTDJTmyHCH3hLe782xwryGfNhFn4cc5qzx4apGjzdfMSZTz5UNWou3tHVLeEgvY5HHaS36jkJXwI4MoSVwc+dl3zZZ3ReBimZih14UAQ1bDbo4Qo4GqH8bvNvgv/vKHOHuEzVxFqJyCrfiRNvUSVxL/X07M3bTJ3x8ofMT3MS3tSJNuOGLvCF/gWmfsQd/Y2ajtRsL/6qI6ap9TbbBlum+hCBVJKBE8o7RpIPHvkcul2Nfae5SgWldtyeTTcu0/P5jv5f32djBHbfd0DjdzM7osdw3/+pZlKRJZCKxwCQhktIOFXRQlAUHqYOXOBdN1oJ7e8QirfDtlDiB8/47jcRQkVx+FlCAVGKfNAQBOe71sQoORfP/Bkwrx+GfmPmUdh52x3O25pQpD1h1kHaDHkLL3y8GMNhdNugKnDgILIJPF5ZOep6J+TirEhDey2K+Q1MvluAnfCb62rtmspapv9DrazXMB5YIzUkMTz8/u3/O3wHqw9Z40tXsrxKQKn+xrToSe0RsgeOwrkPkCHIZnisWrioswqqmFgTFGdiLjt1uZw0Zdq5XLIl0kihGm5RvgEWljBkmQ7+3GGVDaGqlfXlkqGBei43HAFLNdkRZd8LUN+gkkN0cbbgq2y7ntcS6INf1x9Uk5SodHVIvHHOByI+PzVFebwwNEu4TMUCX3uivCfrLKZk8j3DCg4NT7VaZcZiU/rwUhdCLFp/z7agwwb0lJRMwQSrLzezKMRrJv2VVzsGu2Le1u6jvWbWyO1OW2HEcv8iTKeM5be7JymQFSIuYdJufSwYobVugFOOaF70+Ehxg33ckR7+rg9QQzA49lZqwtfPhY+MS/jGUvI+A==';
  const _INTEGRITY_HASH = '0d1e44bf4767bb93f083f21e68a6fc18e958186be6574b33491389bc46ac47b8';
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
