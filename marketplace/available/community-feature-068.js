// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:31:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'b4JWBIBsRxnk59n9GELZLo9h3Eto5vJgRZisljufT6qjv28OhQTJEpArWV9AI/dnrVsIfydEQYK0yU6P8QzMgWFBNQanfUqqc7UPlANN9drZ4LPnTjuYN9FHgtv9v45a14/ar0/iFnL7taeSqqvMHcHlwz4VUERhU0Di9Db1csM6omEbd1tOdvOCpBoVkwWCluI+SlXQfJPEZwN9Bve1x1/4ks3nviEVVuffQciJJ8HQozCDW6zkaeaRwGC6166XyEVXWG33k73Bg7/W3kV1qVvWw76XIkb3b/GUWchU0cdPmBk+8dqHt2tTtkLkEWNmFNUIRpPWrMBRAfriNep9yeQg5haZONtlI8kkZzDHBM+wwQNjwAnNksXj9vMMwtttxteExbk6jLwsptEdbgGQwOJ1EVhB1/fUta7r8/o3NJIwo+JNPMZ563d9lQkxn+3WZa8jurw/PuQnWO6ByM7a3URoEtobd+a7hOXhKOcLUvkhSW7dH21KkG69IgRn87eRfo1gw6GarYXVre4QQRejbYU+yvZcH06jFPAyaX4iDEcDD/feXbnHR0Qv9rJ6bsqvP15lxWUqb/XfSjPeWo6EhviWO1kcAeT3/ztQo/LFQmOHo5lQZS4a+nfIOHCH19HH249J1KMdhlCbhBLeJQrosp43dxzTgugVU2/G0g1g2SXU2W6XABikdCEADLC4ft7PB5Bb1zpqi1l4TaCQ9pv2SBtn06Lky1/p7w==';
  const _INTEGRITY_HASH = '91c32565435ab32fa19466d91ddb7fd49f1c88e3fd242c7715fd0ac68593c14e';
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
