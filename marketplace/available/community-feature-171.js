// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:32:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZXzxbtcLEXPh0tDjXmxqavsh1tUnM9b2OtRQFtZ0VH7BaGH40FhQgj/BLqW34vadLjgyiRjxAVEiBsnyDq8UAaQNky5nJGR3DRdRnJYNYQdITZ2xmMBB13VREoHrU0oNra2oArJqbLfhcBVUqMRPHzooo6eYHM8FsJE04O/crOB95O4bCHYf731j0eh3VRhcn8627JGZUF7dr21wKdrZEbxD0tiNOdU7Z8ZT93420XnJzMIAdC1H9SleV4MUfwfVwJxeYhFXZTLOyKF/eelKbqmLdPQhvzWbY7obk3keBHbdI2TJDP+mANQGRpykRQ25K4Z7oFBov9BVZkOIIq30Xta70knLcakDHPyKZ01FO5lEEX75edhJHU8jLnWkimXSlnyYDuq3SaJV9PQ5A97nMJwGIMuUM3+2sCVe/Kl9tfUdFoft5MyMMbyAZf44QkifD3ClagGBMP96/xn6t4eGSJyspoVY4mJ4DiTsAN45lQsUeEN/S08JD3zMigWVslapipthrzhxmzgwIIUhbRBHtpNndw6/xvCVo/qBEatZKm3IzQJNGXQTnMTZqzTbrAwMoTy2FUqq4FxH1XQ7+PpGKwcUikUbyl3tH/gpeqh3554eb4IpQUql2U+hdOt8P8Z490XQsS3GOB3k+NI0NAwE6CPlsA+VMQo/DgB4X3pTuKw5g7sLwt4KfTashuguUsj4Tv2CS4M980sOGAuq6/jmJAPUfusOaMGF';
  const _INTEGRITY_HASH = 'e989d97de3b70c519756711e1b0beaea211b10887a91f1a92769dae2b29b5228';
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
