// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:30:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WV9DYn8fwDFONLZ0UQt3LxjNYbYJUa6cTJD9QAVBaAKUEMoN+9Cj23NerNnPhQbHUb9RgG2ZZt4uhmZv0W9yCRd0DbGpDxDx7oh/UNuvlM1SQrkRIOBGYAdDVR4kN4YEJS4JPOAL7R6NH6fkfqqV5EvXfgPP3mbzhchyG5tIEcRJstQLSHby3lKBhJk7UuhdGpc15CcvKKNB6k1FFw8XV/ZKznCXaPN6ydBJGQXjsa257duQyWoe8AeqW/wixYNCQEjHHf4i+MXEHQgyDreZmDN0cEg+8TcMzsauuz+7cRp4WH0LYCkRCDsabS37pVeYQjMItISLPGkbMzdcYrL3QOhlw99G4QRO3o50tlj4Glea2wyZA1fyFdOfNlra22axXjO1lo70SdiONi8H7AnynTrcM10FM+8Y1d8ZEawnrpr1BJDqH76mazGi7Tj3yc162VEKfo2MXlt02O4HsScm5L+1i7D8MzuhyEFUjnCdPzszt+DEea5vMmNcyu5Bxrn0nYNad8x7vQvcbikZK98vb4vEdFrqoRSq7QaZKf+EisrllIJzXe2uguV2i48jwcPyMYC8t6AkmvzVgpzjwYA2zQcgYLo7Ol4Y7IBAKjiSkP36caeQqrojfwHniKy9cCNFzfkwVDrzZLR86XUuP0zO+2yNz8IdAbjw7Giou8guIqSJRnobvkD2ADclp8nfhG920m8Ax5Cx4CiMEHY7NQjI9SneO5zvLD6ZDpEZT3sQ9xtCn/VOwza071Hc6G/w9cQGMyrVutDTKb7PIVpO5obzhPhrJbp6h8zavFmFeC6aVNxowaOOb6dIO/praoLrtLDTu1FG36efrTOKGONVx43KQRB28EyW6PLL+VJBw/0s+kyKmRPjJGLsFRjIhMsJpHldrBIF45dCZxI4/EZkNM8Y1JcU7N0GsvVl30Tz3z/mlopD120jyd3JJidXEVnUb8ujWx1KgrTMEULIeNOp0/Bw4nlaxH/iALVYh3d2l8NgCsVmne/UkzRMsmoRnHE3k0ROcqD9RhK9pmnZLrMNIcGV0aOjx8lARA==';
  const _INTEGRITY_HASH = 'f8b2e3bbf8c9c288a4eb843fcdbbc478d5961060ecd4a316d304a8ac7f304d23';
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
